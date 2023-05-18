const patientData = [
    {
        PatientIDNumber: "EP-001-000001",
        FirstName: "Ana",
        MiddleInitial: "J",
        LastName: "Smith",
        DateOfBirth: "5 January 1945",
        Department: "Ear, Nose and Throat",
        IsOutPatient: "No"
    },
    {
        PatientIDNumber: "EP-001-000002",
        FirstName: "Bob",
        MiddleInitial: "K",
        LastName: "Jones",
        DateOfBirth: "4 May 1985",
        Department: "Cardiology",
        IsOutPatient: "Yes"
    },
    {
        PatientIDNumber: "EP-001-000003",
        FirstName: "Carlos",
        MiddleInitial: "A",
        LastName: "Hernandez",
        DateOfBirth: "13 March 1957",
        Department: "Cardiology",
        IsOutPatient: "Yes"
    }
];

filterData();

//a. register patient
document.getElementById("btnRegisterPatient").onclick = function (e){
    if(!document.querySelector("main form")[0].parentNode.checkValidity())
        return;

    e.preventDefault();
    const newPatient = {
        PatientIDNumber: document.getElementById("patientIdNumber").value,
        FirstName: document.getElementById("firstName").value,
        MiddleInitial: document.getElementById("middleInitials").value,
        LastName: document.getElementById("lastName").value,
        DateOfBirth: document.getElementById("dateOfBirth").value,
        Department: document.getElementById("ddlDepartment").value,
        IsOutPatient: document.querySelector("input[name=radioIsOutPatient]:checked").value,
    }
    patientData.push(newPatient);
    updateDom();
}

//b. and c
function filterData(){
    let d = patientData;
    if(document.getElementById("chkElderlyPatients").checked){
          d = d.filter(val => {
              return (new Date().getFullYear() - new Date(val.DateOfBirth).getFullYear() > 65)
          })
    }
    if(document.getElementById("chkShowOutPatients").checked){
        d = d.filter(val => val.IsOutPatient === "Yes");
    }
    updateDom(d);
}

function updateDom(data= patientData){
    let html = "";
    for(const patient of data){
        html += "<tr>";
        html += `<td>${patient.PatientIDNumber}</td>`;
        html += `<td>${patient.FirstName}</td>`;
        html += `<td>${patient.MiddleInitial}</td>`;
        html += `<td>${patient.LastName}</td>`;
        html += `<td>${patient.DateOfBirth}</td>`;
        html += `<td>${patient.Department}</td>`;
        html += `<td>${patient.IsOutPatient}</td>`;
        html += "</tr>";
    }
    document.getElementById("tbodyPatientsList").innerHTML = html;
}
document.getElementById("chkShowOutPatients").onclick = filterData;
document.getElementById("chkElderlyPatients").onclick = filterData;
