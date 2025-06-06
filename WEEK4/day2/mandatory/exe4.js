const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
welcomeStudents =users.map(user=>`Hello ${user.firstName}`);
console.log(welcomeStudents);

// Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents);

//3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const fullStackResidentLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);

console.log(fullStackResidentLastNames);