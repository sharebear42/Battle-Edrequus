#pragma strict

public var blue1: Color;
public var blue2: Color;
public var green1: Color;
public var yellow1: Color;
public var red1: Color;

private var playerShip: GameObject;
private var moveShip: MoveShip;

private var canMove: boolean;

public var rend: Renderer;

function Start() {
	canMove = false;
	playerShip = GameObject.FindWithTag ("Player");
	moveShip = playerShip.GetComponent.<MoveShip>();
}

function OnMouseDown () {
	playerShip = GameObject.FindWithTag ("Player");
	moveShip = playerShip.GetComponent.<MoveShip>();
	if (moveShip.movesLeft > 0.2 && canMove == true) {	
		moveShip.move = true;
		
		moveShip.target = transform.parent.position;
		moveShip.Move();
		Debug.Log ("mouse click " + Time.time + " s");
	}
	else 
		Debug.Log ("NO CAN MOVE HERE!!" + Time.time + " s");
}

function OnMouseEnter () {
	if (rend.material.color == blue1) {
		rend.material.color = blue2;
		Debug.Log ("mouse enter blue " + Time.time + " s");
	}
	if (rend.material.color == green1) {
		rend.material.color = yellow1;
		Debug.Log ("mouse enter green " + Time.time + " s");
	}
}	

function OnMouseExit () {
	if (rend.material.color == blue2) {
		rend.material.color = blue1;
	}	
	if (rend.material.color == yellow1) {
		rend.material.color = green1;
	}
}
	

function OnTriggerEnter(movTrigger: Collider) {
	
	if (movTrigger.gameObject.tag == "Player") {
		rend.material.color = green1;
	}
	if (movTrigger.gameObject.tag == "Planet") {
		rend.material.color = red1;
	}
}

function OnTriggerExit(movTrigger: Collider) {
	if (movTrigger.gameObject.tag == "Player") {
		rend.material.color = blue1;
	}
	if (movTrigger.gameObject.tag == "Planet") {
		rend.material.color = blue1;
	}
}

public function CheckPos () {
	
	var dist: float = Vector3.Distance(playerShip.transform.position, transform.parent.position);
	Debug.Log ("exec checkPos " + dist);
	if (dist - 0.2 <= moveShip.movesLeft * 1.74) {
		rend.material.color = green1;
		canMove = true;
	}
	
	else {
		rend.material.color = blue1;
		canMove = false;
		
	}
}	


