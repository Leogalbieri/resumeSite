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

    // Atualiza links conforme idioma
    document.querySelectorAll("[data-href-pt][data-href-en]").forEach((link) => {
      link.href = lang === "pt" ? link.dataset.hrefPt : link.dataset.hrefEn;
    });

    // Atualiza o idioma do documento (SEO/acessibilidade)
    document.documentElement.lang = lang === "pt" ? "pt-br" : "en";

    // Botão mostra o PRÓXIMO idioma
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

// Remove o #hash do URL após clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => {
    // deixa o scroll acontecer primeiro
    setTimeout(() => {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }, 0);
  });
});

