import {
  testingPage
} from './pageObject'

describe('vessel crud', () => {
      const TPage = new testingPage;


      it('click vessel link', () => {
        TPage.navigate()
        TPage.vesselsLink().click()
      })
      it('click add vessel', () => {
        TPage.addVesselsLink().click()
      })
      it('input vessel name', () => {
        TPage.vesselsNameInput().type('Alex Pinta')
      })
      it('save vessel name', () => {
        TPage.buttonAddvessels().click()
      })
      it('open vessel list', () => {
        TPage.vesselsTabHeader().click()
      })
      it('click on the element vessel in the grid', () => {
        TPage.vesselsInGrid().contains("Alex Pinta").click()
      })
      it('edit vessel name', () => {
        TPage.vesselsNameInput().clear().type('Alex Зоркий')
      })
      it('save eddited vessel name', () => {
        TPage.vesselEditSave().click()
      })

})
