function home(){
    const content = document.querySelector('#content');

    const outerContainer = document.createElement('div');
    outerContainer.classList.add('outerContainer');

    const header = document.createElement('div');
    header.classList.add('heading');
    const headerText = document.createTextNode(`Papa Pizzas`);
    header.appendChild(headerText);

    const introMessage = document.createElement('div');
    introMessage.classList.add('introPara');
    const paraText = document.createTextNode(`Welcome to Papa Pizza, where every slice is a taste of perfection! We pride 
    ourselves on crafting mouthwatering pizzas using only the freshest ingredients and time-honored recipes. 
    Whether you're craving a classic Margherita or a gourmet specialty, 
    our commitment to quality ensures a delicious experience with every bite.`);
    introMessage.appendChild(paraText);

    content.appendChild(header);
    content.appendChild(introMessage);
}

export{home};

