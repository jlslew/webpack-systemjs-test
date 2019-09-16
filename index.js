require('construct-style-sheets-polyfill');

SystemJS.import('./main.css').then(function (module) {
    document.adoptedStyleSheets = document.adoptedStyleSheets.concat(module.default);
    console.log('module main.css loaded');
});

SystemJS.import('./main.min.js').then(function () {
    console.log('module main.min.js loaded');
});