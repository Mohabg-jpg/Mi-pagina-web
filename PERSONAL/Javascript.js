// Función para mostrar la sección correspondiente al botón que se ha pulsado
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');

    sections.forEach(section => {
        section.classList.remove('show'); // Elimina la clase 'show' para las animaciones
        section.style.display = 'none'; // Oculta todas las secciones
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block'; // Muestra la sección activa
        requestAnimationFrame(() => {
            activeSection.classList.add('show'); // Añade la clase 'show' para las animaciones
        });
    }
}

// Función para alternar la visibilidad de las respuestas en la sección de preguntas frecuentes
function toggleFAQ(faqItem) {
    const answer = faqItem.nextElementSibling;

    if (answer) {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block'; // Alterna entre mostrar y ocultar
        answer.classList.toggle('fade'); // Añade o quita la clase de animación
    }
}

// Función de validación de formulario
function validateForm(event) {
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        emailInput.focus(); // Enfoca el campo de email para facilitar la corrección
        event.preventDefault(); // Evita que se envíe el formulario
    }
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
    return re.test(String(email).toLowerCase()); // Retorna true o false
}

// Función para alternar entre modo claro y oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode'); // Alterna la clase 'dark-mode' en el body
    const button = document.getElementById('toggle-mode');

    // Cambia el texto del botón dependiendo del modo actual
    button.innerText = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
}

// Inicializa la aplicación mostrando la sección de bienvenida
function init() {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm); // Escucha el evento de envío del formulario
    showSection('bienvenida'); // Muestra la sección de bienvenida por defecto

    const toggleButton = document.getElementById('toggle-mode');
    toggleButton.addEventListener('click', toggleDarkMode); // Escucha el clic en el botón
}

// Llama a la función init al cargar el documento
document.addEventListener('DOMContentLoaded', init);
// Función para mostrar la sección correspondiente al botón que se ha pulsado
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');

    sections.forEach(section => {
        section.classList.remove('show'); // Elimina la clase 'show' para las animaciones
        section.style.display = 'none'; // Oculta todas las secciones
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block'; // Muestra la sección activa
        requestAnimationFrame(() => {
            activeSection.classList.add('show'); // Añade la clase 'show' para las animaciones
        });
    }
}

// Función para alternar la visibilidad de las respuestas en la sección de preguntas frecuentes
function toggleFAQ(faqItem) {
    const answer = faqItem.nextElementSibling;
    if (answer) {
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block'; // Alterna entre mostrar y ocultar
        requestAnimationFrame(() => {
            answer.classList.toggle('fade', !isVisible); // Añade o quita la clase de animación
        });
    }
}

// Función de validación de formulario
function validateForm(event) {
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        emailInput.focus(); // Enfoca el campo de email para facilitar la corrección
        event.preventDefault(); // Evita que se envíe el formulario
    }
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
    return re.test(String(email).toLowerCase()); // Retorna true o false
}

// Función para alternar entre modo claro y oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode'); // Alterna la clase 'dark-mode' en el body
    const button = document.getElementById('toggle-mode');
    button.innerText = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
}

// Inicializa la aplicación mostrando la sección de bienvenida
function init() {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm); // Escucha el evento de envío del formulario
    showSection('bienvenida'); // Muestra la sección de bienvenida por defecto

    const toggleButton = document.getElementById('toggle-mode');
    toggleButton.addEventListener('click', toggleDarkMode); // Escucha el clic en el botón

    // Evento para manejar los clics en los botones de las secciones
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            showSection(button.dataset.target); // Cambia de sección
        });
    });
}

// Llama a la función init al cargar el documento
document.addEventListener('DOMContentLoaded', init);
// Función para mostrar la sección correspondiente al botón que se ha pulsado
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');

    // Oculta todas las secciones y elimina la clase 'show'
    sections.forEach(section => {
        section.classList.remove('show'); // Elimina la clase 'show' para las animaciones
        section.style.display = 'none'; // Oculta todas las secciones
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block'; // Muestra la sección activa
        requestAnimationFrame(() => {
            activeSection.classList.add('show'); // Añade la clase 'show' para las animaciones
        });
    }
}

// Función para alternar la visibilidad de las respuestas en la sección de preguntas frecuentes
function toggleFAQ(faqItem) {
    const answer = faqItem.nextElementSibling;

    if (answer) {
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block'; // Alterna entre mostrar y ocultar
        requestAnimationFrame(() => {
            answer.classList.toggle('fade', !isVisible); // Añade o quita la clase de animación
        });
    }
}

// Función de validación de formulario
function validateForm(event) {
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        emailInput.focus(); // Enfoca el campo de email para facilitar la corrección
        event.preventDefault(); // Evita que se envíe el formulario
    }
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
    return re.test(String(email).toLowerCase()); // Retorna true o false
}

// Función para alternar entre modo claro y oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode'); // Alterna la clase 'dark-mode' en el body
    const button = document.getElementById('toggle-mode');

    // Cambia el texto del botón dependiendo del modo actual
    button.innerText = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
}

// Inicializa la aplicación mostrando la sección de bienvenida
function init() {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm); // Escucha el evento de envío del formulario
    showSection('bienvenida'); // Muestra la sección de bienvenida por defecto

    const toggleButton = document.getElementById('toggle-mode');
    toggleButton.addEventListener('click', toggleDarkMode); // Escucha el clic en el botón

    // Evento para manejar los clics en los botones de las secciones
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            showSection(button.dataset.target); // Cambia de sección
        });
    });
}

// Llama a la función init al cargar el documento
document.addEventListener('DOMContentLoaded', init);
// Function to show specific sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('show');
    });
    document.getElementById(sectionId).style.display = 'block';
    document.getElementById(sectionId).classList.add('show');
}

// Function to toggle FAQ answers
function toggleFAQ(faqItem) {
    const answer = faqItem.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Initialize by showing the welcome section
document.addEventListener('DOMContentLoaded', () => {
    showSection('bienvenida');
});
function toggleFAQ(faqItem) {
    const answer = faqItem.nextElementSibling;

    // Si la respuesta está visible, la ocultamos; de lo contrario, la mostramos
    if (faqItem.parentElement.classList.contains('active')) {
        faqItem.parentElement.classList.remove('active');
    } else {
        // Cerramos cualquier otra pregunta abierta
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Mostramos la respuesta de la pregunta seleccionada
        faqItem.parentElement.classList.add('active');
    }
}
