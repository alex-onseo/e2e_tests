import {
  testingPage
} from './pageObject'

describe('product crud', () => {
      const TPage = new testingPage;


      it('click add quotation', () => {
        TPage.navigate()
        TPage.addProductLink().click()



      })
  it('input name', () => {
    TPage.productNameInput().type(' new product')
  })
  it('open measure dropdown', () => {
    TPage.productSelector().click()

  })
  it('select measure', () => {
    TPage.addProductMeasure().click()

  })
  it('click ADD', () => {
    TPage.buttonAddProduct().click()
  })

  it('check unique alert message', () => {
    TPage.checkUniqueName().should('not.exist')

  })
  it('open product list', () => {
    TPage.productTabHeader().click({
      force: true
    })

  })
  it('check element in the grid', () => {
    TPage.productInGrid().should('be.visible')
  })
  it('click on the element in the grid', () => {
    TPage.productInGrid().click()
  })
  it('input name', () => {
    TPage.productNameInput().click().clear().clear().type('новый продукт')
  })
  it('click ADD', () => {
    TPage.buttonAddProduct().click()

  })
  it('check unique alert message', () => {
    TPage.checkUniqueName().should('not.exist')
  })

})
