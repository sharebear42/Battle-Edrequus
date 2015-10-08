#pragma strict

public var bolt1: GameObject;

function Update () {
	if (Input.GetKeyDown (KeyCode.Space)) {
		Instantiate (bolt1, transform.position, transform.rotation);
	}
}