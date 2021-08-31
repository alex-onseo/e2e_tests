import "cypress-real-events/support";
import { testingPage } from "./pageObject";

describe("own client crud", () => {
  const TPage = new testingPage();

  it("click client tab", () => {
    TPage.navigate();
    TPage.clientsLink().click();
  });
  it("click add new client", () => {
    TPage.clientAdd().click();
  });

  it("input client name", () => {
    TPage.clientNameInput().type("client #1");
  });
  it("input client address", () => {
    TPage.clientAddressInput().type("client 1 address");
  });
  it("input client VAT", () => {
    TPage.clientVatInput().type("01234568");
  });
  it("input client website", () => {
    TPage.clientSiteInput().type("www.client1.site");
  });
  it("input client group", () => {
    TPage.clientGroupInput().type("group#1");
  });
  it("input client group", () => {
    TPage.clientAbbreviationInput().type("CL");
  });
  it('click outside', () => {
    TPage.clientSiteInput().click()
  })
  it("save client", () => {
    TPage.clientAddButton().should('be.visible')
    TPage.clientAddButton().click();
  });

  it("return to clients list", () => {
    TPage.clientsList().click();
  });
  it("find client in the list", () => {
    TPage.clientInGrid().contains("client #1").should("be.visible");
  });
  it("click found client in the list", () => {
    TPage.clientInGrid().contains("client #1").click();
  });
  it("edit client name", () => {
    TPage.clientNameInput().clear().type("новое имя клиента");
  });
  it("edit client VAT", () => {
    TPage.clientVatInput().clear()
  });
  it("edit client address", () => {
    TPage.clientAddressInput().clear().type("новый адресс клиента");
  });
  it("edit client website", () => {
    TPage.clientSiteInput().clear()
  });


  it("edit client group", () => {
    TPage.clientGroupInput().clear();
  });
  it('click outside', () => {
    TPage.clientSiteInput().click()
  });
  it("save edited client", () => {
    TPage.clientSaveButton().click();
  });

  it("add client bank ", () => {
    TPage.clientAddBank().click();
  });
  it("input clients bank name", () => {
    TPage.clientAddBankName().type("Privat");
  });
  it("input clients bank address", () => {
    TPage.clientAddBankAddress().type("Privat adress");
  });
  it("input clients bank BIC/SWIFT", () => {
    TPage.clientAddBankSwift().type("0123456");
  });
  it("save bank account", () => {
    TPage.bankAccSave().click();
  });

  it("find client bank account and click to edit", () => {
    cy.wait(2000), TPage.clientBankInGrid().realHover();
    cy.wait(2000), TPage.clientBankEditButton().click();
  });
  it("click delete client bank account", () => {
    cy.wait(2000), TPage.clientBankDelete().click();
  });

  it("edit client bank ", () => {
    cy.wait(1000), TPage.clientAddBank().click();
  });
  it("input clients bank name", () => {
    TPage.clientAddBankName().type("Aval1");
  });

  it("save bank account", () => {
    TPage.bankAccSave().click();
  });
});