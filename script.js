const bola = document.querySelector('.bola');
const bolaStyle = getComputedStyle(bola);
let moveX = 0;
let moveY = 0;
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch(keyName){
        case 'ArrowDown':
            console.log('down');
            if(bolaStyle.getPropertyValue('bottom') != '-225px'){
                moveX -= 5;
                bola.style.bottom = `${moveX}px`;
            }
            break;
        case 'ArrowUp':
            console.log('up');
            if(bolaStyle.getPropertyValue('bottom') != '0px'){
                moveX += 5;
                bola.style.bottom = `${moveX}px`;
            }
            break;
        case 'ArrowLeft':
            console.log('left');
            console.log(bolaStyle.getPropertyValue('left'))
            if(bolaStyle.getPropertyValue('left') != '0px'){
                moveY -= 5;
                bola.style.left = `${moveY}px`;
            }
            break;
        case 'ArrowRight':
            console.log('right');
            console.log(bolaStyle.getPropertyValue('left'))
            if(bolaStyle.getPropertyValue('left') != '225px'){
                moveY += 5;
                bola.style.left = `${moveY}px`;
            }
            break;
    }
    // console.log('keydown event\n\n' + 'key: ' + keyName + "Tipo: " + typeof keyName);
  });