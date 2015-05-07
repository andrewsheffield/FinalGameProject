#pragma strict

var speed : float =  3;

function Start () {
	GetComponent.<Rigidbody2D>().velocity.y = .7f;
}

function Update () {

	if (GetComponent.<Rigidbody2D>().velocity.y < speed) {
		GetComponent.<Rigidbody2D>().velocity.y *= 1.05f;
	}

	if (transform.position.y > 4.39) {
		Destroy(this.gameObject);
	}

}