// Number function
$("button.number").on("click", function(){
    let val = $(this).text();
    $("p").append(val);
});

// Clear function
$("#clear").click(function(){
    $("p").empty();
});

let arr = [[],[]];

// Operator Function
$("button.operator").click(function(){
    let val = $("p").text();
    let operator = $(this).text();
    $("p").empty();

    arr[0].push(val);
    arr[1].push(operator);
});

$("#equal").click(function(){
    alert(arr);
});

function equals() {

};