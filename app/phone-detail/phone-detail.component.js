
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',

    controller: ['$http','$routeParams',
      function PhoneDetailController($http,$routeParams) {
        var x = this;

        $http.get('phones/'+ $routeParams.phoneId + '.json').then(function(response){
        	x.phone= response.data;
        });

      }
    ]
  });
