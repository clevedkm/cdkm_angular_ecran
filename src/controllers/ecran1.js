
angular.module('ecransBNP', [])
    .controller('ecran1_BNP_Controller', function (){
        var elementCountry = this;

        elementCountry.countrys =[
                                {Name:'France',	    All: 0,	 None: 0,   Custom: 0 },
                                {Name:'Allemagne',	    All: 0,	 None: 0,   Custom: 0 },
                                {Name:'Congo',	    All: 0,	 None: 0,   Custom: 0 },
                                {Name:'Belgique',	    All: 0,	 None: 0,   Custom: 0 },
                                {Name:'Italie',	    All: 0,	 None: 0,   Custom: 0 },
                                {Name:'Espagne',	    All: 0,	 None: 0,   Custom: 0 },
                                {Name:'Pologne',	    All: 0,	 None: 0,   Custom: 0 },
                                {Name:'Luxembourg',	    All: 0,	 None: 0,   Custom: 0 },
                                {Name:'Luxembourg',	    All: 0,	 None: 0,   Custom: 0 },
                                {Name:'Luxembourg',	    All: 0,	 None: 0,   Custom: 0 },
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