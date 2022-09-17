// membuat custom element ditulis dengan class pada JS
// class mewarisi sofat dari HTMLElement
class ImageFigure extends HTMLElement {}

// untuk menggunakannya pada HTML kita harus menetapkan nama tag dengan 'define()'
customElements.define('image-figure', ImageFigure);
