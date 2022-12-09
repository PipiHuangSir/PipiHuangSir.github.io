(function (a, c) {
  const d = document.querySelector('html'),
    e = d.getAttribute('rem-is-max-limit') || !1,
    f = d.getAttribute('rem-max-client') || 375,
    b = a.documentElement;
  const recalc = function () {
    var a = e ? Math.min(b.clientWidth, f) : b.clientWidth;
    if (a) b.style.fontSize = a / 7.5 + 'px';
  };
  a.addEventListener &&
    (c.addEventListener('orientationchange' in c ? 'orientationchange' : 'resize', recalc, !1),
    a.addEventListener('DOMContentLoaded', recalc, !1));
})(document, window);
