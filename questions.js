var languagesArrayCreation = function () {
  //Je n'ai pas compris l'exercice. Il faut déclarer un array avec "["Html","CSS","Java","PHP"]" ? Ou créer un brai tableau ?
  let languages = ["Html","CSS","Java","PHP"];
  return languages;
}

var numbersArrayCreation = function () {
  let numbers = [0,1,2,3,4,5];
  return numbers;
}

var ElementReplacement = function (languages) {
  languages.splice(2, 1, 'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.splice((languages.length), 0, 'Ruby');
  languages.splice((languages.length), 0, 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.splice(0, 0, -1);
  numbers.splice(0, 0, -2);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.splice(0, 1);
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.splice((languages.length - 1), 1,);
  return languages;
}

var stringToArray = function (socialMediaInString) {
  let socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function (languages) {
  let languagesInString = languages.toString();
  return languagesInString;
}

var arraySort = function (socialMedia) {
  return socialMedia.sort();
}

var arrayInvert = function (languages){
  return languages.reverse();
}
