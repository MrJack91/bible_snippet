document.addEventListener('polymer-ready', function() {
  var navicon = document.getElementById('navicon');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
});

var tabs = document.querySelector('#sidemenu');
tabs.addEventListener('core-select', function() {
  console.log("Selected: " + tabs.selected);
});

var list = document.querySelector('vers-list');
tabs.addEventListener('core-select', function() {
  list.show = tabs.selected;
});




/*
var list = document.querySelector('vers-list');
  tabs.addEventListener('core-select', function() {
  list.show = tabs.selected;
});
*/
