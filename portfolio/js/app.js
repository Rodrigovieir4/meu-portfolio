particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80, 
            "density": {
                "enable": true,
                "value_area": 2000 
            }
        },
        "color": {
            "value": "#FFD700" 
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 4, 
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 180, 
            "color": "#DAA520", 
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3, 
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" 
            },
            "onclick": {
                "enable": true, 
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": { 
                "distance": 180,
                "line_linked": {
                    "opacity": 1 
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": { 
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sr = ScrollReveal({
    distance: '60px',
    duration: 1200, 
    easing: 'ease-in-out',
    origin: 'bottom',   
    reset: false,
});


sr.reveal('.section h2', { origin: 'top', distance: '30px', delay: 200 });
sr.reveal('.section-card', { origin: 'bottom', delay: 400 }); 
sr.reveal('.profile-photo', { origin: 'bottom', delay: 400 });
sr.reveal('.skills-grid', { interval: 200, origin: 'bottom' });
sr.reveal('.project-item', { interval: 200, origin: 'bottom' });
sr.reveal('.certify-grid', { interval: 200, origin: 'bottom' });
sr.reveal('.project-item', { interval: 200, origin: 'bottom' });
sr.reveal('.social-links a', { interval: 100, origin: 'bottom', delay: 600 });

document.addEventListener('DOMContentLoaded', function() {
    const projectToggle = document.getElementById('project-toggle');
    const certifyToggle = document.getElementById('certify-toggle');
    const projectGrid = document.getElementById('project-grid');
    const certifyGrid = document.getElementById('certify-grid');

    if (projectToggle && projectGrid) {
        projectToggle.addEventListener('click', function() {
            projectGrid.classList.toggle('expanded');
            projectToggle.classList.toggle('expanded');
        });
    }

    if (certifyToggle && certifyGrid) {
        certifyToggle.addEventListener('click', function() {
            certifyGrid.classList.toggle('expanded');
            certifyToggle.classList.toggle('expanded');
        });
    }

    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        const currentLang = window.languageManager?.currentLang || 'pt';
        const translations = {
            pt: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
            en: 'Message sent successfully! I\'ll get back to you soon.',
            es: '¡Mensaje enviado con éxito! Te contactaré pronto.'
        };
        showMessage(translations[currentLang] || translations.pt, 'success');
    }

    function validateField(field, minLength = 0) {
        const value = field.value.trim();
        const isValid = value.length >= minLength;
        
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        }
        
        return isValid;
    }

    function updateFieldVisual(field, isValid) {
        if (field.value.trim() === '') {
            field.style.borderColor = 'rgba(255, 215, 0, 0.3)';
            field.style.boxShadow = 'none';
        } else if (isValid) {
            field.style.borderColor = '#4CAF50';
            field.style.boxShadow = '0 0 5px rgba(76, 175, 80, 0.3)';
        } else {
            field.style.borderColor = '#f44336';
            field.style.boxShadow = '0 0 5px rgba(244, 67, 54, 0.3)';
        }
    }

    nameInput.addEventListener('input', function() {
        const isValid = validateField(this, 2);
        updateFieldVisual(this, isValid);
    });

    emailInput.addEventListener('input', function() {
        const isValid = validateField(this);
        updateFieldVisual(this, isValid);
    });

    messageInput.addEventListener('input', function() {
        const isValid = validateField(this, 10);
        updateFieldVisual(this, isValid);
    });


    function hideLoading() {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        const currentLang = window.languageManager?.currentLang || 'pt';
        const translations = {
            pt: 'Enviar Mensagem',
            en: 'Send Message',
            es: 'Enviar Mensaje'
        };
        submitBtn.querySelector('.btn-text').textContent = translations[currentLang] || translations.pt;
    }

    function validateForm() {
        const isNameValid = validateField(nameInput, 2);
        const isEmailValid = validateField(emailInput);
        const isMessageValid = validateField(messageInput, 10);

        updateFieldVisual(nameInput, isNameValid);
        updateFieldVisual(emailInput, isEmailValid);
        updateFieldVisual(messageInput, isMessageValid);

        return isNameValid && isEmailValid && isMessageValid;
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!validateForm()) {
                const currentLang = window.languageManager?.currentLang || 'pt';
                const translations = {
                    pt: 'Por favor, preencha todos os campos corretamente.',
                    en: 'Please fill in all fields correctly.',
                    es: 'Por favor, completa todos los campos correctamente.'
                };
                
                return;
            }

            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            const currentLang = window.languageManager?.currentLang || 'pt';
            const loadingTexts = {
                pt: 'Enviando...',
                en: 'Sending...',
                es: 'Enviando...'
            };
            submitBtn.querySelector('.btn-text').textContent = loadingTexts[currentLang] || loadingTexts.pt;

            setTimeout(() => {
                this.submit();
            }, 2000);
        });
    }

    if (contactForm) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        contactForm.style.opacity = '0';
        contactForm.style.transform = 'translateY(30px)';
        contactForm.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(contactForm);
    }
});