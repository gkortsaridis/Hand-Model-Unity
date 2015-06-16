#pragma strict



private var finger1 : float;
private var finger2 : float;
private var finger3 : float;
private var finger4 : float;
private var finger5 : float;

private var f11 : GameObject;
private var f12 : GameObject;
private var f13 : GameObject;

private var f21 : GameObject;
private var f22 : GameObject;
private var f23 : GameObject;

private var f31 : GameObject;
private var f32 : GameObject;
private var f33 : GameObject;

private var f41 : GameObject;
private var f42 : GameObject;
private var f43 : GameObject;

private var f51 : GameObject;
private var f52 : GameObject;
private var f53 : GameObject;

private var xrot : float;
private var yrot : float;
private var zrot : float;


function Start () {

	f11 = GameObject.FindGameObjectWithTag("f11");
	f12 = GameObject.FindGameObjectWithTag("f12");
	f13 = GameObject.FindGameObjectWithTag("f13");
	
	f21 = GameObject.FindGameObjectWithTag("f21");
	f22 = GameObject.FindGameObjectWithTag("f22");
	f23 = GameObject.FindGameObjectWithTag("f23");
	
	f31 = GameObject.FindGameObjectWithTag("f31");
	f32 = GameObject.FindGameObjectWithTag("f32");
	f33 = GameObject.FindGameObjectWithTag("f33");
	
	f41 = GameObject.FindGameObjectWithTag("f41");
	f42 = GameObject.FindGameObjectWithTag("f42");
	f43 = GameObject.FindGameObjectWithTag("f43");
	
	f51 = GameObject.FindGameObjectWithTag("f51");
	f52 = GameObject.FindGameObjectWithTag("f52");
	f53 = GameObject.FindGameObjectWithTag("f53");

}

function Update () {

	
	f11.transform.localRotation.y = -finger1/2;
	f12.transform.localRotation.y = -finger1/2;
	f13.transform.localRotation.y = -finger1/2;
	
	f21.transform.localRotation.y = -finger2/2;
	f22.transform.localRotation.y = -finger2/2;
	f23.transform.localRotation.y = -finger2/2;

	f31.transform.localRotation.y = -finger3/2;
	f32.transform.localRotation.y = -finger3/2;
	f33.transform.localRotation.y = -finger3/2;

	f41.transform.localRotation.y = -finger4/2;
	f42.transform.localRotation.y = -finger4/2;
	f43.transform.localRotation.y = -finger4/2;

	f51.transform.localRotation.y = -finger5/4;
	f51.transform.localRotation.x = -finger5/4;
	
	f52.transform.localRotation.y = -finger5/4;
	f52.transform.localRotation.x = -finger5/4;
		
	f53.transform.localRotation.y = -finger5/3;	
	//f53.transform.localRotation.x = -finger5/4;	
	
	this.transform.localRotation.x = xrot;
	this.transform.localRotation.y = yrot;
	this.transform.localRotation.z = zrot;
																						
}

function OnGUI ()
{
		GUI.Label(Rect(Screen.width/2-Screen.width/8,0,Screen.width/4,20),"Pinky Finger");
		finger1 = GUI.HorizontalScrollbar (Rect (Screen.width/2-Screen.width/8, 20, Screen.width/4, 30), finger1, 0.1, 0.0, 1.1);
		
		GUI.Label(Rect(Screen.width/2-Screen.width/8,40,Screen.width/4,20),"Ring Finger");
		finger2 = GUI.HorizontalScrollbar (Rect (Screen.width/2-Screen.width/8, 60, Screen.width/4, 30), finger2, 0.1, 0.0, 1.1);
		
		GUI.Label(Rect(Screen.width/2-Screen.width/8,80,Screen.width/4,20),"Middle Finger");
		finger3 = GUI.HorizontalScrollbar (Rect (Screen.width/2-Screen.width/8, 100, Screen.width/4, 30), finger3, 0.1, 0.0, 1.1);
		
		GUI.Label(Rect(Screen.width/2-Screen.width/8,120,Screen.width/4,20),"Index");
		finger4 = GUI.HorizontalScrollbar (Rect (Screen.width/2-Screen.width/8, 140, Screen.width/4, 30), finger4, 0.1, 0.0, 1.1);
		
		GUI.Label(Rect(Screen.width/2-Screen.width/8,160,Screen.width/4,20),"Thumb");
		finger5 = GUI.HorizontalScrollbar (Rect (Screen.width/2-Screen.width/8, 180, Screen.width/4, 30), finger5, 0.1, 0.0, 1.1);
		
		GUI.Label(Rect(Screen.width/2-Screen.width/8,200,Screen.width/4,20),"X-Rotation");
		xrot = GUI.HorizontalScrollbar (Rect (Screen.width/2-Screen.width/8, 220, Screen.width/4, 30), xrot, 0.1, 0.0, 1.1);
		
		GUI.Label(Rect(Screen.width/2-Screen.width/8,240,Screen.width/4,20),"Y-Rotation");
		yrot = GUI.HorizontalScrollbar (Rect (Screen.width/2-Screen.width/8, 260, Screen.width/4, 30), yrot, 0.1, 0.0, 1.1);
		
		GUI.Label(Rect(Screen.width/2-Screen.width/8,280,Screen.width/4,20),"Z-Rotation");
		zrot = GUI.HorizontalScrollbar (Rect (Screen.width/2-Screen.width/8, 300, Screen.width/4, 30), zrot, 0.1, 0.0, 1.1);
}