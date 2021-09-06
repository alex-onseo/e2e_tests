export class testingPage {
  navigate = () => {
    cy.visit("http://ievvmoil03:8082/default");
  };
  //dictionary.product
  productsLink = () => cy.get('a[href*="products"]');
  addProductLink = () =>cy.get(".mat-button-wrapper > span");
  checkUniqueName = () =>
    cy
      .get("[id^=cdk]")
      .contains("Продукт с таким названием уже существует в системе");
  productNameInput = () => cy.get(`input[formcontrolname="name"]`);
  productMeasureSelector = () => cy.get(`mat-select[formcontrolname="measure"]`);
  addProductMeasure = () => cy.get("[id^=mat-]");
  productAbbreviationInput = () =>  cy.get(`input[formcontrolname="abbreviation"]`);
  buttonAddProduct = () =>
    cy.get(".button-container > .mat-focus-indicator > .mat-button-wrapper");
  productTabHeader = () => cy.get("[id^=mat-]").contains("Список");
  productInGrid = () => cy.get("mat-cell");
  productMeasureEdit = ()=> cy.get(`mat-select[formcontrolname="measure"]`);
  editProductMeasure = () => cy.get("[id^=mat-]")
  //dictionary.quotation
  quotationsLink = () =>
    cy.get(
      '[href="/dashboard/quotations"] > .mat-list-item-content > .ng-star-inserted'
    );
  addQuotationLink = () => cy.get('.container > [tabindex="0"]');
  quotationNameInput = () => cy.get(`input[formcontrolname="header"]`);
  quotationFullNameInput = () => cy.get(`input[formcontrolname="fullHeader"]`);
  quotationRegionTypeAhead = () => cy.get(`mat-select[formcontrolname="regionId"]`);
  quotationTypeSelector = () => cy.get(`mat-select[formcontrolname="quotationType"]`);
  addQuotationRegion = () => cy.get("[id^=mat-]");
  addQuotationType = () => cy.get("[id^=mat-]");
  quotationButtonAdd = () =>
    cy.get(".button-container > .mat-focus-indicator > .mat-button-wrapper");
  quotationList = () =>
    cy.get(".mat-tab-list > span > .ng-star-inserted").contains("Список");
  quotationInGrid = () => cy.get("mat-cell");
  quotationEditSave = () =>
    cy.get(".button-container > .mat-focus-indicator > .mat-button-wrapper");

  //dictionary.ownbanks
  ownbanksLink = () =>
    cy.get(
      '[href="/dashboard/banks"] > .mat-list-item-content > .ng-star-inserted'
    );
  addBankLink = () => cy.get(".mat-button-wrapper > span");
  bankGroupInputField = () => cy.get(`input[formcontrolname="group"]`);
  bankNameInputField = () => cy.get(`input[formcontrolname="name"]`);
  bankAddressInputField = () => cy.get(`textarea[formcontrolname="address"]`);
  bankBicInputField = () => cy.get(`input[formcontrolname="bicSwift"]`);
  bankAddButton = () => cy.get(".button-container > .mat-focus-indicator");
  bankList = () => cy.get(".mandatory > span > .ng-star-inserted");
  bankInGrid = () => cy.get("mat-cell");
  bankSave = () =>
    cy.get(".button-container > .mat-focus-indicator > .mat-button-wrapper");
  bankAddAccount = () =>
    cy.get(
      ".cdk-column-actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon"
    );
  bankAccIbanInputField = () => cy.get(`input[formcontrolname="iban"]`);
  bankAccCurrencyField = () => cy.get(`input[formcontrolname="currency"]`);
  bankAccBankField = () => cy.get(`input[formcontrolname="bankName"]`);
  bankAccSwiftField = () => cy.get(`input[formcontrolname="bankSwift"]`);
  bankAccSave = () => cy.get(".btn-save > .mat-button-wrapper > .mat-icon");
  bankAccinGrid = () =>
    cy.get(".cdk-column-iban > .ng-star-inserted");
  bankAccDelete = () =>
    cy
      .get(".btn-cancel > .mat-button-wrapper > .mat-icon")
      .should("be.visible");

  //dictionary.region
  regionLink = () =>
    cy.get(
      '[href="/dashboard/regions"] > .mat-list-item-content > .ng-star-inserted'
    );
  addRegionLink = () => cy.get(".mat-button-wrapper > span");
  regionInputField = () => cy.get(`input[formcontrolname="name"]`);
  regionAddButton = () =>
    cy.get(".button-container > .mat-focus-indicator > .mat-button-wrapper");
  regionList = () =>
    cy.get(".mandatory > span > .ng-star-inserted").contains("Список");
  regionInGrid = () => cy.get(".mat-cell > span");
  regionEditSave = () =>
    cy.get('button[type="submit"]').contains(" Coхранить ");

  //  dictionary.ports
  portsLink = () =>
    cy.get(
      '[href="/dashboard/ports"] > .mat-list-item-content > .ng-star-inserted'
    );
  addPortLink = () => cy.get(".mat-button-wrapper > span");
  portNameInput = () => cy.get(`input[formcontrolname="name"]`);
  buttonAddPort = () =>
    cy.get(
      ".button-container > .mat-focus-indicator > .mat-button-wrapper > .mat-icon"
    );
  portTabHeader = () => cy.get("[id^=mat-]").contains("Список");
  portInGrid = () => cy.get("mat-cell");
  portEditSave = () => cy.get('button[type="submit"]').contains(" Coхранить ");

  //dictionary.vessel
  vesselsLink = () =>
    cy.get(
      '[href="/dashboard/vessels"] > .mat-list-item-content > .ng-star-inserted'
    );
  addVesselsLink = () => cy.get(".mat-button-wrapper > span");
  vesselsNameInput = () => cy.get(`input[formcontrolname="name"]`);
  buttonAddvessels = () =>
    cy.get(
      ".button-container > .mat-focus-indicator > .mat-button-wrapper > .mat-icon"
    );
  vesselsTabHeader = () => cy.get("[id^=mat-]").contains("Список");
  vesselsInGrid = () => cy.get("mat-cell");
  vesselEditSave = () =>
    cy.get('button[type="submit"]').contains(" Coхранить ");

  //dictionary.client
  clientsLink = () =>
    cy.get(
      '[href="/dashboard/clients"] > .mat-list-item-content > .ng-star-inserted'
    );
  clientAdd = () => cy.get(".mat-button-wrapper > span");
  clientNameInput = () => cy.get(`input[formcontrolname="legalName"]`);
  clientVatInput = () => cy.get(`input[formcontrolname="vatCode"]`);
  clientAddressInput = () => cy.get(`textarea[formcontrolname="legalAddress"]`);
  clientSiteInput = () => cy.get(`input[formcontrolname="webSite"]`);
  clientGroupInput = () => cy.get(`input[formcontrolname="groupName"]`);
  clientAbbreviationInput = () =>  cy.get(`input[formcontrolname="abbreviation"]`)
  clientAddButton = () => cy.get(`button[type="submit"]`);
  clientsList = () =>
    cy.get(".mandatory > span > .ng-star-inserted").contains("Список");
  clientInGrid = () => cy.get("[class^=mat-cell]");
  clientSaveButton = () =>
    cy.get(`button[type="submit"]`);
  clickOutside = () => cy.get('mat-card-header-text')
  clientAddBank = () =>
    cy.get(
      ".actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon > #Add-Icon"
    );
  clientAddBankName = () => cy.get(`input[formcontrolname="name"]`);
  clientAddBankSwift = () => cy.get(`input[formcontrolname="bicSwift"]`);
  clientAddBankAddress = () => cy.get(`input[formcontrolname="address"]`);
  clientBankInGrid = () =>
    cy.get(".cdk-column-name > .ng-star-inserted");
  clientBankEditButton = () => cy.get(".btn-edit");
  clientBankDelete = () =>
    cy
      .get(".btn-cancel > .mat-button-wrapper > .mat-icon")
      .should("be.visible");

  //dictionary.insuranceCompany
  insuranceCompanyLink = () =>
    cy.get(
      '[href="/dashboard/insurance-companies"] > .mat-list-item-content > .ng-star-inserted'
    );
  insuranceAdd = () => cy.get(".mat-button-wrapper > span");
  insurancetNameInput = () => cy.get(`input[formcontrolname="legalName"]`);
  insuranceVatInput = () => cy.get(`input[formcontrolname="vatCode"]`);
  insuranceAddressInput = () =>
    cy.get(`textarea[formcontrolname="legalAddress"]`);
  InsuranceAddGroup = () => cy.get(`input[formcontrolname="groupName"]`);
  insurancetAddButton = () =>
    cy.get(`button[type="submit"]`).contains("Добавить");
  insuranceList = () =>
    cy.get(".mandatory > span > .ng-star-inserted").contains("Список");
  insuranceInGrid = () => cy.get("[class^=mat-cell]");
  insuranceSaveButton = () =>
    cy.get(`button[type="submit"]`).contains(" Coхранить ");

  insurancetAddBank = () =>
    cy.get(
      ".actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon > #Add-Icon"
    );
  insuranceAddBankName = () => cy.get(`input[formcontrolname="name"]`);
  insuranceAddBankSwift = () => cy.get(`input[formcontrolname="bicSwift"]`);
  insuranceAddBankAddress = () => cy.get(`input[formcontrolname="address"]`);
  insuranceBankInGrid = () =>
    cy.get(".cdk-column-name > .ng-star-inserted");
  insuranceBankEditButton = () => cy.get(".btn-edit");
  insuranceBankDelete = () =>
    cy
      .get(".btn-cancel > .mat-button-wrapper > .mat-icon")
      .should("be.visible");

  //dictionary.inspections

  inspectionsLink = () =>
    cy.get(
      '[href="/dashboard/inspections"] > .mat-list-item-content > .ng-star-inserted'
    );
  inspectionsAdd = () => cy.get(".mat-button-wrapper > span");
  inspectionsNameInput = () => cy.get(`input[formcontrolname="legalName"]`);
  inspectionsVatInput = () => cy.get(`input[formcontrolname="vatCode"]`);
  inspectionsAddressInput = () =>
    cy.get(`textarea[formcontrolname="legalAddress"]`);
  inspectionsAddGroup = () => cy.get(`input[formcontrolname="groupName"]`);

  inspectionsAddButton = () =>
    cy.get(`button[type="submit"]`).contains("Добавить");
  inspectionsList = () =>
    cy.get(".mandatory > span > .ng-star-inserted").contains("Список");
  inspectionsInGrid = () => cy.get("[class^=mat-cell]");
  inspectionsSaveButton = () =>
    cy.get(`button[type="submit"]`).contains(" Coхранить ");

  inspectionsAddBank = () =>
    cy.get(
      ".actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon > #Add-Icon"
    );
  inspectionsAddBankName = () => cy.get(`input[formcontrolname="name"]`);
  inspectionsAddBankSwift = () => cy.get(`input[formcontrolname="bicSwift"]`);
  inspectionsAddBankAddress = () => cy.get(`input[formcontrolname="address"]`);
  inspectionsBankInGrid = () =>
    cy.get(".cdk-column-name > .ng-star-inserted");
  inspectionsBankEditButton = () => cy.get(".btn-edit");
  inspectionsBankDelete = () =>
    cy
      .get(".btn-cancel > .mat-button-wrapper > .mat-icon")
      .should("be.visible");

  //dictionaryIncoterms
  bodLink = () =>
    cy.get(
      '[href="/dashboard/basis-of-deliveries"] > .mat-list-item-content > .ng-star-inserted'
    );
  bodsAdd = () => cy.get(".mat-button-wrapper > span").contains("Добавить");
  bodCostGroupInput = () => cy.get(`input[formcontrolname="groupName"]`);
  bodNameInput = () => cy.get(`input[formcontrolname="costName"]`);
  bodIncotermInput = () => cy.get(".mat-select-arrow-wrapper");
  bodIncotermSelect = () => cy.get("mat-option");
  bodAddButton = () => cy.get(`button[type="submit"]`).contains("Добавить");
  bodList = () =>
    cy.get(".mandatory > span > .ng-star-inserted").contains("Список");
  bodInGrid = () => cy.get("mat-cell");
  bodEditedSave = () =>
    cy.get(".button-container > .mat-focus-indicator").contains(" Coхранить ");
}
