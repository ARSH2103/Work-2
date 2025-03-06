
// Creating array of object named as inputFields.

let inputfields = [
  { label: "First Name", type: "text", id: "f_name", placeholder: "Enter Your First Name", required: true, minLength: 2, maxLength: 30 },
  { label: "Last Name", type: "text", id: "l_name", placeholder: "Enter Your Last Name", required: true, minLength: 2, maxLength: 30 },
  { label: "Email", type: "email", id: "email", placeholder: "Enter Your Email", required: true, pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" },
  { label: "Contact No", type: "number", id: "c_no", placeholder: "Enter Your Contact No", required: true, minLength: 10, maxLength: 10 },
  { label: "Job Role", type: "select", id: "job_role", placeholder: "Enter the Job Role", required: true },
  { label: "Address", type: "text", id: "address", placeholder: "Enter Your Address", required: true, minLength: 5 },
  { label: "City", type: "text", id: "city", placeholder: "Enter Your City", required: true },
  { label: "Pin Code", type: "text", id: "pincode", placeholder: "Enter Your Pin Code", required: true, pattern: "^[0-9]{6}$" },
  { label: "Date", type: "date", id: "date", placeholder: "Enter Date", required: true },
  { label: "Upload CV", type: "file", id: "UpLoadCV", placeholder: "Upload Your CV", required: true, accept: ".pdf,.doc,.docx" }
];


// Creating the variable named as teh formcontainer.
const formcontainer = document.getElementById("Dynamic-Form");


// creating a function which will Produce the form Dynamically.

function ProduceForm() {
  const form = document.createElement("form");
  form.setAttribute("id", "dynamicForm");


  // Iterating the fields and creating the div for independent fields.
  inputfields.forEach((fields) => {
    const formgroup = document.createElement("div");
    formgroup.classList.add("form_group");


    // Creating lables for the fields.
    const label = document.createElement("label");
    label.setAttribute("for", fields.id);
    label.textContent = fields.label;



    // Creating inout fields and checking if the input field is select or diff.
    let inputElement;
    if (fields.type === "select") {
      inputElement = document.createElement("select");
      inputElement.setAttribute("name", fields.id);
      inputElement.setAttribute("required", "true");


      // Creating options array which will be provided for the select field.
      const optionarray = ["None", "FrontEnd", "BackEnd", "DevOps"];
      optionarray.forEach((optionvalue) => {
        let option = document.createElement("option");
        option.textContent = optionvalue;
        option.value = optionvalue;
        inputElement.appendChild(option);
      });



    } 
    else {
      inputElement = document.createElement("input");
      inputElement.setAttribute("type", fields.type);
      inputElement.setAttribute("id", fields.id);
      inputElement.setAttribute("name", fields.id);
      inputElement.setAttribute("placeholder", fields.placeholder);
      inputElement.setAttribute("required", fields.required);

     
    }


    // Appending the various different fields into the form.
    formgroup.appendChild(label);
    formgroup.appendChild(inputElement);
    form.appendChild(formgroup);
  });

  // Creating Apply Now btn.
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Apply Now";
  form.appendChild(submitButton);

  formcontainer.appendChild(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

  });
}

ProduceForm();
