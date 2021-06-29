/*const order = [
    { userId: 1, amount: 10 },
    { userId: 1, amount: 15 },
    { userId: 2, amount: 5 },
    { userId: 2, amount: 50 }
];
const sum = order.filter(order => order.userId === 1)
    .map(order => order.amount)
    .reduce((total, current) => total + current);
console.log(sum);*/
const students = [{
        name: 'Mir',
        grade: 96
    },
    {
        name: 'Afzalul',
        grade: 85
    },
    {
        name: 'Bashar',
        grade: 90
    },
    {
        name: 'Asif',
        grade: 66
    },
    {
        name: 'Sam',
        grade: 87
    }

];
const toppers = students.filter(students => students.grade >= 90);

for (let i = 0; i < (toppers.length); i++) {
    console.log(toppers[i]);
}