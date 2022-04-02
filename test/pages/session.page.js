import Page from './page';

class SessionPage extends Page {
  open() {
    super.open('/');
  }
  get fullName() {
    return $('//input[@name="name"]');
  }
  get sessionTitle() {
    return $('div[class="s2f76j4"] h1');
  }
  get language() {
    return $('(//button[@name="language"])[1]');
  }
  get languageChild() {
    return $$('li.Select-module_option__2ojUk');
  }

  get languageSelection() {
    return $('//li[@id="downshift-0-item-2"]');
  }
  get country() {
    return $('//input[@id="downshift-1-input"]');
  }
  get countrySelection() {
    return $('//li[@id="downshift-1-item-2"]');
  }
  get documentType() {
    return $('//button[@name="documentType"]');
  }
  get documentTypeSelection() {
    return $('#downshift-2-item-0');
  }
  get contextRadio() {
    return $('//input[@value="incontext"]');
  }
  get redirectRadio() {
    return $('//input[@value="redirect"]');
  }
  get pageHeading() {
    return $('//h3[@class="text-center m-b"]');
  }
  get appLogo() {
    return $('//div[@class="app-logo"]');
  }
  get pageTextTop() {
    return $('//p[@class="text-center m-t mb-24 break-word"]');
  }
  get pageTextDown() {
    return $(
      '//p[contains(text(),"this session you consent that your audio, video an")]'
    );
  }
  get privacyPolicy() {
    return $('//a[normalize-space()="Privacy Policy."]');
  }
  get veriffMeButton() {
    return $('//button[@type="submit"]');
  }
}

export default new SessionPage();
