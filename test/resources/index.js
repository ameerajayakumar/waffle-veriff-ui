const faker = require('faker');
export default {
  homeTitle: 'Veriff - Demo Integration',
  newName: faker.name.firstName() + ' ' + faker.name.lastName(),
  mainURL: 'https://demo.saas-3.veriff.me',
  privacyPolicyURL: 'https://www.veriff.com/privacy-policy?navigation=slim',
  sessionTitle: 'Ara verificarem la teva identitat',
};
