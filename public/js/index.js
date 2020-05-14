let answer = 0,
    firstNum,
    secondNum,
    operator,
    firstKeypress = false;


// Number function
$("button.number").on("click", function(){
    let currentVal = $("p").text();
    let val = $(this).text();
    firstKeypress = true;

    if (currentVal === "0"){
        $("p").empty();

        // Check if keypress is decimal
        if($(this).text() !== ".") {
            $("p").append(val);
        } else if (currentVal === "0"){
            $("p").text("0.");
        } else if (!checkDecimal()) {
            $("p").append(val);
        } 
        
        // Change clear to backspace 
        $("#clear").text("<-");
        $("#clear").addClass("backspace");
    } else {
        // Check if keypress is decimal
        if($(this).text() !== ".") {
            $("p").append(val);
        } else if (!checkDecimal()) {
            $("p").append(val);
        }
    }

    // Remove isDepressed from operator button
    if(firstNum){
        $("button.operator").removeClass("isDepressed");
    }
});

// Clear/Backspace function
$("#clear").click(function(){
    if($(this).hasClass("backspace")){
        let str = $("p").text().slice(0,-1);
        $("p").text(str);
    } else {
        $("p").empty();
        $("p").text("0");

        // Reset stored values
        answer = "",
        firstNum = "",
        secondNum = "",
        firstKeypress = false;
    }
});

// Operator Function
$("button.operator").click(function(){
    // Check if value has been entered and an operator hasn't been selected
    if(!$("button.operator").hasClass("isDepressed") && firstKeypress){
        firstNum = $("p").text();
        $("p").text("0");

        operator = this.id;
        $(this).addClass("isDepressed");
    }
    
});

// Equal Function
$("#equal").click(function(){
    if(firstKeypress) {
        secondNum = $("p").text();
        $("p").text(calculate());

        $("#clear").text("C");
        $("#clear").removeClass("backspace");

        firstKeypress = false;
    }
    
});



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

    return answer.toString();
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