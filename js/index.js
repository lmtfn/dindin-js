//Exercício 1 - Geral
let header = document.querySelector("header");
header.style.backgroundColor = "#2E948A";

//Exercício 2 - Geral
let linkCursos = document.querySelector("#menu_opcoes nav a");
linkCursos.setAttribute("href","/cursos.html");

//Exercício 1 - Home
let banner = document.getElementById("introducao");
banner.style.justifyContent = "space-around";

//Exercício 2 - Home
document.querySelector(".titulo.depoimento h3").innerHTML = "O que falam sobre nós";

//Exercício 3 - Home
document.querySelectorAll(".titulo h3")[1].innerHTML = "Mais conteúdo pra você";

//Exercício 4 - Home
let maiuscula = document.querySelectorAll(".titulo");
maiuscula.forEach(item => {
    item.style.textTransform = "uppercase";
});

//Exercício 5 - Home
let linkBlog = document.querySelector("#todos_posts");
linkBlog.setAttribute("href","/blog.html");

//Exercício 6 - Home
let divCurso = document.createElement("div");
divCurso.innerHTML = 
    '<div id="independencia">'+
        '<img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"/>' +
        '<h2>Independência Financeira</h2>' +
'        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat      nulla     ariatur.</p>' +
        '<a class="comecar_agora" href="./curso.html">começar agora</a>' +
    '</div>';

let divRef = document.querySelector("#investimentos");
let sectionPai = document.querySelector("#investimentos_poupando_independencia");
sectionPai.insertBefore(divCurso, divRef);
// divRef.insertAdjacentElement("beforebegin",divCurso);

//Exercício 1 - Página Contato
let linkForm = document.querySelector("form");
linkForm.setAttribute("action","sucesso.html");
//document.querySelector("form").action = "sucesso.html;"

//Exercício 2 - Página Contato
let inputTelefone = document.createElement("input");
inputTelefone.setAttribute("type", "number");

//Exercício 3 - Página Contato


//Exercício 4 - Página Contato


//Exercício 5 - Página Contato
