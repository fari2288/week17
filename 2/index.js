const reg= /viagra|XXX/gim
const message= document.querySelector('#message')


let result=document.querySelector('#result')
function checkSpam() {

if (reg.test(message.value)){
    result.value=message.value.replace(reg, '***')
}
else {
    result.value=message.value
}
}