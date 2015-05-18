#pragma strict

var kraken : GameObject;
var krakenStarted : boolean = false;

function Update () {

	if (game_control.distance >= 10 && !krakenStarted) {
		stopBackground();
		stopDistance();
		stopSubmarines();
		startKraken();
		krakenStarted = true;
	}

}

function stopBackground() {
	background_controller.backgroundStop = true;
}

function stopDistance() {
	game_control.distanceStop = true;
}

function stopSubmarines() {
	spawn_subs.spawnStop = true;
}

function startKraken() {
	var pos: Vector2 = transform.position;
	Instantiate(kraken, pos, transform.rotation);
}