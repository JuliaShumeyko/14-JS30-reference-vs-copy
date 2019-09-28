    // start with strings, numbers and booleans

    let age = 100;
    let age2 = age;
    console.log(age, age2);
    age = 200;
    console.log(age, age2); // the value of the variable age2 will not change when the value of the original variable age is updated

    let name = 'Julia';
    let name2 = name;
    console.log(name, name2);
    name = 'Jules';
    console.log(name, name2);

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.

    const team = players;
    console.log(players, team);

    team[3]='Lux'; // update of team (reference of the original array) will update players, because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way

    const team2 = players.slice(); // team2 is a copy thanks to slice and its update will not trigger the update of players

    // or create a new array and concat the old one in

    const team3 = [].concat(players);

    // or use the ES6 Spread

    const team4 = [...players];

    const team5 = Array.from(players);

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // Making a copy with Object.assign

    const captain = Object.assign({}, person, {age: 90, pet: 'parrot'});
    console.log(captain);
    

    // The object ...spread

    const captain2 = {...person};
    console.log(captain2);

    // Things to note - the object assign is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
