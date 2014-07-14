define([], function() {

    var geocoder = new google.maps.Geocoder();

    var map = new google.maps.Map(document.getElementById("map-canvas"),
        {
            zoom: 16,
            center: new google.maps.LatLng(22.7964,79.5410),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                featureType: "poi",
                stylers: [
                    { visibility: "off" }
                ]
            }]
        });

    var address = "Martiniweg 34, 9220 Lind ob Velden";
    geocoder.geocode( { 'address': address}, function(results, status)
    {
        if (status == google.maps.GeocoderStatus.OK)
        {
            var latlng = results[0].geometry.location;
            map.setCenter({lat: latlng.lat() + 0.002, lng: latlng.lng()});
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
});

