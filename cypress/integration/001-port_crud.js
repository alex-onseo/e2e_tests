import {
  testingPage
} from './pageObject'

describe('port crud', () => {
      const TPage = new testingPage;


      it('click port link', () => {
        TPage.navigate()
        TPage.portsLink().click()
      })
      it('click add port', () => {
        TPage.addPortLink().click()
      })
      it('input port name', () => {
        TPage.portNameInput().type('Amsterdam')
      })
      it('save port name', () => {
        TPage.buttonAddPort().click()
      })
      it('open port list', () => {
        TPage.portTabHeader().click()
      })
      it('click on the element in the grid', () => {
        TPage.portInGrid().click()
      })
      it('edit port name', () => {
        TPage.portNameInput().clear().type('Baltimore')
      })
      it('save eddited region name', () => {
        TPage.vesselsNameInput().click()
      })

})
