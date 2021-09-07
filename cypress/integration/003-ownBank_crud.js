import {
  testingPage
} from './pageObject'

describe('own bank crud', () => {
  const TPage = new testingPage;


  it('click add bank', () => {
    TPage.navigate()
    TPage.ownbanksLink().click()



  })
  it('input add new', () => {
    TPage.addBankLink().click()
  })
  it('input group', () => {
    TPage.bankGroupInputField().type('Alex group')
  })
  it('input bank name', () => {
    TPage.bankNameInputField().type('Alex bank1')
  })
  it('input bank address', () => {
    TPage.bankAddressInputField().type('address')
  })
  it('input BIC/SWIFT', () => {
    TPage.bankBicInputField().type('0011223344')
  })
  it('click add bank', () => {
    TPage.bankAddButton().click()
  })

  it('return to bank list', () => {
    TPage.bankTabHeader().click()
  })
  it('find bank in the list', () => {
    TPage.bankInGrid().contains("Alex bank1").should('be.visible')
  })
  it('click found bank in the list', () => {
    TPage.bankInGrid().contains("Alex bank1").click()
  })
  it('edit group', () => {
    TPage.bankGroupInputField().clear().type('Alex новая группа')
  })
  it('edit bank name', () => {
    TPage.bankNameInputField().clear().type('Alex новый банк')
  })
  it('edit bank address', () => {
    TPage.bankAddressInputField().clear().type('new address')
  })
  it('edit BIC/SWIFT', () => {
    TPage.bankBicInputField().clear().type('990011223344')
  })
  it('save eddited bank', () => {
    TPage.bankSave().click()
  })
  it('add bank account', () => {
    TPage.bankAddAccount().click()
  })

  it('input account Iban', () => {
    TPage.bankAccIbanInputField().type('UA123456789')
  })
  it('input bank currency', () => {
    TPage.bankAccCurrencyField().type('UAH')
  })
  it('input bank address', () => {
    TPage.bankAccBankField().type('Alex Bank_1')
  })
  it('input BIC/SWIFT', () => {
    TPage.bankAccSwiftField().type('0123456')
  })
  it('save bank account', () => {
    TPage.bankAccSave().click()
  })
  it('find bank account', () => {
    TPage.bankAccinGrid().contains("UA123456789").click({force:true})
  })



  it('delete  bank account', () => {
    cy.wait(2000) ,TPage.bankAccDelete().click()

  })
})
