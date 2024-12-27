let images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Añade las rutas de tus imágenes aquí
let currentIndex = 0;

function showImage(index) {
    const galleryImage = document.getElementById('galleryImage');
    galleryImage.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

function addGifBackground() {
    const gifInput = document.getElementById('gifInput');
    const file = gifInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
            document.body.style.backgroundSize = 'cover';
        };
        reader.readAsDataURL(file);
    }
}

