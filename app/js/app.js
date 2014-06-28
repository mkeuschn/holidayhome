/*
define("HolidayHome", ["angular", "angular-resource"], function(angular) {
    var HolidayHome = angular.module("HolidayHome", ["ngResource"] );
    // you can do some more stuff here like calling app.factory()...

    alert("Angular Module");

    return HolidayHome;
});
*/

var HolidayHome = angular.module('HolidayHome', ['ngRoute']);

HolidayHome.Google = {
    initialize: function(){
        var geocoder = new google.maps.Geocoder();

        var map = new google.maps.Map(document.getElementById("map-canvas"),
            {
                zoom: 16,
                center: new google.maps.LatLng(22.7964,79.5410),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

        var address = "Martiniweg 34, 9220 Lind ob Velden";
        geocoder.geocode( { 'address': address}, function(results, status)
        {
            if (status == google.maps.GeocoderStatus.OK)
            {
                var latlng = results[0].geometry.location;
                map.setCenter({lat: latlng.k + 0.002, lng: latlng.A});
                var marker = new google.maps.Marker(
                    {
                        map: map,
                        position: results[0].geometry.location
                    });
            }
            else
            {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    }
}


$(document).ready(function() {
    HolidayHome.Google.initialize();
});