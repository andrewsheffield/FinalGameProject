#pragma strict

var healthPrefab : GameObject;
var health : GameObject[];

function Start () {
	for (var i = 0; i < ship_control.health; i++ ) {
		var pos = transform.position;
		pos.x += (i * .40);
		Instantiate(healthPrefab, pos, transform.rotation);
	}
}

function Update () {
	health = GameObject.FindGameObjectsWithTag("Health");
	if(health.length > ship_control.health)
	{
	  Destroy(health[ship_control.health]);
	}
}