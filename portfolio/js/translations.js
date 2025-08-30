// Sistema de Tradução Profissional
const translations = {
    pt: {
        // Navegação
        nav: {
            about: "Sobre",
            skills: "Habilidades",
            projects: "Projetos",
            certifications: "Certificados",
            contact: "Contato",
            downloadCV: "Baixar CV"
        },
        
        // Hero Section
        hero: {
            greeting: "Olá, Visitante!",
            nameText: "Sou o",
            jobTitle: "&lt;Desenvolvedor Full-Stack/&gt"
        },
        
        // Seções
        sections: {
            about: "Sobre Mim",
            skills: "Minhas Habilidades",
            projects: "Meus Projetos",
            certifications: "Meus Certificados",
            contact: "Contato"
        },
        
        // Sobre Mim
        about: {
            text: "Sou <strong>Rodrigo Vieira de Sousa</strong>, desenvolvedor <span style=\"font-weight: bold; color: #FFD700;\">Full-Stack</span> apaixonado por criar soluções tecnológicas de ponta. Minha transição de <strong>atleta profissional</strong> (futebol e eSports) para a tecnologia não foi uma mudança de carreira, mas uma mudança de campo. A disciplina, o foco estratégico e a resiliência que aprendi competindo são os pilares que sustentam meu trabalho no desenvolvimento de software. Especializado em <span style=\"font-weight: bold; color: #FFD700;\">Python</span> e <span style=\"font-weight: bold; color: #FFD700;\">React</span>, eu prospero em ambientes colaborativos, transformando desafios de negócio em aplicações robustas e escaláveis. Com <span style=\"text-decoration: underline; font-weight: bold; color: #FFD700;\">proficiência profissional em inglês</span>, <span style=\"text-decoration: underline; font-weight: bold; color: #FFD700;\">espanhol básico</span> e um interesse crescente em <span style=\"font-weight: bold; color: #FFD700;\">Inteligência Artificial</span>, estou animado para colaborar em projetos inovadores e de impacto global."
        },
        
        // Habilidades
        skills: {
            languages: "Linguagens",
            frameworks: "Frameworks e Bibliotecas",
            databases: "Banco de Dados e Cloud",
            tools: "Ferramentas e Metodologias",
            methodologies: "Metodologias Ágeis",
            languages_skills: "Idiomas"
        },
        
        // Idiomas específicos
        language_names: {
            portuguese: "Português",
            english: "Inglês",
            spanish: "Espanhol"
        },
        
        // Projetos
        projects: {
            api_ecommerce: {
                title: "API E-commerce",
                description: "API RESTful desenvolvida em Java com Spring Boot, implementando funcionalidades de e-commerce como cadastro de produtos, usuários e pedidos."
            },
            portfolio: {
                title: "Portfolio Pessoal",
                description: "Portfolio desenvolvido com HTML, CSS e JavaScript, apresentando minhas habilidades e projetos de forma profissional e responsiva."
            },
            java_app: {
                title: "Sistema de Gerenciamento de tarefas",
                description: "Sistema de gerenciamento de tarefas com registro de usuários, consumo e integração de API REST, utilizando Maven para gerenciamento de dependências, e deploy com Dockerfile e Render."
            },
            seeMore: "Ver mais projetos",
            viewProject: "Ver Projeto"
        },
        
        // Certificados
        certifications: {
            english_course: { title: "Certificado de conclusão do curso de inglês", description: "Conclusão do curso PROFICIENCY, da empresa Wizard no qual estudei por 6 anos." },
            software_quality: { title: "Certificado em Gestão e qualidade de software", description: "Conclusão da UC, dentro do curso de Análise e desenvolvimento de software da Universidade São Judas Tadeu." },
            programming: { title: "Certificado em Programação de soluções computacionais", description: "Conclusão da UC, dentro do curso de Análise e desenvolvimento de software da Universidade São Judas Tadeu." },
            innovation: { title: "Certificado em Inovação, sustentabilidade e competitividade empresarial", description: "Conclusão da UC, dentro do curso de Análise e desenvolvimento de software da Universidade São Judas Tadeu." },
            computer_systems: { title: "Certificado em Sistemas computacionais e segurança", description: "Conclusão da UC, dentro do curso de Análise e desenvolvimento de software da Universidade São Judas Tadeu." },
            connectivity: { title: "Certificado em Ambientes computacionais e conectividade", description: "Conclusão da UC, dentro do curso de Análise e desenvolvimento de software da Universidade São Judas Tadeu." },
            distributed_systems: { title: "Certificado em Sistemas distribuídos e mobile", description: "Conclusão da UC, dentro do curso de Análise e desenvolvimento de software da Universidade São Judas Tadeu." },
            usability: { title: "Certificado em Usabilidade, desenvolvimento web, mobile e jogos", description: "Conclusão da UC, dentro do curso de Análise e desenvolvimento de software da Universidade São Judas Tadeu." },
            software_engineering: { title: "Certificado em Modelos, métodos e técnicas da engenharia de software", description: "Conclusão da UC, dentro do curso de Análise e desenvolvimento de software da Universidade São Judas Tadeu." },
            software_modeling: { title: "Certificado em Modelagem de software", description: "Conclusão da UC, dentro do curso de Análise e desenvolvimento de software da Universidade São Judas Tadeu." },
            python: { title: "Certificado Curso de Introdução ao Python da Rocketseat", description: "Fundamentos do Python, Conceitos de API, Métodos HTTP, Banco de dados, Flask, Autenticação com Flask-Login, Tratamento de erros e Deploy." },
            java: { title: "Certificado Minicurso de Java da Rocketseat", description: "Desenvolvimento de uma aplicação back-end em Java, Maven, SpringBoot, API Rest, Lombok, Integração com H2 Database Engine, Implementando segurança nos dados do usuário, Tratamento de Exceções e Deploy do back-end." }
        },
        
        // Contato
        contact: {
            title: "Contato",
            mainTitle: "Vamos construir algo incrível juntos?",
            subtitle: "Se você está procurando um desenvolvedor dedicado, focado em resultados e que ama resolver desafios, vamos conversar!"
        },
        
        viewCertificate: "Ver Certificado"
    },
    
    en: {
        // Navigation
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            certifications: "Certifications",
            contact: "Contact",
            downloadCV: "Download CV"
        },
        
        // Hero Section
        hero: {
            greeting: "Hi there!",
            nameText: "I'm",
            jobTitle: "&lt;Full-Stack Developer/&gt"
        },
        
        // Sections
        sections: {
            about: "About Me",
            skills: "My Skills",
            projects: "My Projects",
            certifications: "My Certifications",
            contact: "Contact"
        },
        
        // About Me
        about: {
            text: "I am <strong>Rodrigo Vieira de Sousa</strong>, a <span style=\"font-weight: bold; color: #FFD700;\">Full-Stack</span> developer passionate about creating cutting-edge technological solutions. My transition from <strong>professional athlete</strong> (soccer and eSports) to technology was not a career change, but a field change. The discipline, strategic focus, and resilience I learned competing are the pillars that support my work in software development. Specialized in <span style=\"font-weight: bold; color: #FFD700;\">Python</span> and <span style=\"font-weight: bold; color: #FFD700;\">React</span>, I thrive in collaborative environments, transforming business challenges into robust and scalable applications. With <span style=\"text-decoration: underline; font-weight: bold; color: #FFD700;\">professional proficiency in English</span>, <span style=\"text-decoration: underline; font-weight: bold; color: #FFD700;\">basic Spanish</span>, and a growing interest in <span style=\"font-weight: bold; color: #FFD700;\">Artificial Intelligence</span>, I'm excited to collaborate on innovative projects with global impact."
        },
        
        // Skills
        skills: {
            languages: "Languages",
            frameworks: "Frameworks and Libraries",
            databases: "Databases and Cloud",
            tools: "Tools and Methodologies",
            methodologies: "Agile Methodologies",
            languages_skills: "Languages"
        },
        
        // Language names
        language_names: {
            portuguese: "Portuguese",
            english: "English",
            spanish: "Spanish"
        },
        
        // Projects
        projects: {
            api_ecommerce: {
                title: "E-commerce API",
                description: "A robust RESTful API built with Java and Spring Boot, featuring product management, user authentication, and order processing capabilities."
            },
            portfolio: {
                title: "Personal Portfolio",
                description: "A professional portfolio built with HTML, CSS, and JavaScript, showcasing my skills and projects in a responsive, modern design."
            },
            java_app: {
                title: "Task Management System",
                description: "Task management system with user registration, REST API consumption and integration, using Maven for dependency management, and deployment with Dockerfile and Render."
            },
            seeMore: "View more projects",
            viewProject: "View Project"
        },
        
        // Certifications
        certifications: {
            english_course: { title: "English Course Completion Certificate", description: "Completion of the PROFICIENCY course from Wizard company, which I studied for 6 years." },
            software_quality: { title: "Certificate in Software Management and Quality", description: "Completion of the UC within the Software Analysis and Development course at Universidade São Judas Tadeu." },
            programming: { title: "Certificate in Computer Programming Solutions", description: "Completion of the UC within the Software Analysis and Development course at Universidade São Judas Tadeu." },
            innovation: { title: "Certificate in Innovation, Sustainability and Business Competitiveness", description: "Completion of the UC within the Software Analysis and Development course at Universidade São Judas Tadeu." },
            computer_systems: { title: "Certificate in Computer Systems and Security", description: "Completion of the UC within the Software Analysis and Development course at Universidade São Judas Tadeu." },
            connectivity: { title: "Certificate in Computer Environments and Connectivity", description: "Completion of the UC within the Software Analysis and Development course at Universidade São Judas Tadeu." },
            distributed_systems: { title: "Certificate in Distributed and Mobile Systems", description: "Completion of the UC within the Software Analysis and Development course at Universidade São Judas Tadeu." },
            usability: { title: "Certificate in Usability, Web, Mobile and Game Development", description: "Completion of the UC within the Software Analysis and Development course at Universidade São Judas Tadeu." },
            software_engineering: { title: "Certificate in Software Engineering Models, Methods and Techniques", description: "Completion of the UC within the Software Analysis and Development course at Universidade São Judas Tadeu." },
            software_modeling: { title: "Certificate in Software Modeling", description: "Completion of the UC within the Software Analysis and Development course at Universidade São Judas Tadeu." },
            python: { title: "Python Introduction Course Certificate from Rocketseat", description: "Python fundamentals, API concepts, HTTP methods, Database, Flask, Authentication with Flask-Login, Error handling and Deploy." },
            java: { title: "Java Mini-course Certificate from Rocketseat", description: "Development of a Java back-end application, Maven, SpringBoot, REST API, Lombok, H2 Database Engine integration, Implementing user data security, Exception handling and Back-end deployment." }
        },
        
        // Contact
        contact: {
            title: "Contact",
            mainTitle: "Ready to build something amazing?",
            subtitle: "Looking for a results-driven developer who loves tackling challenges? Let's connect and discuss your project!"
        },
        
        viewCertificate: "View Certificate"
    },
    
    es: {
        // Navegación
        nav: {
            about: "Acerca de",
            skills: "Habilidades",
            projects: "Proyectos",
            certifications: "Certificaciones",
            contact: "Contacto",
            downloadCV: "Descargar CV"
        },
        
        // Sección Hero
        hero: {
            greeting: "¡Hola!",
            nameText: "Soy",
            jobTitle: "&lt;Desarrollador Full-Stack/&gt"
        },
        
        // Secciones
        sections: {
            about: "Acerca de Mí",
            skills: "Mis Habilidades",
            projects: "Mis Proyectos",
            certifications: "Mis Certificaciones",
            contact: "Contacto"
        },
        
        // Acerca de Mí
        about: {
            text: "Soy <strong>Rodrigo Vieira de Sousa</strong>, desarrollador <span style=\"font-weight: bold; color: #FFD700;\">Full-Stack</span> apasionado por crear soluciones tecnológicas innovadoras. Mi camino desde <strong>atleta profesional</strong> (fútbol y eSports) hacia la tecnología no fue solo un cambio de carrera, sino una transformación completa de campo. La disciplina, pensamiento estratégico y resiliencia que desarrollé compitiendo ahora impulsan mi trabajo en desarrollo de software. Especializado en <span style=\"font-weight: bold; color: #FFD700;\">Python</span> y <span style=\"font-weight: bold; color: #FFD700;\">React</span>, destaco en entornos colaborativos, convirtiendo desafíos empresariales en aplicações robustas y escalables. Con <span style=\"text-decoration: underline; font-weight: bold; color: #FFD700;\">sólidos conocimientos de inglés</span>, <span style=\"text-decoration: underline; font-weight: bold; color: #FFD700;\">español básico</span> y creciente interés en <span style=\"font-weight: bold; color: #FFD700;\">IA</span>, estoy entusiasmado por trabajar en proyectos innovadores con impacto global."
        },
        
        // Habilidades
        skills: {
            languages: "Lenguajes de Programación",
            frameworks: "Frameworks y Bibliotecas",
            databases: "Bases de Datos y Cloud",
            tools: "Herramientas y Metodologías",
            methodologies: "Metodologías Ágiles",
            languages_skills: "Idiomas"
        },
        
        // Nombres de idiomas
        language_names: {
            portuguese: "Portugués",
            english: "Inglés",
            spanish: "Español"
        },
        
        // Proyectos
        projects: {
            api_ecommerce: {
                title: "API E-commerce",
                description: "Una API RESTful robusta desarrollada en Java con Spring Boot, con funcionalidades de gestión de productos, autenticación de usuarios y procesamiento de pedidos."
            },
            portfolio: {
                title: "Portfolio Personal",
                description: "Un portfolio profesional construido con HTML, CSS y JavaScript, mostrando mis habilidades y proyectos en un diseño moderno y responsivo."
            },
            java_app: {
                title: "Sistema de Gestión de Tareas",
                description: "Sistema de gestión de tareas con registro de usuarios, consumo e integración de API REST, utilizando Maven para gestión de dependencias, y despliegue con Dockerfile y Render."
            },
            seeMore: "Ver más proyectos",
            viewProject: "Ver Proyecto"
        },
        
        // Certificaciones
        certifications: {
            english_course: { title: "Certificado de Finalización del Curso de Inglés", description: "Finalización del curso PROFICIENCY de la empresa Wizard en el cual estudié durante 6 años." },
            software_quality: { title: "Certificado en Gestión y Calidad de Software", description: "Finalización de la UC dentro del curso de Análisis y Desarrollo de Software de la Universidade São Judas Tadeu." },
            programming: { title: "Certificado en Programación de Soluciones Computacionales", description: "Finalización de la UC dentro del curso de Análisis y Desarrollo de Software de la Universidade São Judas Tadeu." },
            innovation: { title: "Certificado en Innovación, Sostenibilidad y Competitividad Empresarial", description: "Finalización de la UC dentro del curso de Análisis y Desarrollo de Software de la Universidade São Judas Tadeu." },
            computer_systems: { title: "Certificado en Sistemas Computacionales y Seguridad", description: "Finalización de la UC dentro del curso de Análisis y Desarrollo de Software de la Universidade São Judas Tadeu." },
            connectivity: { title: "Certificado en Ambientes Computacionales y Conectividad", description: "Finalización de la UC dentro del curso de Análisis y Desarrollo de Software de la Universidade São Judas Tadeu." },
            distributed_systems: { title: "Certificado en Sistemas Distribuidos y Móviles", description: "Finalización de la UC dentro del curso de Análisis y Desarrollo de Software de la Universidade São Judas Tadeu." },
            usability: { title: "Certificado en Usabilidad, Desarrollo Web, Móvil y Juegos", description: "Finalización de la UC dentro del curso de Análisis y Desarrollo de Software de la Universidade São Judas Tadeu." },
            software_engineering: { title: "Certificado en Modelos, Métodos y Técnicas de Ingeniería de Software", description: "Finalización de la UC dentro del curso de Análisis y Desarrollo de Software de la Universidade São Judas Tadeu." },
            software_modeling: { title: "Certificado en Modelado de Software", description: "Finalización de la UC dentro del curso de Análisis y Desarrollo de Software de la Universidade São Judas Tadeu." },
            python: { title: "Certificado del Curso de Introducción a Python de Rocketseat", description: "Fundamentos de Python, Conceptos de API, Métodos HTTP, Base de datos, Flask, Autenticación con Flask-Login, Manejo de errores y Despliegue." },
            java: { title: "Certificado del Minicurso de Java de Rocketseat", description: "Desarrollo de una aplicación back-end en Java, Maven, SpringBoot, API REST, Lombok, Integración con H2 Database Engine, Implementando seguridad en los datos del usuario, Manejo de Excepciones y Despliegue del back-end." }
        },
        
        // Contacto
        contact: {
            title: "Contacto",
            mainTitle: "¿Listo para crear algo increíble?",
            subtitle: "¿Buscas un desarrollador orientado a resultados que ama enfrentar desafíos? Conectemos y conversemos sobre tu proyecto!"
        },
        
        viewCertificate: "Ver Certificado"
    }
};

