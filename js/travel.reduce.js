const images = document.querySelectorAll('.gif');
const imagess = document.querySelectorAll('.static');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        imagess.forEach(image => {
            // Set to static image
            image.src = 'images/qinhuai.JPG';
        });
    } else {
        images.forEach(image => {
            // Set to GIF
            image.src = 'images/nanjing.gif';
        });
    }