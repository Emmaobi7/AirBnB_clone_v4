$(document).ready(function () {
  const amenity_list = {};
  const status_uri = 'http://0.0.0.0:5001/api/v1/status/'

  function updateAmenities() {
    const amenities = Object.values(amenity_list).join(', ');
    $('div.amenities > h4').text(amenities);
  }

  $('input:checkbox').change(function () {
    const amenity_id = $(this).attr('amenity_id')
    const amenity_name = $(this).attr('amenity_name')
    if ($(this).is(':checked')) {
      amenity_list[amenity_id] = amenity_name;
    } else {
      delete amenity_list[amenity_id];
    }
    updateAmenities();
 })

  $.ajax({
    url: status_uri,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      if (data.status === "OK") {
        $('div#api_status').addClass('available');
      } else {
	$('div#api_status').removeClass('available');
      }
    }
  })
})
