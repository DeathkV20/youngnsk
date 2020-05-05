window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 7) {
      document.getElementById("dots").classList.add ("opacity")
    } else {
      document.getElementById("dots").classList.remove ("opacity")
    }
    prevScrollpos = currentScrollPos;
  }