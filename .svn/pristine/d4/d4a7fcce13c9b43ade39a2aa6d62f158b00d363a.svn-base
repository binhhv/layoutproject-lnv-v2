
//Data
var cities = [
    {
        city : 'LOC NHAT VIET COMMERCIAL INVESMENT JOINT STOCK COMPANY',
        desc : '212 Bis Trần Hưng Đạo, Phường Nguyễn Cư Trinh, Quận 1, Tp Hồ Chí Minh',
        lat :10.762448,
        long : 106.690236
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    }
];

//Angular App Module and Controller

app.controller('contactController', function ($scope) {

    var mapOptions = {
            center: new google.maps.LatLng(10.762448,106.690236),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('id-map-company'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h5>' + marker.title + '</h5>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    createMarker(cities[0]);
   

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});