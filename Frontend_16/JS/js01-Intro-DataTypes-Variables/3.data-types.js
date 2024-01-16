/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
x=15.34
console.log(typeof x)


/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

yas=40
sayi=29.12
console.log(yas)

sonuc=(sayi*7)+18
console.log(sonuc)

const pi=Math.PI
console.log(pi)

//? Ondalıklı kısmı düzenlemek için kullanılna yöntemler
// round

let yuvarlanmisSonuc=Math.round(sonuc)
console.log(yuvarlanmisSonuc);
// yuarıya yuvarlıyor

// trunc
let truncSonuc=Math.trunc(sonuc)
console.log(truncSonuc)
// sadece tam sayı kısmını virgülden sonrasnı saymıyor.

// virgülden sonra gelen ondalıklı kısımda kaç hane gösterilmesini sitiyorsanız tofixed(sayı)

let fixedSonuc=sonuc.toFixed(2)
console.log(sonuc.toFixed(2))
console.log(fixedSonuc)


//!RANDOM metodu-----çok ihtiyaç olan bir programmış
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir
// console.clear()
console.log(Math.round(Math.random()))

console.log(Math.pow(5,3))    //üssü - kuvvet alma
console.log(Math.sqrt(144));  //karekök
console.log(5**3)  //kuvvet alma
