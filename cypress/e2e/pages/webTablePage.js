import basePage from "./basePage"

export default{

    //Elements

    addButton(){
        return basePage.findElement("#addNewRecordButton")
    },

    firstNameForm(){
        const element = "#firstName"
        return element
    },

    lastNameForm(){
        const element = "#lastName"
        return element
    },

    emailForm(){
        const element = "#userEmail"
        return element
    },

    ageForm(){
        const element = "#age"
        return element
    },

    salaryForm(){
        const element = "#salary"
        return element
    },

    departmentForm(){
        const element = "#department"
        return element
    },

    submitButton(){
        return basePage.findElement("#submit")
    },

    editIconLineTwo(){
        return basePage.findElement("#edit-record-2")
    },


    //Actions

    fillFirstName(data){
        basePage.writeInputValue(this.firstNameForm(),data)
    },

    fillLastName(data){
        basePage.writeInputValue(this.lastNameForm(),data)
    },

    fillEmail(data){
        basePage.writeInputValue(this.emailForm(),data)
    },

    fillAge(data){
        basePage.writeInputValue(this.ageForm(),data)
    },

    fillSalary(data){
        basePage.writeInputValue(this.salaryForm(),data)
    },

    fillDepartment(data){
        basePage.writeInputValue(this.departmentForm(),data)
    },

    clickSubmitButton(){
        this.submitButton().click();
    },
    
    clickAddButton(){
        this.addButton().click();
    },

    validateValueInLineAndColumn(line,column,value){
        basePage.findElement(`.rt-tr-group:nth-child(${line}) .rt-tr.-even>div:nth-child(${column})`)
            .should("have.text",value)
    },

    editRegisterTwo(){
        this.editIconLineTwo().click()
    }


}