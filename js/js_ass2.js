function show_menu(){
    var myDropdowm = document.getElementById("myDropdown");
    if(myDropdowm.classList.contains('show')){
      myDropdowm.classList.remove('show');
    }
    else{
      myDropdowm.classList.add("show");
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }