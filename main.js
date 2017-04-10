let host = document.querySelector('#My-component');
let shadow = host.createShadowRoot();
let template = document.querySelector('template');

shadow.appendChild(document.importNode(template.content, true));