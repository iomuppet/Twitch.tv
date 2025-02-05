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

let currentIndex = 0;
const videos = document.querySelectorAll('.carousel-video');
const titles = ["Título da Live 1", "Título da Live 2", "Título da Live 3"];
const categories = ["Categoria 1", "Categoria 2", "Categoria 3"];
const streamers = ["Streamer 1", "Streamer 2", "Streamer 3"];

function updateInfo() {
    document.getElementById('stream-title').textContent = titles[currentIndex];
    document.getElementById('stream-category').textContent = categories[currentIndex];
    document.getElementById('streamer-name').textContent = streamers[currentIndex];
}

function showVideo(index) {
    // Pausar todos os vídeos e ocultá-los
    videos.forEach((video, i) => {
        video.pause();
        video.style.display = 'none'; // Oculta todos os vídeos
    });

    // Exibir e reproduzir o vídeo atual
    videos[index].style.display = 'block';
    videos[index].play(); // Iniciar o vídeo selecionado
    updateInfo();
}

function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    showVideo(currentIndex);
}

function prevVideo() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    showVideo(currentIndex);
}

showVideo(currentIndex); // Inicializa o primeiro vídeo
