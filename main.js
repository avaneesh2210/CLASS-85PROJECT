canvas =document.getElementById("myCanvas");
ctx =canvas.getContext("2d");


car_width = 100;
car_height = 90;

car_x = 10;
car_y = 10;


car_image = "CAR_2.jpg";
car_image_2 = "CAR_1.png";

function RACE(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = "CAR_RACING_BACKGROUND.jpg";

    car_imgTag = new Image();
    car_imgTag.onload = uploadCAR;
    car_imgTag.src = car_image;

    function uploadBackground(){
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    }

    function uploadCAR(){
        ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
    }

    window.addEventListener("keydown",myKeyDown);

    function myKeyDown(e){
keyPress = e.keyCode;
console.log (keyPress);
if(keyPress == '38'){
    up;
    console.log ("up");       
}
if(keyPress == '40'){
    down;
    console.log ("down");
}
if(keyPress == '37'){
    left;
    console.log ("left");
}
if(keyPress == '39'){
    right;
    console.log ("right");
}
if(keyPress == '83'){
    down;
    console.log ("s is clicked");
}
if(keyPress == '87'){
    up;
    console.log ("w is pressed");
}
if(keyPress == '68'){
    right;
    console.log ("d is pressed");
}
if(keyPress == '65'){
    left;
    console.log ("a is pressed");
}
    }
}

function up(){
    if(car_y >= 0){
        car_y = car_y - 10;
        console.log("When up arrow is pressed x = " + car_x + "/ y =" + car_y);
        uploadBackground();
        uploadCAR();
    }
    }
    
    function down(){
        if(car_y <= 500){
            car_y = car_y + 10;
            console.log("When up arrow is pressed x = " + car_x + "/ y =" + car_y);
            uploadBackground();
            uploadCAR();
        }
        }
            
    
    
        function left(){
            if(car_x >= 0){
                car_x = car_x - 10;
                console.log("When up arrow is pressed x = " + car_x + "/ y =" + car_y);
                uploadBackground();
                uploadCAR();
            }
        }
    
            function right(){
                if(car_x <= 700){
                    car_x = car_x + 10;
                    console.log("When up arrow is pressed x = " + car_x + "/ y =" + car_y);
                    uploadBackground();
                    uploadCAR();
                }
                    
            }