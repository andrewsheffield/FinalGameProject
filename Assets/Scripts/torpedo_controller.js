#pragma strict

var speed : float =  5;

function Start () {
	GetComponent.<Rigidbody2D>().velocity.y = -speed;
}

function Update () {

	if (transform.position.y < -4.39) {
		Destroy(this.gameObject);
	}

}