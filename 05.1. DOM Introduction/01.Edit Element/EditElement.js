function editElement(element, match, replacer) {
    const content = element.textContent
    const editContent = content.replace(new RegExp(match, 'g'), replacer);
    element.textContent = editContent;

    console.log(editContent);
}
