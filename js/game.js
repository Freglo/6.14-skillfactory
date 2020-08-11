const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  $(".game-field").removeClass("target");
  $(".game-field").html("");
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).html(hits+1);

  // FIXME: тут надо определять при первом клике firstHitTime

  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  $(".game-field").hide();
  
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  } else {
    $(event.target).addClass("miss");
  }
}

function init() {
  round();
  $(".game-field").click(handleClick);
  $("#button-start").click(function() {
    round();
  }); 
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
