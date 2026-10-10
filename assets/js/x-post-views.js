(function () {
  "use strict";

  if (!window.fetch) return;

  function formatCount(count) {
    return count >= 1000 ? String(Math.round(count / 100) / 10) + "k" : String(count);
  }

  document.querySelectorAll("[data-x-post-api]").forEach(function (link) {
    fetch(link.getAttribute("data-x-post-api"))
      .then(function (response) {
        if (!response.ok) throw new Error("Post statistics unavailable");
        return response.json();
      })
      .then(function (data) {
        var post = data.tweet;
        if (data.code !== 200 || !post || post.id !== link.getAttribute("data-x-post-id")) return;
        if (!Number.isInteger(post.views) || post.views < 0) return;

        link.querySelector("[data-x-post-views]").textContent = formatCount(post.views);
        link.title = "Posted by Hugging Face on X — " + post.views.toLocaleString("en-US") + " views";
        link.setAttribute("aria-label", link.title);
      })
      .catch(function () {
        // Keep the verified count rendered by Jekyll when FxTwitter is unavailable.
      });
  });
})();
