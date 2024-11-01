function verify() {
    console.log("s, r, k")
    let s = parseInt(elementS.innerText);
    let r = parseInt(elementR.innerText);
    let k = parseInt(elementK.innerText);
    console.log(s, r, k)

    const sideLength = Math.sqrt(s);

    // Вычисляем максимально допустимое расстояние от центра сцены до стены
    const maxDistanceFromWall = sideLength / 2;

    // Проверяем условие
    if (r + k <= maxDistanceFromWall) {
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