// membuat custom element ditulis dengan class pada JS
// class mewarisi sofat dari HTMLElement
class ImageFigure extends HTMLElement {
  constructor() {
    super();
    console.log('Constructed!');
  }
  connectedCallback() {
    console.log('connected!');
  }

  disconnectedCallback() {
    console.log('disconnected!');
  }

  adoptedCallback() {
    console.log('adopted!');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute: ${name} changed!`);
  }

  // digunakan untuk mengamati perubahan nilai attribute caption
  /* kita bisa menetapkan lebih dari satu atribut yang diamati.
     dengan memisahkan nama atribut menggunakan koma. Contoh: */

  // return ['caption', 'title', 'src', ...]
  static get observedAttributes() {
    return ['caption'];
  }
}

// untuk menggunakannya pada HTML kita harus menetapkan nama tag dengan 'define()'
customElements.define('image-figure', ImageFigure);
