import "cypress-real-events/support";
import {
    testingPage
} from './pageObject'

describe(' inspections crud', () => {
    const TPage = new testingPage;


    it('click inspections link', () => {
        TPage.navigate()
        TPage.inspectionsLink().click()



    })
    it('click add new inspections', () => {
        TPage.inspectionsAdd().click()
    })

    it('input inspections  name', () => {
        TPage.inspectionsNameInput().type('inspections #1')
    })
    it('input inspections  address', () => {
        TPage.inspectionsAddressInput().type('inspections 1 address')
    })
    it('input inspections VAT', () => {
        TPage.inspectionsVatInput().type('01234568')
    })
    it('input inspections VAT', () => {
        TPage.inspectionsAddGroup().type('inspect group')
    })

    it('save inspections', () => {
        TPage.inspectionsAddButton().click()
    })

    it('return to inspections  list', () => {
        TPage.inspectionsList().click()
    })
    it('find inspections  in the list', () => {
        TPage.inspectionsInGrid().contains("inspections #1").should('be.visible')
    })
    it('click found inspections in the list', () => {
        TPage.inspectionsInGrid().contains("inspections #1").click()
    })
    it('edit inspections name', () => {
        TPage.inspectionsNameInput().clear().type('новое имя inspections')
    })
    it('edit inspections VAT', () => {
        TPage.inspectionsVatInput().clear()
    })
    it('input inspections VAT', () => {
        TPage.inspectionsAddGroup().clear()
    })
    it('edit inspections address', () => {
        TPage.inspectionsAddressInput().clear().type('новый адресс inspections')
    })

    it('save edited inspections', () => {
        TPage.inspectionsSaveButton().click()
    })

    it('add inspections bank ', () => {
        TPage.inspectionsAddBank().click()
    })
    it('input inspections bank name', () => {
        TPage.inspectionsAddBankName().type('Privat')
    })
    it('input inspections bank address', () => {
        TPage.inspectionsAddBankAddress().type('Privat address')
    })
    it('input inspections bank BIC/SWIFT', () => {
        TPage.inspectionsAddBankSwift().type('0123456')
    })
    it('save bank account', () => {
        TPage.bankAccSave().click()
    })

    it('find inspections bank account and click to edit', () => {
        cy.wait(2000), TPage.inspectionsBankInGrid().realHover()
        cy.wait(2000), TPage.inspectionsBankEditButton().click()

    })
    it('click delete inspections bank account', () => {

        cy.wait(2000) ,TPage.inspectionsBankDelete().click()

    })

    it('add inspectionsCompany bank ', () => {
        cy.wait(1000), TPage.clientAddBank().click()
    })
    it('input inspectionsCompany bank name', () => {
        TPage.inspectionsAddBankName().type('Aval')
    })
    it('input inspectionsCompany bank address', () => {
        TPage.inspectionsAddBankAddress().clear()
    })
    it('input inspectionsCompany bank BIC/SWIFT', () => {
        TPage.inspectionsAddBankSwift().clear()
    })
    it('save inspectionsCompany account', () => {
        TPage.bankAccSave().click()
    })


})
