// ==========================================
// JavaScript String Methods
// ==========================================

let message = "Hello JavaScript World  ";


// 1. length
console.log("length:", message.length);


// 2. toUpperCase()
console.log("toUpperCase:", message.toUpperCase());


// 3. toLowerCase()
console.log("toLowerCase:", message.toLowerCase());


// 4. charAt()
console.log("charAt:", message.charAt(2));


// 5. charCodeAt()
console.log("charCodeAt:", message.charCodeAt(2));


// 6. at()
console.log("at:", message.at(2));


// 7. indexOf()
console.log("indexOf:", message.indexOf("JavaScript"));


// 8. lastIndexOf()
console.log("lastIndexOf:", message.lastIndexOf("o"));


// 9. includes()
console.log("includes:", message.includes("JavaScript"));


// 10. startsWith()
console.log("startsWith:", message.startsWith("  Hello"));


// 11. endsWith()
console.log("endsWith:", message.endsWith("  "));


// 12. trim()
console.log("trim:", message.trim());


// 13. trimStart()
console.log("trimStart:", message.trimStart());


// 14. trimEnd()
console.log("trimEnd:", message.trimEnd());


// 15. slice()
console.log("slice:", message.slice(2, 7));


// 16. substring()
console.log("substring:", message.substring(2, 7));


// 17. substr() — legacy
console.log("substr:", message.substr(2, 5));


// 18. replace()
let text1 = "I like Java";
console.log("replace:", text1.replace("Java", "JavaScript"));


// 19. replaceAll()
let text2 = "Java is great. Java is popular.";
console.log("replaceAll:", text2.replaceAll("Java", "JavaScript"));


// 20. repeat()
console.log("repeat:", "JS ".repeat(3));


// 21. concat()
let firstName = "Jana";
let lastName = "Balakumar";

console.log("concat:", firstName.concat(" ", lastName));


// 22. split()
let languages = "Java,Python,JavaScript";

console.log("split:", languages.split(","));


// 23. padStart()
let number = "5";

console.log("padStart:", number.padStart(3, "0"));


// 24. padEnd()
console.log("padEnd:", number.padEnd(3, "0"));


// 25. valueOf()
console.log("valueOf:", message.valueOf());