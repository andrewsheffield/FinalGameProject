#pragma strict

var moveLeft : KeyCode;
var moveRight : KeyCode;
var fireTorp : KeyCode;

var speed = 5;

var explosion: GameObject;
var torpedo : GameObject;
var torp_spawn : Transform;

static var fireRate : float = 1;
static var health: int = 1;



private var nextFire : float;

function Start () {

}

function Update () {

	var pos : Vector3 = Camera.main.WorldToViewportPoint(transform.position);
	
	//If keyleft if pressed move ship left
	if (Input.GetKey(moveLeft) && pos.x > 0.1f) {
		GetComponent.<Rigidbody2D>().velocity.x = -speed;
	}
	//else if right key is pressed move ship right
	else if (Input.GetKey(moveRight) && pos.x < .9f) {
		GetComponent.<Rigidbody2D>().velocity.x = speed;
	}
	//else slow ship to stop
	else {
		GetComponent.<Rigidbody2D>().velocity.x *= .9;
	}
	
	//if space bar is pressed fire torpedo at fireRate
	if (Input.GetKey(fireTorp) && Time.time > nextFire)
    {
        nextFire = Time.time + 1/fireRate;
        Instantiate(torpedo, torp_spawn.position, torp_spawn.rotation);
    }

}

function OnTriggerEnter2D(other : Collider2D) 
{
    if (other.tag == "Boundary")
    {
        return;
    }
    
    if (health > 1) {
    	Destroy(other.gameObject);
    	Instantiate(explosion, transform.position, transform.rotation);
    	Camera.main.GetComponent(camera_controller).Shake();
    	health--;
    } else {
    
	    Destroy(other.gameObject);
	    Destroy(gameObject);
	    
	    Instantiate(explosion, transform.position, transform.rotation);
	    
	    Camera.main.GetComponent(camera_controller).Shake();
	    
	    Application.LoadLevel("Upgrades");
    
    }
}