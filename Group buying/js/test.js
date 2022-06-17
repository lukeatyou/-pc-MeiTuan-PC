window.onload = function () {
  var dropdown = document.getElementById("dropdown");
  var dropdownLi = dropdown.getElementsByTagName("li");
  console.log(dropdown);
  console.log(dropdownLi);
  dropdownLi[0].onmouseover = function () {
    this.classList.add("show");
  };
  dropdownLi[0].onmouseout = function () {
    this.classList.remove("show");
  };
  dropdownLi[2].onmouseover = function () {
    this.classList.add("show");
  };
  dropdownLi[2].onmouseout = function () {
    this.classList.remove("show");
  };
  dropdownLi[3].onmouseover = function () {
    this.classList.add("show");
  };
  dropdownLi[3].onmouseout = function () {
    this.classList.remove("show");
  };
  dropdownLi[4].onmouseover = function () {
    this.classList.add("show");
  };
  dropdownLi[4].onmouseout = function () {
    this.classList.remove("show");
  };
};
