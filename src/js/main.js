//  ALTERNADOR DE IDIOMA

(() => {
  const btn = document.getElementById("langToggle");
  if (!btn) return;

  const STORAGE_KEY = "site_lang";
  const translatables = document.querySelectorAll("[data-en][data-pt]");

  function applyLang(lang) {
    translatables.forEach((el) => {
      el.textContent = el.dataset[lang];
    });

    // Atualiza links conforme idioma (linkedin e currículo)
    document.querySelectorAll("[data-href-pt][data-href-en]").forEach((link) => {
      link.href = lang === "pt" ? link.dataset.hrefPt : link.dataset.hrefEn;
    });

    // Atualiza o idioma do documento
    document.documentElement.lang = lang === "pt" ? "pt-br" : "en";

    // Texto do botão alterna idiomas
    btn.textContent = lang === "pt" ? "EN" : "PT";

    localStorage.setItem(STORAGE_KEY, lang);
  }

  // Idioma inicial
  const saved = localStorage.getItem(STORAGE_KEY);
  const initialLang = saved === "en" ? "en" : "pt";
  applyLang(initialLang);

  // Clique alterna
  btn.addEventListener("click", () => {
    const current = localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "pt";
    applyLang(current === "pt" ? "en" : "pt");
  });
})();



// REFRESH CERTO

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => {
    setTimeout(() => {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }, 0);
  });
});

