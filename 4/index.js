
let generated=document.querySelector('.generated')

let maximum=document.querySelector('.max')
let minimum=document.querySelector('.min')
let average=document.querySelector('.average')
let summa=document.querySelector('.sum')
let multiply=document.querySelector('.multiply')

let min = -10
let max = 10
function getRandomNumber(){
    let arr=[]
    let sum=0
    let multiplication=1
for (i=0;i<10;i++){
arr.push(Math.round(Math.random() * (max - min + 1) + min))
sum+=arr[i],10
multiplication*=arr[i],10
}

let averagenumber=sum/10
generated.textContent=arr
let maxnumber=Math.max(...arr)
maximum.textContent=maxnumber
let minnumber=Math.min(...arr)
minimum.textContent=minnumber
average.textContent=averagenumber
summa.textContent=sum
multiply.textContent=multiplication
}