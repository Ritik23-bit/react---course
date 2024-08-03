function mainContainer(reactElelment, container){
    I/*
    const domElement = document.createElement(rectelement.type)
    domElement.innerHTML = reactElelment.children
    domElement.setAttribute('href', reactElelment.props.href)
    domElement.setAttribute('target', reactElelment.props.target)
    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElelment.typr)
   domElement.innerHTML = reactElelment.children
   for (const prop in reactElelment.props) {
    if (prop === 'children') continue 
    domElement.setAttribute(props, reactElelment.props[prop])

   }
   container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElelment, mainContainer)
