#pragma strict

static var score : int = 0;

var scoreText : TextMesh;

private var scoreSave : int = 0;

function Start () {

}

function Update () {
	if (score != scoreSave) {
		scoreSave = score;
		Debug.Log(score);
		scoreText.text = "Score: " + score;
	}
}