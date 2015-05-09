#pragma strict

var explosion: GameObject;

private var health : int = game_control.level;
private var fireRate : float;
private var speed : float;

var sub_torpSpawn : Transform;

var torpedo_prefab : Transform;

private var nextFire : float;

function Start() {
    //This can be changed depending on spawn point
	GetComponent.<Rigidbody2D>().velocity.x = speed;
	
	fireRate = Random.Range(2f, 5f);
	speed = Random.Range(.5f, 1.5f);
}

function Update() {

    if(transform.position.x < -3.00){
        GetComponent.<Rigidbody2D>().velocity.x = speed;
    }

	if (transform.position.x > 3.00) {
		if(speed>0){
			GetComponent.<Rigidbody2D>().velocity.x *= -1;
		}
	}
    
    if (Time.time > nextFire)
    {
        nextFire = Time.time + Random.Range(1f, 5f);
        var enemy_torp = Instantiate(torpedo_prefab, sub_torpSpawn.position, sub_torpSpawn.rotation) as Transform;
        Physics2D.IgnoreCollision(enemy_torp.GetComponent.<CircleCollider2D>(), GetComponent.<EdgeCollider2D>());
    }


}

function OnTriggerEnter2D(other : Collider2D) 
{
    if (other.tag == "Boundary")
    {
        return;
    }
    if (other.tag == "Player") {
    	if (health - torpedo_controller.torp_damage > 0) {
	    	health -= torpedo_controller.torp_damage;
	    	
	    	Destroy(other.gameObject);
	    	Instantiate(explosion, transform.position, transform.rotation);
		    
		    Camera.main.GetComponent(camera_controller).Shake();
	    } else {
	    	Destroy(other.gameObject);
		    Destroy(gameObject);
		    
		    Instantiate(explosion, transform.position, transform.rotation);
		    
		    Camera.main.GetComponent(camera_controller).Shake();
		    
		    game_control.money += 10 * game_control.level;
	    }
    
    }
    
    
}