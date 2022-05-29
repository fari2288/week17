const reg= /viagra|XXX/gim
const message= document.querySelector('#message')


let result=document.querySelector('#result')
function checkSpam() {
    result.value=message.value.replace(reg, '***')
}