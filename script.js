
document.addEventListener('DOMContentLoaded', () => {
    // Sample gallery items
    const galleryItems = [
        { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866', category: 'weddings' },
        { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486', category: 'portraits' },
        { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865', category: 'events' },
        { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', category: 'weddings' },
        { src: 'https://images.unsplash.com/photo-1603574670812-d24560880210', category: 'portraits' },
        { src: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56', category: 'events' }
    ];

    const gallery = document.querySelector('.gallery');
    
    // Populate gallery
    function populateGallery(category = 'all') {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => item.classList.add('fade'));
        
        setTimeout(() => {
            gallery.innerHTML = '';
            galleryItems
                .filter(item => category === 'all' || item.category === category)
                .forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'gallery-item fade';
                    div.innerHTML = `<img src="${item.src}" alt="Gallery Image">`;
                    gallery.appendChild(div);
                    
                    setTimeout(() => div.classList.remove('fade'), 50);
                });
        }, 500);
    }

    // Initialize gallery
    populateGallery();

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            populateGallery(btn.dataset.category);
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Grazie per il tuo messaggio! Ti risponderò presto.');
        contactForm.reset();
    });
});
