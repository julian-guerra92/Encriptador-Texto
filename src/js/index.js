
//Referencias en el HTML
const initialText = document.getElementById('first-input');
const finalText = document.getElementById('second-input');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const copyTextButton = document.getElementById('copy-text-button');
const textBox = document.querySelector('.caja-texto');

//Función para encriptar texto
const encryptText = (textArray = []) => {
  const encryptText = textArray.map((letter) => {
    switch (letter) {
      case 'a':
        return 'ai';
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
      default:
        return letter;
    }
  })
  return encryptText;
}

//Función para desencriptar texto
const decryptText = (textArray = []) => {
  let array;
  const decryptText = textArray.map((letter, index, textArray) => {
    switch (letter) {
      case 'a':
        array = textArray.slice(index, index + 2)
        if (array.join('') === 'ai') {
          textArray.splice(index, 1);
        }
        return 'a';
      case 'e':
        array = textArray.slice(index, index + 5)
        if (array.join('') === 'enter') {
          textArray.splice(index, 4);
        }
        return 'e';
      case 'i':
        array = textArray.slice(index, index + 4)
        if (array.join('') === 'imes') {
          textArray.splice(index, 3);
        }
        return 'i';
      case 'o':
        array = textArray.slice(index, index + 4)
        if (array.join('') === 'ober') {
          textArray.splice(index, 3);
        }
        return 'o';
      case 'u':
        array = textArray.slice(index, index + 4)
        if (array.join('') === 'ufat') {
          textArray.splice(index, 3);
        }
        return 'u';
      default:
        return letter;
    }
  })
  return decryptText;
}

//Function animación texto copiado
const copyText = () => {
  copyTextButton.classList.add('executed');
  copyTextButton.innerHTML = 'Texto Copiado!';
  setTimeout(() => {
    copyTextButton.classList.remove('executed');
    copyTextButton.innerHTML = 'Copiar Texto';
  }, 1000)
}

//Función para cambio de diseño
const designChange = () => {
  textBox.classList.add('hidden');
  finalText.classList.remove('hidden');
  copyTextButton.classList.remove('hidden');
}

//Evento para encriptar texto
encryptButton.addEventListener('click', (event) => {
  const text = initialText.value;
  designChange();
  const arrayText = encryptText(text.split(''));
  finalText.value = arrayText.join('');
})

decryptButton.addEventListener('click', (event) => {
  const text = initialText.value;
  const arrayText = decryptText(text.split(''));
  designChange();
  finalText.value = arrayText.join('');
})

//Evento para copìar texto
copyTextButton.addEventListener('click', (event) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    copyText();
    return navigator.clipboard.writeText(finalText.value);
  }
})

