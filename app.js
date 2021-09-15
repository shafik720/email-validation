
const emailVerify = () => {
    const emails = document.getElementById('email');
    const email = emails.value ; 
    const ok = document.getElementById('ok');
    const notOk = document.getElementById('notOk');
    
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    

    if (regexEmail.test(email)) {
        removePropertyOk();
        removePropertyNotOk2();
    } else {
        removePropertyNotOk();
        removePropertyOk2();
    }    
}

function removePropertyOk() {
    element = document.querySelector('.ok');
    element.style.setProperty('display', 'block');
}
function removePropertyOk2() {
    element = document.querySelector('.ok');
    element.style.setProperty('display', 'none');
}
function removePropertyNotOk() {
    element = document.querySelector('.notOk');
    element.style.setProperty('display', 'block');
}
function removePropertyNotOk2() {
    element = document.querySelector('.notOk');
    element.style.setProperty('display', 'none');
}

function removeWarning(){
    removePropertyOk2();
    removePropertyNotOk2();
}