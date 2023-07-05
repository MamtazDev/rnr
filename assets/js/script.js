const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}
// toast Bootstarp End

// for input number  field
document.querySelector(".your_class").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});
// for input number  field End


//for add new date and weight
// const formDataArray = [];
// const showDataElement = document.getElementById('showDateWeight'); 
// const myForm = document.getElementById('myForm'); 


// function handleSubmit(event) {
//     event.preventDefault();

//     const dateValue = document.getElementById('date').value;
//     const weightValue = document.getElementById('weight').value;

//     const formData = {
//         date: dateValue,
//         weight: weightValue
//     };

//     formDataArray.push(formData);
//     myForm.reset();

//     // localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

//     console.log(formDataArray);
//     showDateWeight(formDataArray);
// }

// function showDateWeight(formDataArray) {
//     formDataArray.forEach((formData) => {
//         const addCol = document.createElement('div');
//         addCol.classList.add('row');
//         // inject classname on addcol
//         addCol.innerHTML = `
//             <div class="col-sm-12 col-md-3 col-lg-3">
//                 <div class="card mb-3 record__card" style="max-width: 18rem;">
//                     <div class="card-header bg-light"><h5>Person name</h5></div>
//                     <div class="card-body">
//                         <p class="card-text" id="showDate"><strong>Date: </strong>${formData.date}</p>
//                         <p class="card-text" id="showWeight"><strong>Weight: </strong>${formData.weight} kg</p>
//                     </div>
//                     <div class="card-footer bg-light">
//                         <div class="d-flex justify-content-between">
//                             <div>
//                                 <button type="button" class="btn btn-primary" id="liveToastBtn"><i class="fa-regular fa-pen-to-square"></i></button>
//                                 <button type="button" class="btn btn-secondary" id="liveToastBtn"><i class="fa-solid fa-cloud-arrow-down"></i></button>
//                             </div>
//                             <div>
//                                 <button type="button" class="btn btn-danger" id="liveToastBtn"><i class="fa-solid fa-trash-can"></i></button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//         showDataElement.appendChild(addCol); 
        
//         localStorage.setItem('addCol', JSON.stringify(addCol));
//     });
// }

// myForm.addEventListener('submit', handleSubmit);

