/*eslint(import/no-unresolved)*/
import jsdom from 'jsdom';
import {expect} from 'Chai';
import fs from 'fs';              // File System coming with node..

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

            // Premier test usant de jsdom..
describe('index.html', () => {
  it('Should have h1 that says users', (done) => {
              // reference en memoire vers le fichier index.html ..
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done();
      window.close();
    });
  })
});
