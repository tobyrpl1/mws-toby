const menuElement = document.getElementById('menu-navigation');

loadMenuHTML();

async function loadMenuHTML() {
    await fetch('../../components/menu.html').then(response => response.text()).then(response => {
        menuElement.innerHTML = response;

        let currentMenu = document.getElementsByClassName('menu')[0].getElementsByTagName('a')[3];
        currentMenu.className = 'active';
    })
        .catch(error => console.log(error));
}