fetch("/footer.html")
  .then(res => res.text())
  .then(html => {
    const footerDiv = document.getElementById("footer");
    footerDiv.outerHTML = html;
  });
