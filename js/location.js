function findLocation(lat, lon){
    let locationUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`

    $.ajax({
        type: "GET",
        url: locationUrl,
        success: function (data) {
            makeLocation(data);
        },
        error: function (xhr, status, error) {
        //   console.log("cannot find location");
        },
      });
}

function makeLocation(data){
    const city = document.querySelector(".city");
    const town = document.querySelector(".town");
    const sub = document.querySelector(".sub");
    town.textContent = data.address.town;
    city.textContent = data.address.city;
    sub.textContent = data.address.suburb;
}
