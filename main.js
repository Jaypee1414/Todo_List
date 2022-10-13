window.addEventListener('load', ()=>{
    const form = document.querySelector('#form');
    const input = document.querySelector('#input-task-list');
    const list = document.querySelector('.tasks');


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const input_value = input.value;

        if(!input_value){
            alert('Please Input A Task');
            return 0
        }

        const task = document.createElement("div");
        task.classList.add("task");
        
        const content = document.createElement("div");
        content.classList.add("content");

        task.appendChild(content);
        
        const list_task = document.createElement("input");
        list_task.classList.add("text");
        list_task.type = "text";
        list_task.value = input_value;
        list_task.setAttribute("readonly","readonly");

        content.appendChild(list_task);
        task.appendChild(content);
        list.appendChild(task);

    })
})