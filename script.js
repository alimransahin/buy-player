const playerList=document.getElementById('player-list');
document.getElementById('player').addEventListener('click', function(event){
    const li=document.createElement('li');
    li.innerText = event.target.value;
    const totalPlayers=playerList.childElementCount;
    if(totalPlayers<5){
        if(li.innerText!='undefined'){
            playerList.appendChild(li);
            event.target.style.backgroundColor = "gray";
            event.target.disabled = true;
        }
    }
    else{
        alert('You have already selected 5 players');
    }
})
function getElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueString=element.value;
    const elementValue=parseInt(elementValueString);
    return elementValue;
}
function setElementTextById(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}
document.getElementById('player-budget').addEventListener('click', function(){
    const perPlayer=getElementValueById('per-player');
    const totalPlayerNo = playerList.childElementCount;
    if(Number.isInteger(perPlayer)&&perPlayer>0){
        const totalPlayerBudget=perPlayer*totalPlayerNo;
        setElementTextById('total-player-budget',totalPlayerBudget)
    }
    else{
        alert("not");
    }
})

document.getElementById('calculate')