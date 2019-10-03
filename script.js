var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var turn = 1;

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
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
    });
}