import Page from './page';

class SessionPage extends Page {
  open() {
    super.open('/');
  }
  get fullName() {
    return $('//input[@name="name"]');
  }
  get language() {
    return $('(//button[@name="language"])[1]');
  }
  get languageChild() {
    return this.language.$$('li');
  }
  get languageListText() {
    const langList = [];
    return this.languageChild.map((element) => {
      langList.push(element.getText());
    });
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
    return $('//li[@id="downshift-2-item-2"]');
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
