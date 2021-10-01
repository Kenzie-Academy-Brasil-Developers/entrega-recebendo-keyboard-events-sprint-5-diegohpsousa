const bola = document.querySelector('.bola');
const bolaStyle = getComputedStyle(bola);
let moveX = 0;
let moveY = 0;
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch(keyName){
        case 'ArrowDown':
            if(bolaStyle.getPropertyValue('bottom') != '-225px'){
                moveX -= 5;
                bola.style.bottom = `${moveX}px`;
            }
            break;
        case 'ArrowUp':
            if(bolaStyle.getPropertyValue('bottom') != '0px'){
                moveX += 5;
                bola.style.bottom = `${moveX}px`;
            }
            break;
        case 'ArrowLeft':
           
            if(bolaStyle.getPropertyValue('left') != '0px'){
                moveY -= 5;
                bola.style.left = `${moveY}px`;
            }
            break;
        case 'ArrowRight':
            if(bolaStyle.getPropertyValue('left') != '225px'){
                moveY += 5;
                bola.style.left = `${moveY}px`;
            }
            break;
    }
  });