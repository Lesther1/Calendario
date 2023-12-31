const currenDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days")
prevNextIcon = document.querySelectorAll(".icons span")


//Obtiene fecha ano y mes
let date = new Date()
currYear = date.getFullYear()
currMonth = date.getMonth()

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth +1,0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth ,lastDateofMonth).getDay(),
    lastDateoflastMonth = new Date(currYear, currMonth,0).getDate()
    let liTag = ""

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateoflastMonth - i + 1}</li>`
        
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
        && currYear === new Date().getFullYear()? "active" : ""
        liTag += `<li class="${isToday}">${i}</li>`
        
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth  + 1}</li>`
        
    }
    currenDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag

      // Agregar evento de clic a cada día
      const dayElements = document.querySelectorAll(".days li");
      dayElements.forEach(day => {
        day.addEventListener("click", () => {
          const selectedDay = day.innerText;
          alert(`Día seleccionado: ${selectedDay} de ${months[currMonth]} de ${currYear}`);
          // Puedes hacer lo que quieras con el día seleccionado, como mostrar un mensaje o realizar alguna acción.
        });
      });

}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", ()=>{
        currMonth = icon.id === "prev" ? currMonth -1 : currMonth +1

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth)
            currYear = date.getFullYear()
            currMonth = date.getMonth()
        }else{
            date = new Date()
        }
        renderCalendar()
    })
});