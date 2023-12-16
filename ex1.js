const person = {
        name: 'Ivan',
        age: 27,
        city: 'Moscow'
}
function func() {
    const obj = Object.create(person);
    obj.ownName = 'Dima';
    obj.ownAge = '25';
    obj.ownCity = 'Samara';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
        console.log(key);
        }
    }
}
func();