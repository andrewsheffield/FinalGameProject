#pragma strict

var kraken : GameObject;
static var krakenStarted : boolean = false;

function Update () {

	if ( (game_control.distance >= 30000 && !krakenStarted) || Input.GetKeyDown('k') ) {
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
	inkBallLauncherScript.shootInk = true;
}