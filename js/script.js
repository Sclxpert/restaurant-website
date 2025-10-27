window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function openOrderModal() {
    document.getElementById('orderModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openReservationModal() {
    document.getElementById('reservationModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeReservationModal() {
    document.getElementById('reservationModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const orderModal = document.getElementById('orderModal');
    const reservationModal = document.getElementById('reservationModal');
    
    if (event.target === orderModal) {
        closeOrderModal();
    }
    if (event.target === reservationModal) {
        closeReservationModal();
    }
}

document.getElementById('reservation-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
    closeReservationModal();
    this.reset();
});

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.querySelector('.mobile-menu-toggle i');
    
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.querySelector('.mobile-menu-toggle i');
    
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('fa-times');
    menuToggle.classList.add('fa-bars');
    document.body.style.overflow = 'auto';
}
