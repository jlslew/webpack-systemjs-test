require('construct-style-sheets-polyfill');

System.import('./main.css').then(function (module) {
    document.adoptedStyleSheets = document.adoptedStyleSheets.concat(module.default);
    console.log('module main.css loaded');
});

System.import('./main.min.js').then(function () {
    console.log('module main.min.js loaded');
});