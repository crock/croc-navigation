class CrocNavigation extends HTMLElement {
   constructor() {
      super()

      var shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.innerHTML = 
      `
      <style>
      a {
      color: red;
      text-decoration: none;
      float: left;
      }
      </style>
      <nav>
         <a class="brand-name" href="/">${this.title}</a>
      </nav>
      `
    }

   static get observedAttributes() {
      return ['links', 'title']
   }

   get links() {
      return this.getAttribute('links').replace(/\s+/g, '').split(',');
    }
    set links(newValue) {
      this.setAttribute('links', newValue);
    }

    get title() {
      return this.getAttribute('title');
    }
    set title(newValue) {
      this.setAttribute('title', newValue.trim());
    }
    
}

customElements.define('croc-navbar', CrocNavigation)