/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  // Recalculate from the complete link list so a single resize can restore
  // every link that fits, including the space freed by hiding the button.
  $hlinks.children().appendTo($vlinks);
  $btn.addClass('hidden');

  var availableSpace = $nav.width();
  if ($vlinks.width() > availableSpace) {
    $btn.removeClass('hidden');
    availableSpace -= $btn.outerWidth() + 30;

    // Keep the site title visible; move only navigation links into the menu.
    while ($vlinks.width() > availableSpace && $vlinks.children().length > 1) {
      $vlinks.children().last().prependTo($hlinks);
    }
  }

  var hiddenCount = $hlinks.children().length;
  if (hiddenCount === 0) {
    $btn.addClass('hidden').removeClass('close');
    $hlinks.addClass('hidden');
  }
  $btn.attr('count', hiddenCount);
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();