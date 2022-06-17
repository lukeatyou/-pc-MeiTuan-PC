window.onload = function () {
  var dropdown = document.getElementById("dropdown");
  var dropdownLi = dropdown.getElementsByTagName("li");
  // console.log(dropdown);
  // console.log(dropdownLi);
  // 代码重复性过高  比较适合同学们刚开始学习
  // dropdownLi[0].onmouseover=function(){
  //     this.classList.add("show");
  // }
  // dropdownLi[0].onmouseout=function(){
  //     this.classList.remove("show");
  // }
  // dropdownLi[2].onmouseover=function(){
  //     this.classList.add("show");
  // }
  // dropdownLi[2].onmouseout=function(){
  //     this.classList.remove("show");
  // }
  // dropdownLi[3].onmouseover=function(){
  //     this.classList.add("show");
  // }
  // dropdownLi[3].onmouseout=function(){
  //     this.classList.remove("show");
  // }
  // dropdownLi[4].onmouseover=function(){
  //     this.classList.add("show");
  // }
  // dropdownLi[4].onmouseout=function(){
  //     this.classList.remove("show");
  // }

  for (var i = 0; i < dropdownLi.length; i++) {
    //因为1的时候没有效果所以我们要弹出一下
    if (i == 1) {
      continue;
    }
    dropdownLi[i].onmouseover = function () {
      this.classList.add("show");
    };
    dropdownLi[i].onmouseout = function () {
      this.classList.remove("show");
    };
  }
  // console.log(i);
};
