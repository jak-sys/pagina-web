Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup', (el)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.color = "gray"
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.color = "gray"
        }
    })
})

Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup', (el)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)"
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)"
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const btnRegistrarse = document.getElementById("btn-registrarse");

    btnRegistrarse.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Registro</h2>
                <form id="form-registro">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                    
                    <label for="email">Correo:</label>
                    <input type="email" id="email" name="email" required>
                    
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required>
                    
                    <button type="submit" class="btn">Enviar</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector(".close");
        closeBtn.addEventListener("click", () => modal.remove());

        const form = document.getElementById("form-registro");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("¡Registro completado con éxito!");
            modal.remove();
        });
    });
});
