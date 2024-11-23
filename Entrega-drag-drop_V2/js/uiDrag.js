export const uiDrag = {
    init: (selectorContenedor, selectorElemento) => {
        document.querySelectorAll(selectorContenedor).forEach((contenedor) => {
            // Establecer datos del contenedor (palo y color)
            switch (contenedor.id) {
                case "contenedorO":
                    contenedor.dataset.palo = "Oros";
                    contenedor.dataset.color = "yellow";
                    break;
                case "contenedorBastos":
                    contenedor.dataset.palo = "Bastos";
                    contenedor.dataset.color = "green";
                    break;
                case "contenedorE":
                    contenedor.dataset.palo = "Espadas";
                    contenedor.dataset.color = "blue";
                    break;
                case "contenedorC":
                    contenedor.dataset.palo = "Copas";
                    contenedor.dataset.color = "red";
                    break;
            }

            // Evento para manejar el "drop" (cuando se suelta la carta)
            contenedor.addEventListener("drop", (event) => {
                event.preventDefault(); // Prevenir la acción predeterminada

                const data = JSON.parse(event.dataTransfer.getData("text"));
                const draggedElement = document.getElementById(data.id);

                const paloContenedor = contenedor.dataset.palo; // Palo del contenedor
                const paloElemento = draggedElement.dataset.palo; // Palo del elemento arrastrado

                // Verificar si el palo del contenedor coincide con el palo de la carta
                if (paloContenedor === paloElemento) {
                    draggedElement.style.backgroundColor = contenedor.dataset.color; // Cambiar color de la carta al del contenedor
                    draggedElement.dataset.palo = paloContenedor; // Actualizar el palo de la carta

                    console.log(`El elemento ha sido soltado en el contenedor con palo: ${contenedor.dataset.palo}`);
                    console.log(`Elemento con ID: ${draggedElement.id} tiene el palo: ${draggedElement.dataset.palo}`);

                    // Colocar el elemento arrastrado dentro del contenedor
                    contenedor.appendChild(draggedElement);
                } else {
                    // Si el palo no coincide, devolver el elemento al contenedor original
                    const contenedorGeneral = document.getElementById("contenedorGeneral");
                    contenedorGeneral.appendChild(draggedElement);
                    console.log(`El elemento no puede ser soltado en el contenedor con palo: ${contenedor.dataset.palo}`);
                }
            });

            // Permitir el evento "dragover" para habilitar el "drop"
            contenedor.addEventListener("dragover", (event) => {
                event.preventDefault(); // Necesario para permitir el "drop"
            });
        });

        // Hacer los elementos arrastrables
        document.querySelectorAll(selectorElemento).forEach((item) => {
            item.setAttribute("draggable", true); // Hacer que los elementos sean arrastrables
            item.addEventListener("dragstart", (event) => {
                // Guardar información del elemento arrastrado
                const sendData = {
                    id: event.target.id,  // Enviar el ID del elemento arrastrado
                    color: event.target.style.backgroundColor,  // Guardar el color del elemento arrastrado
                    palo: event.target.dataset.palo  // Guardar el palo del elemento arrastrado
                };
                event.dataTransfer.setData("text", JSON.stringify(sendData)); // Pasar los datos de la carta al evento
            });
        });
    }
};
