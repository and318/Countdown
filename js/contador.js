// set the date we're counting down to
var target_date = new Date('Nov, 16, 2015, 23:30').getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById('countdown');

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600)+(24*days);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    countdown.innerHTML = '<div class="col-xs-4 col-sm-2 col-sm-offset-3 text-center"><h1>' + hours +  ' </h1>Horas</div></div><div class="col-xs-4 col-sm-2 text-center"><h1>' + minutes +  ' </h1>Minutos</div><div class="  col-xs-4 col-sm-2 text-center"><h1>' + seconds +  ' </h1><div class="title n">Segundos</span></div>';

}, 1000);
