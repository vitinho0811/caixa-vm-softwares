var produtos = [
    [1 , "Arroz - 5kg" , 32],
    [2 , "Feijao - 1kg" , 8],
    [3 , "Oleo de Soja - 900ml" , 6],
    [4 , "Cafe Moido - 500g" , 24],
    [5 , "Acucar Refinado - 1kg" , 7],
    [6 , "Pacote de Pao de Forma - 400g" , 8],
    [7 , "Sal Refinado - 1kg" , 4],
    [8 , "Leite Integral - 1L" , 5],
    [9 , "Manteiga - 500g" , 9],
    [10 , "Refrigerante(Guarana) - 2L" , 9],
    [11 , "Farofa Tradicional - 400g" , 7],
    [12 , "Pacote de Bolacha(agua e sal) - 170g" , 4],
    [13 , "Macarrao Espaguete - 500g" , 5],
    [14 , "Suco de Uva - 1L" , 7],
    [15 , "Farinha de Trigo - 1kg" , 5]
]

var linhas = [0]

const p = document.getElementsByTagName("p")
const tab = document.getElementsByTagName("table")[0]
const secs = document.getElementsByTagName("section")
const btns = document.querySelectorAll("button")
const inputs = document.querySelectorAll("input");
const tabOri = tab.getElementsByTagName("tr")[0]

var n = 0
var Total = 0
var valores = [0]

function addItem(cod,qt,n) {
    let prod = produtos[cod-1]
    let nome = prod[1]
    let valorUni = prod[2]
    let valorTot = valorUni * qt
    let list = [n, cod, nome, qt, valorUni, valorTot]
    
    let item = "<tr><td>"+list[0]+"</td><td>"+list[1]+"</td><td>"+list[2]+"</td><td>"+list[3]+"</td><td>"+list[4]+"</td><td>"+list[5]+"</td></tr>"
    tab.innerHTML = tab.innerHTML + item

    Total = Total + valorTot

    p[0].innerText = cod
    p[1].innerText = "R$ " + valorUni + ",00"
    p[2].innerText = "R$ " + valorTot + ",00"
    p[7].innerText = "R$ " + Total + ",00"

    linhas.push(n)
    valores.push(valorTot)
}

function removeItem(n){
    
    let itens = document.querySelectorAll("tr")
    let index = linhas.indexOf(parseInt(n))
    
    linhas.splice(index, 1)
    
    itens[index].remove()
    
    Total = Total - valores[index]
    p[7].innerText = "R$ " + Total + ",00"
    valores.splice(index, 1)

}

// atalhos
p[3].onclick =  function(){
    secs[0].style.display = "flex"
}

p[4].onclick =  function(){
    secs[1].style.display = "flex"
}

p[6].onclick =  function(){
    secs[2].style.display = "flex"
}
p[5].onclick =  function(){
    secs[3].style.display = "flex"
}

btns[0].onclick = function(){
    let c = 0
    inputs.forEach(item => {
        if (item.value == ""){  
            item.placeholder = "Campo Vazio!"         
        }else{
            c++
        }
    })

    if(c>=2){
        n++
        addItem(inputs[0].value,inputs[1].value,n)
        secs[0].style.display = "none"
    }
}

btns[1].onclick = function(){
    let cont = 0
    inputs.forEach(item => {
        if (item.value == ""){  
            item.placeholder = "Campo Vazio!"         
        }else{
            cont++
        }
    })

    if(cont>=1){
        removeItem(inputs[2].value)
        secs[1].style.display = "none"
    }
}

btns[2].onclick = function(){
    secs[2].style.display = "none"
    tab.innerHTML = tabOri.innerHTML
    p[0].innerText = "00"
    p[1].innerText = "R$ 00,00"
    p[2].innerText = "R$ 00,00"
    p[7].innerText = "R$ 00,00"
}

btns[3].onclick = function(){
    secs[2].style.display = "none"
}

btns[4].onclick = function(){
    secs[3].style.display = "none"
    secs[4].style.display = "flex"
    p[8].innerText = "R$ " +inputs[5].value+",00"
    p[9].innerText = "R$ " +(inputs[5].value-Total)+",00"
    secs[4].innerHTML = secs[4].innerHTML + document.querySelector(".grid-item5").innerHTML
}