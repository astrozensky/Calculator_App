let answer = 0,
    firstNum,
    secondNum,
    operator;

// Backspace Function
// if($("p").text() === "0"){
//     $("#clear").text("C");
//     $("#clear").removeClass("backspace");
// } else {
//     $("#clear").text("<-");
//     $("#clear").addClass("backspace");
// }
if($("p").text() != "0"){
    alert("not 0");
}

// Number function
$("button.number").on("click", function(){
    let currentVal = $("p").text();
    let val = $(this).text();

    if (currentVal === "0"){
        $("p").empty();
        $("p").append(val);

        $("#clear").text("<-");
        $("#clear").addClass("backspace");
    } else {
        $("p").append(val);
    }

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
        secondNum = "";
    }
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

    $("#clear").text("C");
    $("#clear").removeClass("backspace");
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