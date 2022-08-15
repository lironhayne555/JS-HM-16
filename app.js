let types=["Harts","Spades","Diamond","Clubs"];
let wrap=document.getElementById("root");
class Card
{
    constructor(type,number)
    {
        this.type=type;
        this.number=number;
    }
    renderCard(){
        let wrapCard=document.createElement("div");
        wrapCard.className="wrap-card";
        let type=document.createElement("h5");
        type.textContent=this.type;
        let number=document.createElement("span");
        number.textContent=this.number;
        wrapCard.appendChild(type);
        wrapCard.appendChild(number);
        wrap.appendChild(wrapCard);
    }
}
let cardsArr=[];
let counter=0;
function MakeCards(){
    wrap.innerHTML+="";
while (cardsArr.length!=52)
{
let numberRandom=randInt(1,14);
let typerandCard=randInt(0,4);
let card=new Card(types[typerandCard],numberRandom);
let found=cardsArr.some(ca=>ca.type===types[typerandCard] && ca.number===numberRandom);
 if(!found||cardsArr.length==0)
 {

    cardsArr.push(card);
    card.renderCard();
    console.log(`this ia the type ${card.type} this is the number ${card.number}`);
    console.log(cardsArr);

 }
 else{
    console.log("OPPS THIS CARD INCLUDE")
 }
 counter++;
}
var p=document.createElement("p");
p.textContent=`The loop run ${counter} until the arr cards was full.`
wrap.appendChild(p);
}
function randInt(min,max)
{
   let number= Math.floor(Math.random()*(max-min))+min;
   return number;
}