
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true

////

if (somma === 6) {
  var somma = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
}
// somma è 6

//////////////////////////////////////////////////////////////////////////

new Uint8Array([2, 5, 8, 1, 4]).some(elem => elem > 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(elem => elem > 10); // true

////////////////////////////

var animali = ["cane", "gatto", "topolino", "pantegana"];

animali.map(function (animali) {
  return animali.length;
});// [4, 5, 8, 9]

animali.map((animali) => {
  return animali.length;
});// [4, 5, 8, 9]

animali.map(animali => animali.length);// [4, 5, 8, 9]
