#pragma strict

private var cameraTransform : Transform;
private var spriteWidth : float; 

private var newPos : Vector3;

static var backgroundStop : boolean = false;


function Start () {
	cameraTransform = Camera.main.transform;
	newPos = transform.position;
	
	var spriteRenderer : SpriteRenderer = GetComponent.<Renderer>() as SpriteRenderer;
	spriteWidth = spriteRenderer.sprite.bounds.size.x;
}

function Update () {
	if (!backgroundStop) {
		newPos.x -= Time.deltaTime * game_control.speed;
		transform.position = newPos;
		
		if ( (transform.position.x + spriteWidth) <= cameraTransform.position.x ) {
			newPos = transform.position;
	  		newPos.x += 2.0f * spriteWidth * .9;
	  		transform.position = newPos;
		}
	}
}