import SessionPage from '../pages/session.page';
import { expect } from 'chai';

describe('Veriff Demo Application', () => {
  describe('Session Configuration Page', () => {
    before(() => {
      SessionPage.open();
    });

    it('Open URL & verify "demo.saas" is present ', async () => {
      let url = await browser.getUrl();
      expect(url).to.include('demo.saas');
    });
  });
});
