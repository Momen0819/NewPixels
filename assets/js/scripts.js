window.onload = () => {
  /* Loader */
    const loaderWrapper = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 3000)
    /* Menu */
    const menu = document.querySelector('#menu');
    const menuBtn = document.querySelectorAll('.burger-menu');
    const menuCloseBtn = document.querySelector('.close-menu');
    
    menuBtn.forEach(el => el.addEventListener('click', () => {
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        menuCloseBtn.classList.add('open')
    }))

    menuCloseBtn.addEventListener('click', () => {
        menu.style.visibility = 'hidden';
        menu.style.opacity = '0';
        menuCloseBtn.classList.remove('open')
    })
}