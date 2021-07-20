export class testingPage {


  navigate=() => {
    cy.visit("http://ievvmoil03:8082/dashboard/products/list")
  }
//dictionary.banks
  banksLink=() => cy.get('a[href*="banks"]')
//dictionary.product
  productsLink=() => cy.get('a[href*="products"]')
  addProductLink = () => cy.xpath('/html/body/app-root/app-sidenav/mat-sidenav-container/mat-sidenav-content/div[2]/app-dashboards/mat-card/mat-card-header/div[2]/app-actions/div/a/span[1]/span')
  checkUniqueName =() => cy.get('[id^=cdk]').contains('Продукт с таким названием уже существует в системе')
  productNameInput= () => cy.get('input')
  productSelector= () => cy.get('.mat-select-placeholder')
  addProductMeasure=() => cy.get('[id^=mat-]').contains('Тонны')
  buttonAddProduct =()=> cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper')
  productTabHeader =()=> cy.get('[id^=mat-]').contains('Список')
  productInGrid =() => cy.get('mat-cell').contains(' new product')
//dictionary.quotation
  quotationsLink=() => cy.get('[href="/dashboard/quotations"] > .mat-list-item-content > .ng-star-inserted')
  addQuotationLink=() => cy.get('.container > [tabindex="0"]')
  quotationNameInput= () => cy.get('#mat-input-2')
  quotationFullNameInput= () => cy.get('#mat-input-3')
  quotationButtonAdd = () => cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper')
  quotationList =() => cy.get('.mat-tab-list > span > .ng-star-inserted').contains('Список')
  quotationInGrid = () => cy.get('mat-cell').contains('name full_name')
  quotationNameEdit= () => cy.get('#mat-input-4')
  quotationFullNameEdit= () => cy.get('#mat-input-5')
  quotationEditSave = () => cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper')
//dictionary.ownbanks
  ownbanksLink =() => cy.get('[href="/dashboard/banks"] > .mat-list-item-content > .ng-star-inserted')
  addBankLink = () => cy.get('.mat-button-wrapper > span')
  bankGroupInputField  = () => cy.get('#mat-input-2')
  bankNameInputField  = () => cy.get('#mat-input-3')
  bankAddressInputField = () => cy.get('#mat-input-4')
  bankBicInputField  = () => cy.get('#mat-input-5')

//dictionary.client
//dictionary.clientBank
//dictionary.clientAccount
}
