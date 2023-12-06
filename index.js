let score = document.getElementById("result");
let blocks = document.querySelectorAll(".box");
let reminder = document.getElementById("message");
let playmore = document.getElementById("button");
let chances = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [3,5,7],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
];

for(button of blocks){
    button.addEventListener('click',Appear);
}
let gameOver = false;
let Xc = [];
let Oc = [];
let cC = 0 ;
function Appear(event){
  let num = Number(event.target.id);
  cC=cC+1;
  let displaybox = blocks[num-1];
  let newTag = document.createElement('p');
  newTag.style.color = '#FAB201';
  displaybox.appendChild(newTag);
  displaybox.style.pointerEvents = 'none';
 if (cC%2==0){
    newTag.innerText = "X"
    Xc.push(num);
    Result("X",Xc);
 }else{
    newTag.innerText = "O";
    Oc.push(num);
    Result("O",Oc);
 }
 if(cC==9 && gameOver==false){
    score.style.visibility = 'visible';
    reminder.innerText='Match is a draw';

 }
}
function Result(x,y){
    for(let k =0; k<8; k++){
        let numof = 0;
        // console.log("welcome");
        for (let a =0; a<3; a++){
            if(y.includes(chances[k][a])===true){
                numof=numof+1;
            }
        }
        if(numof==3){
            gameOver = true;
            score.style.visibility = 'visible';
            reminder.innerText = x + ' has won the Match';
        }
    }
}
playmore.addEventListener("click",function(){
    window.location.reload();
})