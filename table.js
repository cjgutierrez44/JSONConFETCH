const tableBody = document.getElementById("tableBody");
const spinner = document.getElementById("spinner");

fetch("https://jsonplaceholder.typicode.com/users").then(result=>{
    spinner.classList.add("d-none");
    return result.json();
}).then(data=>{
    data.forEach(element => {
        let row = document.createElement("tr");
        for(let key in element){
            let td = document.createElement("td");
            td.style.verticalAlign = "middle";
            td.innerHTML = getData(element[key]);
            row.appendChild(td);
        }
        let actionDiv = document.createElement("div");
        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");
        editButton.classList.add("btn", "btn-info", "mx-1");
        editButton.innerHTML = "Editar"
        deleteButton.classList.add("btn-danger", "btn", "mx-1");
        deleteButton.innerHTML = "Borrar"
        actionDiv.appendChild(editButton);
        actionDiv.appendChild(deleteButton);
        let td = document.createElement("td");
        td.style.verticalAlign = "middle";
        td.appendChild(actionDiv);
        row.appendChild(td);
        tableBody.appendChild(row);
    });
});


function getData(element){
    if (typeof element == "object") {
        let text = "<br>";
        for(let key in element)
            text += "<strong class='text-primary'>" + key + ": </strong>" + getData(element[key]) + "<br>";
        return text;
    }else
        return element;
    
}