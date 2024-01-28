
const container = document.getElementById("container");
const scr = document.getElementById("screen");
const btnAllClear = document.getElementById("allClear");
const btnClear = document.getElementById("clear");
const btnEqual = document.getElementById("equal");
const btnComma = document.getElementById("comma");
const btnAC = document.getElementById("allClear");
const operationBtns = document.querySelectorAll(".operationBtn");
const numBtns = document.querySelectorAll(".numBtn");

btnAC.addEventListener('click', () => {scr.textContent = 0;});
btnClear.addEventListener('click', () => {
    let mid = scr.textContent.split("");
    mid.splice(-1, 1);    
    scr.textContent = mid.join("");
});

container.dataset.operation = '';
container.dataset.firstValue = "";
container.dataset.secondValue = "";
container.dataset.midValue = "";
container.dataset.calcEnd = "";

numBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (scr.textContent == 0 || container.dataset.calcEnd == "Y") {
            if (button.value == ".") {
                scr.textContent = scr.textContent + ".";
                container.dataset.calcEnd = "";
            } else {
                scr.textContent = button.value;
            }
        } else {
            if (button.value == "." && scr.textContent.split("").includes(".")) { 
            } else {
                scr.textContent = scr.textContent + button.value;
            }
        }
    });
});

operationBtns.forEach(button => {
    button.addEventListener('click', function() {
        if (container.dataset.operation == "") {
            container.dataset.firstValue = scr.textContent;
            container.dataset.operation = button.value;
            scr.textContent = 0;
        } else {
            container.dataset.secondValue = scr.textContent;
            container.dataset.midValue = calc(container.dataset.firstValue, container.dataset.operation, container.dataset.secondValue);
            container.dataset.firstValue = container.dataset.midValue;
            container.dataset.operation = button.value;
            scr.textContent = 0;
        }    
    }); 
});

btnEqual.addEventListener('click', () => {
    if (container.dataset.operation == "") {}
    else {
        container.dataset.secondValue = scr.textContent;
        scr.textContent = calc(container.dataset.firstValue, container.dataset.operation, container.dataset.secondValue);
        container.dataset.operation = "";
        container.dataset.calcEnd = "Y";
    }
});

function calc(a, b, c) {
    switch (b) {
        case "plus":
            return parseFloat(a) + parseFloat(c);
        case "minus":
            return parseFloat(a) - parseFloat(c);
        case "multiply":
            return parseFloat(a) * parseFloat(c);
        case "divide":
            return parseFloat(a) / parseFloat(c);
    }
}





