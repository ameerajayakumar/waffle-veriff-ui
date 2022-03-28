export const waitForChange = (element, text, timeout) => {
  browser.waitUntil(
    () => {
      return element.getText() === text;
    },
    {
      timeout,
    }
  );
};

export const waitAndClick = (element, timeout) => {
  element.waitForDisplayed({ timeout });
  element.click();
};

