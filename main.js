canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
rover_width=100;
rover_height=90;

array=["https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631290305226E03_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631270305224E03_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630060405103E01_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630250405122C00_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630220405119C00_DXXX.jpg"];
randomnumber=Math.floor(Math.random()*5);

background_image =array[randomnumber];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 function add(){
background_imageTag=new Image();
background_imageTag.onload=uploadBackground;	                                     //defining a variable with a new image
background_imageTag.src=background_image;                 // setting a function, onloading this variable
	                                     // load image

 rover_imageTag=new Image();                                        //defining a variable with a new image
rover_imageTag.onload=uploadrover;	                                     // setting a function, onloading this variable
rover_imageTag.src=rover_image;	                                     // load image
 }
//Create "uploadBackground()" function.
                              
 function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0, canvas.width, canvas.height); 
 }                                        //Draw image of background

//Create "uploadrover()" function.

 function uploadrover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y, rover_width, rover_height);
 }                                       //Draw image of rover


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		if(keyPressed == "38"){
            console.log("up arrow is pressed");
            up();
        }
    


     //Write code if keypressed is down. ASCII value of "down" arrow is 40.
	if(keyPressed == "40"){
        console.log("down arrow is pressed");
        down();
    }




    //Additional Activity
    //Write the code for left and right arrow pressed. 
    if(keyPressed == "37"){
        console.log("left arrow is pressed");
        left();
    }

    if(keyPressed == "39"){
        console.log("right arrow is pressed");
        right();
    }
}

function up(){
    if (rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed, x="+ rover_x + ",y="+ rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
	if (rover_y <= 300){
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed, x="+ rover_x + ",y="+ rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
	if (rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("when up right arrow is pressed, x="+ rover_x + ",y="+ rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
	if (rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed, x="+ rover_x + ",y="+ rover_y);
        uploadBackground();
        uploadrover();
    }
}



