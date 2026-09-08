/* Sticky header that gets out of the way while reading.
   Scroll down -> hide; scroll up -> reveal. The transform only has an
   effect below the mobile breakpoint (see main.css), so desktop is
   unaffected and this stays a no-op there. */
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;

  var lastY = window.scrollY || window.pageYOffset;
  var ticking = false;

  // Keep the header up near the top of the page, and ignore scroll
  // jitter smaller than this so the header doesn't flicker.
  var TOP_ZONE = 80;
  var JITTER = 6;

  function update() {
    ticking = false;

    var y = window.scrollY || window.pageYOffset;
    var maxY = document.documentElement.scrollHeight - window.innerHeight;

    // iOS rubber-band scrolling reports positions outside the document;
    // those aren't real direction changes.
    if (y < 0 || y > maxY) {
      lastY = y;
      return;
    }

    if (Math.abs(y - lastY) < JITTER) return;

    if (y > lastY && y > TOP_ZONE) {
      header.classList.add("is-hidden");
    } else if (y < lastY) {
      header.classList.remove("is-hidden");
    }

    lastY = y;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    },
    { passive: true }
  );

  // Never leave a keyboard user tabbing into a hidden header.
  header.addEventListener("focusin", function () {
    header.classList.remove("is-hidden");
  });
})();
