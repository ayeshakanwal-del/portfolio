function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function navigateToSection(event, sectionId) {
    event.preventDefault(); // Prevent default anchor link behavior
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
    }

    toggleMenu(); // Close the menu after navigating
}
