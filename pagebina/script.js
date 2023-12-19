document.addEventListener('DOMContentLoaded', function () {
    // Função para ajustar dinamicamente o tamanho do texto e a borda
    function adjustStyles() {
        const introText = document.querySelector('.intro-text');
        const mainHeading = introText.querySelector('h1'); // Seleciona o elemento h1 dentro de .intro-text
        const windowWidth = window.innerWidth;

        // Lógica para ajustar o tamanho do texto e a borda
        if (windowWidth < 768) {
            mainHeading.style.fontSize = '18px'; // Ajusta o tamanho do texto para telas pequenas
            introText.style.borderRadius = '15px'; // Adiciona bordas redondas para telas pequenas
        } else {
            mainHeading.style.fontSize = '24px'; // Ajusta o tamanho do texto para telas maiores
            introText.style.borderRadius = '20px'; // Adiciona bordas redondas para telas maiores
        }
    }

    // Adiciona um ouvinte de evento de redimensionamento da janela
    window.addEventListener('resize', adjustStyles);

    // Chama a função inicialmente para ajustar o tamanho do texto e a borda ao carregar a página
    adjustStyles();
});
