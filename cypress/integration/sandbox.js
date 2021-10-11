import {
  testingPage
} from './pageObject'

describe('port crud', () => {
      const TPage = new testingPage;


      it('click contractsLink', () => {
        TPage.navigate()
        TPage.contractsLink().contains("Контракты").click()
      })
      it('click contractAddButton', () => {
        TPage.contractsAddButton().click()
      })

      it('click ProjectSelect', () => {
        TPage.contractsProjectSelect().click()
      })
      it('select contract ', () => {
        TPage.contarctsProjectSelect().contains('project1').click()

      })
      it('select contract ', () => {
      cy.closeAllTabs()
      })




})
