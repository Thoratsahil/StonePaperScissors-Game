let userscr=0;
let compscr=0;

const choises =document.querySelectorAll(".choise");


const drawgame = () =>{
    console.log("Game Was draw");
    msg.innerText="Game Draw...Please Try Again";
}


const msg=document.querySelector("#msg");


const showwin= (userwin) =>{
    if(userwin){
        console.log("You Win");
        msg.innerText="You Win";
    } else {
        console.log("You Lose");
        msg.innerText="You Lose";
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

        showwin(userwin);
    }
    

}

 choises.forEach((choise) => {

    choise.addEventListener("click", () => {

        const userchoise= choise.getAttribute("id");
        //console.log("Choise was clicked",userchoise);
        playgame(userchoise);
    });
    
 });