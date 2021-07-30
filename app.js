let toggleBtn = document.getElementById('toggleBtn'),
      navMenu = document.getElementById('navMenu');

    toggleBtn.addEventListener('click', function(){
      navMenu.classList.toggle('active');
    }) 