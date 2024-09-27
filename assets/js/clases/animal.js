// assets/js/clases/animal.js

export class Animal {
  constructor(nombre, edad, comentarios, sonido, img) {
      this._nombre = nombre;
      this._edad = edad;
      this._comentarios = comentarios;
      this._sonido = sonido;
      this._img = img;
  }

  // Getters
  get nombre() {
      return this._nombre;
  }

  get edad() {
      return this._edad;
  }

  get comentarios() {
      return this._comentarios;
  }

  get sonido() {
      return this._sonido;
  }

  get img() {
      return this._img;
  }

  // Setters
  set comentarios(nuevoComentario) {
      this._comentarios = nuevoComentario;
  }

  reproducirSonido() {
      const player = document.getElementById('player');
      player.setAttribute('src', this.sonido);
      player.play();
  }
}
