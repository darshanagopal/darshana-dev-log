let storage_array = [];

function screenDisplay() {
    display = document.getElementById("screen-display")
    display.textContent = storage_array.join("")
};

function keyBoard() {
    document.addEventListener("keydown", function(event) {
        if ("1234567890/*+-%.".includes(event.key)) {
            storage_array.push(event.key);
        }
        if (event.key === "Backspace") {
            storage_array.pop();
        }
        if (event.key === "="|| event.key === "Enter") {
            let equation = storage_array.join("");
            let result  = eval(equation);
            storage_array = [result.toString()];
        }
        screenDisplay()
    })
}

function clickButton() {
    document.addEventListener("click", function(event) {
       
        if (event.target.id === "AC") {
            storage_array = [];
        };

        if (event.target.id === "delete") {
            storage_array.pop()
        };

        if ("1234567890/*+-%.".includes(event.target.innerText)) {
            storage_array.push(event.target.innerText)
        };

        if (event.target.id === "equal") {
            let equation = storage_array.join("");
            let result = eval(equation);
            storage_array = [result.toString()];
        };
        screenDisplay()
    })
}

keyBoard()
clickButton()