function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

// toThrow检测可能抛出的异常
test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // 可以使用字符串或正则精确地检测某个异常
  // ps:注意这里地字符串，只要异常信息中包含给定的字符串就可以检测通过
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});