let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Meta Character Symbols
re = /^h/i; // must start with - carrot ^ is start
re = /World$/i; // Must end with - money sign $ is end
re = /^hello$/i; // Must begin and end with
re = /^h.llo$/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // optional character such as gray or grey
re = /gre?a?y\?/i; // escape character

// BRACKETS [] - Character Sets
re = /gr[ae]y/i; // Must be an a or an e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/i; // will match anything except a G or F (not g or f)
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Z]ray/; // match any uppercase letter
re = /[A-Za-z]ray/; // match any uppercase letter
re = /[0-9][0-9]ray/; // match any digit

// Braces { - Quantifiers}
re = /Hel{2}o/i; // Must occur exactly {x} amount of tiimes
re = /Hel{2,4}o/i; // Must occur exactly {x} amount of times
re = /Hel{2,}o/i; // Must occur at least {x} times

// Parentheses = (grouping)
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/; // Word Character - alphanumeric or _ finds the first word character
re = /\w+/; // Looks at one or more word characters
re = /\W/; // non Word Characters
re = /\d/; // Match Any Digit
re = /\d+/; // Match Any Digit 0 or More Times
re = /\D/; // Match Any Non Digits
re = /\s/; // Match White space Characters
re = /\S/; // Match Non White Space Character
re = /Hell\b/i; // Word Boundary - looking for that specific word

// ASsertions
re = /x(?=y)/; // Match x Only If Followed By y
re = /x(?!y)/; // Match x Only If NOT Followed By y

// string to match
const str = "eppqwheexwecc";

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
