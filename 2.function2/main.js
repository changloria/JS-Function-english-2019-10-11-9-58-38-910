function palindrome(message) {
    var lowRegStr = message.toLowerCase().replace(/[\W_]/g, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindrome('hello'));
  console.log(palindrome('abcba'));