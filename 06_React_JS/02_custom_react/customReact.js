function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://react.dev/",
    target: "_blank",
  },
  children: "click me to visit react.org",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
