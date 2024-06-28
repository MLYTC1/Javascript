let matrix = [
    // Number 1
    [["#A01D1D", "#A01D1D", "#A01D1D"],
     ["#A01D1D", "white", "#A01D1D"],
     ["#A01D1D", "#A01D1D", "#A01D1D"]],
    
    // Number 2
    [["#A01D1D", "#A01D1D", "white"],
     ["#A01D1D", "#A01D1D", "#A01D1D"],
     ["white", "#A01D1D", "#A01D1D"]],
    
    // Number 3
    [["#A01D1D", "#A01D1D", "white"],
     ["#A01D1D", "white", "#A01D1D"],
     ["white", "#A01D1D", "#A01D1D"]],
    
    // Number 4
    [["white", "#A01D1D", "white"],
     ["#A01D1D", "#A01D1D", "#A01D1D"],
     ["white", "#A01D1D", "white"]],
    
    // Number 5
    [["white", "#A01D1D", "white"],
     ["#A01D1D", "white", "#A01D1D"],
     ["white", "#A01D1D", "white"]],
    
    // Number 6
    [["white", "#A01D1D", "white"],
     ["white", "#A01D1D", "white"],
     ["white", "#A01D1D", "white"]]
];

let number = Math.floor(Math.random() * 6);
let number1 = Math.floor(Math.random() * 6);


document.getElementById("reset-btn").addEventListener('click', function() {

    let number = Math.floor(Math.random() * 6);
    let number1 = Math.floor(Math.random() * 6);

    document.getElementById("one").style.backgroundColor = matrix[number][0][0];
    document.getElementById("two").style.backgroundColor = matrix[number][0][2];
    document.getElementById("three").style.backgroundColor = matrix[number][1][0];

    document.getElementById("four").style.backgroundColor = matrix[number][1][1];
    document.getElementById("five").style.backgroundColor = matrix[number][1][2];
    document.getElementById("six").style.backgroundColor = matrix[number][2][0];

    document.getElementById("seven").style.backgroundColor = matrix[number][2][2];

    document.getElementById("one1").style.backgroundColor = matrix[number1][0][0];
    document.getElementById("two1").style.backgroundColor = matrix[number1][0][2];
    document.getElementById("three1").style.backgroundColor = matrix[number1][1][0];

    document.getElementById("four1").style.backgroundColor = matrix[number1][1][1];
    document.getElementById("five1").style.backgroundColor = matrix[number1][1][2];
    document.getElementById("six1").style.backgroundColor = matrix[number1][2][0];

    document.getElementById("seven1").style.backgroundColor = matrix[number1][2][2];

    if(number>number1){
        document.getElementById("result").textContent = "Player 1 Wins";
    }else if(number1>number){
        document.getElementById("result").textContent = "Player 2 Wins";
    }else{
        document.getElementById("result").textContent = "Draw";
    }
  
});
