# COMAFE
Projeto treiner para mim 


html

<li>
     <button id="btn-diretoria" class="btn-navegation">
        <i class="bi bi-award"></i> <span>Diretoria</span>
    </button>
</li>

 <section class="sobre_nos1" id="conini">
        <div class="main">
            <div class="contentsobre" id="consdire">
                <h2>CONSIDERAÇÕES INICIAIS</h2>
                <p class="p_ttx">A elaboração deste informativo tem o intuito de apresentar de forma clara e objetiva o
                    que a empresa tem a oferecer, os direitos, deveres e obrigações dos colaboradores e o que ela espera
                    do mesmo.
                    Preocupada com o bem-estar de seus colaboradores a TEIXEIRA TÊXTIL está constantemente desenvolvendo
                    programas nas áreas de Recursos Humanos, Qualidade, Segurança no Trabalho entre outros, visando
                    melhoria contínua, a qual somente será possível com o comprometimento e participação de todos,
                    sugerindo mudanças necessárias para o crescimento da empresa e consequentemente de todos os
                    colaboradores que acreditam no seu desenvolvimento.
                    Desta maneira contamos com sua dedicação e esperamos atender sua necessidade de obter informações
                    sobre a empresa.
                </p>
                <h3>PALAVRA DA DIRETORIA</h3>
                <p class="p_ttx">A Teixeira Têxtil é uma empresa que busca constantemente adequar-se aos padrões de
                    exigência do mercado consumidor, seja ele local ou de outras regiões do estado e do país. Optou pela
                    modernização de seus processos de trabalho, objetivando a melhoria constante dos produtos e o
                    atendimento de altíssima qualidade.
                    Deﬁniu meios que facilitam a qualiﬁcação do quadro proﬁssional entendendo que somente dessa forma
                    possibilitará, também, o crescimento paralelo de seus colaboradores A direção que seguimos exige
                    proﬁssionais dedicados que buscam aprender e crescer
                    cada vez mais. Necessitamos de pessoas que queiram contribuir sugerindo mudanças
                    que aperfeiçoem ainda mais nossos processos.
                    A preocupação de todos os colaboradores deve estar na qualidade do atendimento, na qualidade dos
                    serviços que prestamos e na imagem que construímos junto aos nossos clientes. Nossa perpetuação
                    depende da capacidade que temos de oferecer produtos e serviços cada vez melhores aos nossos
                    clientes.
                    O desaﬁo passa a ser agora também seu. A Teixeira Têxtil conta com sua disposição e conﬁança. O
                    crescimento da empresa propiciará novas oportunidades para aqueles que nela acreditam.
                    Leia com atenção todas as informações deste informativo de ética, conduta e integração de
                    colaboradores, e conheça um pouco de nossa empresa. Conﬁe no seu sucesso e participe ativamente
                    sempre que for solicitado de todas as iniciativas que a empresa difundir. Esperamos que sua estrada
                    entre nós seja longa, repleta de realizações e que você se sinta feliz com seus novos companheiros.
                </p>
            </div>
        </div>
    </section>

Javascript{

var divAtualmenteVisivel = null;

function toggleDiv(divId) {
    var div = document.getElementById(divId);

    if (div === divAtualmenteVisivel) {
        div.style.display = "none";
        divAtualmenteVisivel = null;
    } else {
        if (divAtualmenteVisivel !== null) {
            divAtualmenteVisivel.style.display = "none";
        }
        div.style.display = "flex";
        divAtualmenteVisivel = div;
    }
}

document.getElementById("btn-diretoria").addEventListener("click", function () {
    toggleDiv("conini");
});

document.getElementById("btn-qualidade").addEventListener("click", function () {
    toggleDiv("sobrenos");
});

document.getElementById("btn-sgo").addEventListener("click", function () {
    toggleDiv("qualid");
    toggleDiv("ttx_vc");
    toggleDiv("ideologia");
});

document.getElementById("btn-rh").addEventListener("click", function () {
    toggleDiv("rh");
    toggleDiv("dor");
});


document.getElementById("btn-segtra").addEventListener("click", function () {
    toggleDiv("segtra");
    toggleDiv("od");
});


document.getElementById("btn-beneficios").addEventListener("click", function () {
    toggleDiv("beneficios");
});


document.getElementById("btn-canden").addEventListener("click", function () {
    toggleDiv("canald");
});



// Repita para os outros botões...

}
