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
    TPage.bankGroupInputField().type('group')
  })
  it('input bank name', () => {
    TPage.bankNameInputField().type('bank')
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
    TPage.bankList().click()
  })
  it('find bank in the list', () => {
    TPage.bankInGrid().should('be.visible')
  })
  it('click found bank in the list', () => {
    TPage.bankInGrid().click()
  })
  it('edit group', () => {
    TPage.bankGroupEditField().clear().type('new group')
  })
  it('edit bank name', () => {
    TPage.bankNameEditField().clear().type('new bank')
  })
  it('edit bank address', () => {
    TPage.bankAddressEditField().clear().type('new address')
  })
  it('edit BIC/SWIFT', () => {
    TPage.bankBicEditField().clear().type('990011223344')
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
  it('input bank name', () => {
    TPage.bankAccCurrencyField().type('UAH')
  })
  it('input bank address', () => {
    TPage.bankAccBankField().type('Bank_1')
  })
  it('input BIC/SWIFT', () => {
    TPage.bankAccSwiftField().type('0123456')
  })
  it('save bank account', () => {
    TPage.bankAccSave().click()
  })
  it('find bank account', () => {
    TPage.bankAccinGrid().click({force:true})
  })
  


  it('delete  bank account', () => {
    cy.wait(4000) ,TPage.bankAccDelete().click()

  })
})
