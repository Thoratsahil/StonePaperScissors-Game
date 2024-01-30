let userscr=0;
let compscr=0;

const choises =document.querySelectorAll(".choise");
const msg=document.querySelector("#msg");


const userscorepara=document.querySelector("#uscore");
const compscorepara=document.querySelector("#cscore");


const drawgame = () =>{
    console.log("Game Was draw");
    msg.innerText="Game Draw...Please Try Again";
}


const showwin= (userwin,userchoise,compchoise) =>{
    if(userwin){
        userscr++;
        userscorepara.innerText=userscr;
        console.log("You Win");
        msg.innerText=`You Win...${userchoise} Beats ${compchoise}`;
        msg.style.backgroundColor = "Green";
    } else {
        compscr++;
        compscorepara.innerText=compscr;
        console.log("You Lose");
        msg.innerText=`You Lose...${compchoise} Beats ${userchoise}`;;
        msg.style.backgroundColor = "red";
    }
}


const gencompchoise= () => {

    const options=["rock","paper","scissors"];
    const randindx=Math.floor(Math.random() * 3);

    return options[randindx];
}

const playgame= (userchoise) => {   //arrowfunction
    console.log("User Choise = ",userchoise);

    const compchoise = gencompchoise();
    console.log("computer Choise = ",compchoise);

    if(userchoise === compchoise){
        //draw
        drawgame();
    } else{

        let userwin=true;
        if(userchoise === "rock"){
            //paper,scissor
            
            userwin= compchoise ==="paper"? false:true;   //using ternary operator //checked 2 conditions in this.

        } else if(userchoise==="paper"){
            //scissor,rock
            
            userwin= compchoise ==="scissors"? false:true;   //using ternary operator //checked 2 conditions in this.

        } else{
            userwin=compchoise=== "rock"?false:true;
        }

        showwin(userwin,userchoise,compchoise);
    }
    

}

 choises.forEach((choise) => {

    choise.addEventListener("click", () => {

        const userchoise= choise.getAttribute("id");
        //console.log("Choise was clicked",userchoise);
        playgame(userchoise);
    });
    
 });