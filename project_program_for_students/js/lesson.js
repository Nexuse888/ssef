// IPHONE WALADATOOOOOORRRR
const phoneInput = document.querySelector('#phone_input')
const phoneButtom = document.querySelector('#phone_button')
const phoneResault = document.querySelector('#phone_result')
const regEXP = /^\+996 [5792]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButtom.onclick=() => {
 if (regEXP.test(phoneInput.value)) {
     phoneResault.innerHTML  = 'OK'
     phoneResault.style.color = 'green'
 }
 else {
     phoneResault.innerHTML  = 'NOT OK'
     phoneResault.style.color = 'red'
 }
}
