var classApp = angular.module('weatherApp',[]);


classApp.controller('weatherCtrl', function($scope, $http){

  var vm = $scope;

  vm.channelInfo = {
    heading:"Open Weather API",
  };

  $http.get("http://ip-api.com/json").success(function(data){

    vm.lat=data.lat;
    vm.lon=data.lon;


    var apiKey= "4fb324784e3010a579a9e4417f2132f5";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+vm.lat + "&lon="+vm.lon+ "&appid=" +apiKey;
    $http.get(openWeatherURL).success(function(data){

      vm.description = data.weather[0].description;
      vm.speed = (2.237*data.wind.speed).toFixed(1) + " mph";
      vm.name = data.name;
      vm.temp = data.main.temp;
      vm.fTemp = (vm.temp*(9/5)-459.67).toFixed(1) + " °F";
      vm.cTemp = (vm.temp-273).toFixed(1) + " (C)";
      // vm.f5 = data.forecast5;
      //vm.Time =  data.dtformat("ddd, MMM D, YYYY");
      //vm.icon = "http://openweathermap.org/img/w/"+ data.weather[0].icon ".png";

      switch(vm.description){
        case "clear sky": {
          vm.weatherBackground = {
            "background": "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)",
            "background-size": "contain"
          };
          break;
        }

        case "broken clouds": {
          vm.weatherBackground = {
            "background": "linear-gradient(to right, #076585, #fff)",
            "background-size": "cover"
          };
          break;
        }

        case "few clouds": {
          vm.weatherBackground = {
            "background": "linear-gradient(to right, #076585, #fff)",
            "background-size": "cover"
          };
          break;
        }

        case "mist": {
          vm.weatherBackground = {
            "background": "linear-gradient(to right, #83a4d4, #b6fbff)",
            "background-size": "cover"
          };
          break;
        }

        case "rain": {
          vm.weatherBackground = {
            "background": "linear-gradient(to right, #83a4d4, #b6fbff)",
            "background-size": "cover"
          };
          break;
        }

        case "scattered clouds": {
          vm.weatherBackground = {
            "background": "linear-gradient(to right, #076585, #fff)",
            "background-size": "cover"
          };
          break;
        }

        case "shower rain": {
          vm.weatherBackground = {
            "background": "linear-gradient(to right, #83a4d4, #b6fbff)",
            "background-size": "cover"
          };
          break;
        }

        case "snow": {
          vm.weatherBackground = {
            "background": "linear-gradient(to right, #e6dada, #274046)",
            "background-size": "cover"
          };
          break;
        }

        case "thunderstorm": {
          vm.weatherBackground = {
            "background": "linear-gradient(to right, #383D87, #5F4E96)",
            "background-size": "cover"
          };
          break;
        }
      }
      /*icons


            switch(vm.description){
              case "clear sky": {
                vm.weatherIcon = {
                  "background": "url('sun.png')",
                  "background-size": "cover"
                };
                break;
              }

              case "broken clouds": {
              vm.weatherIcon = {
                "background": "url('cloud.png')",
                "background-size": "cover"
                };
                break;
              }

              case "few clouds": {
                vm.weatherIcon = {
                  "background": "url('cloud.png')",
                  "background-size": "cover"
                };
                break;
              }

              case "mist": {
                vm.weatherIcon = {
                  "background": "url('raining.png')",
                  "background-size": "cover"
                };
                break;
              }

              case "rain": {
                vm.weatherIcon = {
                  "background": "url('raining.png')",
                  "background-size": "cover"
                };
                break;
              }

              case "scattered clouds": {
                vm.weatherIcon = {
                  "background": "url('cloud.png')",
                  "background-size": "cover"
                };
                break;
              }

              case "shower rain": {
                vm.weatherIcon = {
                  "background": "url('rain.png')",
                  "background-size": "cover"
                };
                break;
              }

              case "snow": {
                vm.weatherIcon = {
                  "background": "url('rain.png')",
                  "background-size": "cover"
                };
                break;
              }

              case "thunderstorm": {
                vm.weatherIcon = {
                  "background": "url('storm.png')",
                  "background-size": "cover"
                };
                break;
              }
            }*/



    });
  });
});
