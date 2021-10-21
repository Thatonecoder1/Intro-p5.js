function preload(){
}

function setup(){
    canvas = createCanvas(680,490);
    canvas.position(500,200);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";

}

function draw(){
    image(video,0,0,680,490);
    tint(tint_color);
}

function take_snapshot(){
    save('student_junior.png');
}

function apply_filter(){
    tint_color = document.getElementById("color_input").value;
}