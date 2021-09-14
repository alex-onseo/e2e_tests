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
        TPage.insurancetNameInput().type('Alex insuranceCompany #1')
    })
    it('input insuranceCompany  legal address', () => {
        TPage.insuranceAddressInput().type('Alex insuranceCompany 1 address')
    })

    it('input insuranceCompany  correspondenceAddress address', () => {
        TPage.insurancecorrespondenceAddressInput().type('Alex correspondenceAddress 1 address')
    })
    it('input insuranceCompany group', () => {
        TPage.InsuranceAddGroup().type('Alex new group')
    })
    it('input insuranceCompany VAT', () => {
        TPage.insuranceVatInput().type('01234568')
    })

    // it('click outside', () => {
    //     TPage.insuranceVatInput().click()
    // });

    it('save insuranceCompany', () => {
        TPage.insurancetAddButton().click()
    })

    it('return to insuranceCompany  list', () => {
        TPage.insuranceTabHeader().click()
    })
    it('find insuranceCompany  in the list', () => {
        TPage.insuranceInGrid().contains("Alex insuranceCompany #1").should('be.visible')
    })
    it('click found insuranceCompany in the list', () => {
        TPage.insuranceInGrid().contains("Alex insuranceCompany #1").click()
    })
    it('edit insuranceCompany name', () => {
        TPage.insurancetNameInput().clear().type('Alex новое имя insuranceCompany')
    })
    it('edit insuranceCompany VAT', () => {
        TPage.insuranceVatInput().clear()
    })
    it('edit insuranceCompany address', () => {
        TPage.insuranceAddressInput().clear().type('новый адрес insuranceCompany')
    })
    it('input insuranceCompany group', () => {
        TPage.InsuranceAddGroup().clear().type('Alex new group#2')
    })
    it('click outside', () => {
        TPage.insuranceVatInput().click()
    });

    it('save editted insuranceCompany', () => {
        TPage.insuranceSaveButton().click()
    })

    it('add insuranceCompany bank ', () => {
        TPage.insurancetAddBank().click()
    })
    it('input insuranceCompany bank name', () => {
        TPage.insuranceAddBankName().type('Alex Privat')
    })
    it('input insuranceCompany bank address', () => {
        TPage.insuranceAddBankAddress().type('Privat address')
    })
    it('input insuranceCompany bank BIC', () => {
        TPage.insuranceAddBankBic().type('0123456')
    })
    it('input insuranceCompany bank SWIFT', () => {
        TPage.insuranceAddBankSwift().type('654321')
    })
    it('save bank account', () => {
        TPage.bankAccSave().click()
    })

    it('find insuranceCompany bank account and click to edit', () => {
        cy.wait(2000), TPage.insuranceBankInGrid().contains("Alex Privat").realHover()
        cy.wait(2000), TPage.insuranceBankEditButton().click()

    })
    it('click delete insuranceCompany bank account', () => {

        cy.wait(2000) ,TPage.insuranceBankDelete().click()

    })

    it('add insuranceCompany bank ', () => {
        cy.wait(1000), TPage.insurancetAddBank().click()
    })
    it('input insuranceCompany bank name', () => {
        TPage.insuranceAddBankName().type('Alex Aval')
    })
    it('input insuranceCompany bank address', () => {
        TPage.insuranceAddBankAddress().clear()
    })
    it('input insuranceCompany bank BIC', () => {
        TPage.insuranceAddBankBic().clear()
    })
    it('input insuranceCompany bank SWIFT', () => {
        TPage.insuranceAddBankSwift().clear()
    })
    it('save insuranceCompany account', () => {
        TPage.bankAccSave().click()
    })
    it('find insuranceCompany bank account and click to edit', () => {
        cy.wait(2000), TPage.insuranceBankInGrid().contains("Alex Aval").realHover()
        cy.wait(2000), TPage.insuranceBankEditButton().click()

    })
    it('click delete insuranceCompany bank account', () => {

        cy.wait(2000) ,TPage.insuranceBankDelete().click()

    })


})
