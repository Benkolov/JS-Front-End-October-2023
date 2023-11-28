function checkPalindromes(array) {
    function isPalindrome(integer) {
    const strInteger = String(integer);
    const reversedStr = strInteger.split('').reverse().join('');

    return strInteger === reversedStr;
    }

    for (const integer of array) {
        const result = isPalindrome(integer);

        console.log(result);
    }
}

checkPalindromes([123, 323, 421, 121]);
checkPalindromes([32, 2, 232, 1010]);

