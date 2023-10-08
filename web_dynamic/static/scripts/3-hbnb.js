



$(document).ready(function () {
  const place_api = 'http://0.0.0.0:5001/api/v1/places_search/'
  $.ajax({
    url: place_api,
    type: 'POST',
    dataType: 'json',
    contentType: 'aplication/json',
    data: '{}'
    success: function (data) {
      $('section.places').append(data.map(place => {
        return '<article>
          <div class="title_box">
            <h2>{{ place.name }}</h2>
            <div class="price_by_night">${{ place.
price_by_night }}</div>
          </div>
          <div class="information">
            <div class="max_guest">{{ place.max_gu
est }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>                                                     <div class="number_rooms">{{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>                                          <div class="number_bathrooms">{{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>                           </div>                                            <div class="user">                                  <b>Owner:</b> {{ place.user.first_name }} {{ place.user.last_name }}                              </div>                                            <div class="description">                           {{ place.description | safe }}                  </div>                                          </article>'
      }
    ))
}

