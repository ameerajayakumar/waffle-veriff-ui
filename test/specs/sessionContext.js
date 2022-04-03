import SessionPage from '../pages/session.page';
import resources from '../resources';
import { chaiExpect } from 'chai';
import { waitForChange, waitAndClick } from '../utilities/helper';

describe('Session context flow', () => {
  beforeEach(async () => {
    await SessionPage.open();
  });

  it('Clear full-name field, type in new name & verify entered name', async () => {
    await browser.pause(5000);
    await waitAndClick(SessionPage.fullName, 5000);
    await browser.execute((s) => {
      s.value = null;
    }, await SessionPage.fullName); //clear existing fullname
    await SessionPage.fullName.addValue(resources.newName); //add new name
    await waitForChange(SessionPage.fullName, resources.newName, 5000);
    await expect(SessionPage.fullName).toHaveValue(resources.newName);
  });

  it('Create session in context flow', async () => {
    await SessionPage.language.click();
    await SessionPage.languageSelection.click();
    await waitAndClick(SessionPage.fullName, 10000);
    await browser.execute((s) => {
      s.value = null;
    }, await SessionPage.fullName); //clear existing fullname
    await SessionPage.fullName.addValue(resources.newName); //add new name
    await SessionPage.country.click();
    await SessionPage.countrySelection.click();
    await SessionPage.documentType.click();
    await SessionPage.documentTypeSelection.click();
    await expect(SessionPage.contextRadio).toBeSelected();
    await SessionPage.veriffMeButton.click();
    await browser.pause(5000);
    //validate redirection to next page
  });
});
