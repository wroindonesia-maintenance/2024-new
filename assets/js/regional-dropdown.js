/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  document.getElementById("dropdown-custom-content-id").classList.toggle("show");
  document.getElementById("btn-dropdown-down-id").classList.toggle("hide");
  document.getElementById("btn-dropdown-up-id").classList.toggle("hide");
  
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn-dropdown')) {
    var dropdowns = document.getElementsByClassName("dropdown-custom-content");
    var iconUps = document.getElementsByClassName("btn-dropdown-up");
    var iconDowns = document.getElementsByClassName("btn-dropdown-down");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var openIconUp = iconUps[i];
      var openIconDown = iconDowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        openIconUp.classList.add('hide');
        openIconDown.classList.remove('hide');
      }
    }
}
}

function openTabSekolah(tabSekolahID) {
  // Hide all elements with class="tabcontent" by default 
  var i, tabSekolah;
  tabSekolah = document.getElementsByClassName("tabSekolah");
  for (i = 0; i < tabSekolah.length; i++) {
    tabSekolah[i].style.display = "none";   
  }
    
  // Show the specific tab content and tab link
  document.getElementById(tabSekolahID).style.display = "block";
}