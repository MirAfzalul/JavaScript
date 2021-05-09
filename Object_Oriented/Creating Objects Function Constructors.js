/*class Person {
    constructor(name, yearOfBirth, job) {
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.job = job;
            this.calAge = function() {
                console.log(2021 - this.yearOfBirth);
            }
}
// calculateAge() {
//  console.log(2021 - this.yearOfBirth);
//}
}
Person.prototype.calculateAge = function() {
    console.log(2021 - this.yearOfBirth);
};
Person.prototype.lastname = 'Mir';
var asif = new Person('Asif', '1995 ', 'Student');
var anna = new Person('Anna', '2000', 'Painter');
var mike = new Person('Mike', '1990', 'Teacher ');
//asif.calAge();
//anna.calAge();
//mike.calAge();
asif.calculateAge();
anna.calculateAge();
mike.calculateAge();*/

//object.create 
var personProto = {
    calculateAge: function() {
        console.log(2021 - this.yearofBirth);
    }
};
var asif = Object.create(personProto);
asif.name = 'Asif';
asif.yearofBirth = '1995 ';
asif.job = 'Student';
var anna = Object.create(personProto, {
    name: { value: 'Anna' },
    yearofBirth: {
        value: 2000
    },
    job: { value: 'Painter' }

});
asif.calculateAge();
anna.calculateAge();