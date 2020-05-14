let answer = 0,
    firstNum,
    secondNum,
    operator,
    variables = [];

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
});

// Clear function
$("#clear").click(function(){
    $("p").empty();
    $("p").text("0");
    answer = 0;
});

// Operator Function
$("button.operator").click(function(){
    firstNum = $("p").text();
    $("p").text("0");

    operator = this.id;
    $(this).addClass("isDepressed");    
});

// Add Function
$("#add").click(function(){
    variables.push(Number($("p").text()));
    $("p").empty();
});

// // Subtract Function
// $("#subtract").click(function(){
//     answer -= $("p").text();
//     $("p").empty();
//     alert(answer)
// });

// // Multiply Function
// $("#multiply").click(function(){
//     answer *= $("p").text();
//     $("p").empty();
// });

// // Divide Function
// $("#divide").click(function(){
//     answer /= $("p").text();
//     $("p").empty();
// });

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