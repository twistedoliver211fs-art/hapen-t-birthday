// ============================================
// effect.js — Vanilla JS (no jQuery)
// ============================================

(function () {
  'use strict';

  // ---------- Helpers ----------
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var delay = function (ms) { return new Promise(function (resolve) { setTimeout(resolve, ms); }); };

  function fadeOut(el, ms) {
    return new Promise(function (resolve) {
      ms = ms || 400;
      el.style.transition = 'opacity ' + ms + 'ms ease';
      el.style.opacity = '0';
      setTimeout(resolve, ms);
    });
  }

  function fadeIn(el, ms) {
    return new Promise(function (resolve) {
      ms = ms || 400;
      el.style.transition = 'opacity ' + ms + 'ms ease';
      el.style.opacity = '';
      if (el.style.display === 'none' || getComputedStyle(el).opacity === '0') {
        el.style.display = '';
      }
      var done = function () { el.removeEventListener('transitionend', done); resolve(); };
      el.addEventListener('transitionend', done);
      setTimeout(resolve, ms + 50);
    });
  }

  function stopAnim(el) {
    el.style.animation = 'none';
    el.style.webkitAnimation = 'none';
    el.style.transition = 'none';
    void el.offsetWidth;
  }

  // ---------- State ----------
  var vw = window.innerWidth / 2;
  var balloonIds = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7'];
  var loops = {};

  function updateVW() { vw = window.innerWidth / 2; }

  window.addEventListener('resize', function () {
    updateVW();
    balloonIds.forEach(function (id) { stopAnim($('#' + id)); });
    ['b11', 'b22', 'b33', 'b44', 'b55', 'b66', 'b77'].forEach(function (id) { stopAnim($('#' + id)); });
    positionWishBalloons();
  });

  // ---------- Init ----------
  window.addEventListener('load', function () {
    fadeOut($('.loading'), 200);
    fadeIn($('.container'), 200);
  });

  // ---------- Button: Turn On Lights ----------
  $('#turn_on').addEventListener('click', function () {
    ['yellow', 'red', 'blue', 'green', 'pink', 'orange'].forEach(function (color) {
      $('#bulb_' + color).classList.add('bulb-glow-' + color);
    });
    document.body.classList.add('peach');
    fadeOut(this, 600).then(function () { return delay(5000); }).then(function () { fadeIn($('#play'), 600); });
  });

  // ---------- Button: Play Music ----------
  $('#play').addEventListener('click', function () {
    var audio = $('.song').get(0);
    if (audio) { audio.play().catch(function () {}); }
    ['yellow', 'red', 'blue', 'green', 'pink', 'orange'].forEach(function (color) {
      $('#bulb_' + color).classList.add('bulb-glow-' + color + '-after');
    });
    document.body.style.backgroundColor = '#FFF';
    document.body.classList.add('peach-after');
    fadeOut(this, 600).then(function () { return delay(6000); }).then(function () { fadeIn($('#bannar_coming'), 600); });
  });

  // ---------- Button: Banner ----------
  $('#bannar_coming').addEventListener('click', function () {
    $('.bannar').classList.add('bannar-come');
    fadeOut(this, 600).then(function () { return delay(6000); }).then(function () { fadeIn($('#balloons_flying'), 600); });
  });

  // ---------- Button: Balloons Flying ----------
  $('#balloons_flying').addEventListener('click', function () {
    var border = $('.balloon-border');
    if (border) {
      stopAnim(border);
      border.style.transition = 'top 8000ms ease-in';
      border.style.top = '-500px';
      setTimeout(function () { border.style.transition = ''; }, 8000);
    }
    $$('.balloons').forEach(function (el) {
      stopAnim(el);
      if (el.id === 'b1' || el.id === 'b4' || el.id === 'b5' || el.id === 'b7') {
        el.classList.add('balloons-rotate-behaviour-one');
      } else {
        el.classList.add('balloons-rotate-behaviour-two');
      }
    });
    ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7'].forEach(function (id) { startBalloonLoop(id); });
    fadeOut(this, 600).then(function () { return delay(5000); }).then(function () { fadeIn($('#cake_fadein'), 600); });
  });

  function startBalloonLoop(id) {
    var el = $('#' + id);
    if (!el) return;
    stopAnim(el);
    var duration = 12000;
    function step() {
      var randleft = 1000 * Math.random();
      var randtop = 500 * Math.random();
      el.style.transition = 'left ' + duration + 'ms linear, bottom ' + duration + 'ms linear, transform 5s ease-in-out infinite';
      el.style.left = randleft + 'px';
      el.style.bottom = randtop + 'px';
      el.style.transform = 'rotate(0deg)';
    }
    step();
    loops[id] = setInterval(step, duration + 100);
  }

  // ---------- Button: Cake Fadein ----------
  $('#cake_fadein').addEventListener('click', function () {
    var c = $('.cake');
    c.style.display = '';
    c.style.opacity = '0';
    c.style.transition = 'opacity 600ms ease';
    void c.offsetWidth;
    c.style.opacity = '1';
    fadeOut(this, 600).then(function () { return delay(3000); }).then(function () { fadeIn($('#light_candle'), 600); });
  });

  // ---------- Button: Light Candle ----------
  $('#light_candle').addEventListener('click', function () {
    $$('.fuego').forEach(function (el) {
      el.style.display = '';
      el.style.animation = '';
      void el.offsetWidth;
      el.style.animation = 'fuego 2s infinite';
    });
    fadeOut(this, 600).then(function () { fadeIn($('#wish_message'), 600); });
  });

  // ---------- Button: Wish Message ----------
  $('#wish_message').addEventListener('click', function () {
    updateVW();
    ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7'].forEach(function (id) {
      stopAnim($('#' + id));
    });
    if ($('#b1')) $('#b1').id = 'b11';
    if ($('#b2')) $('#b2').id = 'b22';
    if ($('#b3')) $('#b3').id = 'b33';
    if ($('#b4')) $('#b4').id = 'b44';
    if ($('#b5')) $('#b5').id = 'b55';
    if ($('#b6')) $('#b6').id = 'b66';
    if ($('#b7')) $('#b7').id = 'b77';
    positionWishBalloons();
    $$('.balloons').forEach(function (el) { el.style.opacity = '0.9'; });
    $$('.balloons h2').forEach(function (h) {
      h.style.display = '';
      h.style.transition = 'opacity 3000ms ease';
      h.style.opacity = '0';
      void h.offsetWidth;
      h.style.opacity = '1';
    });
    fadeOut(this, 600).then(function () { return delay(3000); }).then(function () { fadeIn($('#story'), 600); });
  });

  function positionWishBalloons() {
    var positions = [
      { id: 'b11', left: vw - 350, top: 240 },
      { id: 'b22', left: vw - 250, top: 240 },
      { id: 'b33', left: vw - 150, top: 240 },
      { id: 'b44', left: vw - 50, top: 240 },
      { id: 'b55', left: vw + 50, top: 240 },
      { id: 'b66', left: vw + 150, top: 240 },
      { id: 'b77', left: vw + 250, top: 240 }
    ];
    positions.forEach(function (p) {
      var el = $('#' + p.id);
      if (el) {
        el.style.left = p.left + 'px';
        el.style.top = p.top + 'px';
        el.style.position = 'fixed';
        el.style.transition = 'top 500ms ease, left 500ms ease';
        void el.offsetWidth;
      }
    });
  }

  // ---------- Button: Story / Message ----------
  $('#story').addEventListener('click', function () {
    var self = this;
    fadeOut(self, 600);
    var cake = $('.cake');
    cake.style.transition = 'opacity 200ms ease';
    cake.style.opacity = '0';
    setTimeout(function () {
      cake.style.display = 'none';
      var msg = $('.message');
      msg.style.display = '';
      msg.style.opacity = '0';
      msg.style.transition = 'opacity 600ms ease';
      void msg.offsetWidth;
      msg.style.opacity = '1';
      var paragraphs = $$('.message p');
      var i = 0;
      function msgLoop() {
        if (i >= paragraphs.length) return;
        var p = paragraphs[i];
        if (p) {
          p.style.display = '';
          p.style.transition = 'opacity 600ms ease';
          p.style.opacity = '0';
          void p.offsetWidth;
          p.style.opacity = '1';
          if (i === 48) {
            setTimeout(function () {
              p.style.opacity = '0';
              p.style.transition = 'opacity 400ms ease';
              setTimeout(function () {
                cake.style.display = '';
                cake.style.opacity = '0';
                cake.style.transition = 'opacity 400ms ease';
                void cake.offsetWidth;
                cake.style.opacity = '1';
              }, 400);
            }, 800);
          }
        }
        i++;
        setTimeout(msgLoop, 1800);
      }
      setTimeout(msgLoop, 400);
    }, 600);
  });

})();
