function increaseScore() {
    let current = Number(document.getElementById("hud").innerHTML);
    current += 1;
    document.getElementById("score").innerHTML = current;
    if (current == 1) {
        alert("You hit it!");
    } else {
        alert("You hit it again!");
    }
}

function doMagic() {
    setTimeout(moveButton, 10);
}

function moveButton() {
    let button = document.getElementById("targetButton");
    button.style.left = (Math.random()*90 + 5) + "%";
    button.style.top = (Math.random()*90 + 5) + "%";
}