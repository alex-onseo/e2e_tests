import "cypress-real-events/support";
import {
    testingPage
} from './pageObject'

describe(' subcompany crud', () => {
    const TPage = new testingPage;


    it('click subcompany link', () => {
        TPage.navigate()
        TPage.subcompanyLink().click()
    })

    it('click add new subcompany', () => {
        TPage.subcompanyAdd().click()
    })
    it('input subcompany  name', () => {
        TPage.subcompanyNameInput().type('Alex subcompany #1')
    })
        it('input subcompany group', () => {
        TPage.subcompanyAddGroup().type('Alex subcompany group')
    })
        it('save subcompany', () => {
        TPage.subcompanyAddButton().click()
    })
    it('return to subcompany  list', () => {
        TPage.subcompanyTabHeader().click()
    })
    it('find subcompany  in the list', () => {
        TPage.subcompanyInGrid().contains("Alex subcompany #1").should('be.visible')
    })
    it('click found subcompany in the list', () => {
        TPage.subcompanyInGrid().contains("Alex subcompany #1").click()
    })
    it('edit subcompany name', () => {
        TPage.subcompanyNameInput().clear().type('Alex новое имя subcompany')
    })
        it('input subcompany group', () => {
        TPage.subcompanyAddGroup().clear().type('Alex group#2')
    })
        it('save edited subcompany', () => {
        TPage.subcompanySaveButton().click()
    })
    it('add subcompany bank ', () => {
        TPage.subcompanyAddBank().click()
    })
    it('input subcompany bank name', () => {
        cy.wait(1000),TPage.subcompanyAddBankName().type('Alex Privat')
    })
    it('input subcompany bank address', () => {
        TPage.subcompanyAddBankAddress().type('Privat address')
    })
    it('input subcompany bank SWIFT', () => {
        TPage.subcompanyAddBankSwift().type('0123456')
    })
    it('input subcompany bank BIC', () => {
        TPage.subcompanyAddBankSwift().type('0123456')
    })
    it('save bank account', () => {
        TPage.bankAccSave().click()
    })

    it('find subcompany bank account and click to edit', () => {
        cy.wait(2000), TPage.subcompanyBankInGrid().contains("Alex Privat").realHover()
        cy.wait(2000), TPage.subcompanyBankEditButton().click()

    })
    it('click delete subcompany bank account', () => {

        cy.wait(2000) ,TPage.subcompanyBankDelete().click()

    })

    // it('add subcompanyCompany bank ', () => {
    //     cy.wait(1000), TPage.clientAddBank().click()
    // })
    // it('input subcompanyCompany bank name', () => {
    //     TPage.subcompanyAddBankName().type('Alex Aval')
    // })
    // it('input subcompanyCompany bank address', () => {
    //     TPage.subcompanyAddBankAddress().clear()
    // })
    // it('edit subcompany bank SWIFT', () => {
    //     TPage.subcompanyAddBankSwift().clear()
    // })
    // it('edit subcompany bank BIC', () => {
    //     TPage.subcompanyAddBankBic().clear()
    // })
    // it('save subcompanyCompany account', () => {
    //     TPage.bankAccSave().click()
    // })
    // it('find subcompany bank account and click to edit', () => {
    //     cy.wait(2000), TPage.subcompanyBankInGrid().contains("Alex Aval").realHover()
    //     cy.wait(2000), TPage.subcompanyBankEditButton().click()
    //
    // })
    // it('click delete subcompany bank account', () => {
    //
    //     cy.wait(2000) ,TPage.subcompanyBankDelete().click()

    // })


})
