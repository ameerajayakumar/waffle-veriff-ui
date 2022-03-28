import SessionPage from '../pages/session.page';
import resources from '../resources';
import { chaiExpect } from 'chai';
import { waitForChange, waitAndClick } from '../utilities/helper';

describe('Session Configuration Page', () => {
  before(async () => {
    await SessionPage.open();
  });

  it('Open URL & verify "demo.saas" is present ', async () => {
    expect(browser).toHaveUrl(resources.mainURL);
  });

  it('Open URL & verify title of the page', async () => {
    expect(browser).toHaveTitle(resources.homeTitle);
  });

  it.only('Verify all UI elements are present on the page', async () => {
    await expect(SessionPage.appLogo).toBePresent();
    await expect(SessionPage.pageHeading).toBePresent();
    await expect(SessionPage.pageTextTop).toBePresent();
    await expect(SessionPage.fullName).toBePresent();
    await expect(SessionPage.language).toBePresent();
    await expect(SessionPage.country).toBePresent();
    await expect(SessionPage.documentType).toBePresent();
    await expect(SessionPage.contextRadio).toBePresent();
    await expect(SessionPage.redirectRadio).toBePresent();
    await expect(SessionPage.pageTextDown).toBePresent();
    await expect(SessionPage.privacyPolicy).toBePresent();
    await expect(SessionPage.veriffMeButton).toBePresent();
  });

  it('Verify all UI elements are clickable on the page', async () => {});

  it('Clear full-name field, type in new name & verify entered name', async () => {
    await waitAndClick(SessionPage.fullName, 10000);
    await browser.execute((s) => {
      s.value = null;
    }, await SessionPage.fullName); //clear existing fullname
    await SessionPage.fullName.addValue(resources.newName); //add new name
    await waitForChange(SessionPage.fullName, resources.newName, 10000);
    await expect(SessionPage.fullName).toHaveValue(resources.newName);
  });
});
