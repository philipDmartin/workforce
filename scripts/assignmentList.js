import {useComputers} from './computersData.js'
import {useEmployees} from './employeesData.js'
import Assignment from './assignment.js'
import {useDepartments} from './departmentsData.js'
import {useCustomers} from './customersData.js'
import { useEmployeesCustomers } from './employeesCustomersData.js'
import { useLocations } from './locationsData.js'

const contentTarget = document.querySelector(".assignment")

export const AssignmentList = () => {
    const computers = useComputers()
    const employees = useEmployees()
    const departments = useDepartments()
    const customers = useCustomers()
    const empCust = useEmployeesCustomers()
    const locations = useLocations()

  
    
    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            const computer = computers.find(computer => employee.computerId === computer.id)
    
            const department = departments.find(depart => depart.id === employee.departmentId)
            
            const location = locations.find(locate => locate.id === employee.locationsId)

            const joinEmpCust = empCust.filter(empCust => empCust.employeesId === employee.id)

            const doneEmpCust = joinEmpCust.map(jec => {
                const foundCust = customers.find(customer => customer.id === jec.customersId)
                return foundCust
            })

            const html = Assignment(computer, employee, department, doneEmpCust, location)
            return html
        }).join("")
    }
    render()
}

export default AssignmentList
