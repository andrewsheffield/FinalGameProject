#pragma strict

var explosion: GameObject;

function Start() {
	GetComponent.<Rigidbody2D>().velocity.x = Random.Range(1f, 3f);
}

function Update() {
	if (transform.position.x > 3.68) {
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
    
    Instantiate(explosion, transform.position, transform.rotation);
    
    Camera.main.GetComponent(camera_controller).Shake();
    
    game_control.money += 1;
}