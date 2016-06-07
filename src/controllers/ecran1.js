
angular.module('ecransBNP', [])
    .controller('ecran1_BNP_Controller', function (){
        var ecran1 = this;
        ecran1.countrys =[
                                        {country:'France',	all:false,	 none:false,   custom:false },
                                        {country:'Belgium',	all:false,	 none:false,   custom:false },
                                        {country:'Germany',	all:false,	 none:false,   custom:false },
                                        {country:'Italie',	all:false,	 none:false,   custom:false },
                                        {country:'Spain',	all:false,	 none:false,   custom:false },
                                        {country:'United Kingdom',	all:false,	 none:false,   custom:false }
                        ];
    });