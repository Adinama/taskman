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
let tasks = document.querySelectorAll(".tasks")
const btnClear = document.getElementById("btn-clear")

/**-------созадть новую задачу */

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

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function compare(a, b) {
        if(a.innerHTML > b.innerHTML) return 1;
        if(a.innerHTML == b.innerHTML) return 0;
        if(a.innerHTML < b.innerHTML) return -1;
    }

    btn1.addEventListener("click", function() {
        tasks = document.querySelectorAll(".task")
        let newTasks = [...tasks].sort(compare);
        container.innerHTML = "";
        newTasks.forEach(task => container.append(task));
    });

    function compareReverse(a, b) {
        if(b.innerHTML > a.innerHTML) return 1;
        if(b.innerHTML == a.innerHTML) return 0;
        if(b.innerHTML < a.innerHTML) return -1;
    }

    btn2.addEventListener("click", function() {
        tasks = document.querySelectorAll(".task")
        let newTasks = [...tasks].sort(compareReverse);
        container.innerHTML = "";
        newTasks.forEach(task => container.append(task));
    });


// const btn1 = document.querySelector("btn1")
// function compareReverse(a,b) {
//     a = a.querySelector("span");
//     b = b.querySelector("span");
//     if (a.innerHTML > b.innetHTML) return 1;
//     if (a.innerHTML == b.innetHTML) return 0;
//     if (a.innerHTML < b.innetHTML)return -1;
// }
// btn1.addEventListener("click", function(){
//     let newTask = [...tasks] .sort(compareReverse)
//     container.innerHTML="";
//     for (let i in newTask){
//         container.append(newTask[i])
//     }
// })

// const btn2 = document.querySelector(".btn2")
// btn2.addEventListener("click", function(){
//     let newTask = [...tasks] 
//     newTask = newTask.filter(task)
//     container.innerHTML="";
//     for (let i in newTask){
//         container.append(newTask[i])
//     }
// })


/*-------удаление всех задач-----*/

btnClear.addEventListener("click", () => {
    container.innerHTML = "";
})

/*делегирование задач*/
container.addEventListener("click", (event)=>{
    let btn = event.target //элемент на который клмнкул прользоывватель
    //удаление хзадач
    if (btn.classList.contains("btn-remove")){// если это кнопка удаления,то ..
        btn.closest(".task").remove();
    }
    //редактирование задач
    if (btn.classList.contains("btn-edit")){
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true")
    }
})
