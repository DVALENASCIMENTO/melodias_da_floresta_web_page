document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audio-player');

    if (audioPlayer) {
        audioPlayer.play();
    }
});

function showText() {
    var text = document.getElementById('project-text');
    text.style.opacity = '1';
}

function hideText() {
    var text = document.getElementById('project-text');
    text.style.opacity = '0';
}

// Espera alguns segundos e mostra o texto
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var projectText = document.querySelector('.project-text');
        projectText.style.opacity = '1';
    }, 3000); // Aguarda 3 segundos (3000 milissegundos) antes de mostrar o texto
});

    // Função para verificar se o dispositivo é móvel
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    // Função para redimensionar os iframes de PDF
    function resizePDFIframes() {
        var pdfIframes = document.querySelectorAll('#pdf-reader iframe');
        var iframeHeight = isMobileDevice() ? '250px' : '300px'; // Ajuste conforme necessário para dispositivos móveis

        for (var i = 0; i < pdfIframes.length; i++) {
            pdfIframes[i].style.height = iframeHeight;
        }
    }

    // Redimensionar os iframes quando a página for carregada
    window.addEventListener('load', resizePDFIframes);

    // Redimensionar os iframes quando a janela for redimensionada
    window.addEventListener('resize', resizePDFIframes);


