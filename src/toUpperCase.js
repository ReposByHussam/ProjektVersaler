  
  
  
  function toUpperCase(text){

    if(typeof text !== 'string'){
        return '';
    }
    const result = text.toUpperCase();
    console.log(result);
    return result;

    }

module.exports = {toUpperCase};