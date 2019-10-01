const moduleName = "myService";
module.exports = moduleName;

angular.module(moduleName, []).service(moduleName, function() {  
    return {
        message() {
            return 'Welcome to my Todo App!';
        }

    };

})