{
      const welcome = () => {
            console.log("Hello world");
      }

      const toggleBackground = () => {
            const body = document.querySelector(".body");
            const button = document.querySelector(".header__button")
            
            body.classList.toggle("body--dark");
            button.interText === (button.interText === "dark mode") ? "light mode" : "dark mode";
      };

      const init = () => {
            const button = document.querySelector(".header__button")

            button.addEventListener("click", toggleBackground);

            welcome();
      };

      init();
}