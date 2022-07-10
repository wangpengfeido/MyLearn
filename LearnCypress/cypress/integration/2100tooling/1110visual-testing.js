describe("The Home Page", function () {
  it("completes todo", () => {
    cy.visit("/pages/2100/");

    // css 断言
    cy.contains(".todo-list li", "write tests").should(
      "have.class",
      "completed"
    );

    // 捕获元素快照，并与基准图片进行比较
    cy.get(".todoapp").toMatchImageSnapshot({
      imageConfig: {
        threshold: 0.001,
      },
    });
  });
});
