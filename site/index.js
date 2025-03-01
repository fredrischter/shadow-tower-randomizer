
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
