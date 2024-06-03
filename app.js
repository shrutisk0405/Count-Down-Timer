const endDate = "4 MAY 2025 12:00 AM";
document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    console.log(diff);

    if (diff <= 0) {
        // Handle case when the countdown has ended
        changeBackgroundImages();
        document.querySelector('.end').innerText = "HAPPY BIRTHDAY DEAR! 💕💕.\nhave a great year ahead and you achieve all your dreams and sucess in your life.❤️\n Made by SHRUTI😊\n";
        return;
    }

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24);
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);
}

// Initial call
clock();

// Set interval
setInterval(clock, 1000);

function changeBackgroundImages() {
    const mainElement = document.querySelector('.main');
    mainElement.classList.add('background-change');

    // Apply background image when countdown reaches 0
    mainElement.style.backgroundImage = 'url("background 2.gif")';
}

