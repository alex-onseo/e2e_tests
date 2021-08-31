import {
  testingPage
} from './pageObject'

describe('quotation crud', () => {
  const TPage = new testingPage;


  it('click add quotation', () => {
    TPage.navigate()
    TPage.quotationsLink().click()



  })
  it('click add', () => {
    TPage.addQuotationLink().click()
  })
  it('input short name', () => {
    TPage.quotationNameInput().type('name')
  })
  it('input full name', () => {
    TPage.quotationFullNameInput().type(' full_name')
  })
  it('open region dropdown', () => {
    cy.wait(1000), TPage.quotationRegionTypeAhead().click()
  })

  it('select region', () => {
    cy.wait(1000), TPage.addQuotationRegion().contains("EU reg").click({force:true})
  })
  it('select type', () => {
    cy.wait(1000), TPage.quotationTypeSelector().click({force:true})
  })
  it('select type', () => {
    cy.wait(1000), TPage.addQuotationType().contains("Базовая цена").click()
  })


  it('click add', () => {
    TPage.quotationButtonAdd().click()
  })
  it('return to the grid', () => {
    TPage.quotationList().click()
  })
  it('click on the element in the grid', () => {
    TPage.quotationInGrid().contains("name full_name").click({
      force: true
    })

  })
  it('input short name', () => {
    TPage.quotationNameInput().clear().type('new name2')
  })
  it('input full name', () => {
    TPage.quotationFullNameInput().clear().type(' Full2')
  })
  it('open region dropdown', () => {
    cy.wait(1000), TPage.quotationRegionTypeAhead().click()
  })
  it('select region', () => {
    cy.wait(1000), TPage.addQuotationRegion().contains('EU reg').click({force:true})
  })
  it('select type', () => {
    cy.wait(1000), TPage.quotationTypeSelector().click({force:true})
  })
  it('select type', () => {
    cy.wait(1000), TPage.addQuotationType().contains("Мин\\Макс цена").click()
  })

  it('save edited quotation', () => {
    TPage.quotationEditSave().click({
      force: true
    })

  })






})
