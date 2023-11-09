function extractAndConvertToUpperCase(text) {
    const words = text.split(/\W+/);
    const validWords = words.filter(word => word.length > 0);
    const uppercaseWords = validWords.map(word => word.toUpperCase()).join(', ');
  
    console.log(uppercaseWords);
  }
  
  
extractAndConvertToUpperCase('Hi, how are you?');
extractAndConvertToUpperCase('hello');
