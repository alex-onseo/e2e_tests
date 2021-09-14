import {
  testingPage
} from './pageObject'

describe('filters regions', () => {
  const TPage = new testingPage;


  it('click regions link', () => {
    TPage.navigate()
    TPage.regionLink().click()
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
    cy.wait(500), TPage.regionInGrid().contains('Alex').should("be.visible")
  })
  it('check filterred data negative', () => {
    cy.wait(500), TPage.regionInGrid().contains('Alex2').should('not.exist')
  })
  it('reset filters', () => {
    cy.wait(500), TPage.filterResetButton().click()
  })
  it('reset filter clears the data', () => {
    cy.wait(500), TPage.filterNameInput().should('have.value','');

  })


})