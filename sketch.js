const density = 'Ñ@W$9876543210?!abc;:+=-,._    ';
let img;

function preload(){
    img = loadImage("./imgs/solulu4.png");
}

function setup(){
    noCanvas();
    
    background(0);
    //image(img, 0, 0, width, height);

    let w = width / img.width;
    let h = height / img.height;
    img.loadPixels();

    for(let j = 0;j < img.height;j++){
        let row = '';
        for(let i = 0;i < img.width;i++){
            const pixelIndex = (i + j * img.width) * 4;
            const r = img.pixels[pixelIndex + 0];
            const g = img.pixels[pixelIndex + 1];
            const b = img.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, 0, len));
            const c  = density.charAt(charIndex);
            if(c == ' ') {
                row += '&nbsp;';
            } else { 
                row += c;
            }
        }
        createDiv(row);
        //console.log(row);
    }
}