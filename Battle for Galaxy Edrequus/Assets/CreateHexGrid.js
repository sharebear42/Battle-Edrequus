#pragma strict

//following public variable is used to store the hex model prefab;
//instantiate it by dragging the prefab on this variable using unity editor
public var Hex: GameObject;

public var hexes: GameObject[];
//next two variables can also be instantiated using unity editor
public var gridWidthInHexes = 10;
public var gridHeightInHexes = 10;

//Hexagon tile width and height in game world

public var hexHeight: float = 0.3;
public var hexWidth: float = 0.25;

//Method to initialise Hexagon width and height
//function setSizes()
//{
     
//renderer component attached to the Hex prefab is used to get the current width and height
    //var hexWidth = Hex.GetComponent.<Renderer>().bounds.size.y;
    //var hexHeight = Hex.GetComponent.<Renderer>().bounds.size.x;
//}

//Method to calculate the position of the first hexagon tile
//The center of the hex grid is (0,0,0)
function calcInitPos()
{
    var initPos: Vector3;
    //the initial position will be in the left upper corner
    initPos = new Vector3(-hexWidth * gridWidthInHexes / 2f + hexWidth * 0.5, 0,
    					  gridHeightInHexes / 2f * hexHeight - hexHeight * 0.5);

    return initPos; 
}

public function calcWorldCoord(gridPos: Vector3)
{
    //Position of the first hex tile
    var initPos: Vector3;
    initPos = calcInitPos();
    //Every second row is offset by half of the tile width
    if (gridPos.y % 2 != 0){
        var offset: float = hexWidth * 0.5;
        var x =  initPos.x + offset + gridPos.x * hexWidth;
        var z = initPos.z - gridPos.y * hexHeight * 0.75f;
        Debug.Log ("offset" + gridPos.y);
        return new Vector3(x, 0, z);
	}
	else if (gridPos.y % 2 == 0){
	    var x1 =  initPos.x + gridPos.x * hexWidth;
	    //Every new line is offset in z direction by 3/4 of the hexagon height
	    var z1 = initPos.z - gridPos.y * hexHeight * 0.75f;
	    Debug.Log ("no offset" + gridPos.y);
	    return new Vector3(x1, 0, z1);
    }
}

function Start () {
	//setSizes();
    //Game object which is the parent of all the hex tiles
    var hexGridGO = new GameObject ("HexGrid");
	for (var y = 0; y < gridHeightInHexes; y++)
	{
	    for (var x = 0; x < gridWidthInHexes; x++)
	    {
	        //GameObject assigned to Hex public variable is clone
	       
	        var hex: GameObject = Instantiate(Hex);
	        //Current position in grid
	        var gridPos: Vector3 = new Vector3(x, y);
	        hex.transform.position = calcWorldCoord(gridPos);
	        hex.transform.parent = hexGridGO.transform;
	        
	        hexes += [hex];
	    }
	}
	var temp: Vector3 = hexGridGO.transform.position;
	temp.x = hexGridGO.transform.position.x + 0.05;
	temp.z = hexGridGO.transform.position.z - 0.5;
	hexGridGO.transform.position = temp;
}



