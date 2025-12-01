function addtask(){
    const task = document.getElementById("newtask").value.trim();

  if(task){
      console.log(task);

    const l = document.createElement("li");
    l.classList.add("p-2", "d-flex", "align-items-center", "fs-5", "border-bottom");

    const d = document.createElement("div");
    d.classList.add("w-75");

    d.innerText = task;

    const del = document.createElement("button");
    del.classList.add("btn", "btn-outline-danger", "ms-3");
    del.innerHTML = `<i class="bi bi-trash3"></i>Delete`;

    del.onclick = () =>{
        l.remove();
    }


    // Establishment of relationships

    l.appendChild(d);
    l.appendChild(del);

    document.getElementById("tasklist").appendChild(l);

    document.getElementById("newtask").value = "";
  }
}