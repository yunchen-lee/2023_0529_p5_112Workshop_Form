var palette = ["#fffdfa#", "#f2dfa5#", "#fccc3a", "#eba205", "#fffdfa", "#64afe8", "#4a4742", "#aad7fa"]


function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(250, 240, 215)
    noStroke();
    rect(0, 0, width, height)
    noStroke()
}

function draw() {
    translate(-width * 0.5, -height * 0.2)
    let iter = 100
    let c1 = (int(frameCount / iter)) % palette.length
    let c2 = (int(frameCount / iter) + 1) % palette.length
    let ratio = (frameCount / iter - int(frameCount / iter))

    for (var i = 0; i < 50; i++) {
        push()
        let spanx = 50;
        let spany = 80;
        fill(lerpColor(color(palette[c1]), color(palette[c2]), ratio))
        let x = noise(frameCount / spanx + i / spanx, 8000) * width * 2
        let y = noise(frameCount / spany + i / spany, 10000) * height / 2
        y += (frameCount / (50 + 10 * log(frameCount)) + i / 20) * y / i

        let rad = random(1, 5 - log(frameCount) / 100)
        ellipse(x, y, rad)
        pop()
    }
}