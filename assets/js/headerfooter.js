// Function to load components dynamically
function includeHTML() {
    document.querySelectorAll("[data-include]").forEach(async (element) => {
      const file = element.getAttribute("data-include");
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Error loading ${file}`);
        element.innerHTML = await response.text();
      } catch (error) {
        console.error(error);
      }
    });
  }
  
  // Load components when DOM is ready
  document.addEventListener("DOMContentLoaded", includeHTML);
  