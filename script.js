let npcPoints = 0;
let humanPoints = 0;

function getComputerChoice() {
    let hand;
    let random = Math.floor(Math.random() * 3)
    if(random == "0"){
        hand = "scisor";
    }
    else if(random == "1"){
        hand = "paper";
    }
    else{
    hand = "rock";
    }
    return hand;
}
console.log(getComputerChoice());

function getUserChoice () {
    let hand2;
    let userChoise = prompt("choose one\n0-scisor\n1-paper\n2-rock", 0);
    if(userChoise == "0"){
        hand2 = "scisor";
    }
    else if(userChoise == "1"){
        hand2 = "paper";
    }
    else{
    hand2 = "rock";
    }
    return hand2;
}

function playGame(){
     while((humanPoints<5)&&(npcPoints<5)){
    let humanChoice = getUserChoice();
    let npcChoice = getComputerChoice();

    if(humanChoice===npcChoice){
        console.log("Tie!")
    }
    else if (
        ((humanChoice === 'rock') && (npcChoice === 'scisor')) ||
        ((humanChoice === 'paper') && (npcChoice === 'rock')) ||
        ((humanChoice === 'scisor') && (npcChoice === 'paper'))
    ) {
        console.log("You win this round!");
        humanPoints++;
    }
    else {
        console.log("Computer wins this round!");
        npcPoints++;
    }
    

    
    console.log(`Player picked: ${humanChoice} | Computer picked: ${npcChoice}`);
    console.log(`Score: Player - ${humanPoints}, Computer - ${npcPoints}`);
}
}
playGame();
