let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Gallery Lightbox
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.style.display = 'none';
}

// Contact Form (with Subject field)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }
        
        if (!email.includes('@')) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (message.length < 15) {
            alert("Please write a more detailed message (at least 15 characters).");
            return;
        }
        
        alert(`Thank you, ${name}!\n\nYour message about "${subject}" has been received.\nWe'll reply within 24 hours.`);
        contactForm.reset();
    });
}

// Feedback Form on About Us
const ratingForm = document.getElementById('ratingForm');
if (ratingForm) {
    ratingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const suggestion = document.getElementById('suggestion').value.trim();
        
        if (!suggestion) {
            alert("Please write your suggestion.");
            return;
        }
        
        alert("Thank you for your valuable feedback! We appreciate it.");
        ratingForm.reset();
    });
}

// Add to Cart Buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const btn = e.target;
        const originalText = btn.textContent;
        
        btn.textContent = "Added ✓";
        btn.classList.add('added');
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('added');
        }, 1800);
    }
});

// Active Navigation Link
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});