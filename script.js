
function changeColorToOrange() {
    console.log('change to orange')
    document.body.style.backgroundColor = 'orange'
    document.getElementById('change-color-btn').innerText = 'change to blue'
}

function changeColorToBlue() {
    console.log('change to blue')
    document.body.style.backgroundColor = 'blue'
    document.getElementById('change-color-btn').innerText = 'change to orange'
}

function changeColor() {
    console.log('clicked on change color')
    let buttonText = document.getElementById('change-color-btn').innerText // change to orange / change to blue
    if (buttonText == 'change to orange') {
        changeColorToOrange();
    } else {
        changeColorToBlue();
    }
}

document.getElementById('change-color-btn').addEventListener('click', changeColor)