"use strict";

function Canvas(parent)
{
	//Parent
	this.parent = (parent !== undefined) ? parent : document.body;

	//Create canvas
	this.element = document.createElement("canvas");
	this.element.style.position = "absolute";

	//Prevent Drop event
	this.element.ondrop = function(event)
	{
		event.preventDefault();
	};

	//Prevent deafault when object dragged over
	this.element.ondragover = function(event)
	{
		event.preventDefault();
	};

	//Attributes
	this.size = new THREE.Vector2(0,0);
	this.position = new THREE.Vector2(0,0);
	this.visible = true;
	
	//Add element to document
	this.parent.appendChild(this.element);
}

//Remove element
Canvas.prototype.destroy = function()
{
	try
	{
		this.parent.removeChild(this.element);
	}
	catch(e){}
};

//Update
Canvas.prototype.update = function(){};

//Update division Size
Canvas.prototype.updateInterface = function()
{
	//Visiblity
	if(this.visible)
	{
		this.element.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
	}

	//Canvas
	this.element.width = this.size.x;
	this.element.height = this.size.y;
	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";
};