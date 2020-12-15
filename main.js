canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width = 90;
rover_height = 100;

rover_x_position = 200;
rover_y_position = 200;

background_image =  ["mars.jpg", "mars1.jpg", "mars2.jpg", "mars3.jpg"];
random_number = Math.floor(Math.random()*4);
background_image = background_image[random_number];
console.log(random_number);

rover_image = "rover.png";

function add() {
    background_imageTag = new Image();
    background_imageTag.onload=draw_image;
    background_imageTag.src=background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload=draw_rover;
    rover_imageTag.src=rover_image;
}

function draw_image() {
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function draw_rover() {
    ctx.drawImage(rover_imageTag, rover_x_position, rover_y_position, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        console.log("up");
        up();
    }
    if (keyPressed == "40") {
        console.log("down");
        down();
    }
    if (keyPressed == "37") {
        console.log("left");
        left();
    }
    if (keyPressed == "39") {
        console.log("right");
        right();
    }
}

    
function up() {
   if (rover_y_position >= 0) {
        rover_y_position = rover_y_position - 10;
        console.log("The values of the positions:", "X = " + rover_x_position + "|", "Y = " + rover_y_position);
        draw_image();
        draw_rover()  
    }
}

function down() {
    if (rover_y_position <= 500) {
        rover_y_position = rover_y_position + 10;
        console.log("The values of the positions:", "X =" + rover_x_position + "|", "Y = " + rover_y_position);
        draw_image();
        draw_rover();
    }
}

function left() {
    if (rover_x_position >= 0) {
        rover_x_position = rover_x_position - 10;
        console.log("The values of the positions:", "X = " + rover_x_position + "|", "Y = " + rover_y_position);
        draw_image();
        draw_rover();
    }
}

function right() {
    if (rover_x_position <= 710) {
        rover_x_position = rover_x_position + 10;
        console.log("The values of the positions:", "X = " + rover_x_position + "|", "Y = " + rover_y_position);
        draw_image();
        draw_rover();
    }
}


