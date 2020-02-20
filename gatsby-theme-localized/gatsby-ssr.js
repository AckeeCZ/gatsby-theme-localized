// polyfill for richtex formating react-intl
global.DOMParser = new (require('jsdom').JSDOM)().window.DOMParser;

