import { helper } from "./functions";

describe("checking helper functions", () => {
  test("test isEmpty function ", () => {
    const testCase1 = "";
    const testCase2 = "         ";
    const testCase3 = "    test       ";
    expect(helper.isEmpty(testCase1)).toBeTruthy();
    expect(helper.isEmpty(testCase2)).toBeTruthy();
    expect(helper.isEmpty(testCase3)).toBeFalsy();
  });

  test("testing checkEmail", () => {
    const testCase1 = "test";
    const testCase2 = "test.com";
    const testCase3 = "@gmail.com";
    const testCase4 = "test@gmail.com";
    const testCase5 = "test@com";
    expect(helper.checkEmail(testCase1)).toBeFalsy();
    expect(helper.checkEmail(testCase2)).toBeFalsy();
    expect(helper.checkEmail(testCase3)).toBeFalsy();
    expect(helper.checkEmail(testCase4)).toBeTruthy();
    expect(helper.checkEmail(testCase5)).toBeFalsy();
  });
  test("checking seprate price", () => {
    const testCase1 = "25.5";
    const testCase2 = "25";
    const testCase3 = "25.98.5";
    expect(helper.seperatePrice(testCase1)).toStrictEqual(["25", "5"]);
    expect(helper.seperatePrice(testCase2)).toStrictEqual(["25"]);
    expect(helper.seperatePrice(testCase3)).toStrictEqual(["25", "98", "5"]);
  });
  test("checking shorten ", () => {
    const testCase1 = "its the test";
    const testCase2 = "its the";
    const testCase3 = "its";
    expect(helper.shorten(testCase1)).toStrictEqual("its the");
    expect(helper.shorten(testCase2)).toStrictEqual("its the");
    expect(helper.shorten(testCase3)).toStrictEqual("its");
  });
});
