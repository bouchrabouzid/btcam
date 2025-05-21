
console.log("Pattern using one loop:");
let patternOneLoop = "";
for (let i = 1; i <= 6; i++) {
  patternOneLoop += "* ".repeat(i) + "\n";
}
console.log(patternOneLoop);
console.log("Pattern using nested loops:");
let patternNestedLoops = "";
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= i; j++) {
    patternNestedLoops += "* ";
  }
  patternNestedLoops += "\n";
}
console.log(patternNestedLoops); 
