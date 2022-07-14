
let sec = 0
let min = 0
let hr = 0

let tempo

function start(){
    

    tempo = setInterval(cont,1000)
}


function pause(){
    clearInterval (tempo)
    
}


function reset(){
    clearInterval (tempo)
    sec = 0
    min = 0
    hr = 0


    document.getElementById('tempo').innerText = '00:00:00'
}

function ZeroAesquerda(n){
    let t
    if( n<10){
        t = '0'+ n
    }else
    { t=n}
    return t
}

function cont(){
    
    sec++
    if(sec == 60 ){
        min++
        sec =0
    }
    if( min == 60){
        hr++
        min = 0
    }else{}

   
    
   
    
    
    
    
    
    document.getElementById('tempo').innerText = ZeroAesquerda(hr) + ':' + ZeroAesquerda(min) + ':' + ZeroAesquerda(sec)
}