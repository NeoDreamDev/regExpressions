// let re;
// re = /hello/;
// re = /hello/i; // "i" = case insensitive
// re = /hello/g; // global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec("hello world");
// const result = re.exec("hell world");  - null
// console.log(result);
// console.log(result[0]);
// console.log(result.input);
// console.log(result.index);

// ***********************************************************

// test() - Returns true or false if theres a match
// const result = re.test("Hello");
// console.log(result);

// ***********************************************************

// match() - Return result array or null
// const str = "Hello there";
// const result = str.match(re);
// console.log(result);

// ***********************************************************

// search() - Return result array or nullindex of first match, if not found returns -1
// const str = "Hello there";
// const result = str.search(re);
// console.log(result);

// ***********************************************************

// replace() - Return new string with some or all matches of a pattern
// const str = "Hello There";
// const newStr = str.replace(re, "hey");
// console.log(newStr);
