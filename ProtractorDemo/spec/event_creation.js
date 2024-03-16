//event creation

var path = require('path');
var eventcreation = async () => {
  await browser.waitForAngularEnabled(false);
 await browser.sleep(10000)
  var EC = protractor.ExpectedConditions;
  await browser.wait(EC.elementToBeClickable(element(by.xpath("//header/div[1]/nav[1]/ul[1]/li[2]/a[1]"))), 25000);   await browser.sleep(6000);
  await element(by.xpath("//header/div[1]/nav[1]/ul[1]/li[2]/a[1]")).click();
  await browser.sleep(10000)
  await browser.wait(EC.presenceOf(element(by.xpath("//*[@id='floatingInput' and @placeholder='Event Title']"))), 20000);
  await browser.sleep(10000)
  await element(by.xpath("//*[@id='floatingInput' and @placeholder='Event Title']")).sendKeys('New York City Auto Show');
  await browser.sleep(4000)
  await element(by.cssContainingText('option', 'Attraction')).click();
  await element(by.cssContainingText('option', 'Auto,Boat Air')).click();
  await element(by.cssContainingText('option', 'Auto ')).click();
  await element(by.xpath("//*[@placeholder='Add Tags']"))
    .sendKeys('#autoshow');
  await element(by.xpath("//*[@id='basic-addon2']"))
    .click();
  await browser.sleep(4000);

  var venue = await element(by.xpath("//*[@placeholder='venue location']"));
  await browser.executeScript('arguments[0].scrollIntoView({block: "center"});', venue);
  await browser.sleep(4000);
  await venue.sendKeys('new york ny,usa');

  await browser.sleep(3000);

  var date = await element(by.xpath("//body/app-root[1]/app-dashboard[1]/div[2]/div[1]/div[2]/main[1]/app-dashboardcreateevent[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]"));
  await browser.executeScript('arguments[0].scrollIntoView({block: "center"});', date);
  await browser.sleep(3000);
  await date.sendKeys('03/25/2023');
  await browser.sleep(3000);

  await element(by.xpath("//body/app-root[1]/app-dashboard[1]/div[2]/div[1]/div[2]/main[1]/app-dashboardcreateevent[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/app-marzet-tp[1]/div[1]/input[1]")).sendKeys('1000');
  await browser.sleep(3000);

  await element(by.xpath("//body/app-root[1]/app-dashboard[1]/div[2]/div[1]/div[2]/main[1]/app-dashboardcreateevent[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[3]/div[1]/input[1]")).sendKeys('03/28/2023');
}
module.exports={eventcreation}