#pragma strict

public var shipSpeed: float = 0.75;

public var target: Vector3;
public var move: boolean;
public var movesLeft: float = 3;

var createHexGrid: CreateHexGrid;
var hexControl: HexController;

function Start() {
	move = false;
	var cam = GameObject.FindWithTag("MainCamera");
	createHexGrid = cam.GetComponent.<CreateHexGrid>();
}

function FixedUpdate () {
	if (Input.GetKeyDown (KeyCode.H)) {
		transform.Rotate (Vector3.up * 60);
	}
	if (Input.GetKeyDown (KeyCode.F)) {
		transform.Rotate (Vector3.down * 60);
	}
	if (move == true) {
		transform.position = Vector3.Lerp(transform.position, target, shipSpeed * Time.deltaTime);
		var dist: float = Vector3.Distance(target, transform.position);
	
		if (move == true && dist < 0.01) {
			move = false;
			if (move == false) {
				var hexes: GameObject[] = createHexGrid.hexes;
				for (var hex: GameObject in hexes) {
					hexControl = hex.GetComponentInChildren.<HexController>();
					if (hexControl != null) {
						hexControl.CheckPos();
					}
				}
			}
		}
		else
			Debug.Log ("no script on hex " + Time.time + " s");
		
	}
}


public function Move() {
	var dist: float = Vector3.Distance(target,transform.position);
	var mov = dist / 1.74;
	movesLeft -= mov; 
}

function OnMouseDown () {
	var hexes: GameObject[] = createHexGrid.hexes;
	for (var hex: GameObject in hexes) {
		hexControl = hex.GetComponentInChildren.<HexController>();
		if (hexControl != null) {
			hexControl.CheckPos();
		}
		else
			Debug.Log ("no script on hex " + Time.time + " s");
		
	}
}
	