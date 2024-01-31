let userscr=0; //for increaseing score board
let compscr=0;

const choises =document.querySelectorAll(".choise"); //for access divchoices
const msg=document.querySelector("#msg"); 


const userscorepara=document.querySelector("#uscore"); //score board
const compscorepara=document.querySelector("#cscore");


const drawgame = () =>{
    console.log("Game Was draw");
    msg.innerText="Game Draw...Please Try Again"; //draw game function
}


const showwin= (userwin,userchoise,compchoise) =>{ //userwin or compwin display
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
    const randindx=Math.floor(Math.random() * 3); //compchoise from mathRandom()

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

    choise.addEventListener("click", () => { //event listener

        const userchoise= choise.getAttribute("id");
        //console.log("Choise was clicked",userchoise);
        playgame(userchoise);
    });
    
 });