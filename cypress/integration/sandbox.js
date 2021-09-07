import {
  testingPage
} from './pageObject'

describe('filters', () => {
  const TPage = new testingPage;


  it('click clients link', () => {
    TPage.navigate()
    TPage.clientsLink().click()
  })
  it('open filter tab', () => {
    TPage.filterButton().click()
  })
  it('input filter abbreviation', () => {
    cy.wait(500), TPage.filterAbbrevistionInput().type('Alex')
  })
  it('input filter Name', () => {
    cy.wait(500), TPage.filterNameInput().type('Alex')
  })
  it('input filter group', () => {
    cy.wait(500), TPage.filterGroupInput().type('Alex')
  })

  it('apply filters', () => {
    cy.wait(500), TPage.filterApplyButton().click()
  })
  it('check filterred data possitive', () => {
    cy.wait(500), TPage.filteredData().contains('Alex').should("be.visible")
  })
  it('check filterred data negative', () => {
    cy.wait(500), TPage.filteredData().contains('Alex2').should('not.exist')
  })
  it('reset filters', () => {
    cy.wait(500), TPage.filterResetButton().click()
  })
  it('reset filter clears the data', () => {
    cy.wait(500), TPage.filterNameInput().contains('Alex').should('not.exist')
    cy.wait(500), TPage.filterGroupInput().contains('Alex').should('not.exist')
    cy.wait(500), TPage.filterAbbrevistionInput().contains('Alex').should('not.exist')
  })

})
