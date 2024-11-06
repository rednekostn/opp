function verify() {
    console.log("s, r, k")
    let s = parseInt(elementS.innerText);
    let r = parseInt(elementR.innerText);
    let k = parseInt(elementK.innerText);
    console.log(s, r, k)

    const sideLength = Math.sqrt(s);//сторона квадрата
    const d = r * 2;//диаметр круга

    // Проверяем условие
    if ((sideLength - d) > k) {
        result = "Можно поместить"
        document.getElementById("result").innerText = result;
    } else {
        result = "Нельзя поместить"
        document.getElementById("result").innerText = result;
    }
}

const elementS = document.getElementById("s");
const elementR = document.getElementById("r");
const elementK = document.getElementById("k");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);