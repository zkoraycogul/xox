const blocks = document.querySelectorAll(".block")
const text = document.querySelector("#aciklama")
const hataText = document.querySelector("#hata")
let sira1 = "X"
let total = 0
let result = false

function start() {
    text.innerHTML = `${sira1} 'in sirasi`
    blocks.forEach(e => e.addEventListener("click",()=> write(e)))
}

function write(block) {
    if(block.innerHTML == "") {
        block.innerHTML = sira1
        sira1 === "O" ? sira1 ="X" : sira1="O"
        text.innerHTML = `${sira1} 'in sirasi`
        total++
    }else {
        block.style.border = "3px solid red"
        hataText.innerHTML = "Kutu Zaten Dolu"
        setTimeout(()=> {
            block.style.border = "1px solid black"
            hataText.innerHTML = ""
        },3000)
    }


    checkWin()
    checkDraw()

    if (result) {
        blocks.forEach((e)=> e.style.pointerEvents = "none")
    }
    
}

function checkWin() {
    for(let i=0;i<1;i++){
        if(blocks[i].innerHTML!= "" && blocks[i].innerHTML == blocks[i+1].innerHTML 
            && blocks[i].innerHTML == blocks[i+2].innerHTML) {
                text.innerHTML = `${blocks[i].innerHTML} kazandı`
                result = true
        } 
        else if (blocks[i+3].innerHTML!= "" && blocks[i+3].innerHTML == blocks[i+4].innerHTML 
                    && blocks[i+3].innerHTML == blocks[i+5].innerHTML) {
                        text.innerHTML = `${blocks[i+3].innerHTML} kazandı`
                        result = true
        }
        else if (blocks[i+6].innerHTML!= "" && blocks[i+6].innerHTML == blocks[i+7].innerHTML 
                    && blocks[i+6].innerHTML == blocks[i+8].innerHTML) {
                        text.innerHTML = `${blocks[i+6].innerHTML} kazandı`
                        result = true
                        
        }
        else if (blocks[i+1].innerHTML!= "" && blocks[i+1].innerHTML == blocks[i+4].innerHTML 
                    && blocks[i+1].innerHTML == blocks[i+7].innerHTML) {
                        text.innerHTML = `${blocks[i+1].innerHTML} kazandı`
                        result = true
                        
        }
        else if (blocks[i].innerHTML!= "" && blocks[i].innerHTML == blocks[i+3].innerHTML 
                    && blocks[i].innerHTML == blocks[i+6].innerHTML) {
                        text.innerHTML = `${blocks[i].innerHTML} kazandı`
                        result = true
                        
        }
        else if (blocks[i+2].innerHTML!= "" && blocks[i+2].innerHTML == blocks[i+5].innerHTML 
                    && blocks[i+2].innerHTML == blocks[i+8].innerHTML) {
                        text.innerHTML = `${blocks[i+2].innerHTML} kazandı`
                        result = true
                        
        }
        else if (blocks[0].innerHTML!= "" && blocks[0].innerHTML == blocks[4].innerHTML 
                    && blocks[0].innerHTML == blocks[8].innerHTML) {
                       text.innerHTML = `${blocks[0].innerHTML} kazandı`
                       result = true
        }
        else if (blocks[2].innerHTML!= "" && blocks[2].innerHTML == blocks[4].innerHTML 
                    && blocks[2].innerHTML == blocks[6].innerHTML) {
                       text.innerHTML = `${blocks[2].innerHTML} kazandı`
                       result = true
        }
    }
}



function checkDraw() {
    if(total == 9) {
        text.innerHTML = "Berabere"
    }
    checkWin()
}




start()