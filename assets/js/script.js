$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 180;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#cta-guardian', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#contact-description', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const modal = document.getElementById("alertModal");
    const okButton = document.getElementById("okButton");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Impede o envio padrão do formulário

        // Exibe o modal de alerta
        modal.style.display = "block";
    });

    // Fecha o modal quando o usuário clica no botão OK
    okButton.addEventListener("click", function() {
        modal.style.display = "none";
        // Limpa os campos do formulário
        form.reset();
    });

    // Fecha o modal quando o usuário clica fora do modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

const estados = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
    "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
    "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
    "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
    "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

document.addEventListener("DOMContentLoaded", function() {
    const estadoInput = document.getElementById("estado");
    const autocompleteList = document.getElementById("autocomplete-list");
    const submitRow = document.getElementById("submitRow");

    if (!estadoInput || !autocompleteList || !submitRow) {
        console.error("Um ou mais elementos não foram encontrados no DOM");
        return; // Saia da função se os elementos não forem encontrados
    }

    estadoInput.addEventListener("input", function() {
        console.log("Input triggered"); // Verifique se este log aparece
        const inputText = this.value.toLowerCase();
        let matches = estados.filter(estado => estado.toLowerCase().startsWith(inputText));

        if (inputText === "") {
            matches = [];
        }

        showAutocomplete(matches);
    });

    function showAutocomplete(matches) {
        if (matches.length === 0) {
            autocompleteList.innerHTML = "";
            return;
        }

        const autocompleteItems = matches.map(match => `<div>${match}</div>`).join("");
        autocompleteList.innerHTML = autocompleteItems;

        autocompleteList.querySelectorAll("div").forEach(item => {
            item.addEventListener("click", function() {
                estadoInput.value = this.textContent;
                autocompleteList.innerHTML = "";
            });
        });
    }

    // Fechar a lista de autocompletar quando clicar fora dela
    document.addEventListener("click", function(event) {
        if (!event.target.matches("#estado")) {
            autocompleteList.innerHTML = "";
        }
    });

    estadoInput.addEventListener("focus", function() {
        submitRow.style.display = "none"; // Oculta a linha do botão de envio
    });

    estadoInput.addEventListener("blur", function() {
        submitRow.style.display = "block"; // Exibe a linha do botão de envio
    });
});
