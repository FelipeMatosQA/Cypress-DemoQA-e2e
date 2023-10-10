import basePage from "./basePage"
export default{
    
    //Elements
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

    subjectForm(){3
        const element = "#subjectsInput"
        return basePage.findElement("#subjectsInput")
    },

    radioButtonGender(){
        const element = 'input[name="gender"]'
        return element
    },

    mobileForm(){
        const element = "#userNumber"
        return element
    },

    dateOfBirthForm(){
        return basePage.findElement("#dateOfBirthInput")
    },

    dateYearSelect(){
        return basePage.findElement(".react-datepicker__year-select")
    },

    dateMonthSelect(){
        return basePage.findElement(".react-datepicker__month-select")
    },

    dateDayCalendar(){
        const element = ".react-datepicker__day"
        return element
    },

    readingHobbieCheckbox(){
        return basePage.findElement("#hobbies-checkbox-2")
    },

    pictureButton(){
        const element = "#uploadPicture"
        return element
    },

    currentAdressTextArea(){
        const element = "#currentAddress"
        return element
    },

    stateSelect(){
        const element = "#react-select-3-input"
        return element
    },

    citySelect(){
        const element = "#react-select-4-input"
        return element
    },

    submitButton(){
        return basePage.findElement("#submit")
    },

    studentNameGridvalue(){
        return basePage.findElement("tr:nth-child(1) td:nth-child(2)")
    },

    studentEmailGridvalue(){
        return basePage.findElement("tr:nth-child(2) td:nth-child(2)")
    },

    genderGridvalue(){
        return basePage.findElement("tr:nth-child(3) td:nth-child(2)")
    },

    mobileGridvalue(){
        return basePage.findElement("tr:nth-child(4) td:nth-child(2)")
    },

    dateOfBirthGridvalue(){
        return basePage.findElement("tr:nth-child(5) td:nth-child(2)")
    },

    subjetsGridvalue(){
        return basePage.findElement("tr:nth-child(6) td:nth-child(2)")
    },

    hobbiesGridvalue(){
        return basePage.findElement("tr:nth-child(7) td:nth-child(2)")
    },

    pictureGridvalue(){
        return basePage.findElement("tr:nth-child(8) td:nth-child(2)")
    },

    adressGridvalue(){
        return basePage.findElement("tr:nth-child(9) td:nth-child(2)")
    },

    stateAndCityGridvalue(){
        return basePage.findElement("tr:nth-child(10) td:nth-child(2)")
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

    selectGender(content){
        basePage.checkBoxByIdAndContent(this.radioButtonGender(),content)
    },

    fillMobile(data){
        basePage.writeInputValue(this.mobileForm(),data)
    },

    selectDateOfBirth(day,month,year){
        this.dateOfBirthForm()
            .click()
        this.dateYearSelect()
            .select(year)
        this.dateMonthSelect()
            .select(month)
        basePage.findElementByClassAndContent(this.dateDayCalendar(),day)
            .click()
    },

    fillSubject(data){
        this.subjectForm().type(data)
        basePage.findElement("#react-select-2-option-0")
            .click();
    },

    selectReadingHobbie(){
        this.readingHobbieCheckbox()
            .check({force:true})
    },

    selectPicture(){
        basePage.uploadFile(this.pictureButton(),"cypress/images/QA2.jpg")
    },

    fillCurrentAdress(data){
        basePage.writeInputValue(this.currentAdressTextArea(),data)
            .tab()
    },

    fillState(data){
        basePage.findElement(this.stateSelect(),{force:true})
            .type(data,{force:true})
            .tab();
    },

    fillCity(data){  
        basePage.findElement(this.citySelect(),{force:true})
            .type(data,{force:true})
            .tab();
    },

    clickSubmitButton(){
        this.submitButton()
            .click({force:true});
    },

    assertStudentName(firstName,lastName){
        this.studentNameGridvalue()
            .should("have.text",firstName + " " + lastName)
    },

    assertStunderEmail(email){
        this.studentEmailGridvalue()
            .should("have.text",email)
    },

    assertGender(gender){
        this.genderGridvalue()
            .should("have.text",gender)
    },

    assertMobile(mobile){
        this.mobileGridvalue()
            .should("have.text",mobile)
    },

    assertDateOfBirth(day,month,year){
        this.dateOfBirthGridvalue()
            .should("have.text",day + " " + month +","+ year)
    },
    
    assertSubjects(subject){
        this.subjetsGridvalue()
            .should("have.text", subject)
    },

    assertHobbies(hobbie){
        this.hobbiesGridvalue()
            .should("have.text",hobbie)
    },

    assertPicture(pictureName){
        this.pictureGridvalue()
            .should("have.text",pictureName)
    },

    assertAdress(address){
        this.adressGridvalue()
            .should("have.text", address)
    },

    assertStateAndCity(state,city){
        this.stateAndCityGridvalue()
            .should("have.text",state + " " + city)
    }



}