import {
  testingPage
} from './pageObject'

describe('product crud', () => {
      const TPage = new testingPage;


  it('open product dictionary', () => {
        TPage.navigate()
        TPage.productsLink().click()
      })
  it('click add product', () => {
                        TPage.addProductLink().click()
          })
  it('input name', () => {
    TPage.productNameInput().type('Alex new product')
  })
  it('open measure dropdown', () => {
    TPage.productMeasureSelector().click()

  })
  it('select measure', () => {
    TPage.addProductMeasure().contains("Тонны").click()

  })
  it('input name', () => {
    TPage.productAbbreviationInput().type('Alex NP')
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
    TPage.productInGrid().contains(" new product").click()
  })
  it('input name', () => {
    TPage.productNameInput().click().clear()
  })
  it('input name', () => {
    TPage.productNameInput().click().clear().type('Alex новый продукт')
  })
  it('open measure dropdown', () => {
    TPage.productMeasureEdit().click()

  })
  it('select measure', () => {
    TPage.editProductMeasure().contains("Баррели").click()

  })
  it('click ADD', () => {
    TPage.buttonAddProduct().click()

  })
  it('check unique alert message', () => {
    TPage.checkUniqueName().should('not.exist')
  })

})
