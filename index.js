const formulario = document.querySelector('form')
const input = document.querySelectorAll('input');
const span = document.querySelectorAll('span');
const mensagemDoUsuario = document.querySelector('textarea')
const emailRegex = /^\S+@\S+\.\S+$/;

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    validacaoNome();
    validacaoEmail();
    validacaoTelefone();
    validacaoMensagem();
})

function campoInvalido(index) {
    input[index].style.border = '2px solid #F52E2E';
    span[index].style.display = 'block'
}

function campoValido(index) {
    input[index].style.border = '2px solid #00C22B';
    span[index].style.display = 'none'
}

function validacaoNome(){   
    if(input[0].value.length < 3){
        campoInvalido(0)   
    }else{  
        campoValido(0)
    }              
} 

function validacaoEmail(){
    const valorEmail = input[1].value
    if(!emailRegex.test(valorEmail) || valorEmail.length === 0){             
        campoInvalido(1)    
    }else{
        campoValido(1)           
    }       
}

function validacaoTelefone(){
    const valor = input[2].value.length
    if(!isNaN(valor) && valor >= 8){
        campoValido(2)     
    }else{
        campoInvalido(2)             
    }       
}

function validacaoMensagem(){
    if(mensagemDoUsuario.value.length === 0){
        mensagemDoUsuario.style.border = '2px solid #F52E2E';
        span[3].style.display = 'block'  
    }else{  
        mensagemDoUsuario.style.border = '2px solid #00C22B';
        span[3].style.display = 'none'
    } 
}