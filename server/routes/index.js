const routes = require('fs');

module.exports = function(app){
    routes.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        let name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
    });
}