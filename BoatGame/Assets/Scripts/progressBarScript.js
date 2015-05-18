#pragma strict

var progressShip : GameObject;

function Update () {

	var distancePercent : float = 100f / 30000f * game_control.distance;
	var barWidth : float = GetComponent.<SpriteRenderer>().bounds.size.x;
	var newXPos : float = barWidth / 100f * distancePercent;
	
	progressShip.transform.localPosition.x = newXPos;
}