document.querySelectorAll(".document").forEach((article) => {
  const englishVersion = Array.from(article.children).find((element) =>
    element.classList.contains("english")
  );

  if (!englishVersion) {
    return;
  }

  englishVersion.classList.add("primary-language");
  article.prepend(englishVersion);
});
