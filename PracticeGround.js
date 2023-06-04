function replaceDigitsWithString(str, num) {
    if (typeof str !== 'string' || typeof num !== 'number' || num < 0 || num > 9) {
        return false; // Invalid input
    }

    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (/\d/.test(char)) {
            const digit = parseInt(char);
            const sum = digit + num;
            const replacement = sum > 9 ? sum % 10 : sum;
            result += replacement;
        } else {
            result += char;
        }
    }

    return result;
}

