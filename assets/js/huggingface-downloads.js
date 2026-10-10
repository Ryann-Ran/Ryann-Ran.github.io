(function () {
  "use strict";

  if (!window.fetch) return;

  function formatCount(count) {
    return count >= 1000 ? String(Math.round(count / 100) / 10) + "k" : String(count);
  }

  document.querySelectorAll("[data-huggingface-download-api]").forEach(function (link) {
    fetch(link.getAttribute("data-huggingface-download-api"))
      .then(function (response) {
        if (!response.ok) throw new Error("Download statistics unavailable");
        return response.json();
      })
      .then(function (data) {
        var total = data.downloadsAllTime;
        if (!Number.isInteger(total) || total < 0) return;

        link.querySelector("[data-huggingface-download-count]").textContent = formatCount(total);
        link.title = link.getAttribute("data-download-label") + " — " +
          total.toLocaleString("en-US") + " all-time downloads on Hugging Face";
      })
      .catch(function () {
        // Keep the verified count rendered by Jekyll when the Hub is unavailable.
      });
  });
})();
