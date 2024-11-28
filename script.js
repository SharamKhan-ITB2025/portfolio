// Toggle para cambiar entre Dark Mode y Light Mode
document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.textContent = "Toggle Dark Mode";
    toggleDarkMode.style = `
        position: fixed; bottom: 10px; right: 10px; 
        padding: 10px 15px; background: #00bcd4; 
        color: white; border: none; border-radius: 5px; 
        cursor: pointer; z-index: 1000;
    `;
    document.body.appendChild(toggleDarkMode);

    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleDarkMode.textContent = 
            document.body.classList.contains("dark-mode") 
                ? "Switch to Light Mode" 
                : "Switch to Dark Mode";
    });

    // Estilo para Dark Mode
    const darkModeStyle = `
        .dark-mode {
            background-color: #121212;
            color: #f0f0f0;
        }
        .dark-mode a {
            color: #00bcd4;
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = darkModeStyle;
    document.head.appendChild(styleSheet);
});

// Scroll Suave entre secciones
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    });
});

// Validación en tiempo real del formulario
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    nameInput.addEventListener("input", () => {
        const errorSpan = document.getElementById("nameError");
        if (nameInput.value.trim() === "") {
            errorSpan.textContent = "El nombre es obligatorio.";
        } else {
            errorSpan.textContent = "";
        }
    });

    emailInput.addEventListener("input", () => {
        const errorSpan = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            errorSpan.textContent = "Introduce un correo válido.";
        } else {
            errorSpan.textContent = "";
        }
    });

    messageInput.addEventListener("input", () => {
        const errorSpan = document.getElementById("messageError");
        if (messageInput.value.trim() === "") {
            errorSpan.textContent = "El mensaje no puede estar vacío.";
        } else {
            errorSpan.textContent = "";
        }
    });

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Gracias por tu mensaje. Te responderé pronto.");
        contactForm.reset();
    });
}

// Seguimiento de enlaces externos
const externalLinks = document.querySelectorAll('footer a');
externalLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Redirigiendo a: ${link.href}`);
    });
});
