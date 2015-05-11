#pragma strict

static var health : int = 1;
var healthLevel : int = 1;

static var damage : int = 1;
var damageLevel : int = 1;

static var fireRate : int = 1;
var fireRateLevel : int = 1;



var moneyText : UI.Text;

var healthText : UI.Text;
var healthButton : UI.Button;

var damageText : UI.Text;
var damageButton : UI.Button;

var fireRateText : UI.Text;
var fireRateButton : UI.Button;

function Start() {

	moneyText.text = "T-Money: $" + game_control.money;
	healthText.text = health.ToString();
	damageText.text = damage.ToString();
	fireRateText.text = fireRate.ToString();
	
}

function Update () {

	if (game_control.money < 200 * healthLevel) {
		healthButton.interactable = false;
	}
	if (game_control.money < 200 * damageLevel) {
		damageButton.interactable = false;
	}
	if (game_control.money < 200 * fireRateLevel) {
		fireRateButton.interactable = false;
	}
	
}

function incHealth() {
	health++;
	healthText.text = health.ToString();
	game_control.money -= 200 * healthLevel;
	moneyText.text = "T-Money: $" + game_control.money;
	healthLevel++;
	healthButton.GetComponentInChildren.<UI.Text>().text = "$" + (200 * healthLevel);
}

function incDamage() {
	damage++;
	damageText.text = damage.ToString();
	game_control.money -= 200 * damageLevel;
	moneyText.text = "T-Money: $" + game_control.money;
	damageLevel++;
	damageButton.GetComponentInChildren.<UI.Text>().text = "$" + (200 * damageLevel);
}

function incFireRate() {
	fireRate++;
	fireRateText.text = fireRate.ToString();
	game_control.money -= 200 * fireRateLevel;
	moneyText.text = "T-Money: $" + game_control.money;
	fireRateLevel++;
	fireRateButton.GetComponentInChildren.<UI.Text>().text = "$" + (200 * fireRateLevel);
}