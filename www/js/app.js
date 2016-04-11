angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.html'
  });

  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: 'signup.html'
  });


  $stateProvider.state('signin', {
    url: '/signin',
    templateUrl: 'signin.html'
  });
  
$stateProvider.state('forgopass', {
    url: '/forgopass',
    templateUrl: 'forgopass.html'
  });

$stateProvider.state('entered', {
    url: '/entered/:movieid',
    templateUrl: 'entered.html'
  });
  
  $stateProvider.state('addtrack', {
    url: '/addtrack',
    templateUrl: 'addtrack.html'
  });
  
   $stateProvider.state('following', {
    url: '/following',
    templateUrl: 'following.html'
  });
  
 $stateProvider.state('follower', {
    url: '/follower',
    templateUrl: 'follower.html'
  });
  
   $stateProvider.state('setting', {
    url: '/setting',
    templateUrl: 'setting.html'
  });
  
  $urlRouterProvider.otherwise('/');

  })


.controller("signupController", function($scope, $timeout, $q, $ionicPopup, $state) {


        $scope.signup = function(user) { console.log("hoi");
          if (user.username == "nadiah" || user.email =="nadiasmokhtar@gmail.com"){

            console.log("hai");
          
            $ionicPopup.alert({
              title: 'Success',
              content: 'Hello World!!!'
            }).then(function(res) {
              console.log('Test Alert Box');
            });        
    
      }

      else  $state.go('entered', {movieid: 1});
    }

          

                // $scope.url = "http://localhost/udeal/signinudeal.php";
                
                // $.get($scope.url, {
                //     postusername: $scope.user.uname,
                //     postemail: $scope.user.email,
                //     postpassword: $scope.user.pword
                // }, function(data) {
                //     //condition
                //     if (data == "1") {
                //         sessionStorage.setItem("loggedIn", 1);
                //         sessionStorage.setItem("username", $scope.user.uname);
                //         ons.notification.alert({
                //             message: 'Welcome,' + $scope.user.uname,
                //             title: 'Successfully registered!',
                //             modifier: 'material',
                //             callback: function() {
                //                 menu.setMainPage("home");
                //                 menu.setMenuPage("menu-2");
                //             }
                //         });
                //     } else if (data == "3") {
                //         ons.notification.alert({
                //             message: 'Email or username already exist!',
                //             title: 'Error',
                //             modifier: 'material'
                //         });

                //     }
                // });
            // }; //signup  
    }); //signincontroller
    
    
    // http://www.piotrbuda.me/2013/02/angularjs-directive-for-password-matching.html
    // .directive('repeatPassword', function() {
    //    return {
    //           require: "ngModel",
    //           link: function(scope, elem, attrs, ctrl) {
    //               var otherInput = elem.inheritedData("$formController")[attrs.repeatPassword];

    //               ctrl.$parsers.push(function(value) {
    //                   if(value === otherInput.$viewValue) {
    //                       ctrl.$setValidity("repeat", true);
    //                       return value;
    //                   }
    //                   ctrl.$setValidity("repeat", false);
    //               });

    //               otherInput.$parsers.push(function(value) {
    //                   ctrl.$setValidity("repeat", value === ctrl.$viewValue);
    //                   return value;
    //               });
    //           }
    //       };
    //   });

    // app.directive('lettersOnly', function() {
    //     return {
    //       replace: true,
    //       template: '<input replace="[^a-zA-Z]" with="">'
    //     };
    //   });
    
    // //login user
    // app.controller("loginController", function($scope, $http, id_store) {

    //     $scope.login = function(user) {

    //             $scope.url = "http://localhost/udeal/loginudeal.php";
    //             // console.log($scope.user.uname);
    //             $.get($scope.url, {
    //                 postusername: $scope.user.uname,
    //                 postpassword: $scope.user.pword
    //             }, function(data) {
    //                 //condition
    //                 if (data == "1") {
    //                     sessionStorage.setItem("loggedIn", 1);
    //                     sessionStorage.setItem("username", $scope.user.uname);
    //                     ons.notification.alert({
    //                         message: $scope.user.uname,
    //                         title: 'Welcome,',
    //                         modifier: 'material',
    //                         callback: function() {
    //                             menu.setMainPage("home");
    //                             menu.setMenuPage("menu-2");
    //                         }
    //                     });
    //                 }else{
                      
    //                    ons.notification.alert({
    //                          message: "Username or password doesn't exist.",
    //                          title: 'Error!',
    //                          modifier: 'material',
                           
    //                    });
                      
    //                 }
    //             });
    //         }; //login  
    // }); //logincontroller