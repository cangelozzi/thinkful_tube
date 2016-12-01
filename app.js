var $ = jQuery

// set API Endpoint
var youtubeEndpointUrl = 'https://www.googleapis.com/youtube/v3/search'

// create a SUBMIT event listener and create also an Object with all the search results
$('form').submit(function (event) {
  event.preventDefault()
  var data = {
    part: 'snippet',
    q: $('.query').val(),
    key: ('AIzaSyDLqDY5d-HQyArVP02U65nsPBq1xkmJCx0'),
    type: 'video',
    maxResults: 10
  }

  // document.querySelector('.query').value = ''
  $('.query').val('')
  $.getJSON(youtubeEndpointUrl, data, displayData)
})

  // callback function
function displayData (data) {
  var html = ''
  // iterate over the results and assign them a "li" to be shown in the page
  $.each(data.items, function (i, items) {
    // console.log(items.id.videoId);
    // console.log(items.snippet.thumbnails.medium.url);
    // console.log(items.snippet.title);
    // console.log(items.snippet.description);
    html = html + '<li><h3>' +
      items.snippet.title +
      '</h3><iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        items.id.videoId + '" frameborder="0" allowfullscreen></iframe><p>' +
        items.snippet.description + '</p></li>'
  })
  // show results
  $('.results ul').html(html)
}
