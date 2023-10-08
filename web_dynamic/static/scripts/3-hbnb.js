$(document).ready(function () {
  const amenity_list = {};
  const place_api = 'http://0.0.0.0:5001/api/v1/places_search/'

  function updateAmenities() {
    const amenities = Object.values(amenity_list).join(', ');
    $('div.amenities > h4').text(amenities);
  }

  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      amenity_list[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenity_list[$(this).attr('data-id')];
    }
    updateAmenities();
  });

    $.get("http://localhost:5001/api/v1/status/", data => {
    if (data.status == "OK") {
      $('DIV#api_status').addClass("available");
    } else {
      $('DIV#api_status').removeClass("available")
;                                                     }
  });
  
  $.ajax({
    url: place_api,
    type: 'POST',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      $('section.places').append(data.map(place => {
        return `<article>
                  <div class="title_box">                             <h2>${place.name}</h2>                            <div class="price_by_night">${place.price_by_night}</div>                                         </div>
                  <div class="information">                           <div class="max_guest">${place.max_guest} Guests</div>                                              <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                    <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>                           </div>                                            <div class="description">                           ${place.description}                            </div>
                </article>`
     }));
    }
  });

});
