export class testingPage {


  navigate = () => {
    cy.visit("http://ievvmoil03:8082/default")
  }
    //dictionary.product
  productsLink = () => cy.get('a[href*="products"]')
  addProductLink = () => cy.xpath('/html/body/app-root/app-sidenav/mat-sidenav-container/mat-sidenav-content/div[2]/app-dashboards/mat-card/mat-card-header/div[2]/app-actions/div/a/span[1]/span')
  checkUniqueName = () => cy.get('[id^=cdk]').contains('Продукт с таким названием уже существует в системе')
  productNameInput = () => cy.get('input')
  productMeasureSelector = () => cy.get('.mat-select-placeholder')
  addProductMeasure = () => cy.get('[id^=mat-]').contains('Тонны')
  buttonAddProduct = () => cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper')
  productTabHeader = () => cy.get('[id^=mat-]').contains('Список')
  productInGrid = () => cy.get('mat-cell').contains(' new product')

  //dictionary.quotation
  quotationsLink = () => cy.get('[href="/dashboard/quotations"] > .mat-list-item-content > .ng-star-inserted')
  addQuotationLink = () => cy.get('.container > [tabindex="0"]')
  quotationNameInput = () => cy.get(`input[formcontrolname="header"]`)
  quotationFullNameInput = () => cy.get(`input[formcontrolname="fullHeader"]`)
  quotationRegionTypeAhead = () => cy.xpath('/html/body/app-root/app-sidenav/mat-sidenav-container/mat-sidenav-content/div[2]/app-dashboards/mat-card/mat-card-content/app-quotations/mat-card/mat-card-content/app-quotation-create/div/app-quotation-form/form/div/mat-form-field[4]')
  addQuotationRegion = () => cy.get('[id^=mat-]').contains('EU reg')
  quotationButtonAdd = () => cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper')
  quotationList = () => cy.get('.mat-tab-list > span > .ng-star-inserted').contains('Список')
  quotationInGrid = () => cy.get('mat-cell').contains('name full_name')
    quotationEditSave = () => cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper')

  //dictionary.ownbanks
  banksLink = () => cy.get('a[href*="banks"]')
  ownbanksLink = () => cy.get('[href="/dashboard/banks"] > .mat-list-item-content > .ng-star-inserted')
  addBankLink = () => cy.get('.mat-button-wrapper > span')
  bankGroupInputField = () => cy.get(`input[formcontrolname="group"]`)
  bankNameInputField = () => cy.get(`input[formcontrolname="name"]`)
  bankAddressInputField = () => cy.get(`textarea[formcontrolname="address"]`)
  bankBicInputField = () => cy.get(`input[formcontrolname="bicSwift"]`)
  bankAddButton = () => cy.get('.button-container > .mat-focus-indicator')
  bankList = () => cy.get('.mandatory > span > .ng-star-inserted')
  bankInGrid = () => cy.get('mat-cell').contains('bank')
  bankSave = () => cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper')
  bankAddAccount = () => cy.get('.cdk-column-actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
  bankAccIbanInputField = () => cy.get(`input[formcontrolname="iban"]`)
  bankAccCurrencyField = () => cy.get(`input[formcontrolname="currency"]`)
  bankAccBankField = () => cy.get(`input[formcontrolname="bankName"]`)
  bankAccSwiftField = () => cy.get(`input[formcontrolname="bankSwift"]`)
  bankAccSave = () => cy.get('.btn-save > .mat-button-wrapper > .mat-icon')
  bankAccinGrid = () => cy.get('.cdk-column-iban > .ng-star-inserted').contains('UA123456789')
  bankAccDelete = () => cy.get('.btn-cancel > .mat-button-wrapper > .mat-icon').should('be.visible')


  //dictionary.region
  regionLink = () => cy.get('[href="/dashboard/regions"] > .mat-list-item-content > .ng-star-inserted')
  addRegionLink =() => cy.get('.mat-button-wrapper > span')
  regionInputField =() => cy.get(`input[formcontrolname="name"]`)
  regionAddButton = () =>cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper')
  regionList = () => cy.get('.mandatory > span > .ng-star-inserted').contains ('Список')
  regionInGrid = () => cy.get('.mat-cell > span').contains('US Region')



  //  dictionary.ports
  portsLink = () => cy.get('[href="/dashboard/ports"] > .mat-list-item-content > .ng-star-inserted')
  addPortLink = () => cy.get('.mat-button-wrapper > span')
  portNameInput = () => cy.get(`input[formcontrolname="name"]`)
  buttonAddPort = () => cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
  portTabHeader = () => cy.get('[id^=mat-]').contains('Список')
  portInGrid = () => cy.get('mat-cell').contains('Amsterdam')



  //dictionary.vessel
  vesselsLink = () => cy.get('[href="/dashboard/vessels"] > .mat-list-item-content > .ng-star-inserted')
  addVesselsLink = () => cy.get('.mat-button-wrapper > span')
  vesselsNameInput = () => cy.get(`input[formcontrolname="name"]`)
  buttonAddvessels = () => cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
  vesselsTabHeader = () => cy.get('[id^=mat-]').contains('Список')
  vesselsInGrid = () => cy.get('mat-cell').contains('Pinta')

  //dictionary.client
  clientsLink = () => cy.get('[href="/dashboard/clients"] > .mat-list-item-content > .ng-star-inserted')
  clientAdd =() => cy.get('.mat-button-wrapper > span')
  clientNameInput =() => cy.get(`input[formcontrolname="legalName"]`)
  clientVatInput =() => cy.get(`input[formcontrolname="vatCode"]`)
  clientAddressInput =() => cy.get(`textarea[formcontrolname="legalAddress"]`)
  clientSiteInput  =() => cy.get(`input[formcontrolname="webSite"]`)
  clientAddButton = () => cy.get(`button[type="submit"]`).contains('Добавить')
  clientsList = () => cy.get('.mandatory > span > .ng-star-inserted').contains ('Список')
  clientAddBankButton = () => cy.get('.actions > .mat-focus-indicator > .mat-button-wrapper > span').contains('Добавить банк')
  clientInGrid = () => cy.get('mat-cell').contains('client #1')
  clientSaveButton = () => cy.get(`button[type="submit"]`).contains(' Coхранить ')

  clientAddBank = () => cy.get('.actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon > #Add-Icon')
  clientAddBankName = () => cy.get(`input[formcontrolname="name"]`)
  clientAddBankSwift = () => cy.get(`input[formcontrolname="bicSwift"]`)
  clientAddBankAddress = () => cy.get(`input[formcontrolname="address"]`)
  clientBankInGrid = () => cy.get('.cdk-column-iban > .ng-star-inserted').contains('Privat')
  clientBankDelete = () => cy.get('.btn-cancel > .mat-button-wrapper > .mat-icon').should('be.visible')
  //dictionary.clientBank
  //dictionary.clientAccount
}
