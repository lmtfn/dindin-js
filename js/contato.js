//Exercício 1 - Geral
let header = document.querySelector("header");
header.style.backgroundColor = "#2E948A";


//Exercício 2 - Geral
let linkCursos = document.querySelector("#menu_opcoes nav a");
linkCursos.setAttribute("href","/cursos.html");


//Exercício 1 - Página Contato
let linkForm = document.querySelector("form");
linkForm.setAttribute("action","sucesso.html");
//document.querySelector("form").action = "sucesso.html;"


//Exercício 2 - Página Contato
let inputTelefone = document.createElement("input");
inputTelefone.setAttribute("type", "tel");
inputTelefone.setAttribute("placeholder", "telefone");
let textRef = document.querySelector("textarea");
let formPai = document.querySelector("form");
formPai.insertBefore(inputTelefone, textRef);


//Exercício 3 - Página Contato
let mensagem = document.getElementsByTagName("textarea")[0];
mensagem.style.boxSizing = "border-box";


//Exercício 4 - Página Contato
document.getElementsByTagName("button")[0].style.width = "auto";


//Exercício 5 - Página Contato
let comentarios = document.createElement("section");
comentarios.innerHTML = 
"comentários";

let divRef = document.querySelector("footer");
let sectionPai = document.querySelector("body");
sectionPai.insertBefore(comentarios, divRef);
comentarios.style.textAlign = "center";
comentarios.style.marginLeft = "20px";
