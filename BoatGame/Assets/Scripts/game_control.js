#pragma strict

static var money : int = 1000;
static var speed : float = .25f;
static var distance : float = 0f;
static var distanceMultiplier: float = .25f;
static var level : int = 1;

var time : float;
var moneyText : TextMesh;
var moneySave : int = 0;

var distanceText : TextMesh;

var levelText : TextMesh;

function Start() {
	GetComponent.<AudioSource>().Play();
	distance = 0;
	speed = .25f;
	level = 1;
}

function Update () {
	
	time += Time.deltaTime;
	
	if (money != moneySave) {
		moneySave = money;
		moneyText.text = "T-money: $" + money;
	}
	
	//update distance
	distance += speed * distanceMultiplier;
	distanceText.text = "Distance: " + Mathf.Floor(distance) + "m";
	
	if (Mathf.Floor(distance) == 100 && level != 2) {
		incLevel();
	}
	else if (Mathf.Floor(distance) == 300 && level != 3) {
		incLevel();
	}
	else if (Mathf.Floor(distance) == 900 && level != 4) {
		incLevel();
	}
	else if (Mathf.Floor(distance) == 2700 && level != 5) {
		incLevel();
	}
	
}

function incLevel() {
	level ++;
	speed *= level;
	levelText.text = "Level: " + level;
}