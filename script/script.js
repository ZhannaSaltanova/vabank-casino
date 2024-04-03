document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.burger-button').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.burgermenu').classList.toggle('active');
    });
    document.querySelector('.close').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.burgermenu').classList.toggle('active');
      });
  });