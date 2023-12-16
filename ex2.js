const blackCat = {
    name: 'Vasia',
    age: 2,
    food: 'Royal Canin'
}
    const name = 'name';
    function cat(){
        for (let key in blackCat) {
            if(key == name){
                return true;
            } else {
                return false;
            }
        }
    }
    console.log(cat());