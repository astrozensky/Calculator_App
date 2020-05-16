let answer = 0,
    firstNum,
    secondNum,
    operator,
    firstKeypress = false,
    multipleOperator = false
    equalKey = false;

function calculate() {
    let numOne = parseFloat(firstNum);
    let numTwo = parseFloat(secondNum);

    if(operator === "add"){
        answer = numOne + numTwo;
    } else if(operator === "subtract"){
        answer = numOne - numTwo;
    } else if (operator === "multiply"){
        answer = numOne * numTwo;
    } else if (operator === "divide"){
        answer = numOne / numTwo;
    }

    return answer.toString().substring(0,10);
}

function checkDecimal() {
    let str = $("p").text();

    for(let i = 0; i < str.length; i++){
        if(str[i] === "."){
            return true;
        } 
    }

    return false;
}

function clear(){
    if($(this).hasClass("backspace") && $("p").text() != "0"){
        let str = $("p").text().slice(0,-1);
        $("p").text(str);
    } else {
        $("p").empty();
        $("p").text("0");

        resetValues();
    }
}

function resetValues(){
    // Reset stored values
    answer = "",
    firstNum = "",
    secondNum = "",
    firstKeypress = false,
    multipleOperator = false;
}

function equals(){
    if(firstKeypress && $("p").text() != "0" && firstNum) {
        secondNum = $("p").text();
        $("p").text(calculate());

        $("#clear").text("C");
        $("#clear").removeClass("backspace");

        resetValues();
        
        equalKey = true;
    }
}

function operators() {
    if($("button.operator").hasClass("isDepressed")) { // Allows operator to be changed after one is selected
        $("button.operator").removeClass("isDepressed");
        $(this).addClass("isDepressed");
        operator = this.id;
    } else if(firstNum){
        secondNum = $("p").text();
        $("p").empty();
        $("p").text(calculate());
        $(this).addClass("isDepressed");

        firstNum = $("p").text(),
        operator = this.id,
        secondNum = "",
        answer = 0,
        multipleOperator = true;
    } else if (equalKey){
        firstNum = $("p").text();
        $("p").text("0");

        operator = this.id,
        multipleOperator = true;
    }
    // Check if value has been entered and an operator hasn't been selected
    else if(!$("button.operator").hasClass("isDepressed") && firstKeypress){
        firstNum = $("p").text();
        $("p").text("0");

        operator = this.id;
        $(this).addClass("isDepressed");
     } 
}

function clearAndStoreVal() {
    
}

function numbers() {
    let currentVal = $("p").text();
    let val = $(this).text();
    firstKeypress = true;

    if (currentVal === "0" || multipleOperator || equalKey){
        $("p").empty();

        // Check if keypress is decimal
        if($(this).text() != ".") {
            $("p").append(val);
            multipleOperator = false,
            equalKey = false;
        } else if (currentVal === "0"){
            $("p").text("0.");
            multipleOperator = false,
            equalKey = false;
        } else if (!checkDecimal()) {
            $("p").append(val);
            multipleOperator = false,
            equalKey = false;
        } 
        
        // Change clear to backspace 
        $("#clear").text("<-");
        $("#clear").addClass("backspace");
    } else if (currentVal.length < 10) {
        // Check if keypress is decimal
        if($(this).text() != ".") {
            $("p").append(val);
        } else if (!checkDecimal()) {
            $("p").append(val);
        }
    }

    // Remove isDepressed from operator button
    if(firstNum){
        $("button.operator").removeClass("isDepressed");
    }
}

//=================================
// Button Listeners
//=================================

// Numbers
$("button.number").click(numbers);

// Clear/Backspace 
$("#clear").click(clear);

// Operators
$("button.operator").click(operators);

// Equals
$("#equal").click(equals);