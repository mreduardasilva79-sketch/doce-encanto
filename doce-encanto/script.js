var WA = "5500000000000";
function wa(t) {
  return "https://wa.me/" + WA + "?text=" + encodeURIComponent(t);
}
var P = [
  ["Bolo de pote", "Sabores: ninho com morango, chocolate, cenoura", "R$ 12"],
  [
    "Brigadeiro gourmet (cento)",
    "Tradicional, beijinho, churros e pistache",
    "R$ 120",
  ],
  [
    "Bolo de aniversário (1 kg)",
    "Massa e recheio à escolha, decoração simples",
    "a partir de R$ 95",
  ],
  ["Torta doce", "Limão, banoffee ou chocolate (8 fatias)", "R$ 78"],
  ["Caixa presente", "Seleção de doces para datas especiais", "R$ 55"],
];
var L = document.getElementById("lista");
P.forEach(function (x) {
  var d = document.createElement("div");
  d.className = "item";
  d.innerHTML =
    "<b>" +
    x[0] +
    "</b><span class='d'>" +
    x[1] +
    "</span><span class='p'>" +
    x[2] +
    "</span>";
  L.appendChild(d);
});
var bg = document.getElementById("bg"),
  mn = document.getElementById("mn");
bg.onclick = function () {
  var o = mn.classList.toggle("open");
  bg.setAttribute("aria-expanded", o);
};
mn.querySelectorAll("a").forEach(function (a) {
  a.onclick = function () {
    mn.classList.remove("open");
  };
});
