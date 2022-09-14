// Общее описание проекта: Проект представляет из себя имитацию
// регистрации/авторизации пользователя на сайте
// alert("Добро пожаловать!");

// let name = "имя  пользователя";
// result = prompt(name);
// age = prompt("Укажите ваш возраст?", 18);
// alert(`Вам ${age} лет!`);
// password = prompt(" Введите ваш пароль", 12345678);
// isLogin = prompt("123");
// alert(`неавторизован`);
// isLogin2 = prompt("456");
// alert(`авторизован`);

document.getElementById("check").onclick = function () {
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;
  if (login == "Adelia" && password == "qwerty") alert("Добро пожаловать!");
  else if (login == "Bektur" && password == "qwerty123")
    alert("Добро пожаловать!");
  else if (login == "Amalia" && password == "12345") alert("Добро пожаловать!");
  else alert("Пароли не совпадают");
};
document.getElementById("calc").onclick = function () {
  let y = document.getElementById("year").value;
  let old = 2022 - y;
  if (old >= 18) alert("Добро пожаловать!");
  else alert("Ошибка входа");
};
// !
