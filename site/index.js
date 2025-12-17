
$(document).ready(function() {

	// Task #Mobile-Usability: Gallery toggle functionality
	// Task #Mobile-Flickering-Fix: Updated to change icon text instead of CSS transform
	$('#galleryToggle').on('click', function() {
		$(this).toggleClass('active');
		$('#galleryContent').toggleClass('active');
		
		// Change icon based on state
		var icon = $(this).find('.gallery-toggle-icon');
		if ($(this).hasClass('active')) {
			icon.text('▲');
		} else {
			icon.text('▼');
		}
	});

	$( "#buttonUpload" ).button({icon: "ui-icon-star"});
	$( "#buttonRandomize" ).button();
	$( "#buttonRecipe" ).button();
	$( "#buttonChangeset" ).button();

	$( "#buttonApply" ).button({icon: "ui-icon-star"});

	$( "#buttonDownload" ).button({icon: "ui-icon-star"});
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

function getSessionId() {
	let sessionId = localStorage.getItem('sessionId');
	if (!sessionId) {
		return generateSessionId();
	}
	return sessionId;
}

function generateSessionId() {
	let sessionId = uuid.v4(); // Generate a new session ID
	localStorage.setItem('sessionId', sessionId); // Store it in localStorage for persistence across page reloads
	return sessionId;
}

function setStatus(status) {
	if (status) {
		document.getElementById("status").textContent = "Status " + status;
	}
}
// Generate a unique session ID on page load

// Function to check the status of the file processing
function checkFileStatus(sessionId) {
  var attempts = 0;
  const intervalId = setInterval(() => {
  	if (attempts++>60) {
        clearInterval(intervalId);
  	}
    // Make the request to the server to check the status
    fetch(`/status?sessionId=${sessionId}`)
      .then(response => {
      	if (!response.ok) {
	        throw new Error("Not 2xx response", {cause: response});
	    }
      	return response.json();
      })
      .then(data => {
      	
      	setStatus(data.status);
        if (data.status === 'completed') {
          console.log('File processing completed! You can now download it.');
          // Stop checking the status by clearing the interval
          clearInterval(intervalId);

          // Provide the presigned URL to download the file
          console.log('Download URL:', data.url);

          $("#buttonDownload").click(function () {
			const link = $("<a>")
			.attr("href", data.url)
			.attr("download", "")  // Let the browser decide filename
			.appendTo("body");

			link[0].click();
			link.remove();
		  });
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
  }, 10000);  // Repeat every 5 seconds
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async function(event) {

      	setStatus("connecting");
        event.preventDefault();
        
        // Retrieve the session ID from localStorage
        const sessionId = generateSessionId();
        
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

            setStatus("uploading");

            // Upload the file directly to Google Cloud Storage using the presigned URL
            const uploadResponse = await fetch(presignedUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': contentType, // Ensure correct content type is sent
                },
                body: file
            });

            if (uploadResponse.ok) {
                setStatus("uploadeded");
                console.log('File uploaded successfully to Google Cloud Storage');

                // Get seed from input or generate random
                const seedValue = $('#seedInput').val().trim();
                const seed = seedValue !== "" ? seedValue : ""+ Math.floor(Math.random() * 100000);
                
                // Get fog gate (map randomization) option
                const mapOption = $('#map-radioset input:checked').attr('id');
                let randomizeMap = true;
                if (mapOption === 'map-radio1') {
                    randomizeMap = false; // Untouched
                } else if (mapOption === 'map-radio2') {
                    randomizeMap = true;  // Shuffled
                } else if (mapOption === 'map-radio3') {
                    randomizeMap = true;  // Increased (currently same as shuffled)
                }
                
                // Get enemy shuffle option
                const randomizeCreatures = $('#randomize-creatures-checkbox').is(':checked');
                
                requestParamsString = JSON.stringify({
					"preset": $('#purpose-radioset input[name="preset"]:checked').val(),
					"difficulty": $('#dif-radioset input[name="difficulty"]:checked').val(),
					"randomizeMap": randomizeMap,
					"randomizeCreatures": randomizeCreatures,
					"randomizeCollectablesAndDrops": true,
					"fieryKeyFlamingKeyDrop": "fiery-key-in-fire-world",
					"randomizeNonEssentialKeys": true,
					"keepOnlyBosses": $('#keep-only-bosses-checkbox').is(':checked'),
					"seed": seed
				});

				fetch('/upload-complete', {
				  method: 'POST',
				  headers: { 'Content-Type': 'application/json' },
				  body: JSON.stringify({ sessionId, requestParamsString })
				})
				.then(response => response.json())
				.then(data => {
					if (data && data.message && data.message=="Error processing file") {
						console.log('Processing failed:', data);
					} else {
						console.log('Processing started:', data);
						checkFileStatus(getSessionId());
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
