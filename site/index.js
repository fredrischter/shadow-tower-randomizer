
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
  
	document.querySelectorAll('form').forEach(form => {
	    form.addEventListener('submit', function(event) {
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

	        // Create FormData object to send file and sessionId
	        const formData = new FormData();
	        formData.append('sessionId', sessionId);  // Append sessionId
	        formData.append('file', file);

	        // Send the form data via fetch
	        fetch('/upload', {
	            method: 'POST',
	            body: formData
	        })
	        .then(response => response.json())
	        .then(data => {
	            console.log('File uploaded:', data);
	        })
	        .catch(error => {
	            console.error('Error uploading file:', error);
	        });
	    });
	});

  // Handle the randomize button functionality
  $("#buttonRandomize").on("click", function() {
    alert("Randomization in progress...");
    // You can add logic here to process the randomization
  });

});
