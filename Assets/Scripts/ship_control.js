#pragma strict

var moveLeft : KeyCode;
var moveRight : KeyCode;
var fireTorp : KeyCode;

var speed = 5;

var torpedo : GameObject;
var torp_spawn : Transform;
var fireRate : float;

private var nextFire : float;

function Start () {
     transform.localScale.x = -1;  
}

function Update () {
	
	//If keyleft if pressed
	if (Input.GetKey(moveLeft)) {
		//move ship left
		GetComponent.<Rigidbody2D>().velocity.x = -speed;
		//If sprite is facing right flip it to face left
		if (transform.localScale.x < 0) {
			transform.localScale.x *= -1;
		}
	}
	else if (Input.GetKey(moveRight)) {
		GetComponent.<Rigidbody2D>().velocity.x = speed;
		if (transform.localScale.x > 0) {
			transform.localScale.x *= -1;
		}
	} else {
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	
	if (Input.GetKey(fireTorp) && Time.time > nextFire)
    {
        nextFire = Time.time + fireRate;
        Instantiate(torpedo, torp_spawn.position, torp_spawn.rotation);
    }

}