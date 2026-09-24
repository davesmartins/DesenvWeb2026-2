// DOM

//let campo = document.getElementById("input-tarefa");
// let teste = document.querySelector("div")
// let teste = document.querySelectorAll("div")
let campo = document.querySelector("#input-tarefa");
let msg = document.querySelector(".status-msg")
let btnAdd = document.querySelector("button")
let listaLi = document.querySelector(".todo-list")

// const func = function(){

//     }
// const func1 = ()=>{

// }
//btnAdd.addEventListener('click', func)    

btnAdd.addEventListener('click', ()=>{
    if (campo.value.trim() === ""){    
        msg.textContent = "Por favor, digite uma tarefa!"
    }else{
        msg.textContent = "salvo com sucesso!"
        //Criar um elemento li e colocar dentro da lista
        let vTask = document.createElement("li")
        let vApagar = document.createElement("span")
        vApagar.textContent = ' ⛔' 
        vApagar.style.cursor = 'pointer'
        vApagar.addEventListener('click',()=>{
            msg.textContent ="Tarefa apagada!"
            vTask.remove()
        }) 

        vTask.textContent = campo.value
        vTask.appendChild(vApagar) 
        //vTask.classList.add("fmt")       
        listaLi.appendChild(vTask)
        campo.value = ''
    }

}
 )

