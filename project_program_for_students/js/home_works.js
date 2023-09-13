// gmail check
const gmailInput = document.querySelector('#gmail_input')
const gmailButtom = document.querySelector('#gmail_button')
const gmailResault = document.querySelector('#gmail_result')
const regEXP = /@gmail.com/
gmailButtom.onclick=() => {
    if (regEXP.test(gmailInput.value)) {
        gmailResault.innerHTML  = 'молодец ты поставил @gmail.com ;) ' +
            'ахахахахах теперь к тебе будет приходить рассылка &#128520;'
        gmailResault.style.color = 'green'
    }
    else {
        gmailResault.innerHTML  = 'поставь @gmail.com и будет все OK :/'
        gmailResault.style.color = 'red'
    }
}
// -----------------------------------------------
const childBlock = document.querySelector('.child_block');
let positionX = 0
let positionY = 0
const move = () => {
    if(positionX < 448){
        positionX++
        childBlock.style.left=`${positionX}px`
        setTimeout(move, 1)
    }
    else if (positionX >= 448 && positionY < 448){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
    // else if (positionY >= 448 && positionX <= 448){
    //     positionX++
    //     childBlock.style.right = `${positionX}px`
    //     childBlock.style.left `${positionY}px`
    //     setTimeout(move, 1)
    //
// ____________________________________________--