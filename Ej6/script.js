function checkPalindrome() {
    const input = document.getElementById('inputPalindrome').value;
    const normalizedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedInput = normalizedInput.split('').reverse().join('');
    
    if (normalizedInput === reversedInput) {
        document.getElementById('palindromeResult').innerHTML = 'La cadena es un palíndromo.';
    } else {
        const palindrome = input + input.split('').reverse().join('');
        document.getElementById('palindromeResult').innerHTML = `La cadena no es un palíndromo. Un posible palíndromo es: ${palindrome}`;
    }
}
