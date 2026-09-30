// TODO 1: const firstName = ...your first name (a string)
const firstName="Rahaf";

// TODO 2: const lastName = ...
const lastName="ghalaini";

// TODO 3: let age = ...a number (no quotes!)
let age=22;

// TODO 4: const fullName = a template literal with firstName, a space, lastName
//         Hint: `${firstName} ${lastName}`
const fullName=`${firstName} ${lastName}`;

// TODO 5: Birthday! Add 1 to age. Either of these works:
//         age = age + 1;
//         age++;

age++;
// TODO 6: const intro = `Hi, I'm ... and I'm ... years old.`
//         Use fullName and age inside ${ }. Then console.log(intro)

const intro=`Hi,Iam ${fullName} and Iam ${age} years old`;
console.log(intro);
// TODO 7: Remove the // at the start of the next line, save, refresh.
//         Read the red error. What is it telling you?
// Uncaught TypeError: Assignment to constant variable.
  
 //firstName = "Someone else";
 
let favoriteColor="pink";
console.log(favoriteColor);
favoriteColor="puple";
console.log(favoriteColor);