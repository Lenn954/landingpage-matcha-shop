document.addEventListener("DOMContentLoaded", function() {
    
    // Opsi untuk observer (kapan animasi dimulai)
    // threshold 0.2 artinya animasi mulai saat 20% elemen terlihat
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    // Fungsi yang dijalankan saat elemen terlihat
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class 'visible' untuk memicu CSS transition
                entry.target.classList.add('visible');
                
                // Hentikan observasi setelah elemen muncul (agar tidak animasi ulang)
                observer.unobserve(entry.target);
            }
        });
    };

    // Membuat instance Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Targetkan semua elemen yang punya class 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    console.log("Zen Animations Initialized.");
});