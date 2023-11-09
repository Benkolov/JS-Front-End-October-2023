function reverse(n, elements) {
    
    const newArray = elements.slice(0, n);
    const reversedArray = newArray.reverse();
    console.log(reversedArray.join(' '));
}


reverse(3, [10, 20, 30, 40, 50]);
