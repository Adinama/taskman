// const staticNodeList = document.querySelectorAll(".task");

// const liveNodeList = document.querySelector(".container").childNodes;

// console.log(staticNodeList)
// console.log(liveNodeList)

//     let newTask = document.createElement("div")
//     newTask.innerHTML = "еще задача"
//     newTask.classList.add("task")
//     document.querySelector(".container").append(newTask) //живая коллекция может меняться 

//     console.log(staticNodeList)
//     console.log(liveNodeList)

const container = document.querySelector(".container")
const formCreateTask = document.getElementById("fomt-create-task")
const taskName = document.getElementById("task-name")
let task = document.querySelectorAll(".tasks")
const btnClear = document.getElementById("btn-clear")

/**-------созадть новую звадачу */

formCreateTask.addEventListener("submit", function (event) {
    event.preventDefault(); //отменить действие по умолчанию. в нашем случае- перезагрузку страницы
    let value = taskName.value

    //создаем див с классом такс
    let newTask = document.createElement("div")
    newTask.innerHTML = `<span>${value}</span><i tabindex="0" class="bi bi-pencil btn-edit"></i><i tabindex="0" class="bi bi-x-lg btn-remove"></i>`
    newTask.classList.add("task")
    container.append(newTask)
    tasks = document.querySelectorAll(".task")
})
// const btn1 = document.querySelector("btn1")

// function compare(a,b) {
//     if (a.innerHTML > b.innetHTML) return 1;
//     if (a.innerHTML == b.innetHTML) return 0;
//     if (a.innerHTML < b.innetHTML)return -1;
// }
// btn1.addEventListener("click", function(){
//     let newTask = [...tasks] .sort(compare)
//     container.innerHTML="";
//     for (let i in newTask){
//         container.append(newTask[i])
//     }
// })
// const btn2 = document.querySelector(".btn2")


/*-------удаление вскех задач-----*/

btnClear.addEventListener("click", () => {
    container.innerHTML = "";
})


/*удаление задач*/
// let i = 0;
// const elems = document.querySelectorAll('*');//звездочка = все элементы на стр
// for (let elem of elems) {
//     elem.addEventListener("click", (e) => {
//         i++;
//         console.log("этап " + i);
//         console.log("целевой элемент:")
//         console.log(e.target);
//         console.log("элемент, на котором сработало событие:")
//         console.log(e.currentTarget);
//     });
// }
container.addEventListener("click", (event)=>{
    let btn = event.target //элемент на который клмнкул прользоывватель
    if (btn.classList.contains("btn-remove")){// если это кнопка удаления,то ..
        btn.closest(".task").remove();
    }
})
