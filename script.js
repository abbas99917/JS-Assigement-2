// ======= Data Type =========== //
// let student = {
//     name: "ali", // string
//     age: 20, // number
//     isPassed: true, // boolean
//     marks: "", // undefine
//     Grade: null, // object

// }
console.log(typeof "ali");
console.log(typeof 20);
console.log(typeof true);
console.log(typeof marks);
console.log(typeof null);


// ========step4: type conversion===============================//

let student = {
    name: "ali",        // string
    age: 20,            // number
    isPassed: true,     // boolean
    marks: "",          // string (empty)
    grade: null         // null
};
// ===Convert string to number ============ //

let marksNumber = Number(student.marks);

console.log(marksNumber);          // 0
console.log(typeof marksNumber);   // number

// ===Convert Number to strings ============ //

let ageString = String(student.age);

console.log(ageString);            // "20"
console.log(typeof ageString);     // string


// ===Convert string to boolean ============ //

let nameBoolean = Boolean(student.name);

console.log(nameBoolean);          // true
console.log(typeof nameBoolean);   // boolean






// ================== step 5: ====================== //

// Convert "25" (string) to number
let strToNum = Number("25");
console.log(strToNum);                 // 25
console.log(typeof strToNum);          // number

// Convert 100 (number) to string
let numToStr = String(100);
console.log(numToStr);                 // "100"
console.log(typeof numToStr);          // string

// Convert "true" (string) to boolean
let strToBool = Boolean("true");
console.log(strToBool);                // true
console.log(typeof strToBool);          // boolean





// ============== step 6: practise task================== //


// Convert non-numeric string to number
let notANumber = Number("abc");
console.log(notANumber);               // NaN
console.log(typeof notANumber);        // number

// Observation:
// "abc" number میں convert نہیں ہو سکتا
// اس لیے result NaN (Not a Number) آتا ہے



// Convert 0 into boolean
let zeroBool = Boolean(0);
console.log(zeroBool);                 // false

// Observation:
// 0 JavaScript میں false ہوتا ہے


// Convert 1 into boolean
let oneBool = Boolean(1);
console.log(oneBool);                  // true

// Observation:
// 1 JavaScript میں true ہوتا ہے
