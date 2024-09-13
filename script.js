const random = parseInt(Math.random()*100 +1);
const submit = document.querySelector('#submt');
const UserInp = document.querySelector('#Userinp');
const display = document.querySelector('#display');
const chance = document.querySelector('#chance');
const form = document.querySelector('.form');

let count = 1;

submit.addEventListener('click', function(e) {
    e.preventDefault()
    validation();
    
});

function validation(){
    if(UserInp.value <= 100 && UserInp.value >= 1){
        playgame();
    }
    else {
      display.innerHTML = "Please enter a valid number";
    }
}

function playgame(){
    if(count <= 7){
        count++;
        check();
    }
    else
    {
        display.innerHTML = `You Loose , Number was ${random}`;

    }
}
function check(){
    
    {
        UserInp.innerHTML = '';
        if(UserInp.value == random)
    {
        display.style.color = 'green';
        display.innerHTML = "Congratulations , You Won";

    }
    else{

        chance.innerHTML = `Chance Remaining : ${9-count}`;
        update();
    }
    }
    

}

function update(){
    if(UserInp.value > random )
    {
        display.style.color = 'red';
        display.innerHTML = "Guessed number is too high";
    }
    else
    {
        display.style.color = 'red';
        display.innerHTML = "Guessed number is too low";
        console.log(random);
    }
}

    


