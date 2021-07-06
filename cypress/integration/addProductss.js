import {
  quotationsPage
} from './pageObject'

import random_name1 from './pageObject'
import random_name2 from './pageObject' 



describe('test', () => {
  const QPage = new quotationsPage;


  it('click add quotation', () => {
    QPage.navigate()
    QPage.addProductLink().click()



  })
  it('input name', () => {
    QPage.productNameInput().type(random_name1)
  })
  it('open measure dropdown', () => {
    QPage.productSelector().click()

  })
  it('select measure', () => {
    QPage.addProductMeasure().click()

  })
  it('click ADD', () => {
    QPage.buttonAddProduct().click()
  })

  it('check unique alert message', () => {
    QPage.checkUniqueName().should('not.exist')

  })
  it('open product list', () => {
    QPage.productTabHeader().click({
      force: true
    })

  })
  it('check element in the grid', () => {
    QPage.productInGrid().should('be.visible')
  })
  it('click on the element in the grid', () => {
    QPage.productInGrid().click()
  })
  it('input name', () => {
    QPage.productNameInput().click().clear().type(random_name2)
  })
  it('click ADD', () => {
    QPage.buttonAddProduct().click()

  })
    it('check unique alert message', () => {
      QPage.checkUniqueName().should('not.exist')
  })

})
