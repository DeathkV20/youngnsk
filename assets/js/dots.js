window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 7) {
      document.getElementById("dots").classList.add ("opacity")
      document.getElementById("dier").classList.add ("slided")
    } else {
      document.getElementById("dots").classList.remove ("opacity")
      document.getElementById("dier").classList.remove("slided")
    }
    prevScrollpos = currentScrollPos;
  }