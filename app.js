let gameSeq=[];
let userseq=[];

let started=false;//tells whether game started or not ;
let level=0;
let btns=["pink","orange","blue","skyblue"];
let h2=document.querySelector('h2');

//step 1. anykey press game started ;
document.addEventListener('keydown',function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },200);
}
function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },200);
}

function levelUp(){
    level++;
    userseq=[];
    h2.innerText=  `level ${level}`;

    //select random i to select random ith btn frm list then flash that button  
    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
};
//step 3 : record all button pressing on flash

function btnPressed(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");;
    userseq.push(userColor);

    checkAns(userseq.length -1);

}

let allBtns=document.querySelectorAll('.btn');
for(let btn of allBtns){
    btn.addEventListener("click",btnPressed);
}

//step 4:check  whether both user and game seq is same or not ;

function checkAns( indx){
    if(userseq[indx]==gameSeq[indx]){
        if(userseq.length == gameSeq.length){
            // levelUp();  add timer;
            setTimeout(levelUp,150);

        }
    }else{
        h2.innerText=`Game over your score is ${level}!press any key to restart`;
        document.querySelector("body").style.backgroundColor="red"; 
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

//reset game 
function reset(){
    gameSeq=[];
    userseq=[];
    started=false;
    level=0;
}