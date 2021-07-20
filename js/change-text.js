var text1 = ["Web", "App", "Game"];
var text2 = ["Developer", "Designer"];

var counter = 0;
var counter2 = 0;





function changeS() {
    $("#changeSubject").text(text1[counter]);
    counter++;
    if (counter >= text1.length) {
        counter = 0;
    }
}

function changeR() {
    $("#changeRole").text(text2[counter2]);
    counter2++;
    if (counter2 >= text2.length) {
        counter2 = 0;
    }
}


setInterval(changeS, 2000);
setInterval(changeR, 6000);
