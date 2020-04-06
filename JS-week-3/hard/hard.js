var personInfo = (function (personalData) {
    var pii = {
        name: 'John Doe',
        ssn: '12-3456-78'
    }
    return public = {
        getName: function getName() {
            return pii.name; 
        }
    };

})();
console.log(personInfo.getName());












