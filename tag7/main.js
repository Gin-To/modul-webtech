//  console.log(document.getElementById("element")
//  );

let n = 0;
console.log(n);

n=n+1
console.log(n);

function buttonPressed() {
    n=n+1
    document.getElementById("element").style.left = n + "20px";
    document.getElementById("element").style.top = n + "20px";
    document.getElementById("element").style.borderColor = "red";
    document.getElementById("element").style.backgroundColor = "blue";
}

function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    document.body.appendChild(div);
}

function starteAnimation() {
    let element = document.getElementById('kreis2');
    element.style.animationPlayState = "running";
 
}

 // Funktion, um die Animation zu starten oder zu stoppen
 function toggleAnimation() {
    let element = document.getElementById('kreis2');
    let button = document.getElementById('toggleButton');

    // Prüfen, ob die Animation läuft oder pausiert ist
    if (element.style.animationPlayState === 'running') {
        element.style.animationPlayState = 'paused';
        button.textContent = 'Animation starten';
    } else {
        element.style.animationPlayState = 'running';
        button.textContent = 'Animation stoppen';
    }
}

// Event Listener für den Button
document.getElementById('toggleButton').addEventListener('click', toggleAnimation);



window.addEventListener("scroll", starteAnimation);
