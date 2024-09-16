// script.js
document.addEventListener("scroll", function() {
    const letterL = document.getElementById("letterL");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate scroll progress as a percentage of the document height
    let progress = scrollPosition / (documentHeight - windowHeight);
    if (progress > 1) progress = 1;

    // Calculate translation and scaling values
    const scale = 1 + progress; // Scale up as you scroll

    // Move the letter "L" to the bottom-left corner
    const translateX = viewportWidth * progress;
    const translateY = viewportHeight * progress;

    // Ensure the letter "L" stays within the viewport bounds
    const maxTranslateX = viewportWidth - letterL.offsetWidth * scale;
    const maxTranslateY = viewportHeight - letterL.offsetHeight * scale;

    // Apply the transformation
    letterL.style.transform = `translate(${Math.min(translateX, maxTranslateX)}px, ${Math.min(translateY, maxTranslateY)}px) scale(${scale})`;
    letterL.style.width = `${100 * scale}px`;
    letterL.style.height = `${100 * scale}px`;
});
