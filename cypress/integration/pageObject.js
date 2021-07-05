export class quotationsPage {


  navigate=() => {
    cy.visit("http://ievvmoil03:8082/dashboard/products/list")
  }
  banksLink=() => cy.get('a[href*="banks"]')
  quotationsLink=() => cy.get('a[href*="quotations"]')
  productsLink=() => cy.get('a[href*="products"]')
  addQuotationLink=() => cy.xpath('//*[@id="Union_8"]')
  addProductLink = () => cy.xpath('/html/body/app-root/app-sidenav/mat-sidenav-container/mat-sidenav-content/div[2]/app-dashboards/mat-card/mat-card-header/div[2]/app-actions/div/a/span[1]/span')
  selectProductMeasure
  quotationNameInput= () => cy.get('input')
  quotationSelector= () => cy.xpath('/html/body/app-root/app-sidenav/mat-sidenav-container/mat-sidenav-content/div[2]/app-dashboards/mat-card/mat-card-content/app-quotation-list/mat-card/mat-card-content/app-product-create/div/form/div/mat-form-field[2]/div/div[1]/div[3]')
  quotationMeasureSelector=() => cy
    .xpath('div', { timeout: 100000 })
    .should('have.text', 'Тонны')
}
