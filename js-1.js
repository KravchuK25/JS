// const age =20;
// const type = age >=12 ? "adult":"child";

// // console.log(type);

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2 ) {
// biggerNumber = num1;
// } else {
//     biggerNumber = num2;
// }
// console.log(biggerNumber);

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1>num2 ? num1 :num2 ;
// console.log(biggerNumber);

// let cost;
// const subscription = "premium";

// switch (subscription) {
//     case "fee":
//         cost =0;
//         break;

//         case "pro":
//         cost =100;
//         break;

//         case "premium":
//         cost =500;
//         break;

//     default:
//      console.log("Invalid subscription type");
// }
// console.log(cost);

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter+=1;
// }

// let password = "";
// do {
//     password = prompt("Введіть пароль довший 4-х символів", "")
// }while(password.length <5 );
// console.log("Ввели пароль: ", password);

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }

// const target = 8;
// let sum = 0;
// for (let index = 0; index <= target; index +=2) {
//     sum +=index;

// }
// console.log(sum);

// const max = 10;
// for (let index = 0; index < max; index+=1) {
//     console.log(`${max} / ${index}=`, max %index);;

// }

// const number = 10;

// for (let index = 0; index < number; index +=1) {

//     if (index % 2 ===0 ){
//        continue;
//     }
//     console.log("Непарне i: ", index);
// }

// ----> ГЕНЕРАТОР ЧИСЕЛ
// const max = 80;
// const min = 0;
// console.log(Math.round(Math.random() * (max-min)+min));

//  const message = `В етой строке 26 символов.`;
//   console.log(message.length);

// const firstName = `Chelsy`;
// const lastName = `Emerald`
// console.log(firstName + ` `+ lastName);

//  const stars = 4;
//  let price;
//  if (stars === 1){
//     price = 20;
//  }else if (stars === 2) {
//     price = 30;
//  }else if (stars === 3) {
//     price = 50;
//  }else if (stars === 4) {
//     price = 70;
//  }else if (stars === 5) {
//     price =120;
//  } else{
//     console.log('NOT Stars');
//  }
//  console.log(price);

// const stars = 4;
// let price;

// switch (stars) {
//   case 1:
//   case 2:

//     price = 20;
//     break;

//   case 3:
//     case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('NOT Stars');
//     break;
// }
// console.log(price);

const option = 3;
let massage;

switch (option) {
  case 1:
    massage = "самовивіз";
    break;

  case 2:
    massage = "курєр";
    break;

  case 3:
    massage = "почта";
    break;

  default:
    massage =  "вам передзвонять";
    break;
}
console.log(massage);
