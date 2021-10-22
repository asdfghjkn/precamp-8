const aaa=()=>{ 
    const token= String(Math.floor(Math.random()*1000000)).padStart(6,0)
    document.getElementById("qqq").innerText=token
}

let time=10
setInterval (function(){
      if(time >=0){
          console.log(time)
          time=time-1
      }
},  1000)

// const token=String(Math.floor(Math.random()*1000000)).padStart(6,0)    
    
    // function getToken () {
    // const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    // console .log (token)
    // }