var selectedRow = null;

// Show Alerts
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);
} 

// Clear All Fields 
function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#senha").value = "";
}

// Add Data 
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    // Get Form Values 
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const senha = document.querySelector("#senha").value;
    // Validate 
    if(firstName == "" || lastName == "" || senha == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${senha}</td>
            <td>
            <a href="" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added", "sucess");
        }
        else{
            selectedRow.children[0].textComent = firstName;
            selectedRow.children[1].textComent = lastName;
            selectedRow.children[2].textComent = senha;
            selectedRow = null;
            showAlert("Student Info Edited", "info")
        }

        clearFields();
    }
});

//Edit Data
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains(edit)){
        target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textComent;
        document.querySelector("#lastName").value = selectedRow.children[1].textComent;
        document.querySelector("#senha").value = selectedRow.children[2].textComent;
    }
})

// Delete 
document.querySelector("#Student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});