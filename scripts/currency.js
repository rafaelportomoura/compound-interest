function getCurrency(locale) {
  const currencies = {
    "en-US": "USD",
    "en-GB": "GBP",
    "ja-JP": "JPY",
    "pt-BR": "BRL",
    "fr-FR": "EUR",
    "de-DE": "EUR",
  };

  return currencies[locale] || "USD";
}

function returnMoney(
  money,
  locale = navigator.language || navigator.userLanguage
) {
  return money.toLocaleString(locale, {
    style: "currency",
    currency: getCurrency(locale),
  });
}
