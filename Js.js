let sign = "X"
let boxes = []
let tmp;
let mood;
function getnumber( num ){
    return Math.floor(Math.random() * tmp)
 
}
    
// 

function check(n1, n2 ,n3){
mood = "win"
n1.style.background = "white"
n2.style.background = "white"
n3.style.background = "white"
n1.style.color = "black"
n2.style.color = "black"
n3.style.color = "black"
sign = ""
document.querySelector("h1").innerHTML = `${n1.innerHTML} Winner`
document.querySelector("h1").style.color = "White"
setTimeout(function(){ location.reload() } , 2000)
}

function winner(){
for( let i = 1 ; i < 10 ; i++){
boxes[i] = document.getElementById("Box" + i)
}


if(boxes[1].innerHTML == boxes[2].innerHTML && boxes[2].innerHTML == boxes[3].innerHTML && boxes[1].innerHTML != ""){
    check(boxes[1] , boxes[2] , boxes[3])
}
else if(boxes[4].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[6].innerHTML && boxes[4].innerHTML != ""){
    check(boxes[4] , boxes[5] , boxes[6])
}
else if(boxes[7].innerHTML == boxes[8].innerHTML && boxes[8].innerHTML == boxes[9].innerHTML && boxes[7].innerHTML != ""){
    check(boxes[7] , boxes[8] , boxes[9])
}
else if(boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != ""){
    check(boxes[1] , boxes[4] , boxes[7])
}
else if(boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != ""){
    check(boxes[2] , boxes[5] , boxes[8])
}
else if(boxes[3].innerHTML == boxes[6].innerHTML && boxes[6].innerHTML == boxes[9].innerHTML && boxes[3].innerHTML != ""){
    check(boxes[3] , boxes[6] , boxes[9])
}
else if(boxes[1].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[9].innerHTML && boxes[1].innerHTML != ""){
    check(boxes[1] , boxes[5] , boxes[9])

}
else if(boxes[3].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[7].innerHTML && boxes[3].innerHTML != ""){
    check(boxes[3] , boxes[5] , boxes[7])
}
else if(tmp === 0){
    document.querySelector("h1").innerHTML = `Tie ..!`
    setTimeout(function(){ location.reload() } , 2000)
}



}

// 

function clickfunction(element){
 if(element.innerHTML === ""){
    if(sign === "X"){
        element.innerHTML = "X"
        element.style.fontSize = "7em";
        element.style.height = "1.43em"
        winner()   
        // make winner dont put o 
        sign = "O"

        // object
        let bot = []
        for(i = 0 ; i < 9 ; i++ ){
            if(document.getElementById(`Box${i + 1}`).innerHTML === "")
           bot.push({
            element:document.getElementById(`Box${i + 1}`),
            inner:document.getElementById(`Box${i + 1}`).innerHTML
        })
        }
       tmp = bot.length
         
      if(bot.length > 0 && mood != "win" ){
        bot[getnumber()].element.innerHTML = "O"
       }

     for(z = 1 ; z < 10 ; z++){
        if(document.getElementById(`Box${z}`).innerHTML === "O"){
            document.getElementById(`Box${z}`).style.fontSize = "7em";
            document.getElementById(`Box${z}`).style.height = "1.43em"
        }
     }
      sign = "X"

    
     }

     winner()   
   }
 }
