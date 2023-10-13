import basePage from "../pages/basePage"
import formsPage from "../pages/formsPage";
import homePage from "../pages/homePage"
const data = require("../../fixtures/formsData.json")

describe("Interact with diferent kind of forms elements",()=>{

    beforeEach("Access routine ",()=>{
        basePage.visitDefaultUrl();
        homePage.navigateToPraticeForm();
    })

    it("Verify user can submit the form",()=>{
        formsPage.fillFirstName(data.firstName);
        formsPage.fillLastName(data.lastName);
        formsPage.fillEmail(data.email);
        formsPage.selectGender(data.gender);
        formsPage.fillMobile(data.mobile);
        formsPage.selectDateOfBirth(data.dateDay,data.dateMonth,data.dateYear);
        formsPage.fillSubject(data.subjects);
        formsPage.selectReadingHobbie();
        formsPage.selectPicture();
        formsPage.fillCurrentAdress(data.currentAdress);
        formsPage.fillState(data.state);
        formsPage.fillCity(data.city);
        formsPage.clickSubmitButton();
        formsPage.assertStudentName(data.firstName,data.lastName);
        formsPage.assertStunderEmail(data.email);
        formsPage.assertGender(data.gender);
        formsPage.assertMobile(data.mobile);
        formsPage.assertDateOfBirth(data.dateDay,data.dateMonth,data.dateYear);
        formsPage.assertSubjects(data.subjects);
        formsPage.assertHobbies(data.hobbies);
        formsPage.assertPicture(data.pictureName);
        formsPage.assertAdress(data.currentAdress);
        formsPage.assertStateAndCity(data.state,data.city);
    })
})