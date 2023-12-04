function editElement(element, match, replacer) {
    if (element instanceof Element) {
        const textContentArray = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);

        textContentArray.forEach(node => {
            node.nodeValue = node.nodeValue.replace(new RegExp(match, 'g'), replacer);
        });
    } else {
        console.error('Invalid element provided.');
    }
}
