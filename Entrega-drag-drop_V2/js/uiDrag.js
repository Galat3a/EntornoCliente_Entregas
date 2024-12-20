export const uiDrag = {
    init: (selectorContenedor, selectorElemento) => {
        document.querySelectorAll(selectorContenedor).forEach((contenedor) => {
    
            switch (contenedor.id) {
                case "contenedorO":
                    contenedor.dataset.palo = "Oros";
                    contenedor.dataset.color = "#FFFFB3";
                    break;
                case "contenedorBastos":
                    contenedor.dataset.palo = "Bastos";
                    contenedor.dataset.color = "#B3FFB3";
                    break;
                case "contenedorE":
                    contenedor.dataset.palo = "Espadas";
                    contenedor.dataset.color = "#B3D9FF";
                    break;
                case "contenedorC":
                    contenedor.dataset.palo = "Copas";
                    contenedor.dataset.color = "#FFB3B3";
                    break;
            }

            
            contenedor.addEventListener("drop", (event) => {
                event.preventDefault(); 

                const data = JSON.parse(event.dataTransfer.getData("text"));
                const draggedElement = document.getElementById(data.id);

                const paloContenedor = contenedor.dataset.palo; 
                const paloElemento = draggedElement.dataset.palo; 

              
                if (paloContenedor === paloElemento) {
                    draggedElement.style.backgroundColor = contenedor.dataset.color; 
                    draggedElement.dataset.palo = paloContenedor; 

                    console.log(`El elemento ha sido soltado en el contenedor con palo: ${contenedor.dataset.palo}`);
                    console.log(`Elemento con ID: ${draggedElement.id} tiene el palo: ${draggedElement.dataset.palo}`);

                    
                    contenedor.appendChild(draggedElement);
                    
                    draggedElement.style.zIndex = 10;
                    anime({
                        targets: draggedElement,
                        rotateY: [0, 360], 
                        opacity: [0, 1],    
                        easing: 'easeInOutCubic',
                        duration: 800,      
                        complete: function() {
                         
                            draggedElement.style.zIndex = ''; 
                        }
                    });
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
