﻿#pragma strict

var moveLeft : KeyCode;
var moveRight : KeyCode;
var fireTorp : KeyCode;

var speed = 5;

var explosion: GameObject;
var torpedo : GameObject;
var torp_spawn : Transform;

static var fireRate : float = 1;
static var health: int = 1;

var naturalPos : Vector3;



private var nextFire : float;

function Start () {

	naturalPos= transform.position;

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
        nextFire = Time.time + 2.5 - (fireRate * .4);
        Instantiate(torpedo, torp_spawn.position, torp_spawn.rotation);
    }
    
    if (transform.position.y > naturalPos.y) {
    	GetComponent.<Rigidbody2D>().velocity.y = -speed;
    } else {
    	GetComponent.<Rigidbody2D>().velocity.y = 0;
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
	    health--;
	    GetComponent.<Renderer>().enabled = false;
	    
	    Instantiate(explosion, transform.position, transform.rotation);
	    
	    Camera.main.GetComponent(camera_controller).Shake();
	   	
		loadUpgrades();
    
    }
}

function loadUpgrades() {
	yield WaitForSeconds(2);
	Application.LoadLevel("Upgrades");
}


