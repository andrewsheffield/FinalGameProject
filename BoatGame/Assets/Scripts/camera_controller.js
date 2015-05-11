
var originPosition:Vector3;
var originRotation:Quaternion;
var shake_decay: float;
var shake_intensity: float;
var shook : int = 0;

function Start() {
	originPosition = transform.position;
  	originRotation = transform.rotation;
}
 
function Update(){
   if(shake_intensity > 0){
      transform.position = originPosition + Random.insideUnitSphere * shake_intensity;
      transform.rotation = Quaternion(
      originRotation.x + Random.Range(-shake_intensity,shake_intensity)*.2,
      originRotation.y + Random.Range(-shake_intensity,shake_intensity)*.2,
      originRotation.z + Random.Range(-shake_intensity,shake_intensity)*.2,
      originRotation.w + Random.Range(-shake_intensity,shake_intensity)*.2);
      shake_intensity -= shake_decay;
      shook = 1;
   }
   else if (shake_intensity <= 0 && originPosition != transform.position && shook == 1)
   {
   		transform.position = originPosition;
   		transform.rotation = originRotation;
   		shook = 0;
   }
}

function Shake() {
   	shake_intensity = .1;
   	shake_decay = 0.005;
}