
$(document).ready(function() {

	$( "#buttonUpload" ).button({icon: "ui-icon-star"});
	$( "#buttonRandomize" ).button();
	$( "#buttonRecipe" ).button();
	$( "#buttonChangeset" ).button();

	$( "#buttonApply" ).button({icon: "ui-icon-star"});

	$( "#buttonDownloadIso" ).button({icon: "ui-icon-star"});
	$( "#buttonDownloadSpoilers" ).button();

	/*	$( "#button1" ).button({
	icon: "ui-icon-gear"
	});*/

	$( "#dif-radioset" ).buttonset();
	$( "#purpose-radioset" ).buttonset();
	$( "#map-radioset" ).buttonset();
	$( "#equip-radioset" ).buttonset();
	$( "#spawn-amplitude-radioset" ).buttonset();
	$( "#spawn-rate-radioset" ).buttonset();
	$( "#spawn-style-radioset" ).buttonset();
	$( "#ilusionists-radioset" ).buttonset();
	$( "#progressivenes-radioset" ).buttonset();
	$( "#creature-radioset" ).buttonset();
	$( "#fiery-key-radioset" ).buttonset();
	$( "#non-essential-keys-radioset" ).buttonset();
	$( "#remove-randomness-radioset" ).buttonset();
	$( "#all-equips-radioset" ).buttonset();
	$( "#no-hp-mp-recovery-radioset" ).buttonset();

	$( "#controlgroup" ).controlgroup();

	$( "#tabs" ).tabs();

	$( "#button4" ).on( "click", function() {
	document.getElementById("file").click();
	});

	//$('#file').change(function(){
	//	var files = $('#file').prop('files');
	//	var arrayBuffer = files[0];
	//	var data = new Iso9660(new KaitaiStream(arrayBuffer));
	//	console.log(data.sectorSize);
	//})

	$('#file').change(function() {

	var reader = new FileReader();
	reader.onload = function() {

		var arrayBuffer = this.result;
		var array = new Uint8Array(arrayBuffer);
		//var binaryString = String.fromCharCode.apply(null, array);

		//console.log(binaryString);
		var data = new Iso9660(new KaitaiStream(arrayBuffer));
		console.log(data.sectorSize);
	}
	reader.readAsArrayBuffer(this.files[0]);

	});

	/*
	var arrayBuffer = ...;
	var data = new Iso9660(new KaitaiStream(arrayBuffer));
	*/
// Generate a unique session ID on page load
let sessionId = localStorage.getItem('sessionId');
if (!sessionId) {
  sessionId = uuid.v4(); // Generate a new session ID
  localStorage.setItem('sessionId', sessionId); // Store it in localStorage for persistence across page reloads
}

// Function to check the status of the file processing
function checkFileStatus(sessionId) {
  const intervalId = setInterval(() => {
    // Make the request to the server to check the status
    fetch(`/status?sessionId=${sessionId}`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'completed') {
          console.log('File processing completed! You can now download it.');
          // Stop checking the status by clearing the interval
          clearInterval(intervalId);

          // Provide the presigned URL to download the file
          console.log('Download URL:', data.presignedUrl);
          // You can now allow the user to download the file
          // e.g., create a download button or automatically start download
        } else {
          console.log('File is still being processed, checking again...');
        }
      })
      .catch(error => {
        console.error('Error checking file status:', error);
        // Optionally clear the interval if an error occurs
        clearInterval(intervalId);
      });
  }, 5000);  // Repeat every 5 seconds
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Retrieve the session ID from localStorage
        const sessionId = localStorage.getItem('sessionId');
        
        if (!sessionId) {
            console.error('Session ID is missing');
            return;
        }

        // Get the file input
        const fileInput = form.querySelector('input[type="file"]');
        const file = fileInput.files[0];
        
        // Check if a file is selected
        if (!file) {
            console.log('No file selected!');
            return;
        }

        // Request the presigned URL from the server
        try {
            const contentType = file.type; // Content-Type for the file
            const filename = sessionId; // Get the file name
            
            const response = await fetch(`/generate-presigned-url?filename=${filename}&contentType=${contentType}`);
            const data = await response.json();
            const presignedUrl = data.url; // Get the presigned URL from the response

            // Upload the file directly to Google Cloud Storage using the presigned URL
            const uploadResponse = await fetch(presignedUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': contentType, // Ensure correct content type is sent
                },
                body: file
            });

            if (uploadResponse.ok) {
                console.log('File uploaded successfully to Google Cloud Storage');

				fetch('/upload-complete', {
				  method: 'POST',
				  headers: { 'Content-Type': 'application/json' },
				  body: JSON.stringify({ sessionId })
				})
				.then(response => response.json())
				.then(data => {
					if (data && data.message && data.message=="Error processing file") {
						console.log('Processing failed:', data);
					} else {
						console.log('Processing started:', data);
						checkFileStatus(sessionId);
					}
				})
				.catch(error => console.error('Error:', error));

            } else {
                console.error('Failed to upload file:', uploadResponse.statusText);
            }
        } catch (error) {
            console.error('Error getting presigned URL or uploading file:', error);
        }
    });
});

  // Handle the randomize button functionality
  $("#buttonRandomize").on("click", function() {
    alert("Randomization in progress...");
    // You can add logic here to process the randomization
  });

});
