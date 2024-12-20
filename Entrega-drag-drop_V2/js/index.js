import { uiCreate } from './uiCreate.js';
import { uiDrag } from './uiDrag.js';

document.addEventListener("DOMContentLoaded", () => {
    // Crear todas las cartas en el contenedor general (contenedorGeneral)
    uiCreate.createElement(".contenedorBaraja", 12, "#FFFFB3", "Oros");  // Cartas de Oros
    uiCreate.createElement(".contenedorBaraja", 12, "#B3FFB3", "Bastos");  // Cartas de Bastos
    uiCreate.createElement(".contenedorBaraja", 12, "#B3D9FF", "Espadas");  // Cartas de Espadas
    uiCreate.createElement(".contenedorBaraja", 12, "#FFB3B3", "Copas");  // Cartas de Copas

    // Inicializar la funcionalidad de arrastrar y soltar para cada contenedor de palo
    uiDrag.init(".contenedorOros", ".carta");
    uiDrag.init(".contenedorEspadas", ".carta");
    uiDrag.init(".contenedorCopas", ".carta");
    uiDrag.init(".contenedorBastos", ".carta");
});
