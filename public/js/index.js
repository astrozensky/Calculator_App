let answer = 0;
let variables = [];

// Number function
$("button.number").on("click", function(){
    let val = $(this).text();
    $("p").append(val);
});

// Clear function
$("#clear").click(function(){
    $("p").empty();
    answer = 0;
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
    variables.push(Number($("p").text()));
    answer = variables.reduce((a, b) => a + b, 0);
    $("p").empty();
    $("p").append(answer);
    variables.length = 0;
});

function equals() {
    
}