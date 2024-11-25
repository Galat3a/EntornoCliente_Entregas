export const uiCreate = {
    createElement: (contenedorSelector, cantidadElementos, color, palo) => {
        const contenedor = document.querySelector(contenedorSelector);

        if (contenedor) {
            for (let i = 1; i <= cantidadElementos; i++) {
                const carta = document.createElement("div");
                carta.classList.add("carta");
                carta.style.backgroundColor = color; 
                carta.setAttribute("draggable", true); 

                // Asignar propiedades
                carta.id = `${palo}-${i}`;
                carta.dataset.palo = palo;
                carta.dataset.color = color;

                // Crear los textos dentro de la carta
                const div1 = document.createElement("div");
                const div2 = document.createElement("div");
                const div3 = document.createElement("div");

                div1.textContent = i; 
                div2.textContent = palo; 
                div3.textContent = i;

                carta.appendChild(div1);
                carta.appendChild(div2);
                carta.appendChild(div3);

                // Añadir la carta al contenedor
                contenedor.appendChild(carta);

                // Log para verificar creación
                console.log(`Carta creada: ${carta.id}`);
            }
        }
    }
};
