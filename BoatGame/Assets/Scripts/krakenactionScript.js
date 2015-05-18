#pragma strict

var health : int;
var speed : int;

var explosion: GameObject;
var turnPointRight : float;
var turnPointLeft : float;

function Start () {
	GetComponent.<Rigidbody2D>().velocity.x = speed;
	turnPointRight = Random.Range(0f, 3f);
	turnPointLeft = Random.Range(0f, -3f);
}

function Update () {
	if (transform.position.x > turnPointRight ) {
		//transform.position.x = turnPointRight;
		GetComponent.<Rigidbody2D>().velocity.x = -speed;
		turnPointRight = Random.Range(1f, 3f);
	}
	if (transform.position.x < turnPointLeft ) {
		//transform.position.x = turnPointLeft;
		GetComponent.<Rigidbody2D>().velocity.x = speed;
		turnPointLeft = Random.Range(-1f, -3f);
	}
}

function OnTriggerEnter2D(other : Collider2D) 
{
	health -= 1;
    if (other.tag == "Boundary")
    {
        return;
    }
    if (other.tag == "Player") {
    	if (health > 0) {
	    	
	    	Destroy(other.gameObject);
	    	Instantiate(explosion, transform.position, transform.rotation);
		    
		    Camera.main.GetComponent(camera_controller).Shake();
	    }
	    
	    if (health <= 0) {
	    	Destroy(other.gameObject);
		    Destroy(gameObject);
		    
		    Instantiate(explosion, transform.position, transform.rotation);
		    
		    Camera.main.GetComponent(camera_controller).Shake();
		    inkBallLauncherScript.shootInk = false;
		    
		    loadVictory();
	    }
    
    }
    
}


function loadVictory() {
	//yield WaitForSeconds(2);
	Application.LoadLevel("victory");
}