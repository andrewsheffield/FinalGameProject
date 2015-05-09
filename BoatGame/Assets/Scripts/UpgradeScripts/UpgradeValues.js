#pragma strict

static var health : int = 1;
static var damage : int = 1;
static var fireRate : int = 1;

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
	
	if (game_control.money < 200) {
		healthButton.interactable = false;
		damageButton.interactable = false;
		fireRateButton.interactable = false;
	}
	
}

function incHealth() {
	health++;
	healthText.text = health.ToString();
	game_control.money -= 200;
	moneyText.text = "T-Money: $" + game_control.money;
}

function incDamage() {
	damage++;
	damageText.text = damage.ToString();
	game_control.money -= 200;
	moneyText.text = "T-Money: $" + game_control.money;
}

function incFireRate() {
	fireRate++;
	fireRateText.text = fireRate.ToString();
	game_control.money -= 200;
	moneyText.text = "T-Money: $" + game_control.money;
}