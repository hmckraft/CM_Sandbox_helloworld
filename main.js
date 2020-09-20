// holder place for javascript


// function JokeAnswer() {
    // document.getElementById("Answer").style.display = "";
// }

let jokeanswerList = document.getElementsByTagName('answer');
let btn = jokeanswerList[0];

function JokeAnswer() {
      var x = document.getElementById("answer");
    
        if (x.style.display 
    === "none") {
        x.style.display = "block";
      } else {
        x.style.display = 
      "none";
      }
    } 