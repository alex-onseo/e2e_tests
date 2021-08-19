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
    it('input insuranceCompany group', () => {
        TPage.InsuranceAddGroup().type('new group')
    })

    it('save insuranceCompany', () => {
        TPage.insurancetAddButton().click()
    })

    it('return to insuranceCompany  list', () => {
        TPage.insuranceList().click()
    })
    it('find insuranceCompany  in the list', () => {
        TPage.insuranceInGrid().contains("insuranceCompany #1").should('be.visible')
    })
    it('click found insuranceCompany in the list', () => {
        TPage.insuranceInGrid().contains("insuranceCompany #1").click()
    })
    it('edit insuranceCompany name', () => {
        TPage.insurancetNameInput().clear().type('новое имя insuranceCompany')
    })
    it('edit insuranceCompany VAT', () => {
        TPage.insuranceVatInput().clear()
    })
    it('edit insuranceCompany address', () => {
        TPage.insuranceAddressInput().clear().type('новый адрес insuranceCompany')
    })
    it('input insuranceCompany group', () => {
        TPage.InsuranceAddGroup().clear()
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
        TPage.insuranceAddBankAddress().clear()
    })
    it('input insuranceCompany bank BIC/SWIFT', () => {
        TPage.insuranceAddBankSwift().clear()
    })
    it('save insuranceCompany account', () => {
        TPage.bankAccSave().click()
    })


})
