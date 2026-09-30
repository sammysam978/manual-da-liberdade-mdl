// Mantém só uma pergunta do FAQ aberta por vez
document.querySelectorAll('details').forEach(function (item) {
  item.addEventListener('toggle', function () {
    if (!item.open) return;
    document.querySelectorAll('details').forEach(function (outro) {
      if (outro !== item) outro.open = false;
    });
  });
});