// Classe para gerenciar idiomas
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'pt';
        this.init();
    }
    
    init() {
        this.updateLanguage(this.currentLang);
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Event listeners para os botões de idioma
        document.querySelectorAll('.dropdown-content a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // Buscar o data-lang no próprio elemento ou no link pai
                const lang = e.target.getAttribute('data-lang') || e.target.closest('a').getAttribute('data-lang');
                if (lang) {
                    this.updateLanguage(lang);
                }
            });
        });
        
        // Event listener para fechar dropdown ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-dropdown')) {
                this.closeDropdown();
            }
        });
        
        // Event listener para o botão do dropdown
        const dropdownBtn = document.querySelector('.dropdown-btn');
        if (dropdownBtn) {
            dropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown();
            });
        }
    }
    
    updateLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        // Atualiza o texto do botão
        const dropdownBtn = document.querySelector('.dropdown-btn');
        if (dropdownBtn) {
            const flagImg = dropdownBtn.querySelector('#current-flag');
            const langText = dropdownBtn.querySelector('#current-lang');
            if (flagImg) flagImg.src = this.getFlagPath(lang);
            if (langText) langText.textContent = this.getLanguageName(lang);
        }
        
        // Aplica as traduções
        this.applyTranslations(lang);
        
        // Fecha o dropdown
        this.closeDropdown();
    }
    
    getFlagPath(lang) {
        const flagPaths = { 
            pt: './assets/brazil-flag.png', 
            en: './assets/united-states-flag.png', 
            es: './assets/spain-flag.png' 
        };
        return flagPaths[lang] || './assets/brazil-flag.png';
    }
    
    getLanguageName(lang) {
        const names = { pt: 'Português', en: 'English', es: 'Español' };
        return names[lang] || 'Português';
    }
    
    applyTranslations(lang) {
        const t = translations[lang];
        
        // Navegação
        this.updateElement('#nav-about', t.nav.about);
        this.updateElement('#nav-skills', t.nav.skills);
        this.updateElement('#nav-projects', t.nav.projects);
        this.updateElement('#nav-certifications', t.nav.certifications);
        this.updateElement('#nav-contact', t.nav.contact);
        this.updateElement('#nav-downloadCV', t.nav.downloadCV);
        this.updateElement('#nav-downloadCV2', t.nav.downloadCV);
        
        // Hero Section
        this.updateElement('#greeting-text', t.hero.greeting);
        this.updateElement('#name-text', t.hero.nameText);
        this.updateElement('#job-title', t.hero.jobTitle);
        
        // Seções
        this.updateElement('#about-title', t.sections.about);
        this.updateElement('#skills-title', t.sections.skills);
        this.updateElement('#projects-title', t.sections.projects);
        this.updateElement('#certifications-title', t.sections.certifications);
        this.updateElement('#contact-title', t.sections.contact);
        
        // Sobre Mim
        this.updateElement('#about-text', t.about.text);
        
        // Habilidades
        this.updateElement('#skills-languages', t.skills.languages);
        this.updateElement('#skills-frameworks', t.skills.frameworks);
        this.updateElement('#skills-databases', t.skills.databases);
        this.updateElement('#skills-tools', t.skills.tools);
        this.updateElement('#skill-methodologies', t.skills.methodologies);
        this.updateElement('#skills-languages-skills', t.skills.languages_skills);
        
        // Nomes dos idiomas
        this.updateElement('.tag-portuguese', t.language_names.portuguese);
        this.updateElement('.tag-english', t.language_names.english);
        this.updateElement('.tag-spanish', t.language_names.spanish);
        
        // Projetos
        this.updateElement('#project-portfolio-title', t.projects.portfolio.title);
        this.updateElement('#project-portfolio-desc', t.projects.portfolio.description);
        this.updateElement('#project-api-title', t.projects.api_ecommerce.title);
        this.updateElement('#project-api-desc', t.projects.api_ecommerce.description);
        this.updateElement('#project-java-title', t.projects.java_app.title);
        this.updateElement('#project-java-desc', t.projects.java_app.description);
        this.updateElement('#more-projects-btn', t.projects.seeMore);
        
        // Atualizar links dos projetos
        const projectLinks = document.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            if (link.textContent.includes('Ver Projeto') || 
                link.textContent.includes('View Project') || 
                link.textContent.includes('Ver Proyecto')) {
                link.innerHTML = t.projects.viewProject + ' &rarr;';
            }
        });
        
        // Atualizar certificados
        this.updateCertificates(t);
        
        // Contato
        this.updateElement('#contact-title', t.contact.title);
        this.updateElement('#contact-main-title', t.contact.mainTitle);
        this.updateElement('#contact-subtitle', t.contact.subtitle);
    }
    
    // Função para atualizar certificados
    updateCertificates(t) {
        // Atualizar todos os certificados
        const certifyItems = document.querySelectorAll('.certify-item');
        
        certifyItems.forEach((item, index) => {
            const title = item.querySelector('h3');
            const description = item.querySelector('p');
            const link = item.querySelector('.project-link');
            
            if (title && description && link) {
                // Mapear certificados por ordem
                const certKeys = [
                    'english_course',
                    'software_quality',
                    'programming',
                    'innovation',
                    'computer_systems',
                    'connectivity',
                    'distributed_systems',
                    'usability',
                    'software_engineering',
                    'software_modeling',
                    'python',
                    'java'
                ];
                
                if (certKeys[index]) {
                    const cert = t.certifications[certKeys[index]];
                    if (cert) {
                        title.textContent = cert.title;
                        description.textContent = cert.description;
                        link.innerHTML = t.viewCertificate + ' &rarr;';
                    }
                }
            }
        });
    }
    
    updateElement(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = text;
        }
    }
    
    toggleDropdown() {
        const dropdown = document.querySelector('.dropdown-content');
        const arrow = document.querySelector('.arrow');
        
        if (dropdown.classList.contains('show')) {
            this.closeDropdown();
        } else {
            dropdown.style.display = 'block';
            dropdown.classList.add('show');
            if (arrow) arrow.classList.add('rotate');
        }
    }
    
    closeDropdown() {
        const dropdown = document.querySelector('.dropdown-content');
        const arrow = document.querySelector('.arrow');
        
        dropdown.style.display = 'none';
        dropdown.classList.remove('show');
        if (arrow) arrow.classList.remove('rotate');
    }
}

// Inicializa o gerenciador de idiomas quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando LanguageManager...');
    try {
        window.languageManager = new LanguageManager();
        console.log('✅ LanguageManager inicializado com sucesso');
    } catch (error) {
        console.error('❌ Erro ao inicializar LanguageManager:', error);
    }
});
