#pragma strict

public var shotSpeed: float;
public var explosion: GameObject;

function Update () {
	transform.Translate (Vector3.right * shotSpeed * Time.deltaTime);
}