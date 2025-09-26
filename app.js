
  function toUpperCase(text){

    if(typeof text !== 'string'){
        return '';
    }
    const result = text.toUpperCase();
    console.log(result);
    return result;

    }

    const input = document.querySelector('#textField');
    const btn = document.querySelector('#makeBigBtn');

    btn.addEventListener('click',() => {
        const result = toUpperCase(input.value);
        input.value=result;

    });
