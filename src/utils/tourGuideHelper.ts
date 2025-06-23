

  export function enableTourElements() {
    document.querySelectorAll("[data-tour-step]").forEach((el) => {
      el.classList.add("is-active");
    });
   }
