#pragma strict

var speed : float;

function Start() {
	GetComponent.<Rigidbody2D>().velocity.x = -speed;
}

function Update() {
	if (transform.position.x < -3.68) {
		Destroy(gameObject);
	}
}

function OnTriggerEnter2D(other : Collider2D) 
{
    if (other.tag == "Boundary")
    {
        return;
    }
    Destroy(other.gameObject);
    Destroy(gameObject);
    game_control.score += 1;
}