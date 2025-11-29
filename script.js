// Toggle menú móvil
const menuToggle = document.getElementById("menuToggle")
const nav = document.getElementById("nav")

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active")
  })

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active")
          })
          })

          // Formulario de contacto
          const contactForm = document.getElementById("contactForm")
          if (contactForm) {
            contactForm.addEventListener("submit", (e) => {
                e.preventDefault()

                    const nombre = document.getElementById("nombre").value
                        const email = document.getElementById("email").value
                            const asunto = document.getElementById("asunto").value
                                const mensaje = document.getElementById("mensaje").value

                                    // Validar que los campos no estén vacíos
                                        if (nombre && email && asunto && mensaje) {
                                              alert(`Gracias ${nombre}, tu mensaje ha sido enviado. Nos pondremos en contacto pronto.`)
                                                    contactForm.reset()
                                                        } else {
                                                              alert("Por favor completa todos los campos")
                                                                  }
                                                                    })
                                                                    }

                                                                    // Smooth scroll para navegación
                                                                    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                                                                      anchor.addEventListener("click", function (e) {
                                                                          const href = this.getAttribute("href")
                                                                              if (href !== "#" && document.querySelector(href)) {
                                                                                    e.preventDefault()
                                                                                          document.querySelector(href).scrollIntoView({
                                                                                                  behavior: "smooth",
                                                                                                        })
                                                                                                            }
                                                                                                              })
                                                                                                              })
                                                                                                              