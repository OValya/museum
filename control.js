export default class Control {
    constructor(parent, tagName = 'div', className = '', content = '') {
        this.node = document.createElement(tagName);
        this.node.classList.add(className);
    }

    delete(){
        this.node.remove();
    }
}

