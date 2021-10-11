import {
  testingPage
} from './pageObject'

describe('filters', () => {
  const TPage = new testingPage;


  it('click incoterm(bod) link', () => {
    TPage.navigate()
    TPage.bodLink().click()
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
    cy.wait(500), TPage.bodListName().contains('Alex').should("be.visible")
  })
  it('check filterred data negative', () => {
    cy.wait(500), TPage.bodListName().contains('Alex2').should('not.exist')
  })
  it('reset filters', () => {
    cy.wait(500), TPage.filterResetButton().click()
  })
  it('reset filter clears the data', () => {
    cy.wait(500), TPage.filterNameInput().contains('Alex').should('not.exist')
    cy.wait(500), TPage.filterGroupInput().contains('Alex').should('not.exist')

  })
  it('input filter group', () => {
    cy.wait(500), TPage.filterGroupInput().type('Alex')
  })
  it('apply filters', () => {
    cy.wait(500), TPage.filterApplyButton().click()
  })
  it('check filterred data possitive', () => {
    cy.wait(500), TPage.bodListGroup().contains('Alex').should("be.visible")
  })
  it('check filterred data negative', () => {
    cy.wait(500), TPage.bodListGroup().contains('Alex2').should('not.exist')
  })
  it('reset filters', () => {
    cy.wait(500), TPage.filterResetButton().click()
  })
  it('reset filter clears the data', () => {
    cy.wait(500), TPage.filterNameInput().contains('Alex').should('not.exist')
    cy.wait(500), TPage.filterGroupInput().contains('Alex').should('not.exist')

  })
  it('click filter Incoterm', () => {
    cy.wait(500), TPage.bodFilterIncotermSelector().click()
  })
  it('select filter Incoterm', () => {
    cy.wait(500), TPage.bodFilterIncotermList().contains("CPT").click()
  })

  it('apply filters', () => {
    cy.wait(500), TPage.filterApplyButton().click()
  })
  it('check filterred data possitive', () => {
    cy.wait(500), TPage.bodListIncoterm().contains('CPT').should("be.visible")
  })
  it('check filterred data negative', () => {
    cy.wait(500), TPage.bodListIncoterm().contains('FCA').should('not.exist')
  })
  it('reset filters', () => {
    cy.wait(500), TPage.filterResetButton().click()
  })
  it('reset filter clears the data', () => {
    cy.wait(500), TPage.filterNameInput().contains('Alex').should('not.exist')
    cy.wait(500), TPage.filterGroupInput().contains('Alex').should('not.exist')

  })

})
