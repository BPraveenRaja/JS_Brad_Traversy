let re;
re = /hello/;
// re = /hello/i; //case insensitive

// re = /hello/g; //global search
// returns an array or null using exec
let result = re.exec('hey hello there hello');

console.log(result);

//

// Array [ "hello" ]
// ​
// 0: "hello"
// ​
// groups: undefined
// ​
// index: 4
// ​
// input: "hey hello there hello"
// ​
// length: 1

// test - returns true or false;
result = re.test('hey hello there hello');
console.log(result); //true

//returns an array or null
const str1 = 'hey hello there hello';

result = str1.match(re);
console.log(result);

// Array [ "hello" ]
// ​
// 0: "hello"
// ​
// groups: undefined
// ​
// index: 4
// ​
// input: "hey hello there hello"
// ​
// length: 1


// search returns index of the first match or -1
const str2 = 'hey hello there hello';

result = str2.search(re);
console.log(result);

// Array [ "hello" ]
// ​
// 0: "hello"
// ​
// groups: undefined
// ​
// index: 4
// ​
// input: "hey hello there hello"
// ​
// length: 1


// replace() - Return new string with some or all matches
const str3 = 'hey hello there hello';
console.log(re);
result = str3.replace(re, 'hi');
console.log(result);

// hey hi there hello (it replaced only one occurrence)

//Metacharacter symbols 
let re1;

re1 = /hello/; //match a string with this pattern
re1 = /hello/i ; //case insensitive
re1 = /^hello/i ; //begins with hello
re1 = /hello$/i ; //ends with hello
re1 = /h.llo/i ; // matches any one character
re1 = /h*llo/i ; // matches any character 0 or more times if the string is hallo the output is 'llo'

// re1 = /gre?a?y/i ; // ? means optional character it matches with grey or gray or gry
// re1 = /gre?a?y?/i; // escape character backward slash

// character sets like [], {}
re1 = /gr[ea]y/; // Must be an e or a but not null
re1 = /[GF]rey/; // must be G or F
re1 = /[^GF]rey/; // match characters that are not G or F;
re1 = /hel{2}o/ ; // must match 2 occurrences of l;
re1 = /hel{2,4}o/ ; // must match 2 -4 occurences of l; it talks about range
re1 = /hel{2,}o/ ; // must match atleast 2 occurences of l;
re1 = /[0-9]ray/ ; // any single digit from 0 to 9
re1 = /[a-z]ray/; // any lower case
re1 = /[A-Z]ray/; // any upper case
re1 = /[a-zA-Z0-9]ray/; // lower case or upper case or digit
re1 = /([a-zA-Z0-9]r){3}ay/; // 9rAr3ray 


// SHort hand character classes like \w, \d

re1 = /\w/; // Word character -  a character which has to be alphanumeric or _
re1 = /\w+/; // one or more word character.
re1 = /\W/; // non-word character
re1 = /\W+/; // one or more non word character
re1 = /\d/ ; // any character which is digit
re1 = /\d+/; // one or more character which is digit
re1 = /\D/; // non-digit character
re1 = /\D+/; // one or more non-digit character
re1 = /\s/; //Match white space character like ' ' or '  '
re1 = /\S/; //matcha non white space character
re1 = /heaven\b/i ; //matches the exact word heaven, also called as word boundary

// Assertions
re1 = /x(?y)/ ; //match x followed by y
re1 = /x(!y)/; // match x not followed by y


console.log(re1.exec('hallo'));

