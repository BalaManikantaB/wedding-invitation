(function () {
  "use strict";

  var openBtn = document.getElementById("openInvite");
  if (openBtn) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (typeof openInvitation === "function") openInvitation();
    });
  }

  var HEART_COLORS = ["#ff8fab", "#e36b8a", "#ffc2d1", "#d4577a", "#f7a1b8"];

  function shower(n) {
    var root = document.getElementById("petals");
    if (!root) return;
    for (var i = 0; i < n; i++) {
      var p = document.createElement("i");
      p.className = "petal";
      var size = 6 + Math.random() * 7;
      p.style.setProperty("--s", size.toFixed(1) + "px");
      p.style.left = Math.random() * 100 + "%";
      p.style.background = HEART_COLORS[i % HEART_COLORS.length];
      p.style.animationDuration = 3.6 + Math.random() * 3.4 + "s";
      p.style.animationDelay = Math.random() * 0.7 + "s";
      p.style.opacity = String(0.75 + Math.random() * 0.25);
      root.appendChild(p);
      (function (el) {
        setTimeout(function () { el.remove(); }, 9000);
      })(p);
    }
  }

  var magic = document.getElementById("magic");
  if (magic) magic.addEventListener("click", function () { shower(42); });

  var audio = document.getElementById("bgm");
  var musicBtn = document.getElementById("musicBtn");
  var playing = false;
  if (audio) audio.volume = 0.55;

  function tryPlay() {
    if (!audio) return;
    audio.play().then(function () {
      playing = true;
      if (musicBtn) musicBtn.classList.remove("is-off");
    }).catch(function () {});
  }

  if (musicBtn) {
    musicBtn.addEventListener("click", function () {
      if (!audio) return;
      if (playing) {
        audio.pause();
        playing = false;
        musicBtn.classList.add("is-off");
      } else {
        tryPlay();
      }
    });
  }

  /* Vinayaka cover — pointer parallax, freezes when you stop */
  var gate = document.getElementById("gate");
  var gateLayers = document.querySelectorAll("[data-gate-plx]");
  var gtx = 0, gty = 0, gx = 0, gy = 0;
  var gateRun = false;
  var gateLive = true;

  function pointerXY(e) {
    if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  }

  function aimGate(e) {
    if (!gateLive || !gate) return;
    var pt = pointerXY(e);
    if (pt.x == null) return;
    var rect = gate.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    gtx = (pt.x - rect.left) / rect.width - 0.5;
    gty = (pt.y - rect.top) / rect.height - 0.5;
    if (!gateRun) {
      gateRun = true;
      requestAnimationFrame(tickGate);
    }
  }

  function restGate() {
    gtx = 0;
    gty = 0;
    if (gateLive && !gateRun) {
      gateRun = true;
      requestAnimationFrame(tickGate);
    }
  }

  function tickGate() {
    if (!gateLive && Math.abs(gx) < 0.002 && Math.abs(gy) < 0.002) {
      gateRun = false;
      return;
    }
    gx += (gtx - gx) * 0.12;
    gy += (gty - gy) * 0.12;
    if (Math.abs(gtx - gx) < 0.002 && Math.abs(gty - gy) < 0.002) {
      gx = gtx;
      gy = gty;
      gateRun = false;
    } else {
      gateRun = true;
    }
    for (var i = 0; i < gateLayers.length; i++) {
      var el = gateLayers[i];
      var amp = parseFloat(el.getAttribute("data-gate-plx")) || 0;
      el.style.transform = "translate3d(" + (gx * amp).toFixed(2) + "px," + (gy * amp).toFixed(2) + "px,0)";
    }
    if (gateRun) requestAnimationFrame(tickGate);
  }

  function stopGatePlx() {
    gateLive = false;
    gtx = 0;
    gty = 0;
    if (!gateRun) {
      gateRun = true;
      requestAnimationFrame(tickGate);
    }
  }

  if (gate) {
    gate.addEventListener("pointermove", aimGate, { passive: true });
    gate.addEventListener("touchmove", aimGate, { passive: true });
    gate.addEventListener("pointerleave", restGate);
    gate.addEventListener("touchend", restGate);
    var grev = gate.querySelectorAll(".reveal, .reveal-fade");
    for (var gi = 0; gi < grev.length; gi++) {
      grev[gi].style.setProperty("--d", (0.15 + gi * 0.09) + "s");
    }
    requestAnimationFrame(function () {
      gate.classList.add("is-ready");
      gy = 0.38;
      gx = 0;
      gtx = 0;
      gty = 0;
      gateRun = true;
      requestAnimationFrame(tickGate);
    });
  }

  /* Text lands as each screen enters */
  var revealArmed = false;
  function markInView(node) {
    if (!node || node.classList.contains("in-view")) return;
    var bits = node.querySelectorAll(".reveal, .reveal-fade");
    for (var b = 0; b < bits.length; b++) {
      bits[b].style.setProperty("--d", (b * 0.07) + "s");
    }
    node.classList.add("in-view");
  }

  function armReveals() {
    if (revealArmed) return;
    revealArmed = true;
    var scenes = document.querySelectorAll(".shot, .events-wrap");
    if (!("IntersectionObserver" in window)) {
      for (var s = 0; s < scenes.length; s++) markInView(scenes[s]);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) continue;
        markInView(entries[i].target);
        io.unobserve(entries[i].target);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });
    for (var n = 0; n < scenes.length; n++) io.observe(scenes[n]);
    setTimeout(function () {
      for (var s = 0; s < scenes.length; s++) {
        var r = scenes[s].getBoundingClientRect();
        if (r.top < (window.innerHeight || 1) * 0.92 && r.bottom > 40) markInView(scenes[s]);
      }
    }, 900);
  }

  var originalOpen = window.openInvitation;
  window.openInvitation = function () {
    if (typeof originalOpen === "function") originalOpen();
    shower(24);
    tryPlay();
    stopGatePlx();
    requestAnimationFrame(armReveals);
  };

  var target = new Date("2026-10-14T19:00:00+05:30").getTime();
  function pad(n) { return String(n).padStart(2, "0"); }
  function tick() {
    var diff = Math.max(0, target - Date.now());
    var ids = {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000)
    };
    Object.keys(ids).forEach(function (k) {
      var el = document.getElementById(k);
      if (el) el.textContent = pad(ids[k]);
    });
  }
  tick();
  setInterval(tick, 1000);

  var slots = document.querySelectorAll("[data-photo]");
  for (var i = 0; i < slots.length; i++) {
    (function (slot) {
      var src = slot.getAttribute("data-photo");
      var img = slot.querySelector("img");
      if (!src || !img) return;
      var probe = new Image();
      probe.onload = function () {
        img.src = src;
        slot.classList.add("has-img");
      };
      probe.src = src;
    })(slots[i]);
  }

  /* Drake-style window parallax: lerp, vertical only, settles when you stop */
  var plxNodes = document.querySelectorAll("[data-plx]");
  var running = false;
  var EASE = 0.14;

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  function targets() {
    var vh = window.innerHeight || 1;
    for (var n = 0; n < plxNodes.length; n++) {
      var el = plxNodes[n];
      var scene = el.closest(".parallax-scene") || el.parentElement;
      if (!scene) continue;
      var rect = scene.getBoundingClientRect();
      var progress = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
      var amp = parseFloat(el.getAttribute("data-plx")) || 0;
      var raw = (0.5 - progress) * amp * 2;
      if (el.classList.contains("layer-back") || el.classList.contains("layer-fore")) {
        var budget = Math.max(20, rect.height * 0.12);
        raw = clamp(raw, -budget, budget);
      }
      el._target = raw;
      if (el._cur == null) el._cur = el._target;
    }
  }

  function tickPlx() {
    running = false;
    var moving = false;
    for (var n = 0; n < plxNodes.length; n++) {
      var el = plxNodes[n];
      if (el._target == null) continue;
      var cur = el._cur;
      var next = cur + (el._target - cur) * EASE;
      if (Math.abs(el._target - next) < 0.15) next = el._target;
      else moving = true;
      el._cur = next;
      el.style.transform = "translate3d(0," + next.toFixed(2) + "px,0)";
    }
    if (moving) {
      running = true;
      requestAnimationFrame(tickPlx);
    }
  }

  function onScroll() {
    targets();
    if (!running) {
      running = true;
      requestAnimationFrame(tickPlx);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  document.addEventListener("touchmove", onScroll, { passive: true });
  targets();
  tickPlx();

  /* Our Story — one polaroid per tap, never overlapping */
  var scatter = document.getElementById("scatter");
  var stage = document.getElementById("scatterStage");
  var storyOpen = document.getElementById("storyOpen");
  var scatterClose = document.getElementById("scatterClose");
  var scatterHint = document.getElementById("scatterHint");
  var photoFiles = [
    "assets/photos/story.jpg",
    "assets/photos/story-2.jpg",
    "assets/photos/story-3.jpg",
    "assets/photos/story-4.jpg"
  ];
  var shown = 0;
  var quadOrder = [];

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function resetScatter() {
    shown = 0;
    if (stage) stage.innerHTML = "";
    quadOrder = shuffle([0, 1, 2, 3]);
    if (scatterHint) scatterHint.textContent = "Tap for another photo";
  }

  function addOnePhoto() {
    if (!scatter || !stage) return;
    if (shown >= photoFiles.length) {
      if (scatterHint) scatterHint.textContent = "That’s all — tap × to close";
      return;
    }
    var quadrants = [
      { top: rand(2, 8), left: rand(2, 8), rot: rand(-11, -4) },
      { top: rand(2, 8), left: rand(52, 56), rot: rand(4, 12) },
      { top: rand(50, 56), left: rand(2, 8), rot: rand(5, 12) },
      { top: rand(50, 56), left: rand(52, 56), rot: rand(-12, -4) }
    ];
    var slot = quadrants[quadOrder[shown]];
    var src = photoFiles[shown];
    var card = document.createElement("div");
    card.className = "scatter__card";
    card.style.top = slot.top + "%";
    card.style.left = slot.left + "%";
    card.style.setProperty("--rot", slot.rot.toFixed(1) + "deg");
    var img = document.createElement("img");
    img.alt = "Photo " + (shown + 1);
    img.onerror = function () {
      img.remove();
      var ph = document.createElement("div");
      ph.className = "scatter__ph";
      ph.textContent = "Photo " + (shown);
      card.appendChild(ph);
    };
    img.src = src;
    card.appendChild(img);
    stage.appendChild(card);
    shown += 1;
    if (scatterHint) {
      scatterHint.textContent = shown >= photoFiles.length
        ? "That’s all — tap × to close"
        : "Tap for another photo";
    }
  }

  function openScatter() {
    if (!scatter) return;
    if (scatter.hidden) {
      resetScatter();
      scatter.hidden = false;
    }
    addOnePhoto();
  }

  function closeScatter() {
    if (scatter) scatter.hidden = true;
    resetScatter();
  }

  if (storyOpen) {
    storyOpen.addEventListener("click", function (e) {
      e.preventDefault();
      openScatter();
    });
  }
  if (scatterClose) scatterClose.addEventListener("click", function (e) {
    e.stopPropagation();
    closeScatter();
  });
  if (scatter) {
    scatter.addEventListener("click", function (e) {
      if (e.target === scatterClose) return;
      if (e.target.closest && e.target.closest(".scatter__card")) return;
      addOnePhoto();
    });
  }
})();
