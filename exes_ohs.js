function XO(str) {
str = str.toLowerCase().split('');
const x = str.filter( x => { return x == 'x'})
const o = str.filter( x => { return x == 'o'})

return x.length == o.length
}
