import basePage from "../pages/basePage"
import homePage from "../pages/homePage";
import webTablePage from "../pages/webTablePage";
const data = require("../../fixtures/webTablesData.json")

describe("Interact with web tables elements",()=>{

    beforeEach("Access Routine", ()=>{
        basePage.visitDefaultUrl();
        homePage.navigateToWebTables();
    })
    it("Verify user can enter new data into the table",()=>{
        webTablePage.clickAddButton();
        webTablePage.fillFirstName(data.firstName)
        webTablePage.fillLastName(data.lastName)
        webTablePage.fillEmail(data.email)
        webTablePage.fillAge(data.age)
        webTablePage.fillSalary(data.salary)
        webTablePage.fillDepartment(data.department)
        webTablePage.clickSubmitButton();
        webTablePage.validateValueInLineAndColumn(4,1,data.firstName)
        webTablePage.validateValueInLineAndColumn(4,2,data.lastName)
        webTablePage.validateValueInLineAndColumn(4,3,data.age)
        webTablePage.validateValueInLineAndColumn(4,4,data.email)
        webTablePage.validateValueInLineAndColumn(4,5,data.salary)
        webTablePage.validateValueInLineAndColumn(4,6,data.department)
    })

    it("Verify user can edit the row in a table",()=>{
        webTablePage.editRegisterTwo();
        webTablePage.fillFirstName(data.alterFirstName);
        webTablePage.fillLastName(data.alterLastName);
        webTablePage.clickSubmitButton();
        webTablePage.validateValueInLineAndColumn(2,1,data.alterFirstName);
        webTablePage.validateValueInLineAndColumn(2,2,data.alterLastName)
    })
})