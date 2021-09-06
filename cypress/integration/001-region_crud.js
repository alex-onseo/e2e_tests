import {
  testingPage
} from './pageObject'

describe('region crud', () => {
      const TPage = new testingPage;


      it('click region link', () => {
        TPage.navigate()
        TPage.regionLink().click()
      })
      it('click add region', () => {
        TPage.addRegionLink().click()
      })
      it('input region name', () => {
        TPage.regionInputField().type('Alex US Region')
      })
      it('save region name', () => {
        TPage.regionAddButton().click()
      })
      it('open region list', () => {
        TPage.regionList().click()
      })
      it('click on the element in the grid', () => {
        TPage.regionInGrid().contains("Alex US Region").click()
      })
      it('edit region name', () => {
        TPage.regionInputField().clear().type('Alex EU reg')
      })
      it('save eddited region name', () => {
        TPage.regionEditSave().click()
      })

})
