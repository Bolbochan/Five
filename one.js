//array shopping list
const List = [`Soap`, `Meat`, `Cofee`, `Candy`, `Beer`]
const Num = [
    5,//soap
    3,//meat 
    1,//cofee
    4,//candy
    2,//beer
]
const SOAP = prompt(`We need 5 soaps. And we bought?`)
const MEAT = prompt(`We need 3 meats. And we bought?`)
const COFEE = prompt(`We need 1 cofee. And we bought?`)
const CANDY = prompt(`We need 4 candy. And we bought?`)
const BEER = prompt(`We need 2   beers. And we bought?`)

const Check = [+SOAP, +MEAT, +COFEE, +CANDY, +BEER]
console.log(Check)
console.log(Num)
console.log(Num === Check)