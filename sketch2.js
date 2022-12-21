const density = 'Ñ@W$9876543210?!abc;:+=-,._    ';
let video;
let asciiDiv;

function setup(){
    noCanvas();
    video = createVideo('./imgs/soluluVid2.mp4');
    video.size(50, 100);
    asciiDiv = createDiv();
    frameRate(60);
    video.elt.muted = true;
    video.loop();
}

function draw(){
    
    video.loadPixels();
    let asciiImage = "";

    for(let j = 0;j < video.height;j++){
        for(let i = 0;i < video.width;i++){
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, 0, len));
            const c  = density.charAt(charIndex);
            if(c == ' ') asciiImage += '&nbsp;';
            else asciiImage += c;

            console.log(r);
        }
        asciiImage += '<br />';
        //console.log(row);
    }
    asciiDiv.html(asciiImage);
}

