export default class Control {
    constructor(parent, tagName = 'div', className = '') {
        this.node = document.createElement(tagName);
        parent.append(this.node);
        this.node.classList.add(className);
    }

    delete(){
        this.node.remove();
    }
}

