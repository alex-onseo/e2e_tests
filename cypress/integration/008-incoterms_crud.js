import {
    testingPage
} from './pageObject'

describe('bod crud', () => {
    const TPage = new testingPage;


    it('click bod link', () => {
        TPage.navigate()
        TPage.bodLink().click()
    })
    it('click add bod', () => {
        TPage.bodsAdd().click()
    })
    it('input bod group', () => {
        TPage.bodCostGroupInput().type('BOD group 1')
    })
    it('input bod name', () => {
        TPage.bodNameInput().type('BOD #1')
    })
    it('click input bod incoterm', () => {
        TPage.bodIncotermInput().click()
    })
    it('select incoterm', () => {
        TPage.bodIncotermSelect().contains('FCA').click()
    })
    it('save bod', () => {
        TPage.bodAddButton().click()
    })

    it('return to bod list', () => {
        TPage.bodList().click()
    })

    it('click on the element in the BOD grid', () => {
        TPage.bodInGrid().click()
    })
    it('edit bod group', () => {
        TPage.bodCostGroupInput().clear().type('Инкотерм группа "№2')
    })
    it('save bod name', () => {
        TPage.bodNameInput().clear().type('Инкотерм  "№2')
    })
    it('click input bod incoterm', () => {
        TPage.bodIncotermInput().click()
    })
    it('select incoterm', () => {
        TPage.bodIncotermSelect().contains('CPT').click()
    })
    it('save edtited BOD', () => {
        cy.wait(2000),TPage.bodEditedSave().click()
    })

})