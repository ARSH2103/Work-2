
// WITHOUT USING FOREACH LOOP ANT THATS WHAT THE MISTAKE MADE BY ME :

// Creating array of object which will have the following various input fields in the form of key-value pairs:

// let inputfields = [
//     {label:"Firstname" , type:"text" , id:"f_name" , placeholder:"Enter Your First Name"},
//     {label:"Lastname" , type:"text" , id:"l_name" , placeholder:"Enter Your Last Name"},
//     {label:"Email" , type:"email" , id:"email" , placeholder:"Enter Your Email"},
//     {label:"JobRole" , type:"select" , id:"job_role" , placeholder:"Enter For the Role" , options:["None","FrontEnd","BackzEnd","Devoops"]},
//     {label:"Address" , type:"text" , id:"address" , placeholder:"Enter Your Address"},
// ]

// // lets now keep the track of upcoming further next fields :

// let currentIndex = 0;


// // Select the particular elements by Id and store them into a variable:

// const formcontainer = document.getElementById('Dynamic-Form');
// const submitBtn = document.getElementById('submitBtn');


// // Creating a funtion which will produce the form fields:

// function ProduceForm(){


    
    

//     const fields = inputfields[currentIndex];

//     // Creating the element through  the JavaScript and the element is the div :
//     const formgroup = document.createElement('div');
//     // classList.add is used to assign the class to the formgroup:
//     formgroup.classList.add('form_group');


//     // Creting labels for the input fields;
//     const label = document.createElement('label');
//     label.setAttribute('for',fields.id)
//     label.textContent = fields.label;

//     // Creating the input fields:
//     let inputElement;
    
//     // Checking for the field input if it select hen creating the select element:

//     if(fields.type == 'select')
//     {
//         inputElement = document.createElement('select');
//         inputElement.setAttribute('id', fields.id);
//         inputElement.setAttribute('name', fields.name);


//     }
//     // if the fields type is not select then the input fields will be created which means the input will be the [text,no,email....etc].
//     else
//     {
//         inputElement = document.createElement('input')
//         inputElement.setAttribute('type',fields.type)
//         inputElement.setAttribute('name',fields.name)
//         inputElement.setAttribute('id',fields.id)
//         inputElement.setAttribute('placeholder',fields.placeholder)
//     }
    

//     // adding both the fields into the form using appendchild:

//     formgroup.appendChild(inputElement);
//     formgroup.appendChild(label);


//     formcontainer.appendChild(formgroup);

// }


// ProduceForm();

// ---------------------------------------------------------------------------------------------------------------------






// Creating array of object which will have the following various input fields in the form of key-value pairs:

// const btn = document.getElementById('submitBtn')
// btn.addEventListener('sumbit',()=>{
//   const validate = document.getElementById('field.id');
//   if()
// })



let inputfields = [
  {label:"FirstName" , type:"text" , id:"f_name" , placeholder:"Enter Your First Name"},
  {label:"LastName" , type:"text" , id:"l_name" , placeholder:"Enter Your Last Name"},
  {label:"Email" , type:"email" , id:"email" , placeholder:"Enter Your Email"},
  {label:"Contact No" , type:"number" , id:"c_no" , placeholder:"Enter Your Contact NO"},
  {label:"JobRole" , type:"select" , id:"job_role",placeholder:"Enter the jobRole"},
  {label:"Address" , type:"text" , id:"address" , placeholder:"Enter Your Address"},
  {label:"City" , type:"text" , id:"city" , placeholder:"Enter Your Address"},
  {label:"PinCode" , type:"text" , id:"pincode" , placeholder:"Enter Your Address"},
  {label:"Date" , type:"date" , id:"date" , placeholder:"Enter Your Address"},
  {label:"UpLoadCV" , type:"file" , id:"UpLoadCV" , placeholder:"Enter Your Address"},
];

const formcontainer = document.getElementById('Dynamic-Form');


// Creating a funtion which will produce the form fields:

function ProduceForm() {
  inputfields.forEach(fields => 
    {
      // Creating the element through  the JavaScript and the element is the div :
      const formgroup = document.createElement('div');
      // classList.add is used to assign the class to the formgroup:
      formgroup.classList.add('form_group');

      
    // Creting labels for the input fields;
      const label = document.createElement('label');
      label.setAttribute('for', fields.id);
      label.textContent = fields.label;


      const optionarray =["None","FrontEnd","BackEnd","Devops"] 

      let inputElement;
      if (fields.type === 'select') {
        
        // validations add using required(HTML)
        
        inputElement = document.createElement('select');
        // inputElement.setAttribute('select', fields.select);
        inputElement.setAttribute('name', fields.id);
        inputElement.setAttribute('placeholder',fields.placeholder)
        // inputElement.setAttribute('placeholder', fields.placeholder);
        
      
          optionarray.forEach(optionvalue=>
            {
              
            var option = document.createElement("option");
            option.textContent = optionvalue;
            option.value = optionvalue;
            inputElement.appendChild(option);
              
          })
        
         
      } else {
          inputElement = document.createElement('input');
          inputElement.setAttribute('type', fields.type);
          inputElement.setAttribute('id', fields.id);
          inputElement.setAttribute('name', fields.id);
         
          inputElement.setAttribute('placeholder', fields.placeholder);
          inputElement.setAttribute('id', fields.id);
          inputElement.setAttribute('name', fields.id);
      }
     
     
      

         // adding the fields into the form using appendchild:
      formgroup.appendChild(label);
      formgroup.appendChild(inputElement);
      formcontainer.appendChild(formgroup);
  }); 



}

ProduceForm(); 


// ---------------------------------------------------------------------------------------------------------------------
//  CODE SNIPPET GIVEN BY MAAM ::::::


// function renderInputs(options, containerId) {
//   const container = document.getElementById(containerId);
//   container.innerHTML = ''; // Clear previous content
 
//   options.forEach(option => {
//     const input = document.createElement('input');
//     input.type = 'text';
//     input.name = option.name;
//     input.placeholder = option.label;
 
//     const label = document.createElement('label');
//     label.textContent = option.label + ':          ';
//     label.for = option.name;
    
 
//     const div = document.createElement('div');
//     div.appendChild(label);
//     div.appendChild(input);
//     container.appendChild(div);
//   });
// }
 
// // Example usage:
// const inputOptions = [
//   { name: 'firstName', label: 'First Name' },
//   { name: 'lastName', label: 'Last Name' },
//   { name: 'email', label: 'Email' },


// ];
 
// renderInputs(inputOptions, 'input-container');