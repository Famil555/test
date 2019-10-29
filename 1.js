let img = 1;

Show();

setInterval(function() { Change("next"); }, 3000);

function Show() {
    document.getElementById("filed").style.backgroundImage = `url("img/${img}.jpg")`;
}

function Change(btn) {
    switch (btn) {
        case "prev":
            img = img < 2 ? 7 : img - 1;
            Show();
            break;
        case "next":
            img = img > 6 ? 1 : img + 1;
            Show();
            break;
    }
}