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
sr.reveal('.project-item', { interval: 200, origin: 'bottom' });
sr.reveal('.certify-grid .project-item', { interval: 200, origin: 'bottom' });
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
});