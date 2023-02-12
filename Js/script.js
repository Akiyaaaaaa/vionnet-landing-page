//toogle
const navabrNav = document.querySelector(".navbar-nav");
//ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navabrNav.classList.toggle("active");
};
//klik di sidebar untuk menghilangkan nav (menu)
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navabrNav.contains(e.target)) {
    navabrNav.classList.remove("active");
  }
});
//transisi saat berpindah section
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        600,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
