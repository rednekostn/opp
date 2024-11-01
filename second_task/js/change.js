function find_edit() {
    const surname = document.getElementById('surname');
    const name = document.getElementById('name');
    const date = document.getElementById('date');

    console.log('Фамилия: ${surname}, Имя: ${name}, Дата Рождения: ${date}');
    surname.innerHTML = "POPOVA";
    name.innerHTML = "ANNA";
    date.innerHTML = "22.07.2001";
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", find_edit)