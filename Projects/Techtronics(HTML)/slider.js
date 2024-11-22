var i = 0; 			
var images = [];	
var time = 3000;	
	 

images[0] = "/Images/download (1).jfif";
images[1] = "/Images/download (3).jfif";
images[2] = "/Images/galaxy-z-flip4_highlights_kv.jpeg";
images[3] = "/Images/images (5).jfif";

function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else { 
		
		i = 0;
	}

	
	setTimeout("changeImg()", time);
}


window.onload=changeImg;

