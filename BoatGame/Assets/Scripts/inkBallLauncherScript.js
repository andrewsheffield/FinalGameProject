#pragma strict

var inkBall : GameObject;

private var startPoint : float;
private var nextSpawn : float;
var pos: Vector2;

static var shootInk : boolean = false;

function Update () {
	if (Time.time > nextSpawn && shootInk) {
		nextSpawn = Time.time + 3f;
		pos = transform.position;
		var random = Random.Range(-3f, 2.5f);
		startPoint = -4;
		
		while (startPoint < 4) {
			pos.x = startPoint;
			startPoint += .5;
			if ( startPoint < random || startPoint > random + 2.3f ) {
				Instantiate(inkBall, pos, transform.rotation);
			}
		}
	}
}