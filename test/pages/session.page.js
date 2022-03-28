import Page from './page';

class SessionPage extends Page {
  get fullName() {
    return $('//input[@name="name"]');
  }
  open() {
    super.open('/');
  }
}

export default new SessionPage();
