#pragma strict

var speed : float;
var explosion: GameObject;
var health : int;
var fireRate : float;
var flag = false

function Start() {
    //This can be changed depending on spawn point
	GetComponent.<Rigidbody2D>().velocity.x = speed;
}

function Update() {

    if(transform.position.x < -3.00){
        GetComponent.<Rigidbody2D>().velocity.x = speed;
    }

	if (transform.position.x > 3.00) {
		GetComponent.<Rigidbody2D>().velocity.x *= -1;
	}
    
    if (Time.time > nextFire)
    {
        nextFire = Time.time + fireRate;
        Instantiate(torpedo, sub_torpSpawn.position, sub_torpSpawn.rotation);
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
    
    game_control.score += 1;
}