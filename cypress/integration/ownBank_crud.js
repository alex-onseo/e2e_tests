import {
    testingPage
} from './pageObject'

describe('test', () => {
    const TPage = new testingPage;


    it('click add bank', () => {
        TPage.navigate()
        TPage.ownbanksLink().click()



    })
    it('input add new', () => {
        TPage.addBankLink().click()
    })
    it('input group', () => {
        TPage.bankGroupInputField().type('new group')
    })
    it('input bank name', () => {
        TPage.bankNameInputField().type('new bank')
    })
    it('input bank address', () => {
        TPage.bankAddressInputField().type('new address')
    })
    it('input BIC?SWIFT', () => {
        TPage.bankBicInputField().type('0011223344')
    })
    
})