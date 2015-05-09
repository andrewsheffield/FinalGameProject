#pragma strict


var sub : GameObject;

private var nextSpawn : float;

function Update () {
	if (Time.time > nextSpawn) {
		nextSpawn = Time.time + Random.Range(1f, 5f);
		var pos: Vector2 = transform.position;
		pos.y += Random.Range(0f, 2.5f);
		sub.GetComponent.<SpriteRenderer>().color = getColor();
		Instantiate(sub, pos, transform.rotation);
	}
}

function getColor() {
	
	switch (game_control.level) {
		case 1:
			return Color.white;
		case 2:
			return Color.cyan;
		case 3:
			return Color.blue;
		case 4:
			return Color.green;
		case 5:
			return Color.red;
		default:
			return Color.white;
	}

}