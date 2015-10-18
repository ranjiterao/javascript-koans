describe("About Expects", function() {

  //DONE
  // We shall contemplate truth by testing reality, via spec expectations.
  it("should expect true", function() {
    expect(true).toBeTruthy(); // This should be true
  });

  //DONE
  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function() {
	  var expectedValue = 2;
	  var actualValue = 1 + 1;

	  expect(actualValue === expectedValue).toBeTruthy();
  });

  //DONE
  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function() {
	  var expectedValue = FILL_ME_IN;
	  var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
	  expect(actualValue = expectedValue);
  });

  //DONE
  // Sometimes you need to be precise about what you "type".
  it("should assert equality with ===", function() {
	  var expectedValue = FILL_ME_IN;
	  var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
	  expect(actualValue === expectedValue);
  });

  //DONE
  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function() {
	  expect(1 + 1).toEqual(2);
  });
});
