const hbs = require('hbs');

hbs.registerHelper('eq', function(a, b) {
    return a === b;
});v