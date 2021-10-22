onst aaa=()=>{ 
    const token= String(Math.floor(Math.random()*1000000)).padStart(6,0)
    document.getElementById("qqq").innerText=token
    let time=179
    setInterval (function(){
        if(time >=0){
            const minutes= Math.floor(time/60)
            const seconds = String(time % 60).padStart(2,"0")
            document.getElementById("ccc").innerText= minutes+":"+seconds
            time=time-1
        }
    },  1000)
}