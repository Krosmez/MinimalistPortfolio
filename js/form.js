const allInput = document.querySelectorAll('input[type="text"]');
const txtArea = document.querySelector('textarea');
const errorCtn = document.querySelectorAll('span[class="error"]');
const form = document.querySelector('form');

const fReg = /^([A-Za-zéàë]{2,40} ?)+$/;
const sReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const tReg = /^[a-zA-Z0-9\séèàù%¨^€£;,:.!#$%&'"(_)@ç?`-]+$/;


allInput[0].addEventListener('input', () => {
    if ((allInput[0].value).match(fReg)) {
        (allInput[0].value).trim();
        errorCtn[0].textContent = "";
    } else {
        errorCtn[0].textContent = "This format is invalid";
    }
});

allInput[1].addEventListener('input', () => {
    if((allInput[1].value).match(sReg)){
        (allInput[1].value).trim();
        errorCtn[1].textContent = "";
    } else {
        errorCtn[1].textContent = "This format is invalid";
    }
});

txtArea.addEventListener('input', () => {
    if((txtArea.value).match(tReg)){
        errorCtn[2].textContent = "";
    } else {
        errorCtn[2].textContent = "All fields are required";
    }
});

form.addEventListener('submit', (e) => {
    if(!allInput[0].value.match(fReg) || !txtArea.value.match(tReg)){
        e.preventDefault();
        alert('Les formats doivent etre respecter');
    } else if (!allInput[1].value.match(sReg)) {
        e.preventDefault();
        alert("Merci d'utiliser une adresse email valide");
    } else if(allInput[0].value === '' || txtArea.value === '' || allInput[1].value === ''){
        e.preventDefault();
        alert('Tous les champs doivent etre remplis');
    }
});