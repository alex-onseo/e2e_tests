describe("Launches a website", () => {
  it("Launches the Demoblaze page", () => {
    cy.visit("http://ievvmoil03:8082/dashboard/banks/list");
  });
  it("Clicks the Add Element Button", () => {
    cy.xpath('//*[@id="cdk-accordion-child-1"]/div/mat-nav-list/a[3]/div/span').click()
  });
});
