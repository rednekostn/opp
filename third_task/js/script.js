function verify() {
    console.log("s, r, k")
    let s = parseInt(elementS.value);
    let r = parseInt(elementR.value);
    let k = parseInt(elementK.value);
    console.log(s, r, k)

    const sideLength = Math.sqrt(s);//сторона квадрата
    const d = r * 2;//диаметр круга

    // Проверяем условие
    if ((sideLength - d) > k) {
        result = "Можно поместить";
        check = true;
    } else {
        result = "Нельзя поместить";
        check = false;
    }

    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}

let result;
let check;

const elementS = document.getElementById("s");
const elementR = document.getElementById("r");
const elementK = document.getElementById("k");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)