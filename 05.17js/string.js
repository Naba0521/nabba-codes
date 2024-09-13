// function nas(a) {
//     if (a <= 18) {
//         return "nasand hvreegvi"
//     } else { return "arhind orson" }
// }
// const x = nas(22)
// console.log(x)

// Dasgal 10 Гурвалжингийн периметрийг олох 
// function calcperimetr(a, b, c) {
//     const s = (a + b + c)
//     return s
// }
// const x = calcperimetr(45, 10, 10)
// console.log(x)

// Dasgal 11 Тойргийн талбайг олох 
// function calccirclearea(a) {
//     const area = (Math.PI * Math.pow(a, 2))
//     return area
// }
// const x = calccirclearea(2)
// console.log(x)

// Dasgal 12 m = y*2-y*1/x*2-x*1
// function dasgal12(x, y) {
//     const m = ((y * 2) - (y)) / ((x * 2) - (x))
//     return m
// }
// const b = dasgal12(1, 2)
// console.log(b)

// dasgal13 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?
// function Gegabyte(a) {
//     const bit = a * 8 * Math.pow(1024, 3)
//     return bit
// }
// const x = Gegabyte(15)
// console.log(x)

// dasgal14 15 МB дата 3 секундэд манай интернэт 
// онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
// function dasgal14(a, b) {
//     const bitrate = (a / b) * (8 * Math.pow(10, 6))
//     return bitrate
// }
// const x = dasgal14(15, 3)
// console.log(x)



// 0521 angi deer

// let num = [1, 2, 3, 4, 5]
// console.log("numbers:", num[1])

// dasgal1

// let js = "Hello World";
// let jss = (js.substring(6, 9));
// console.log(jss.toUpperCase());

// dagsal2

// let js = "aZZZbZZZc";
// console.log(js.split("ZZZ"));

// dasgal3
// let js = "deviceName : macbook air -- deviceSerial : FFM3JHQ6L7";
// let js1 = (js.substring(28, 40));
// let js2 = (js.substring(43));
// console.log(js1, "=", js2);

// dasgal4
// let js = "I love HTML\n";
// let jss = (js.replace("HTML", "JAVASCRIPT"))
// console.log(jss.repeat(10))

// dasgal5

// let Challenge = "arhinaasaa garaachee icheechee";
// console.log(Challenge.length);
// // console.log(Challenge.toUpperCase());
// // console.log(Challenge.toLowerCase());
// // let js = (Challenge.substring(0, 7))
// // console.log(js)
// // console.log(Challenge.substring(Challenge.length - 10));
// // console.log(Challenge.split(""))
// // console.log(Challenge.split(" "))

// dasgallast6
// let Challenge = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// let Challenge1 = (Challenge.replace("Facebook", "Naba"))
// console.log(Challenge.split(","))
// console.log(Challenge1)

// let Challenge = "   Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon   ";
// console.log(Challenge.charAt(15))
// console.log(Challenge.trim())

// let Challenge = "I love ";
// let Challenge1 = "JavaScript";
// console.log(Challenge.concat("", Challenge1))

// let Challenge = "Pinecone Academy Leap хөтөлбөр\n ";
// console.log(Challenge.repeat(18))

// 05.22 angi deer dasgal1
// '10' нь 10-тай яг тэнцүү эсэхийг шалгаарай. Хэрэв үгүй бол яг тэнцүү болго.

// let y = "10";
// let x = 10;
// console.log(x === Number(y))

// Python болон jargon дээр 'on' гэсэн үг байгаа эсэхийг шалгана уу
// let y = "Python, jargon";
// console.log(y.includes("on"))

// "I hope this course is not full of jargon".  
// Өгүүлбэрт jargon үг байгаа эсэхийг шалгана уу.

// let y = "I hope this course is not full of jargon";
// console.log(y.includes("jargon"))

// 0-ээс 100 хүртэл random тоог үүсгэнэ үү.
// let y = Math.random();
// console.log(Math.round(y * 100))

// 50-аас 100 хүртэл random тоог үүсгэнэ үү.
// let y = Math.random();
// console.log(Math.round((y * 50) + 50))

// 0-ээс 255 хүртэлх random тоог үүсгэнэ үү.
// let y = Math.random();
// console.log(Math.round((y * 255)))

// Random тоо ашиглан 'JavaScript' гэдэг string-н тэмдэгтүүдэд хандана уу
// let x = "JavaScript";
// let y = Math.random();
// console.log(x.charAt(Math.round((y * 10))))

// 'Love is the best thing in this world. 
// Some found their love and some are still looking for their love.'  
// Энэ өгүүлбэр дэх love гэдэг үгийг тоол.

// let x = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// console.log(x.match(/love/gi).length);

// // gi өгөж байгаа нь g нь глобал авж байгаа бүгдийн авж байгаа 
// // i uppercase, lowercase байсанч хамаагүй адил авч үзнэ 

// Дараах бичвэрээс тухайн хүний жилийн нийт орлогыг тооцоол.
// "Тэр сард 5000 еврогийн цалин, жилийн 10000 еврогийн урамшуулал , 
// сард 15000 еврог онлайн сургалтаас авдаг.”
// let x = 5000 * 12;
// let y = 10000;
// let z = 15000 * 12;
// console.log(x + y + z)

// const now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth() + 1;
// let date = now.getDate();
// let hour = now.getHours();
// let minute = now.getMinutes();
// let sec = now.getSeconds();
// console.log("Яг одоо цаг", year, "оны", month + "-р сарын", date + "-ны өдрийн", hour, "цаг", minute, "минут ", sec, "секунд болж байна.")

