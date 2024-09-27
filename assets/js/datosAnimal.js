// datosAnimal.js

let listaAnimales = [];

// Cargar datos del JSON
async function obtenerDatosAnimales() {
  try {
    const response = await fetch('./animales.json');
    const data = await response.json();
    return data.animales;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
    return [];
  }
}

// Asignar los datos a la variable listaAnimales
(async function() {
  listaAnimales = await obtenerDatosAnimales();
  console.log('Datos de animales cargados en datosAnimal.js:', listaAnimales);
})();

export { listaAnimales };
