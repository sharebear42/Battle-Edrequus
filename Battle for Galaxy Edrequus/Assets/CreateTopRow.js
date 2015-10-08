#pragma strict
public var xpos = 1.0;

function Start () {
for (xpos = 147.0; xpos < -147.0; xpos = xpos - 19.6875 ) {

	GUI.Button(Rect(xpos,-147.0, 19.6875, 19.6875),"");

}
}

function Update () {

}