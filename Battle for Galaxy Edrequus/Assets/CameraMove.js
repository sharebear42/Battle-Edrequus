#pragma strict

public var camSpeed: float = 4.0;

function FixedUpdate () {

	var moveHorizontal: float = Input.GetAxis ("Horizontal") * camSpeed;
	var moveVertical: float = Input.GetAxis ("Vertical") * camSpeed;
	var zoom: float = Input.GetAxis ("Mouse ScrollWheel") * camSpeed;
	
	moveHorizontal *= Time.deltaTime;
	moveVertical *= Time.deltaTime;
	zoom *= Time.deltaTime;
	
	transform.Translate (moveHorizontal, moveVertical, 0);
	GetComponent.<Camera>().orthographicSize -= zoom * 20.0;
}