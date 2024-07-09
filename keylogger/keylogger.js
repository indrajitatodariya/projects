let a=document.getElementById("klstart")
let b=document.getElementById("txt")
let c=document.getElementById("txt1")
let i=document.getElementById("klstart")
let r=document.getElementById("klstop")



function start(){
a.addEventListener("keypress",event=>{
    console.log(event);
    let j=event.key
    b.innerHTML=`press ${j} key`
    
})
a.addEventListener("keydown",event=>{
    console.log(event);
    let l=event.isTrusted
    c.innerHTML=`key is down`
    
})
a.addEventListener("keyup",event=>{
    console.log(event);
    let m=event.isTrusted
    c.innerHTML=`key is up`
    
})
}
function stop(){
    a.removeEventListener("keypress",event=>{
        console.log(event);
        let j=event.key
        b.innerHTML=``
        
    })
    a.removeEventListener("keydown",event=>{
        console.log(event);
        let l=event.isTrusted
        c.innerHTML=``
        
    })
    a.removeEventListener("keyup",event=>{
        console.log(event);
        let m=event.isTrusted
        c.innerHTM``
        
    })
    b.innerHTML=""
    c.innerHTML=""
    }