let result = "";

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}


function clearResult() {
    result = "";
    document.getElementById("result").value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Erro";
    }
}

function calculateSquareRoot() {
    try {
        result = Math.sqrt(parseFloat(result));
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Erro";
    }
}

function calculatePower() {
    try {
        result = eval(result);
        document.getElementById("result").value = result;
        result = Math.pow(result, 2);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Erro";
    }
}

// Adicione um evento de escuta de teclado ao documento
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/".includes(key)) {
        appendToResult(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Escape") {
        clearResult();
    } else if (key === "Backspace") {
        result = result.slice(0, -1);
        document.getElementById("result").value = result;
    } else if (key === "c" || key === "C") {
        clearResult();
    }
});
