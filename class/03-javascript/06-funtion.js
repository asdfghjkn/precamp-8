const aaa=()=>{ 
    const token= String(Math.floor(Math.random()*1000000)).padStart(6,0)
    document.getElementById("qqq").innerText=token
    let time=10
    setInterval (function(){
        if(time >=0){
            const seconds = time % 60
            document.getElementById("ccc").innerText=seconds
            time=time-1
        }
    },  1000)
}


