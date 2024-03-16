var login = async () => {
  browser.ignoreSynchronization = true
  await browser.get("https://eventzet.com");
  await browser.manage().window().maximize();
  await browser.sleep(2000);
  await element(by.xpath("//header/div[1]/nav[1]/ul[1]/li[6]/a[1]")).click();
  await element(by.xpath("//*[@id='UserEmail']")).sendKeys("sarath@gmail.com");
  await element(by.xpath("//*[@id='UserPassword']")).sendKeys("123");
  await element(by.xpath("//*[@id='EventLoginBtn']")).click();



}
module.exports = { login };