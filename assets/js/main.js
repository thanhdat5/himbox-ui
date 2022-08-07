var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('.hb-btn-toggle-sidebar').on('click',function(){
  $('.hb-sidebar').toggleClass('show');
})

$('.hb-sidebar-menu-link').on('click',function(){
  $('.hb-sidebar').removeClass('show');
})

window.setTimeout(() => {
  $('#HBLoader').fadeOut(300);
}, 500);

function toggleHeaderSticky() {
  var scrollTop = window.scrollY;
  if (scrollTop > 50) {
    $('.hb-header').addClass("sticky");
  } else {
    $('.hb-header').removeClass("sticky");
  }
}
toggleHeaderSticky();
window.onscroll = function () {
  toggleHeaderSticky();
};