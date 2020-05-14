let answer = 0,
    firstNum,
    secondNum,
    operator;

// Number function
$("button.number").on("click", function(){
    let currentVal = $("p").text();
    let val = $(this).text();

    if (currentVal === "0"){
        $("p").empty();
        $("p").append(val);
    } else {
        $("p").append(val);
    }

    if(firstNum){
        $("button.operator").removeClass("isDepressed");
    }
});

// Clear function
$("#clear").click(function(){
    $("p").empty();
    $("p").text("0");

    // Reset stored values
    answer = "",
    firstNum = "",
    secondNum = "";
});

// Operator Function
$("button.operator").click(function(){
    firstNum = $("p").text();
    $("p").text("0");

    operator = this.id;
    $(this).addClass("isDepressed");    
});

// Equal Function
$("#equal").click(function(){
    secondNum = $("p").text();
    $("p").text(calculate());
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