#pragma strict

function Start () {
	Destroy(gameObject, 1.33f);
	GetComponent.<AudioSource>().Play();
}