const buttonElement = document.getElementById("calc");
const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");

let birthToday =0;
function calculateAge(){
    const birthdayValue = birthdayElement.value;
    // console.log("clicked"+" "+birthdayValue);
    if(birthdayValue === ""){
        alert("Plese enter your birth-date");
    }
    else{
        const age= getAge(birthdayValue);
        resultElement.innerText = age<0?"Please enter a Valid Date":birthToday==1?`Happy BirthDay Dude. Your are now ${age} ${age<2?"year":"years"}  old`:`You are ${age} ${age<2?"year":"years"} old`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age =currentDate.getFullYear()-birthdayDate.getFullYear();
    const month= currentDate.getMonth()-birthdayDate.getMonth();
    if(month<0||(month===0)){
        if(currentDate.getDate()<birthdayDate.getDate()){
            age--;
        }
        else if(currentDate.getDate()==birthdayDate.getDate()){
            birthToday++;
        }
    }
    return age;
}

buttonElement.addEventListener("click",()=>{
    calculateAge();
})