const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];
// 1. Print Developers
function printDeveloper(data) {
  const developer=data
  .filter(person => person.profession=== "developer")
  .map(developer => developer.name);
  consol.log(developers.join(','));
}

// 2. Add Data
function addData(newData) {
  data.push(newData);
  const newData = {name: "harsh", age: 24, profession: "developer"};
  addData(newData);
  consol.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter(person => person.profession !== "admin");
  data = removeAdmin(data);
  consol.log(data);
}

// 4. Concatenate Array
function concatenateArray(data) {
  return [data,data];
}
  const concatenateArray = concatenateArray(data,data);
  consol.log(data);

// 5. Average Age
function averageAge() {}

// 6. Age Check
function checkAgeAbove25() {}

// 7. Unique Professions
function uniqueProfessions() {}

// 8. Sort by Age
function sortByAge() {}

// 9. Update Profession
function updateJohnsProfession() {}

// 10. Profession Count
function getTotalProfessions() {}
