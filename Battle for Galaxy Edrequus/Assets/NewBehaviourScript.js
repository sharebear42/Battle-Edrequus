#pragma strict

public var square: GameObject;

public var xpos: float;

public var ypos: float;

private var temp: Vector3;

public var offset: float;

public var isOffset = true;

public var rotation: Quaternion;



function Start () {
   
    rotation.eulerAngles = Vector3(0, 0, 90);

    offset = 0.175;
       
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = 1.8;  
        temp.x = xpos;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = 1.45 + 0.08;  
        temp.x = xpos - offset;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = 1.1 + 0.16;  
        temp.x = xpos;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = 0.75 + 0.24;  
        temp.x = xpos - offset;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = 0.4 + 0.32;  
        temp.x = xpos;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = 0.05 + 0.4;  
        temp.x = xpos - offset;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -0.3 + 0.48;  
        temp.x = xpos;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -0.65 + 0.56;  
        temp.x = xpos - offset;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -1 + 0.64;  
        temp.x = xpos;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -1.35 + 0.72;  
        temp.x = xpos - offset;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -1.7 + 0.8;  
        temp.x = xpos;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -2.05 + 0.88;  
        temp.x = xpos- offset;
        Instantiate(square, temp, rotation);
    }
        
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -2.4+ 0.96;  
        temp.x = xpos;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -2.75 + 1.04;  
        temp.x = xpos - offset;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -3.1 + 1.12;  
        temp.x = xpos;
        Instantiate(square, temp, rotation);
    }
    for (xpos = 3.2; xpos > -2; xpos = xpos - 0.34) {
        temp.y = -3.45 + 1.2;  
        temp.x = xpos - offset;
        Instantiate(square, temp, rotation);
    }
         
            
}
    
        
    
           
            
        
        



