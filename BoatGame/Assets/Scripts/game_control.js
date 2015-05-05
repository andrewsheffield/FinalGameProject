#pragma strict

static var score : int = 0;
static var money : int = 0;
static var speed : float = .25f;
static var distance : float = 0f;
static var distanceMultiplier: float = 10f;
static var level : int = 1;

var time : float;
var scoreText : TextMesh;
var scoreSave : int = 0;

var distanceText : TextMesh;

var levelText : TextMesh;

function Update () {
	
	time += Time.deltaTime;
	
	if (score != scoreSave) {
		scoreSave = score;
		scoreText.text = "Score: " + score;
	}
	
	//update distance
	distance = time * speed * distanceMultiplier;
	distanceText.text = "Distance: " + Mathf.Floor(distance) + "m";
	
	if (Mathf.Floor(distance) == 10 && level != 2) {
		incLevel();
	}
	else if (Mathf.Floor(distance) == 1000 && level != 3) {
		incLevel();
	}
	
}

function incLevel() {
	level ++;
	speed *= level;
	levelText.text = "Level: " + level;
}