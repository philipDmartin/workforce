let employeesCustomers = []

export const useEmployeesCustomers = () => employeesCustomers.slice()

export const getEmployeesCustomers = () => fetch("http://localhost:8088/employeesCustomers")
    .then(res => res.json())
    .then(parsedEmployeesCustomers => employeesCustomers = parsedEmployeesCustomers)
    