localStorage.clear(); // удаляет все значения из хранилища / input none / output none
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tomas' }));
// setItem задаёт или обновляет значение по ключу
// input 'name of key' 'value' / output none
localStorage.setItem('lastName', 'Anderson');
localStorage.setItem('age', JSON.stringify(17));

// console.log(JSON.parsa(localStorage.getItem('hobbies')));
// localStorage свойство которое позволяет получить доступ к объекту Storage.
// Storage предоставляет доступ для ssession storage или local storage для конкретного домена,
// позволяя добавлять, изменять, удалять сохраненные элементы данных.

// input none 
// output object

// function getLocalStorageData() {
//   console.log(localStorage);
//   console.log(Object.entries(localStorage)); // создаем массив подмассивов ключей и значений
//   return Object.entries(localStorage).reduce((acc, [key, value]) => {
//     // методом редьюс собираем объект, приминяем деструкторизацию к каждому подмассиву в массиве entries
//     console.log([key, value]);
//     let newValue; // объявляем новое значение которое будет использовать при проверке try/ catch
//     try {
//       // Конструкция try...catch пытается выполнить инструкции в блоке try, и, в случае ошибки, выполняет блок catch.
//       newValue = JSON.parse(value); // попытка строчное значение в другое с помощью JSON.parse()
//       console.log(newValue);
//     } catch (e) {
//       //  Блок catch задаёт идентификатор (e) который содержит объект исключения
//       console.log(e);
//       newValue = value;
//     }
//     console.log(acc);
//     return {
//       // добавляем к копии объекта acc ключи и значения, слияние с помощью спреад
//       ...acc,
//       [key]: newValue,
//     };
//   }, {});
// }

localStorage.setItem('married', false);
localStorage.setItem('amount of children', null);

// input none
// output object

export function getLocalStorageData() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
}
console.log(getLocalStorageData());
