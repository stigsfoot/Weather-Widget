$(document).ready(function() {
  $.simpleWeather({
    location: 'McLean, VA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h3 class="location">'+weather.city+', '+weather.region+'</h3>';
      html += '<div class="current-location"><ul>';
      html += '<h2 class="temp"> '+weather.temp+'&deg; </h2>  ';
      html += '</div>';

      html += '<div class="current-temp">';
      html += '<li class="icon"><img width="120 " src="'+weather.image+'" alt="Weather icon"></li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '</div>';

      html += '<div class="current-forecast">';
      for(var i=0;i<weather.forecast.length;i++) {
        if (i < 5) {
        html += '<li class="day">'+weather.forecast[i].day+'<br>'+weather.forecast[i].high+'/ '+weather.forecast[i].low+'</li> ';
        // html += '<li class=" range">'+weather.forecast[i].high+'/ '+weather.forecast[i].low+'</li>';
        }
      }
      html += '</div>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});