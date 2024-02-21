const todos = [
  { title: "Learn web components", notes: "Read dcumentation" },
  { title: "Learn Svelte", notes: "Read dcumentation" },
  { title: "Learn CSS animations", notes: "Read dcumentation" },
];

class TodoCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // const template = document.getElementById("card-template");
    // // console.log(template);
    // // const self = this;
    // todos.forEach((t) => {
    //   const instance = document.importNode(template.content, true);
    //   instance.querySelector(".title").innerHTML = t.title;
    //   instance.querySelector(".notes").innerHTML = t.notes;

    //   console.log(this);

    //   this.appendChild(instance);
    // });

    this.render();
  }

  render() {
    const { shadowRoot } = this;
    // console.log(shadowRoot);
    const templateNode = document.getElementById("card-template");
    if (templateNode) {
      todos.forEach((t) => {
        const instance = document.importNode(templateNode.content, true);
        instance.querySelector(".title").innerHTML = t.title;
        instance.querySelector(".notes").innerHTML = t.notes;


        shadowRoot.appendChild(instance);
      });
    } else {
      shadowRoot.innerHTML = "<p>Shadow root failed</p>";
    }
  }
}

window.customElements.define("todo-card", TodoCard);
