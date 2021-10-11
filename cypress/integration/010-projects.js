import {
  testingPage
} from './pageObject'

describe('bod crud', () => {
  const TPage = new testingPage;


  it('click project link', () => {
    TPage.navigate()
    TPage.projectLink().click()
  })
  it('click add project button', () => {
    TPage.projectCreateButton().click()
  })
  it('Input project name', () => {
    TPage.projectNameInputField().type('Alex project#1')
  })
  it('input project description', () => {
    TPage.projectDescriptionNameInputField().type('Alex project describe');

  })
  it('save project ', () => {
    TPage.projectSaveButton().click();

  })
  it('return to project list', () => {
    TPage.projectListTabHeader().click()
  })

  it('click on the element in the project grid', () => {
    TPage.projectInGrid().contains("Alex project#1").click()
  })
  it('edit project name', () => {
    TPage.projectNameInputField().clear().type('Alex проект "№2')
  })
  it('edit project description', () => {
    TPage.projectDescriptionNameInputField().clear().type('Alex описание проекта "№2')
  })
  it('save project ', () => {
    TPage.projectEditedSave().click()
  })

  it('click add Sub_project button', () => {
    TPage.Sub_projectCreateButton().click()
  })
  it('Input Sub_project name', () => {
    TPage.Sub_projecttNameInputField().type('Alex Sub_project#1')
  })
  it('input Sub_project description', () => {
    TPage.Sub_projectDescriptionNameInputField().type('Alex Sub_project describe');

  })
  it('save Sub_project ', () => {
    TPage.Sub_projectAddButton().click();

  })

  it("find sub_project and click to edit", () => {
    cy.wait(2000), TPage.Sub_projectInGrid().contains("Alex Sub_project#1").realHover();
    cy.wait(2000), TPage.Sub_projectEditButton().click();
  });
  it("click delete sub_project", () => {
    cy.wait(2000), TPage.Sub_projectDelete().click();
  });

})
