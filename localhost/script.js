// типо кнопочки тык тык прикольна

let person = document.getElementById('person')


document.getElementById('btn1').style.display = 'none';
document.getElementById('btn2').style.display = 'none';
document.getElementById('btn3').style.display = 'none';
document.getElementById('btn4').style.display = 'none';
document.getElementById('btn5').style.display = 'none';
document.getElementById('btn6').style.display = 'none';
document.getElementById('btn7').style.display = 'none';
document.getElementById('btn8').style.display = 'none';
document.getElementById('btn9').style.display = 'none';

person.addEventListener('input', function() {
    console.log(person.value);
    
    if (person.value == 1 || person.value == 2) {
        showButtons(['btn1', 'btn2', 'btn4', 'btn5', 'btn9']);
        hideButtons(['btn3', 'btn6', 'btn7', 'btn8']);
    } 
    else if (person.value == 3 || person.value == 4) {
        showButtons(['btn3', 'btn6', 'btn7', 'btn8']);
        hideButtons(['btn1', 'btn2', 'btn4', 'btn5', 'btn9']);
    }  
    else if (person.value == 0) {
        hideButtons(['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9']);
    }
});


function showButtons(buttonIds) {
    buttonIds.forEach(id => {
        const btn = document.getElementById(id);
        btn.style.display = 'block'; 
        setTimeout(() => {
            btn.classList.add('btn-visible'); 
            btn.classList.remove('btn-hidden');
        }, 10); 
    });
}

function hideButtons(buttonIds) {
    buttonIds.forEach(id => {
        const btn = document.getElementById(id);
        btn.classList.remove('btn-visible');
        btn.classList.add('btn-hidden');
        setTimeout(() => {
            btn.style.display = 'none';
        }, 500); 
    });
}

// типо дата 

let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let todays = (`${day}.0${month}.${year}`)
let tomorrow = (`${day+1}.0${month}.${year}`)
let dayAfterTomorrow = (`${day+2}.0${month}.${year}`)

today.innerHTML = (todays);
todayNext.innerHTML = (tomorrow);
todayNextNext.innerHTML = (dayAfterTomorrow)

let myVariable 
let lastActiveButton = null; 


function resetButton(button) {
    const number = button.id.replace("btn", ""); 
    button.innerHTML = number; 
}

function resetButton(button) {
    const number = button.id.replace("btn", ""); 
    button.innerHTML = number; 
    button.classList.remove("active"); 
}

btn1.addEventListener('click', function() {
    myVariable = 1;
    console.log(myVariable);
    if (lastActiveButton) {
        resetButton(lastActiveButton);
    }
    this.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3106/3106690.png " width="22" height="22">`;
    this.classList.add("active");
    lastActiveButton = this;
});

btn2.addEventListener('click', function() {
    myVariable = 2;
    console.log(myVariable);
    if (lastActiveButton) {
        resetButton(lastActiveButton);
    }
    this.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3106/3106690.png " width="22" height="22">`;
    this.classList.add("active");
    lastActiveButton = this;
});

btn3.addEventListener('click', function() {
    myVariable = 3;
    console.log(myVariable);
    if (lastActiveButton) {
        resetButton(lastActiveButton);
    }
    this.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3106/3106690.png " width="22" height="22">`;
    this.classList.add("active");
    lastActiveButton = this;
});

btn4.addEventListener('click', function() {
    myVariable = 4;
    console.log(myVariable);
    if (lastActiveButton) {
        resetButton(lastActiveButton);
    }
    this.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3106/3106690.png " width="22" height="22">`;
    this.classList.add("active");
    lastActiveButton = this;
});

btn5.addEventListener('click', function() {
    myVariable = 5;
    console.log(myVariable);
    if (lastActiveButton) {
        resetButton(lastActiveButton);
    }
    this.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3106/3106690.png " width="22" height="22">`;
    this.classList.add("active");
    lastActiveButton = this;
});

btn6.addEventListener('click', function() {
    myVariable = 6;
    console.log(myVariable);
    if (lastActiveButton) {
        resetButton(lastActiveButton);
    }
    this.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3106/3106690.png " width="22" height="22">`;
    this.classList.add("active");
    lastActiveButton = this;
});

btn7.addEventListener('click', function() {
    myVariable = 7;
    console.log(myVariable);
    if (lastActiveButton) {
        resetButton(lastActiveButton);
    }
    this.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3106/3106690.png " width="22" height="22">`;
    this.classList.add("active");
    lastActiveButton = this;
});

btn8.addEventListener('click', function() {
    myVariable = 8;
    console.log(myVariable);
    if (lastActiveButton) {
        resetButton(lastActiveButton);
    }
    this.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3106/3106690.png " width="22" height="22">`;
    this.classList.add("active");
    lastActiveButton = this;
});

btn9.addEventListener('click', function() {
    myVariable = 9;
    console.log(myVariable);
    if (lastActiveButton) {
        resetButton(lastActiveButton);
    }
    this.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3106/3106690.png " width="22" height="22">`;
    this.classList.add("active");
    lastActiveButton = this;
});