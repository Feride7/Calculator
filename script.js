window.onload = function() {

    var firstNum = '';
    var secondNum = '';
    var selected = '';


    var numbers = document.querySelectorAll(".num");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function() {
            if (this.value == '.') {
                return;
            }
            document.getElementById("result").innerHTML += this.value;

            if (selected == '') {
                firstNum += this.value;
            } else if (selected != '') {
                secondNum += this.value;
            }

        }, false);
    }


    var operators = document.querySelectorAll(".operator");
    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", function() {
            if (document.getElementById("result").innerHTML === "") {
                return;
            }
            document.getElementById("result").innerHTML += this.value;

            selected = this.value;
        }, false);
    }



    document.getElementById("dot").addEventListener("click", function() {
        if (document.getElementById("result").innerHTML.indexOf('.') != -1) {
            return;
        }

        if (document.getElementById("result").innerHTML === "") {
            output = document.getElementById("result").innerHTML = '0.';
        } else if (document.getElementById("result").innerHTML === output) {
            document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + '.';
        }
    }, false);


    document.getElementById("equation").addEventListener("click", function() {

        var calculationResult = 0;

        if (selected == '+') {
            calculationResult = parseFloat(firstNum) + parseFloat(secondNum);
        } else if (selected == '-') {
            calculationResult = parseFloat(firstNum) - parseFloat(secondNum);
        } else if (selected == '*') {
            calculationResult = parseFloat(firstNum) * parseFloat(secondNum);
        } else if (selected == '/') {
            calculationResult = parseFloat(firstNum) / parseFloat(secondNum);
        }


        document.getElementById("result").innerHTML = calculationResult;

        firstNum = '';
        secondNum = '';
        selected = '';
    }, false);


    document.getElementById("delete").addEventListener("click", function() {
        document.getElementById("result").innerHTML = '';

        firstNum = '';
        secondNum = '';
        selected = '';
    }, false);
}