document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".hero-button");

  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      console.log("Iniciar missão clicado");

      /*
        Depois vamos trocar isso para:
        - tela de planos
        - checkout
        - login
        - ou link do app
      */
    });
  }
});
