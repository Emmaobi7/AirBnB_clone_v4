$(document).ready(function () {
  const amenity_list = {};

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
});
