//Procurar o botão
document.querySelector("#add-time")

//Quando clicar no botao
.addEventListener('click', cloneField)
//executar uma ação
function cloneField(){
    
    //duplicar os campos
   const newFieldContainer= document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields= newFieldContainer.querySelectorAll('input')

   
    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa
        field.value=""
    })

    //colocar na página : onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

 }
    