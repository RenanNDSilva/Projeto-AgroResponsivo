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