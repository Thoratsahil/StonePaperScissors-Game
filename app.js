let userscr=0;
let compscr=0;

const choises =document.querySelectorAll(".choise");


const gencompchoise= () => {

    const options=["rock","paper","scissors"];
    const randindx=Math.floor(Math.random() * 3);
    return options[randindx];
}

const playgame= (userchoise) => {
    console.log("User Choise = ",userchoise);

    const compchoise = gencompchoise();
    console.log("computer Choise = ",compchoise);

}

 choises.forEach((choise) => {

    choise.addEventListener("click", () => {

        const userchoise= choise.getAttribute("id");
        console.log("Choise was clicked",userchoise);
        playgame(userchoise);
    });
    
 });