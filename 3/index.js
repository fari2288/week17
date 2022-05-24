let date= new Date(2022,04,24,21,0)

let diff=Date.now()-date
    
function formatDate() {

if (diff<1000){
alert('прямо сейчас')
}
else if (diff<60*1000){
    alert('меньше 1 минуты назад')
    }
else if (diff<5 * 60 *1000) {
    alert('меньше 5 минут назад')
}
else if (diff<60*60*1000){
    alert('час назад')
}
else {
    alert(date)
}
}