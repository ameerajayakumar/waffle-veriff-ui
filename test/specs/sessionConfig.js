import SessionPage from '../pages/session.page';
import resources from '../resources';
import { chaiExpect } from 'chai';
import { waitForChange, waitAndClick } from '../utilities/helper';

describe('Session Configuration Page', () => {
  beforeEach(async () => {
    await SessionPage.open();
  });

  it('Open URL & verify "demo.saas" is present ', async () => {
    expect(browser).toHaveUrl(resources.mainURL);
  });

  it('Open URL & verify title of the page', async () => {
    expect(browser).toHaveTitle(resources.homeTitle);
  });

  it('Verify all UI elements are present on the page', async () => {
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

  it('Verify all UI elements are clickable on the page', async () => {
    await expect(SessionPage.fullName).toBeClickable();
    await expect(SessionPage.language).toBeClickable();
    await expect(SessionPage.country).toBeClickable();
    await expect(SessionPage.documentType).toBeClickable();
    await expect(SessionPage.redirectRadio).toBeClickable();
    await expect(SessionPage.contextRadio).toBeClickable();
    await expect(SessionPage.privacyPolicy).toBeClickable();
    await expect(SessionPage.veriffMeButton).toBeClickable();
  });

  it('Create session in redirect flow', async () => {
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
    await SessionPage.redirectRadio.click();
    await SessionPage.veriffMeButton.click();
    // await chaiExpect(browser.url()).to.be.include('magic.saas');
  });
});
