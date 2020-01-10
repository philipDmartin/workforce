const Assignment = (computers, employees, departments, customers, locations) => {
    return `
        <section class="assignment">
            <header>Computer/Department Assignment</header>
            <div>
                <h5> Last Name ${employees.lastName} </h5>
            </div>
            <div>
                <h1> First Name ${employees.firstName} </h1>
            </div>
            <div>
                <h1> Computer ${computers.model} </h1>
            </div>
            <div>
                <h1> Department ${departments.Name} </h1>
            </div>
            <div>
                <h1> Locations ${locations.address} </h1>
            </div>
             <div>
                <h1>Dev Team Companies</h1>
                <ol>
                    ${
                        customers.map(customers => {
                            return `<li>${customers.CompanyName}</li>`
                        }).join("")
                    }
                </ol>
            </div>
        </section>
    `
}

export default Assignment
