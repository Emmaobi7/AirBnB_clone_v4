$(document).ready(function () {
  const amenity_list = {};
  const status_url = 'http://0.0.0.0:5001/api/v1/status/'

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
});
