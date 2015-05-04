//tictactoe.js

//class TicTacToe
function TicTacToe(div) {

    var players = ["X", "O"];
    var turn = 0;
    var isGameOver = false;
    var myDiv = document.getElementById(div);

    //renders each cell in a 3x3 square within myDiv
    var number = 1;
    for (var rowCount = 1; rowCount <= 3; rowCount++) {
        for (var colCount = 1; colCount <= 3; colCount++) {
            myDiv.appendChild(new Cell(number));
            number++;
        }
    }

    //renders a display under tictactoe board
    var display = document.querySelector("#display");
    display.textContent = "Player " + players[turn] + "'s turn";

    //put boxes in an array
    var boxes = document.querySelectorAll("#box");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function() {
            if (isGameOver) return;

            if (this.textContent.length != 0) {
                display.textContent = "Invalid choice.";
            } else {
                this.textContent = players[turn];
                //check for the winner
                isGameOver = threeInARow(boxes, players, turn);
                if (isGameOver) {
                    display.textContent = "";
                    alert("Player " + players[turn] + " wins!");
                    return;
                }
                //change turn
                turn += 1;
                //allows going to be index 0 or 1
                turn %= 2;
                display.textContent = "Player " + players[turn] + "'s turn";
            }

            //check for a draw
            if (isFull(boxes) && !threeInARow(boxes, ["X"], 0)) {
                display.textContent = "Draw.";
            }

        });
    }

    function threeInARow(boxes, players, turn) {
        if (boxes[0].textContent == players[turn] &&
            boxes[1].textContent == players[turn] &&
            boxes[2].textContent == players[turn])
            return true;
        if (boxes[3].textContent == players[turn] &&
            boxes[4].textContent == players[turn] &&
            boxes[5].textContent == players[turn])
            return true;
        if (boxes[6].textContent == players[turn] &&
            boxes[7].textContent == players[turn] &&
            boxes[8].textContent == players[turn])
            return true;
        if (boxes[0].textContent == players[turn] &&
            boxes[3].textContent == players[turn] &&
            boxes[6].textContent == players[turn])
            return true;
        if (boxes[1].textContent == players[turn] &&
            boxes[4].textContent == players[turn] &&
            boxes[7].textContent == players[turn])
            return true;
        if (boxes[2].textContent == players[turn] &&
            boxes[5].textContent == players[turn] &&
            boxes[8].textContent == players[turn])
            return true;
        if (boxes[0].textContent == players[turn] &&
            boxes[4].textContent == players[turn] &&
            boxes[8].textContent == players[turn])
            return true;
        if (boxes[2].textContent == players[turn] &&
            boxes[4].textContent == players[turn] &&
            boxes[6].textContent == players[turn])
            return true;

        return false;
    }

    //checks to see that box is blank in order to move
    function isValidMove(boxes) {

    }

    //checks to see that the board is full
    function isFull(boxes) {
        for (var i = 0; i < boxes.length; i++) {
            if (boxes[i].textContent.length == 0) return false;
        }
        return true;
    }
}

//class Cell
function Cell(number) {
    var box = document.createElement("div");
    box.id = "box";

    //css attributes
    box.style.position = "relative";
    box.style.float = "left";
    box.style.width = "99px";
    box.style.height = "99px";
    box.style.background = "#0021A5";
    box.style.color = "white";
    box.style.fontSize = "70px";
    box.style.textAlign = "center";

    if (number == 2 || number == 5 || number == 8 ) {
        box.style.borderLeft = "1px solid #FFA100";
        box.style.borderRight = "1px solid #FFA100";
    }

    if (number == 4 || number == 5 || number == 6 ) {
        box.style.borderTop = "1px solid #FFA100";
        box.style.borderBottom = "1px solid #FFA100";
    }

    return box;

}
