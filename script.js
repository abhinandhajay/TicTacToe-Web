var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var turn = 1;
var end = 0;

function checker() {
    if ((one.className == two.className) && (one.className == three.className)) {
        if (one.className == "squareX") {
            end = 1;
            alert("Player 1");
            return "1";
        } else if (one.className == "squareO") {
            end = 1;
            alert("Player 2");
            return "2";
        }
    }
    if ((four.className == five.className) && (four.className == six.className)) {
        if (four.className == "squareX") {
            end = 1;
            alert("Player 1");
            return "1";
        } else if (four.className == "squareO") {
            end = 1;
            alert("Player 2");
            return "2";
        }
    }
    if ((seven.className == eight.className) && (seven.className == nine.className)) {
        if (seven.className == "squareX") {
            end = 1;
            alert("Player 1");
            return "1";
        } else if (seven.className == "squareO") {
            end = 1;
            alert("Player 2");
            return "2";
        }
    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        if (this.classList.contains("square") && end == 0) {
            if (turn % 2 === 1) {
                this.classList.add("squareX");
                this.classList.remove("square");
                this.innerHTML = "<i class='fas fa-times'></i>";
                h1.style.background = "#39da6f";
                turn++;
            } else {
                this.classList.add("squareO");
                this.classList.remove("square");
                this.innerHTML = "<i class='far fa-circle'></i>";
                h1.style.background = "#df3535";
                turn++;
            }
            checker();
        }
    });
}