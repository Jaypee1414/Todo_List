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
        task.appendChild(content)

        const action = document.createElement("div");
        action.classList.add("action");

        const edit_btn = document.createElement("button");
        edit_btn.classList.add("edit");
        edit_btn.textContent = "Edit";

        const delete_btn = document.createElement("button");
        delete_btn.classList.add("delete");
        delete_btn.textContent = "Delete";

        action.appendChild(edit_btn);
        action.appendChild(delete_btn);

        task.appendChild(action);
        list.appendChild(task);


        edit_btn.addEventListener('click',()=>{
            if(edit_btn.lowerCase() == "edit"){
                input.removeAttribute("readonly");
                input.focus();
                edit_btn.textContent = "Save";
            }else{
                input.setAttribute("readonly", "readonly");
                edit_btn.textContent = "Edit"
            }
        })

        delete_btn.addEventListener('click',()=>{
            list.removeChild(task);
        })

    })
})