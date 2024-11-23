import { uiCreate } from './uiCreate.js';
import { uiDrag } from './uiDrag.js';

document.addEventListener("DOMContentLoaded", () => {
    // Crear todas las cartas en el contenedor general (contenedorGeneral)
    uiCreate.createElement(".contenedorBaraja", 12, "yellow", "Oros");  // Cartas de Oros
    uiCreate.createElement(".contenedorBaraja", 12, "green", "Bastos");  // Cartas de Bastos
    uiCreate.createElement(".contenedorBaraja", 12, "blue", "Espadas");  // Cartas de Espadas
    uiCreate.createElement(".contenedorBaraja", 12, "red", "Copas");  // Cartas de Copas

    // Inicializar la funcionalidad de arrastrar y soltar para cada contenedor de palo
    uiDrag.init(".contenedorOros", ".carta");
    uiDrag.init(".contenedorEspadas", ".carta");
    uiDrag.init(".contenedorCopas", ".carta");
    uiDrag.init(".contenedorBastos", ".carta");
});
