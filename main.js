const btn= document.getElementById("btn");
const passwordBox=document.getElementById("password");

const lengt=15
const UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijklmnopqrstuvwxyz"
const symbels="!@#$%^&*()_+-={}[]?><.,"
const numbers='1234567890'
const allSymbels= UpperCase+lowercase+symbels+numbers

btn.addEventListener("click",()=>{
    let pass=""
    pass+=UpperCase[Math.floor(Math.random()*UpperCase.length)]
    
    pass+=lowercase[Math.floor(Math.random()*lowercase.length)]
    pass+=symbels[Math.floor(Math.random()*symbels.length)]
    pass+=numbers[Math.floor(Math.random()*numbers.length)]
    
    while(lengt>pass.length){
        pass+=allSymbels[Math.floor(Math.random()*allSymbels.length)]

    }
 passwordBox.value=pass;
}
)


