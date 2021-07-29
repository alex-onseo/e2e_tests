import "cypress-real-events/support";
import {
    testingPage
} from './pageObject'

describe(' insuranceCompany crud', () => {
    const TPage = new testingPage;


    it('click insuranceCompany link', () => {
        TPage.navigate()
        TPage.insuranceCompanyLink().click()



    })
    it('click add new insuranceCompany', () => {
        TPage.insuranceAdd().click()
    })

    it('input insuranceCompany  name', () => {
        TPage.insurancetNameInput().type('insuranceCompany #1')
    })
    it('input insuranceCompany  address', () => {
        TPage.insuranceAddressInput().type('insuranceCompany 1 address')
    })
    it('input insuranceCompany VAT', () => {
        TPage.insuranceVatInput().type('01234568')
    })

    it('save insuranceCompany', () => {
        TPage.insurancetAddButton().click()
    })

    it('return to insuranceCompany  list', () => {
        TPage.insuranceList().click()
    })
    it('find insuranceCompany  in the list', () => {
        TPage.insuranceInGrid().should('be.visible')
    })
    it('click found insuranceCompany in the list', () => {
        TPage.insuranceInGrid().click()
    })
    it('edit insuranceCompany name', () => {
        TPage.insurancetNameInput().clear().type('новое имя insuranceCompany')
    })
    it('edit insuranceCompany VAT', () => {
        TPage.insuranceVatInput().clear().type('987654321')
    })
    it('edit insuranceCompany address', () => {
        TPage.insuranceAddressInput().clear().type('новый адресс insuranceCompany')
    })

    it('save editted insuranceCompany', () => {
        TPage.insuranceSaveButton().click()
    })

    it('add insuranceCompany bank ', () => {
        TPage.insurancetAddBank().click()
    })
    it('input insuranceCompany bank name', () => {
        TPage.insuranceAddBankName().type('Privat')
    })
    it('input insuranceCompany bank address', () => {
        TPage.insuranceAddBankAddress().type('Privat address')
    })
    it('input insuranceCompany bank BIC/SWIFT', () => {
        TPage.insuranceAddBankSwift().type('0123456')
    })
    it('save bank account', () => {
        TPage.bankAccSave().click()
    })

    it('find insuranceCompany bank account and click to edit', () => {
        cy.wait(2000), TPage.insuranceBankInGrid().realHover()
        cy.wait(2000), TPage.insuranceBankEditButton().click()

    })
    it('click delete insuranceCompany bank account', () => {

        cy.wait(2000) ,TPage.insuranceBankDelete().click()

    })

    it('add insuranceCompany bank ', () => {
        cy.wait(1000), TPage.insurancetAddBank().click()
    })
    it('input insuranceCompany bank name', () => {
        TPage.insuranceAddBankName().type('Aval')
    })
    it('input insuranceCompany bank address', () => {
        TPage.insuranceAddBankAddress().type('Aval adress')
    })
    it('input insuranceCompany bank BIC/SWIFT', () => {
        TPage.insuranceAddBankSwift().type('7897978978')
    })
    it('save insuranceCompany account', () => {
        TPage.bankAccSave().click()
    })


})
