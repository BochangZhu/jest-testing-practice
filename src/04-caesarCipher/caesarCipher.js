function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function applyShift(c, shift) {
    const code = c.charCodeAt(0);
    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;

    const base = isUpper ? 65 : 97;
    
    const offset = (((code - base + shift) % 26) + 26) % 26;

    return String.fromCharCode(base + offset);
}   


function caesarCipher(str, shift) {
    return [...str].map(char => isLetter(char) ? applyShift(char, shift) : char).join('');
}

module.exports = caesarCipher;