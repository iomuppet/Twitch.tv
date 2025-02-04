function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var main = document.querySelector('main');  // Selecione o elemento main
    var forYouImg = document.getElementById('toggle-sidebar');

    // Alternar a sidebar aberta/fechada
    sidebar.classList.toggle('closed');

    // Alternar a imagem e adicionar uma classe para ajuste
    if (sidebar.classList.contains('closed')) {
        forYouImg.src = 'img/exit2.png'; // Imagem quando fechado
        forYouImg.classList.add('closed-sidebar-img'); // Adiciona classe para ajuste

        // Adicionar a classe para expandir o main
        main.classList.add('main-expanded');
    } else {
        forYouImg.src = 'img/exit.png'; // Imagem quando aberto
        forYouImg.classList.remove('closed-sidebar-img'); // Remove classe de ajuste

        // Remover a classe de expansão do main
        main.classList.remove('main-expanded');
    }
}
