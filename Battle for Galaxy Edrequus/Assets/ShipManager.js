#pragma strict

public var ship1: GameObject;

public var corner: Vector3;

public var baseRotation: Quaternion;

function Start () {
    corner.x = 3.05;
    corner.y = 1.65;
    baseRotation.eulerAngles = Vector3(-90, 0, 0);

    Instantiate(ship1, corner, baseRotation);


}

function Update () {

}