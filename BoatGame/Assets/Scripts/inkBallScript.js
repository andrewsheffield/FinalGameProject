#pragma strict

function Start () {
	GetComponent.<Rigidbody2D>().velocity.y = 3;
}

function Update() {
	if (transform.position.y > 4.39) {
		Destroy(this.gameObject);
	}
}