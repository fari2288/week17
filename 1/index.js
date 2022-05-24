reg=/\s/
let surname=document.querySelector('#surname')
let firstname=document.querySelector('#name')
let patronymic=document.querySelector('#patronymic')

function showName() {
let fio=prompt('Введите Ваше ФИО')
if (reg.test(fio))
{}
else (alert('Введите с пробелами'))

let lowcase=fio.toLocaleLowerCase().trim()  
let array=lowcase.split(' ')

for(i=0;i<array.length;i++){
    array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1)
}

surname.value+=array[0]
firstname.value+=array[1]
patronymic.value+=array[2]
}