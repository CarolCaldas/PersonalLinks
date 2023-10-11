function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

    const img = document.querySelector("#profile img")

      if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Carolina de cabelo vermelho, anéis, piercings e colar.")
      } else {
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Foto de Carolina de cabelo vermelho, óculos, piercings e colares.")
      }
}