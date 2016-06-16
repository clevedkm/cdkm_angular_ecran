angular.module('myApp', [])
    .controller('MyCtrl', function (){
        var pagina = this;

    //function MyCtrl($scope) {
        pagina.currentPage = 1;
        pagina.pageSize = 5;
        pagina.countrys = [];

        pagina.numberOfPages=function(){
            return Math.ceil(pagina.countrys.length/pagina.pageSize);
        }

//        for (var i=0; i<55; i++) {
//            pagina.countrys.push("Item "+i);
//        }


    //We already have a limitTo filter built-in to angular,
    //let's make a startFrom filter
    .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });
});
