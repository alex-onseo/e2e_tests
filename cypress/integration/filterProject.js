import {
  testingPage
} from './pageObject'

describe('filters', () => {
  const TPage = new testingPage;


  it('click project link', () => {
    TPage.navigate()
    TPage.projectLink().click()
  })
  it('open filter tab', () => {
    TPage.filterButton().click()
  })

  it('input filter Name', () => {
    cy.wait(500), TPage.filterNameInput().type('Alex')
  })
  it('apply filters', () => {
    cy.wait(500), TPage.filterApplyButton().click()
  })
  it('check filterred data possitive', () => {
    cy.wait(500), TPage.Sub_projectListName().contains('Alex').should("be.visible")
  })
  it('check filterred data negative', () => {
    cy.wait(500), TPage.Sub_projectListName().contains('Alex2').should('not.exist')
  })
  it('reset filters', () => {
    cy.wait(500), TPage.filterResetButton().click()
  })
  it('reset filter clears the data', () => {
    cy.wait(500), TPage.filterNameInput().contains('Alex').should('not.exist')
    cy.wait(500), TPage.filterNameInput().contains('Alex').should('not.exist')

  })


})
