import {quotationsPage} from './pageObject'

describe ('test', () => {
  const QPage = new quotationsPage;


  it('click add quotation', () => {
    QPage.navigate()
    QPage.addProductLink().click()



      })
      it ('input name', () => {
        QPage.quotationNameInput().type('rerewrw')
      })
      it ('input name', () => {
        QPage.quotationSelector().click()

      })
      it ('input name', () => {
        QPage.quotationMeasureSelector().click()

      })


})
