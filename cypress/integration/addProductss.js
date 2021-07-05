import {quotationsPage} from './pageObject'

describe ('test', () => {
  const QPage = new quotationsPage;


  it('click add quotation', () => {
    QPage.navigate()
    QPage.addProductLink().click()



      })
      it ('input name', () => {
        QPage.quotationNameInput().type('rerewrwsуцddsdwddd4de')
      })
      it ('input name', () => {
        QPage.quotationSelector().click()

      })
      it ('input name', () => {
        QPage.addQuotationMeasure().click()

      })
      it ('input name', () => {
        QPage.buttonAddProduct().click()

      })
      it ('input name', () => {
        QPage.productTabHeader().click({force: true})

      })

})
