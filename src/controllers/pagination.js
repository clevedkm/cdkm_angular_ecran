
angular.module('ecransBNP', [])
    .controller('ecran1_BNP_Controller', function (){
        var elementCountry = this;

        elementCountry.countrys =[
                                {name:'France',	        all: 0,	 none: 0,   custom: 0 },
                                {name:'Allemagne',	    all: 0,	 none: 0,   custom: 0 },
                                {name:'Congo',	        all: 0,	 none: 0,   custom: 0 },
                                {name:'Belgique',	    all: 0,	 none: 0,   custom: 0 },
                                {name:'Italie',	        all: 0,	 none: 0,   custom: 0 },
                                {name:'Espagne',	    all: 0,	 none: 0,   custom: 0 },
                                {name:'Pologne',	    all: 0,	 none: 0,   custom: 0 },
                                {name:'Luxembourg',	    all: 0,	 none: 0,   custom: 0 },
                                {name:'Luxembourg',	    all: 0,	 none: 0,   custom: 0 },
                                {name:'Luxembourg',	    all: 0,	 none: 0,   custom: 0 },
                        ];


       elementCountry.nomberCountry = function (){
        var count = 0;
        for(var i = 1; i <= elementCountry.countrys.length; i++){
            count = i;
        }
        return count;
        };

        elementCountry.sort = function(keyName){
            var sortKey = keyName;
            elementCountry.reverse = !elementCountry.reverse;
        };


    });