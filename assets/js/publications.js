(function () {
  "use strict";

  var browser = document.querySelector("[data-publication-browser]");
  if (!browser) return;

  var primaryFilterButtons = Array.prototype.slice.call(
    browser.querySelectorAll("[data-publication-primary-filter]")
  );
  var secondaryFilterButtons = Array.prototype.slice.call(
    browser.querySelectorAll("[data-publication-secondary-filter]")
  );
  var secondaryFilterGroups = Array.prototype.slice.call(
    browser.querySelectorAll("[data-publication-secondary-group]")
  );
  var primaryTagShortcuts = Array.prototype.slice.call(
    browser.querySelectorAll("[data-publication-primary-shortcut]")
  );
  var secondaryTagShortcuts = Array.prototype.slice.call(
    browser.querySelectorAll("[data-publication-secondary-shortcut]")
  );
  var cards = Array.prototype.slice.call(
    browser.querySelectorAll("[data-publication-card]")
  );
  var sections = Array.prototype.slice.call(
    browser.querySelectorAll("[data-publication-section]")
  );
  var totalCount = browser.querySelector("[data-publication-count]");
  var emptyState = browser.querySelector("[data-publication-empty]");

  function splitTags(card, attributeName) {
    var value = card.getAttribute(attributeName) || "";
    return value ? value.split("|") : [];
  }

  function setFilter(selectedPrimaryTag, selectedSecondaryTag) {
    var visibleTotal = 0;
    var hasSecondaryLevel = secondaryFilterGroups.some(function (group) {
      return group.getAttribute("data-parent-primary-tag") === selectedPrimaryTag;
    });

    if (!hasSecondaryLevel) selectedSecondaryTag = "all";

    cards.forEach(function (card) {
      var primaryTags = splitTags(card, "data-publication-primary-tags");
      var secondaryTags = splitTags(card, "data-publication-secondary-tags");
      var matchesPrimary = selectedPrimaryTag === "all" || primaryTags.indexOf(selectedPrimaryTag) !== -1;
      var matchesSecondary = selectedSecondaryTag === "all" || secondaryTags.indexOf(selectedSecondaryTag) !== -1;
      var isVisible = matchesPrimary && matchesSecondary;
      card.hidden = !isVisible;
      if (isVisible) visibleTotal += 1;
    });

    sections.forEach(function (section) {
      var visibleCards = section.querySelectorAll("[data-publication-card]:not([hidden])").length;
      var sectionCount = section.querySelector("[data-publication-section-count]");
      section.hidden = visibleCards === 0;
      if (sectionCount) sectionCount.textContent = visibleCards;
    });

    primaryFilterButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-publication-primary-filter") === selectedPrimaryTag;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    secondaryFilterGroups.forEach(function (group) {
      group.hidden = group.getAttribute("data-parent-primary-tag") !== selectedPrimaryTag;
    });

    secondaryFilterButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-secondary-parent") === selectedPrimaryTag &&
        button.getAttribute("data-publication-secondary-filter") === selectedSecondaryTag;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    if (totalCount) totalCount.textContent = visibleTotal;
    if (emptyState) emptyState.hidden = visibleTotal !== 0;
  }

  function scrollToFilters() {
    browser.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  primaryFilterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setFilter(button.getAttribute("data-publication-primary-filter"), "all");
    });
  });

  secondaryFilterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setFilter(
        button.getAttribute("data-secondary-parent"),
        button.getAttribute("data-publication-secondary-filter")
      );
    });
  });

  primaryTagShortcuts.forEach(function (button) {
    button.addEventListener("click", function () {
      setFilter(button.getAttribute("data-publication-primary-shortcut"), "all");
      scrollToFilters();
    });
  });

  secondaryTagShortcuts.forEach(function (button) {
    button.addEventListener("click", function () {
      setFilter(
        button.getAttribute("data-secondary-parent"),
        button.getAttribute("data-publication-secondary-shortcut")
      );
      scrollToFilters();
    });
  });
})();
