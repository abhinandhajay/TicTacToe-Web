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

// COLOR WINNING BLOCKS AND DISPLAY WINNER 
function winner(b1, b2, b3) {
    if (b1.classList.contains("squareX")) {
        end = 1;
        b1.classList.add("winBlue");
        b2.classList.add("winBlue");
        b3.classList.add("winBlue");
        h1.style.backgroundColor = "#df3535";
        h1.innerHTML = "Player 1 Wins!";
    } else if (b1.classList.contains("squareO")) {
        end = 1;
        b1.classList.add("winBlue");
        b2.classList.add("winBlue");
        b3.classList.add("winBlue");
        h1.style.backgroundColor = "#39da6f";
        h1.innerHTML = "Player 2 Wins!";
    }
}


// CHECK WIN CONDITIONS 
function checker() {

    // ROW WIN CHECK 
    if ((one.className == two.className) && (one.className == three.className)) {
        winner(one, two, three);
    }
    if ((four.className == five.className) && (four.className == six.className)) {
        winner(four, five, six);
    }
    if ((seven.className == eight.className) && (seven.className == nine.className)) {
        winner(seven, eight, nine);
    }

    // COLUMN WIN CHECK 
    if ((one.className == four.className) && (one.className == seven.className)) {
        winner(one, four, seven);
    }
    if ((two.className == five.className) && (two.className == eight.className)) {
        winner(two, five, eight);
    }
    if ((three.className == six.className) && (three.className == nine.className)) {
        winner(three, six, nine);
    }

    // DIAGONAL WIN CHECK 
    if ((one.className == five.className) && (one.className == nine.className)) {
        winner(one, five, nine);
    }
    if ((three.className == five.className) && (three.className == seven.className)) {
        winner(three, five, seven);
    }

    if (turn > 9 && end != 1) {
        h1.innerHTML = "It's a draw!";
        h1.style.backgroundColor = "#1164ff";
    }
}


for (var i = 0; i < squares.length; i++) {

    // PLACING X OR O 
    squares[i].addEventListener("click", function () {
        if (this.classList.contains("square") && end == 0) {
            this.classList.remove("hovering");
            if (turn % 2 == 1) {
                this.classList.add("squareX");
                this.classList.remove("square");
                this.innerHTML = "<i class='fas fa-times'></i>";
                h1.style.background = "#39da6f";
                turn++;
            } else {
                this.classList.add("squareO");
                this.classList.remove("square");
                this.innerHTML = "<i class='fas fa-circle'></i>";
                h1.style.background = "#df3535";
                turn++;
            }
            checker();
        }
    });

    // LET USER KNOW WHAT THEY'RE PLACING WHERE
    squares[i].addEventListener("mouseenter", function () {
        if (this.classList.contains("square") && end == 0) {
            this.classList.add("hovering");
            if (turn % 2 == 1) {
                this.classList.add("squareX");
                this.innerHTML = "<i class='fas fa-times'></i>";
            } else {
                this.classList.add("squareO");
                this.innerHTML = "<i class='fas fa-circle'></i>";
            }
        }
    });
    squares[i].addEventListener("mouseleave", function () {
        if (this.classList.contains("square") && end == 0) {
            this.classList.remove("hovering");
            if (turn % 2 == 1) {
                this.classList.remove("squareX");
                this.innerHTML = "";
            } else {
                this.classList.remove("squareO");
                this.innerHTML = "";
            }
        }
    });
}