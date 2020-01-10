import { getComputers } from "./computersData.js"
import { getEmployees } from "./employeesData.js"
import { getDepartments } from "./departmentsData.js"
import { getEmployeesCustomers } from './employeesCustomersData.js'
import { getCustomers } from "./customersData.js"
import { getLocations } from "./locationsData.js"
import AssignmentList from "./assignmentList.js"

getComputers()
    .then(getDepartments)
    .then(getEmployees)
    .then(getEmployeesCustomers)
    .then(getCustomers)
    .then(getLocations)
    .then(AssignmentList)
