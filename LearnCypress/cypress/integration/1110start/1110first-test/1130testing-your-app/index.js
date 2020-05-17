describe('The Home Page', function () {
  it('successfully loads', function () {
    // baseUrl 已在cypress.json中配置
    cy.visit('/pages/1110/index.html')
  });
});
