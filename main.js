let i = 0; 			// Start Point
const images = [];	// Images Array
const time = 3000;	// Time Between Switch
const img = document.createElement("img");
img.setAttribute('name', 'slide');
document.body.appendChild(img);
img.style = 'display: inline-block; height: 100%; width: 100%';

	 
// Image List
images[0] = "pexels-bich-tran-669996.jpg";
images[1] = "pexels-hasan-albari-1229861.jpg";
images[2] = "pexels-jessica-lewis-creative-593322.jpg";
images[3] = "pexels-quintin-gellar-313782.jpg";
images[4] = "pexels-s-migaj-747964.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;











