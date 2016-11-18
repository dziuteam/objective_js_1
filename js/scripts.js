function Telefon(marka, model, cena, pamiec, kolor) {
	this.marka = marka;
	this.model = model;
	this.cena = cena;
	this.pamiec = pamiec;
	this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + " " + this.model + ", kolor to " + this.kolor + ", pamięć: "+ this.pamiec + " gb, a cena to "+ this.cena + " zł.");
}
var iPhone6s = new Telefon("Apple", "iPhone 6s", 2400, 64, "srebrny");
var galaxyS6 = new Telefon("Samsung", "Galaxy S6", 2000, 32, "szary");
var onePlus = new Telefon("OnePlus", "One", 1900, 64, "biały");
var iPhoneSE = new Telefon("Apple", "iPhone SE", 1900, 16, "złoty");
var huaweiP8 = new Telefon("Huwawei", "P8", 1800, 32, "czarny");

iPhone6s.printInfo();
galaxyS6.printInfo();
onePlus.printInfo();
iPhoneSE.printInfo();
huaweiP8.printInfo();
