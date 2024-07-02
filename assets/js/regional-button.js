function openTab(tabContentID,tabLinkID) {
  // Hide all elements with class="tabcontent" by default 
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";   
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('selected');
  }
    
  // Show the specific tab content and tab link
  document.getElementById(tabContentID).style.display = "block";
 document.getElementById(tabLinkID).classList.add('selected');
}

/*document.addEventListener('click', function (event) {
  if (!event.target.matches('.tablink')) {
    // Hide all elements with class="tabcontent" by default 
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";   
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('selected');
  }
}
},false);*/