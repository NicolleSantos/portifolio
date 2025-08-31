document.addEventListener("DOMContentLoaded", function(){

const phoneInput = document.getElementById('telefone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {

        let valorLimpo = e.target.value.replace(/\D/g, '');
        valorLimpo = valorLimpo.substring(0, 11);

        let valorFormatado = '';
        if (valorLimpo.length > 0) {
            valorFormatado += '(' + valorLimpo.substring(0, 2);
        }
        if (valorLimpo.length >= 3) {
            valorFormatado += ') ' + valorLimpo.substring(2, 7);
        }
        if (valorLimpo.length >= 8) {
            valorFormatado += '-' + valorLimpo.substring(7, 11);
        }

        e.target.value = valorFormatado;
    });

}
});

/* Função de Hover e Active na páginas de Projetos*/
 
function aplicarHover(link) {
    link.style.backgroundColor = "white";
    link.style.color = "black";
    link.style.borderRadius = "70px";
    link.style.transform = "translateY(-5px)";
    link.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
}

function removerHover(link) {
    link.style.backgroundColor = "#f0f0f0";
    link.style.color = "black";
    link.style.borderRadius = "50px";
    link.style.transform = "none";
    link.style.boxShadow = "#959595 2px 2px 5px";
}

function aplicarActive(link) {
    link.style.backgroundColor = "#d1d1d1";
    link.style.color = "#222";
}

function removerActive(link) {
    removerHover(link); // volta ao hover normal
}

// Aplicar nos links dos projetos
document.addEventListener("DOMContentLoaded", function() {
    const projetoLinks = document.querySelectorAll('#projetos ul li a');
    projetoLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            aplicarHover(this);
        });
        link.addEventListener('mouseout', function() {
            removerHover(this);
        });
        link.addEventListener('mousedown', function() {
            aplicarActive(this);
        });
        link.addEventListener('mouseup', function() {
            removerActive(this);
        });
    });
});