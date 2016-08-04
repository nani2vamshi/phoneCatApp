

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
     
      var controller = this;
      controller.order = "age";
      $http.get('phones/phones.json').success(function(response){
      		controller.phones = response;// use .slice(0,5) method to slice the data to the required output. here only first 5 phones ... (0,5)
      });
    }
  });
