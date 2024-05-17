document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const icon = toggleButton.querySelector('i');
    const contactLink = document.getElementById('contact-link');
    const skillLink = document.getElementById('skill-link');
    const portfolioLink = document.getElementById('portfolio-link');

    const contactDetails = document.getElementById('contact-details');
    const skillDetails = document.getElementById('skill-details');
    const portfolioDetails = document.getElementById('portfolio-details');
    const infoSection = document.getElementById('info-section');
    const closeButtons = document.querySelectorAll('.close-btn');

    const hideAllDetails = () => {
        contactDetails.style.display = 'none';
        skillDetails.style.display = 'none';
        portfolioDetails.style.display = 'none';
    };

    const updateIcon = () => {
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    };

    // Initial icon state based on stored preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        updateIcon();
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
        updateIcon();
    });

    const showDetails = (detailsElement) => {
        hideAllDetails();
        infoSection.style.display = 'block';
        detailsElement.style.display = 'block';
    };

    contactLink.addEventListener('click', () => {
        showDetails(contactDetails);
    });

    skillLink.addEventListener('click', () => {
        showDetails(skillDetails);
    });

    portfolioLink.addEventListener('click', () => {
        showDetails(portfolioDetails);
        // Initialize Swiper
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            infoSection.style.display = 'none';
            hideAllDetails();
        });
    });
});
