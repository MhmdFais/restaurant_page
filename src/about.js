export function about(){
    const content = document.querySelector('#content');

    const aboutParaContainer = document.createElement('div');
    aboutParaContainer.classList.add('aboutParaContainer');

    const aboutPara = document.createElement('div');
    aboutPara.classList.add('aboutPara');
    const aboutParaText = document.createTextNode(`Welcome to Papa'z Pizzas! We're your go-to destination for delicious, 
    handcrafted pizzas made with the freshest ingredients and lots of love.
    At Papa'z, we're passionate about pizza and about creating memorable experiences for our customers. 
    From classic favorites to gourmet specialties, each pizza is crafted to perfection by our skilled chefs.
    Join us in redefining the pizza experience one slice at a time. 
    Whether you're dining in, ordering for delivery, or planning a special event, 
    Papa'z Pizzas is here to make every moment delicious.
    Thank you for visiting us online. We can't wait to serve you!`);
    aboutPara.appendChild(aboutParaText);

    aboutParaContainer.appendChild(aboutPara);
    content.appendChild(aboutParaContainer);
}