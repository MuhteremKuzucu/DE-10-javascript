
// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================


const cola=50
const cips=35
const dondurma=20

console.log("cola" + cips + dondurma);

let toplam=cola + cips + dondurma

console.log(toplam);//105


//! 1 arttır

toplam = toplam + 1

console.log(toplam);//106

toplam++

console.log(toplam);//107

//! 10 arttır

toplam=toplam+10

toplam+=10 //toplam=toplam+10 kısa yolu

console.log(toplam);


//?  + operatörü string concatination işlemi de yapar

const sayi1="12"
const sayi2=45

console.log(sayi1+sayi2);//1245
console.log(sayi1-sayi2);//-33


const isim="mehmet"
const soyisim = "kara"

console.log("benim adım soyadım " + isim + " " + soyisim);


//!BACKTICK (template literals) ``

console.log(`benim adım soyadım ${isim} ${soyisim} `);


//?bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

//toFixed(x) //*virgülden sonra x adet basamak bırak

const ab=1.3
const cd=1.8
console.log(Math.floor(ab));
console.log(Math.floor(cd));
console.log(Math.ceil(ab));
console.log(Math.ceil(cd));

console.log(Math.trunc(ab));

console.log(Math.round(ab));
console.log(Math.round(cd));

console.log((3.145674893939).toFixed(3));

console.log(Math.random());//mesela 0.3453454545


// document.write(Math.trunc(ab));

// RANDOM: rastgele
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir
console.log(Math.random());
console.log(Math.ceil(Math.random()*20));

//*ARTTIRMA AZALTMA

let a=5

console.log("ilk", a++);//5
console.log("ikinci", a);//6

let b=a++
console.log(b);//&
console.log(a);//7

let c=10

console.log("ilk", ++c);//11

let d=++c
console.log(d);//12
console.log(c);//12

let e=33

console.log("ilk", e--);//33
console.log("ikinci", e);//32

console.log(--e);//31
console.log(e);//31

//! e yi 5 arttır

e=e+5
console.log(e);//36

console.log(e+=5);//41


//! e yi 5 ile çarp

e=e*5
console.log(e);//205

console.log(e*=5);//1025

console.log(e-=5);//1020

console.log(e/=5);//204

 console.log(e%=5);//4


 //?ÇARPMA VE ÜS ALMA

 const PI=3.14

 const yarıcap=5


 console.log(PI*yarıcap**2);

 //!Math pow (power) bir sayının kuvvetini üssünü almak için kullanılır

 console.log(PI*Math.pow(yarıcap,2));

 //! Math sqrt metodu verilen değerin karekökünü alır

 console.log(Math.sqrt(144));

 console.log(144**(1/2));


//********* MOD ALMA ******** */ 

const number=456

console.log("birler", 456%10);

console.log("onlar", Math.trunc((456%100)/10));

console.log("yüzler", Math.trunc(456/100));



/* ---------------------------------- */
/*     KARŞILAŞTIRMA OPERATÖRLERİ     */
/* ---------------------------------- */

const nummer=4;

console.log(nummer==4);
console.log(nummer===4);
console.log(nummer==="4");
console.log(nummer=="4");

console.log(nummer!=4);
console.log(nummer!=5);
console.log(nummer!="4");

// * =======================================================
// *         MANTIKSAL OPERATORLER (logical operators)
// * =======================================================

console.log("****************************")

//?TRUE
console.log(Boolean(5));
console.log(Boolean(5.8));
console.log(Boolean(-5.8));
console.log(Boolean([1,2,5]));
console.log(Boolean(" "));

//? 5 FALSE

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));



const v1= false || 4
console.log(v1);
console.log(Boolean(v1));

const v2 = false || 0 || null || 12.6 || false || 3

console.log(v2);//12.6

console.log(Boolean(v2));//true

const v3= false || 0 || undefined || "" || null || NaN
 
console.log(v3);//NaN

console.log(Boolean(v3));

const v4= 5 && 3.5 && true && 0
console.log(v4);//0
console.log(Boolean(v4));

const v5= 4 && 13.4 && true && -5
console.log(v5); //-5

console.log(Boolean(v5));

 // * =======================================================
// *                 TİP DÖNÜŞÜMLERİ
// * =======================================================


let para= Number("1000") + Number("400")

console.log(para);

console.log("1000"-"400");
console.log("1000"*"400");
console.log("1000"/"400");
console.log("1000"+"400");

const s1=12
const s2="23"
console.log(s1+Number(s2));

//***** */

let ss1="123.456"

  console.log( parseInt(ss1))//stringi tam sayıya çevirir
  console.log( parseFloat(ss1)) //stringi sayıya çevirir


  let f=123.678

  console.log(f.toString());//number ı string e çevirir
  

  //* + ile number a çevirme

  let ee="12"

  console.log(typeof +ee);

  // tofixed (x) metodu virgülden x basamak bırakmanızı saglar ama sayıyı string e cevirir

  let z=34.4564563456









  //* prompt komutu da toFixed gibi kullanılan sayıyı string yapar.

  


















