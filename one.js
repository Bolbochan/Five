//array shopping list
const cargo = ["Soap", "Meat", "Cofee", "Candy", "Beer"]
let num = {
    soap: 5,
    meat: 0,
    cofee: 0,
    candy: 4,
    beer: 2,
};//number of units
const buy = {
    soap: `yes`,
    meat: `no`,
    cofee: `no`,
    candy: `yes`,
    beer: `yes`,
}//purchased goods or not

const cargoData = cargo.map((name) => {
    return {
        name: name,
        number: num[name.toLowerCase()],
        bought: buy[name.toLowerCase()],
    }
});

const cargoDataBot = cargoData.slice()
cargoDataBot.sort((prev, next) => {
    if (prev.bought < next.bought) return -1;
    if (prev.bought < next.bought) return 1;
});
console.log(cargoData); // original list
console.log(cargoDataBot) // sort list

let product = prompt(`Please,specify the name of the product`)
let indicate = prompt(`Please,indicate the number of goods`)
const NewCargo = cargoData.slice()
//Функція Two кожного разу підраховує зміну кількості продуктів, але якщо задати 'num.soap = num.soap + +indicate' число змінної залишається незмінним, хоча якщо виводити його через  'console.log(num.soap = num.soap + +indicate)' воно правильне.  
function Two(indicate, product) {
    if (indicate > 0) {
        if (cargo.includes(product)) {
            switch (product) {
                case `Soap`: {
                    console.log(num.soap = num.soap + +indicate)
                } break;

                case `Meat`: {
                    console.log(num.soap = num.meat + +indicate)
                } break;

                case `Cofee`: {
                    console.log(num.soap = num.cofee + +indicate)
                } break;

                case `Candy`: {
                    console.log(num.soap = num.candy + +indicate)
                } break;

                case `Beer`: {
                    console.log(num.soap = num.beer + +indicate)
                } break;
            }
        }

        if (cargo.includes(product) === false) {
            NewCargo.push({ name: product, number: +   indicate, bought: "yes" })
        }
    }
    else if (+indicate === 0) {
        NewCargo.push({ name: product, number: +indicate, bought: "no" })
    }
}
console.log(Two(indicate, product))
console.log(NewCargo)
