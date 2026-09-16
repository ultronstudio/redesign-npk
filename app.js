(() => {
  const searchToggle = document.querySelector(".search-toggle");
  const searchPanel = document.querySelector(".search-panel");

  searchToggle?.addEventListener("click", () => {
    searchPanel.hidden = !searchPanel.hidden;
    if (!searchPanel.hidden) {
      document.getElementById("siteSearch")?.focus();
    }
  });

  const toast = document.getElementById("demoToast");

  document.getElementById("workplaceForm")?.addEventListener("submit", event => {
    event.preventDefault();
    bootstrap.Toast.getOrCreateInstance(toast).show();
  });

  document.querySelector(".site-search-form")?.addEventListener("submit", event => {
    event.preventDefault();
  });
})();
