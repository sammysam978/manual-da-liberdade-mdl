// Mantém só uma pergunta do FAQ aberta por vez
document.querySelectorAll('details').forEach(function (item) {
  item.addEventListener('toggle', function () {
    if (!item.open) return;
    document.querySelectorAll('details').forEach(function (outro) {
      if (outro !== item) outro.open = false;
    });
  });
});

// Troque pelo link de checkout ou da página de vendas
var LINK_CHECKOUT = '#';
document.querySelectorAll('a.btn').forEach(function (btn) {
  if (LINK_CHECKOUT !== '#') btn.href = LINK_CHECKOUT;
});
