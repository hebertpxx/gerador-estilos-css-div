const btnGenerate = document.querySelector('#btn-generate');

// Global Style

const globalStyle = document.createElement('style');

globalStyle.innerHTML = `

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100vh;
                color: #000;
                background-color: rgb(214, 250, 238);
                font-family: sans-serif;
            }

        `;

document.head.appendChild(globalStyle);

// DIV Style

btnGenerate.addEventListener('click', () => {

    const display = document.querySelector('#display').value;
    const width = document.querySelector('#width').value;
    const height = document.querySelector('#height').value;
    const margin = document.querySelector('#margin').value;
    const padding = document.querySelector('#padding').value;
    const color = document.querySelector('#color').value;
    const backgroundColor = document.querySelector('#background-color').value;
    const generatedDivContainer = document.querySelector('.generated-div-container');
    const cssStyleContainer = document.querySelector('.cssStyleContainer');
    const cssStyle = document.querySelector('.cssStyle');
 
    let div = `<div id='generatedDiv'>DIV gerada</div>`;
    div.innerText = 'Conteúdo da DIV';
    generatedDivContainer.innerHTML = div;

    div = document.querySelector('#generatedDiv');

    const style = {

        display: display,
        width: width + 'px',
        height: height + 'px',
        margin: margin + 'px',
        padding: padding + 'px',
        color: color,
        'background-color': backgroundColor,
    
    };

    cssStyleContainer.style.display = 'flex';
    cssStyle.innerHTML = '';

    for (const property in style) {

        div.style[property] = style[property];

        cssStyle.innerHTML += `<span>${property}: ${style[property]};</span>`;

    };

});