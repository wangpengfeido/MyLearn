describe('My First Test', function () {
  it('Visits the Kitchen Sink', function () {
    // 访问一个页面
    cy.visit('https://example.cypress.io');

    // 特殊命令
    // cy.pause();
    // cy.debug()

    // 查找一个元素
    cy.contains('type')
      // 点击一个元素
      .click();

    // 对新的URL断言
    cy.url().should('include', '/commands/actions');

    // 通过css取得dom
    cy.get('.action-email')
      // 输入值
      .type('fake@email.com')
      // 断言文本值
      .should('have.value', 'fake@email.com');
  });
});

// cypress 会自动检测页面转换，并根据网页应用程序的表现来改变它的预期超时时长
