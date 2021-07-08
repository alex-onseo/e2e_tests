import {quotationsPage} from './pageObject'

describe ('quotation crud', () => {
  const QPage = new quotationsPage;


  it('click add quotation', () => {
    QPage.navigate()
    QPage.quotationsLink().click()



      })
      it ('click add', () => {
        QPage.addQuotationLink().click()
      })
      it ('input short name', () => {
        QPage.quotationNameInput().type('  new_quotation777')
      })
      it ('input full name', () => {
        QPage.quotationFullNameInput().type(' Full777')
      })
      it ('click add', () => {
        QPage.quotationButtonAdd().click()
      })
      it('return to the grid', () => {
        QPage.quotationList().click()
      })
      it('click on the element in the grid', () => {
        QPage.quotationInGrid().click({force:true})

      })
      it ('input short name', () => {
        QPage.quotationNameEdit().clear().type('new name2')
      })
      it ('input full name', () => {
        QPage.quotationFullNameEdit().clear().type(' Full2')
      })
      it ('save edited quotation', () => {
        QPage.quotationEditSave().click()
        cy.get('#parent')
      })






})
