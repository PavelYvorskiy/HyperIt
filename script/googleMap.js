function initMap() {
  const uluru = { lat: 50.4224641, lng: 30.4644621 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
