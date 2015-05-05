#pragma strict

private var cameraTransform : Transform;
private var spriteWidth : float; 

private var newPos : Vector3;


function Start () {
	cameraTransform = Camera.main.transform;
	newPos = transform.position;
	
	var spriteRenderer : SpriteRenderer = GetComponent.<Renderer>() as SpriteRenderer;
	spriteWidth = spriteRenderer.sprite.bounds.size.x;
}

function Update () {
	
	newPos.x -= Time.deltaTime * game_control.speed;
	transform.position = newPos;
	
	if ( (transform.position.x + spriteWidth) <= cameraTransform.position.x ) {
		Debug.Log("Moved!");
		newPos = transform.position;
  		newPos.x += 2.0f * spriteWidth * .999;
  		transform.position = newPos;
	}
}