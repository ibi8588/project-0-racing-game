window.onload = function() {
  $('#saffi').animate({
    left: '+=1000px'
  });
}
$(document).ready(function() {
  let $tarmo = $('#tarmo');
  let $lhurgo = $('#lhurgo');
  let maxWidth = $(window).width();
  let countTarmo = 0;
  let countLurgo = 0;

  function winner() {
    if (countTarmo == 40) {
      $('#container').append('<img id="dinner" src="imgs/winner.jpg"></img>');
    }
    if (countLurgo == 40) {
      $('#container').append('<img id="dinner" src="imgs/winner.jpg"></img>');
    }
  }
  $(document).keypress(function(e) {
    if (e.key === "a") {
      countTarmo += 1;
      $('#tarmo').animate({
        left: '+=25px'
      });
      winner();
    } else if (e.key === "l") {
      countLurgo += 1;
      $('#lhurgo').animate({
        left: '+=25px'
      });
      winner();
    } else if (e.key === "h") {
      $('#saffi').animate({
        left: '+=25px'
      });
    }
  });
});
