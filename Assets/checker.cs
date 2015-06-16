using System.Collections;
using System.IO.Ports;
using UnityEngine;
public class checker : MonoBehaviour {
	
	private static SerialPort sp = new SerialPort("COM4", 9600, Parity.None, 8, StopBits.One);
	private string message, message1;
	private string message2;
	private bool ready;
	
	
	
	void Start() {
		ready = false;
		string[] ports;
		ports = SerialPort.GetPortNames();
		Debug.Log ("Serial Ports length : "+ports.Length);
		message2 += "Length : " + ports.Length + " ports : " + ports;
		ready = true;

		//OpenConnection();   
		
		
	}
	
	void Update() { 
		/*if(sp.IsOpen)
		{
			message2 = sp.ReadLine(); 
		}
		else
		{
			Debug.Log("The PORT is not open");

		}*/
	} 
	
	void OnGUI()    {
		if(ready)
		GUI.Label(new Rect(0, 0, Screen.width, 220), message2);
		else GUI.Label(new Rect(0, 0, Screen.width, 220), "NOT READY!");

	}
	
	
	public void OpenConnection() {
		if (sp != null) 
		{
			if (sp.IsOpen) 
			{
				sp.Close();
				message = "Closing port, because it was already open!";
			}
			else 
			{
				sp.Open(); 
				sp.ReadTimeout = 1000;  
				message = "Port Opened!";
			}
		}
		else 
		{
			if (sp.IsOpen)
			{
				print("Port is already open");
			}
			else 
			{
				print("Port == null");
			}
		}
	}
	
	
	
	
	void OnApplicationQuit() {
		sp.Close();
	}
	
	
	
}