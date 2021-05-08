var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    /*this.calAge = function() {
        console.log(2021 - this.yearOfBirth);
    }*/
};
Person.prototype.calculateAge = function() {
    console.log(2021 - this.yearOfBirth);
};
var asif = new Person('Asif', '1995 ', 'Student');
var anna = new Person('Anna', '2000', 'Painter');
var mike = new Person('Mike', '1990', 'Teacher ');
//asif.calAge();
//anna.calAge();
//mike.calAge();
asif.calculateAge();
anna.calculateAge();