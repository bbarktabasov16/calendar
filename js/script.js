let clock =()=> {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if (hours <= 9) hours = "0" + hours
    if (minutes <= 9) minutes = "0" + minutes
    if (seconds <= 9) seconds = "0" + seconds

    let dateTimeOne = hours + ":" + minutes + ":" + seconds

    let elementOne = document.getElementById('time').innerHTML = dateTimeOne

    setTimeout(() => {
        clock()
    }, 1000);
}
clock()

let dateNum = document.getElementById('date__number')
let monthNum = document.getElementById('date__month')
let year = document.getElementById('fullYear')

const today = new Date();

const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

dateNum.innerHTML = today.getDate();
monthNum.innerHTML = month[today.getMonth()];
year.innerHTML = today.getFullYear();