// menu.js

export function menu() {
    const content = document.querySelector('#content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuItems = [
        { name: "Margherita", price: "$10" },
        { name: "Pepperoni", price: "$12" },
        { name: "Vegetarian", price: "$11" },
        { name: "Supreme", price: "$14" },
        { name: "BBQ Chicken", price: "$13" }
    ];

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = `<span class="item-name">${item.name}</span><span class="item-price">${item.price}</span>`;
        menuList.appendChild(menuItem);
    });

    menuContainer.appendChild(menuList);
    content.appendChild(menuContainer);
}
