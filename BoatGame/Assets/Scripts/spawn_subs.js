#pragma strict


var sub : GameObject;
var spawnRate : float;

private var nextSpawn : float;

function Update () {
	if (Time.time > nextSpawn) {
		nextSpawn = Time.time + spawnRate;
		Instantiate(sub, transform.position, transform.rotation);
	}
}