app.controller('signinController', ['$location', '$window' function($location, $window){
    var self = this;
    self.message = "Welcome to the Jurassic Park!";
    $window.location.href =$location.host+"/signin"; 

}]);