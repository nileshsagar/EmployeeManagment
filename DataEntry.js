let employeeName=document.getElementById("empname");
let employeeId=document.getElementById("employeeId");
let employeeAddress=document.getElementById("address");
let employeeDesignation=document.getElementById("designation");
let employeeDepartment=document.getElementById("department");
let employeeSalary=document.getElementById("salary");

let selectedRow=null;

function employeeDataManagment() {
	let employeeData=fetchEmployeeData();
	if (selectedRow==null) {
		displayData(employeeData);
	}
}

function fetchEmployeeData() {
	let employeeData={};

	employeeData.employeeName=employeeName.value;
	employeeData.employeeId=employeeId.value;
	employeeData.employeeDesignation=employeeDesignation.value;
	employeeData.employeeDepartment=employeeDepartment.value;
	employeeData.employeeAddress=employeeAddress.value;
	employeeData.employeeSalary=employeeSalary.value;


	return employeeData;
}

function displayData() {
	
	let tbody=document.getElementById("table-body");
	let newRow=tbody.insertRow(0);
	let cell0=newRow.insertCell(0);
}