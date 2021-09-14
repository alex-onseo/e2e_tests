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
        TPage.inspectionsNameInput().type('Alex inspections #1')
    })
    it('input inspections legal  address', () => {
        TPage.inspectionsAddressInput().type('inspections 1 address')
    })
    it('input inspections Correspondence  address', () => {
        TPage.inspectionCorrespondenceAddressInput().type('inspections Correspondence 1 address')
    })
    it('input inspections group', () => {
        TPage.inspectionsAddGroup().type('Alex inspect group')
    })
    it('input inspections VAT', () => {
        TPage.inspectionsVatInput().type('01234568')
    })

    it('save inspections', () => {
        TPage.inspectionsAddButton().click()
    })
    it('return to inspections  list', () => {
        TPage.inspectionsTabHeader().click()
    })
    it('find inspections  in the list', () => {
        TPage.inspectionsInGrid().contains("Alex inspections #1").should('be.visible')
    })
    it('click found inspections in the list', () => {
        TPage.inspectionsInGrid().contains("Alex inspections #1").click()
    })
    it('edit inspections name', () => {
        TPage.inspectionsNameInput().clear().type('Alex новое имя inspections')
    })
        it('input inspections group', () => {
        TPage.inspectionsAddGroup().clear().type('Alex group#2')
    })
    it('edit inspections VAT', () => {
        TPage.inspectionsVatInput().clear()
    })
    it('input inspections legal  address', () => {
        TPage.inspectionsAddressInput().clear().type('новый адресс инспекции')
    })
    it('input inspections Correspondence  address', () => {
        TPage.inspectionCorrespondenceAddressInput().clear().type('новый адресс корреспонденции инспекции')
    })
    it('save edited inspections', () => {
        TPage.inspectionsSaveButton().click()
    })

    it('add inspections bank ', () => {
        TPage.inspectionsAddBank().click()
    })
    it('input inspections bank name', () => {
        TPage.inspectionsAddBankName().type('Alex Privat')
    })
    it('input inspections bank address', () => {
        TPage.inspectionsAddBankAddress().type('Privat address')
    })
    it('input inspections bank SWIFT', () => {
        TPage.inspectionsAddBankSwift().type('0123456')
    })
    it('input inspections bank BIC', () => {
        TPage.inspectionsAddBankSwift().type('0123456')
    })
    it('save bank account', () => {
        TPage.bankAccSave().click()
    })

    it('find inspections bank account and click to edit', () => {
        cy.wait(2000), TPage.inspectionsBankInGrid().contains("Alex Privat").realHover()
        cy.wait(2000), TPage.inspectionsBankEditButton().click()

    })
    it('click delete inspections bank account', () => {

        cy.wait(2000) ,TPage.inspectionsBankDelete().click()

    })

    it('add inspectionsCompany bank ', () => {
        cy.wait(1000), TPage.clientAddBank().click()
    })
    it('input inspectionsCompany bank name', () => {
        TPage.inspectionsAddBankName().type('Alex Aval')
    })
    it('input inspectionsCompany bank address', () => {
        TPage.inspectionsAddBankAddress().clear()
    })
    it('edit inspections bank SWIFT', () => {
        TPage.inspectionsAddBankSwift().clear()
    })
    it('edit inspections bank BIC', () => {
        TPage.inspectionsAddBankBic().clear()
    })
    it('save inspectionsCompany account', () => {
        TPage.bankAccSave().click()
    })
    it('find inspections bank account and click to edit', () => {
        cy.wait(2000), TPage.inspectionsBankInGrid().contains("Alex Aval").realHover()
        cy.wait(2000), TPage.inspectionsBankEditButton().click()

    })
    it('click delete inspections bank account', () => {

        cy.wait(2000) ,TPage.inspectionsBankDelete().click()

    })


})
