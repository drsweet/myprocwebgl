

			trunk=0;
			slim = 0;
			
			function showshield() {
				fadeInX('shield',0)
				setTimeout("document.getElementById('3darea').style.visibility='';",500);
				setTimeout("fadeInX('3darea',0)",500);
				document.getElementById('cl_loadinglabel').style.visibility = 'hidden';
				document.getElementById('tacou').style.visibility = 'visible';
			}
			
			function startMapLoading(path,distance) {
			
				canvas = document.getElementById('3darea');
				c_w = window.innerWidth;
                c_h = window.innerHeight;
				if (c_w>distance) {
					var imgName = document.getElementById('imgX');
					imgName.width = c_w - distance;
                    imgName.style.width = c_w;
				}
				canvas.width = c_w - 0;   canvas.height = c_h;
				var imgName = document.getElementById('imgZ');
				imgName.width = c_w;
                imgName.style.width = c_w;
				
				// show loading text
				document.getElementById('cl_loadinglabel').style.visibility = 'visible';
				setTimeout("fadeInX('cl_loadinglabel',0)",700);
				
				//variables needed to run the camera panning
				var clap = new CL3D.CopperLicht('3darea');
				
				if (!clap.initRenderer()) {			
					document.getElementById('cl_nowebgl').style.display = 'block';
					document.getElementById('cl_loadinglabel').style.visibility = 'hidden';
					return;
				}
				
				var engine = clap.load(path);
				//nameOfFolderContainingDraggableNodes = 'parent';
			
				clap.OnLoadingComplete = function() {
					
					// change the background color of the canvas from white to black; this affects models with transparent textures
					document.getElementById('3darea').style.background = '#000';
					
					document.getElementById('cl_nowebgl').style.visibility='hidden';
					document.getElementById('shield').style.visibility = 'visible';
					setTimeout("showshield()",4000);
					
					var scene = clap.getScene();
                    /*
					if (scene) {	
						scene.setRedrawMode(CL3D.Scene.REDRAW_EVERY_FRAME);
						folder = scene.getSceneNodeFromName(nameOfFolderContainingDraggableNodes);	
								
						if (folder) {
							folder.updateAbsolutePosition();
									
							// in case folder has a transformation
							folderTransformation = folder.AbsoluteTransformation;
							folderTransformationInv = folderTransformation.clone();
							folderTransformationInv.makeInverse();
						}
					}
                    */
					var cam = clap.getScene().getActiveCamera();
					var cfov = cam.getFov()
					mfov = cfov;
				}
				
				//functions needed to activate camera panning
				draggingNode = null;
				distance = 0;
				folder = null;
				//originalPosition = null;
				folderTransformation = null;
				folderTransformationInv = null;
				itemWasDragged = false;
						
				canvas.onmousedown = function(event) {
					clap.handleMouseDown(event);
					
					if (event.button==0) {
						event.button=1;
					}
					hidetopinfo();
					var pos3d = clap.get3DPositionFrom2DPosition(clap.getMouseX(), clap.getMouseY());
					var cam = clap.getScene().getActiveCamera();
					cam.setFov(mfov);
					var startLine = cam.getAbsolutePosition();
					var endLine = startLine.add(pos3d.substract(startLine).multiplyWithScal(2));
							
					draggingNode = null;
							
					if (event.button == 2) {
						hidetopinfo();
						document.getElementById('3darea').style.cursor = 'move';
						for (var i=0; i<folder.Children.length; ++i) {
							var n = folder.Children[i];
							if (n.getTransformedBoundingBox().intersectsWithLine(startLine, endLine)) {
								// found item to drag, start dragging
								draggingNode = n;
								distance = startLine.getDistanceTo(n.getAbsolutePosition());
								distance = Math.max(distance);
								//originalPosition = n.getAbsolutePosition().clone();
								itemWasDragged = false;
							}					
						}
					}
				}					

				canvas.onmousemove = function(event) {
					clap.handleMouseMove(event);
					
					if (draggingNode == null)
						return;
								
					// continue dragging item
					var pos3d = clap.get3DPositionFrom2DPosition(clap.getMouseX(), clap.getMouseY());
					var cam = clap.getScene().getActiveCamera();
					cam.setFov(mfov);
					var campos = cam.getAbsolutePosition();

					var vect = pos3d.substract(campos);
					vect.setLength(distance);

					draggingNode.Pos = vect.add(campos);
					folderTransformationInv.transformVect(draggingNode.Pos);
					draggingNode.updateAbsolutePosition();
							
					document.getElementById('3darea').style.cursor = 'move';
				}
					
				canvas.onmouseup = function(event) {
					clap.handleMouseUp(event);
					
					if (itemWasDragged) {
						var anim = draggingNode.getAnimatorOfType('onclick');
						if (anim != null)
							anim.TimeLastClicked = 0;
									
						// also disable the 'WhenClickedDoSomething' animator for all other nodes
						var now = CL3D.CLTimer.getTime();
						clap.LastCameraDragTime = now;
					}
					//returns the model to the origin after the mouse is let up
					//draggingNode.Pos = originalPosition.clone();
					//folderTransformationInv.transformVect(draggingNode.Pos);
					openhand();
					draggingNode = null;
				}
				
				function dFOV(shift) {
					var cam = clap.getScene().getActiveCamera();
					var cfov = cam.getFov()
					mfov = cfov + shift;
					//bounds to keep the scene from being zoomed in either too close or too far away (zoom lock)
					if (mfov < 0.2066370964050287) {
						mfov = 0.2066370964050287;
					}
					if (mfov > 1.3066370964050291) {
						mfov = 1.3066370964050291;
					}
					//alert(mfov);
					cam.setFov(mfov);
				}
		
				function handle(delta) {
					var s = delta + ": ";
					if (delta < 0)
						dFOV(0.05);
					else
						dFOV(-0.05);
				}
				 
				function wheel(event){
					var delta = 0;
					if (!event) event = window.event;
					if (event.wheelDelta) {
						delta = event.wheelDelta/120; 
						if (window.opera) delta = -delta;
					} else if (event.detail) {
						delta = -event.detail/3;
					}
					if (delta)
						handle(delta);
				}
				 
				/* Initialization code. */
				if (window.addEventListener)
					window.addEventListener('DOMMouseScroll', wheel, false);
				window.onmousewheel = document.onmousewheel = wheel;
			
				
			} 
//function hidedonation() {
//document.getElementById('donation').style.visibility = 'hidden';
//}	
function getcoord(event) {
	x=event.clientX;
	y=event.clientY;
	c_w = (window.innerWidth/2);
	c_h = (window.innerHeight/2);
}
		
gate=0;
var foo=null;

function sliddd()
{
	if (gate == 1)
	{
		
		if (window.innerWidth > 800)
		{
			document.getElementById('movement').style.left = x - 525 + 'px';
			
			if (x >= 525)
			{
				document.getElementById('movement').style.left = 0 + 'px';			
				return;
			}
			
			if (x <= 25)
			{
				document.getElementById('movement').style.left = '-500px';
				return;
			}
		}
		
		else
		{
			document.getElementById('movement').style.left = x - (window.innerWidth/2 - 25) + 'px';
			
			if (x >= (window.innerWidth/2 - 25))
			{
				document.getElementById('movement').style.left = 0 + 'px';			
				return;
			}
			
			if (x <= 25)
			{
				document.getElementById('movement').style.left = -(window.innerWidth/2 - 50) + 'px';
				return;
			}
		}
		
	}
}

document.onmousemove = getcoord;

function hidetopinfo(){return;}

			//start camera control indicators
function fadeIn(objId,opacity) {
	if (document.getElementById) {
		obj = document.getElementById(objId);
		if (opacity <= 100) {
			setOpacity(obj, opacity);
			opacity += 25;
			window.setTimeout("fadeIn('"+objId+"',"+opacity+")", 1);
		}
	}
}

function fadeOut(objId,opacity) {
	if (document.getElementById) {
		obj = document.getElementById(objId);
		if (opacity >= 0) {
			setOpacity(obj, opacity);
			opacity -= 10;
			window.setTimeout("fadeOut('"+objId+"',"+opacity+")", 25);
		}
	}
}

function fadeInX(objId,opacity) {
	if (document.getElementById) {
		obj = document.getElementById(objId);
		if (opacity <= 100) {
			setOpacity(obj, opacity);
			opacity += 5;
			window.setTimeout("fadeInX('"+objId+"',"+opacity+")", 25);
		}
	}
}

function setOpacity(obj, opacity) {
	opacity = (opacity == 100)?99.999:opacity;
	// IE/Win
	obj.style.filter = "alpha(opacity:"+opacity+")";
	// Safari<1.2, Konqueror
	obj.style.KHTMLOpacity = opacity/100;
	// Older Mozilla and Firefox
	obj.style.MozOpacity = opacity/100;
	// Safari 1.2, newer Firefox and Mozilla, CSS3
	obj.style.opacity = opacity/100;
}
//end camera control indicators

dtool=0;
document.onselectstart = function () { return false; };
function toggledtool() {
	if (dtool == 1) {
		document.getElementById('3darea').style.cursor = 'url(assets/img/scene/scalpel.cur), auto';
		document.getElementById('dtooltext').innerHTML = 'DISSECTION<br>TOOL&nbsp;ON';
	}
	if (dtool == 0) {
		document.getElementById('3darea').style.cursor = 'url(assets/img/scene/handOPEN.cur), auto';
		document.getElementById('dtooltext').innerHTML = 'DISSECTION<br>TOOL&nbsp;OFF';
	}
	document.getElementById('disson').style.visibility = (document.getElementById('disson').style.visibility == 'visible') ? 'hidden' : 'visible';
	document.getElementById('dissoff').style.visibility = (document.getElementById('dissoff').style.visibility == 'hidden') ? 'visible' : 'hidden';
}

function closehand() {
	if (dtool == 0) {
	document.getElementById('3darea').style.cursor = 'url(assets/img/scene/handCLOSED.cur), auto';
	}
}
function openhand() {
	if (dtool == 0) {
	document.getElementById('3darea').style.cursor = 'url(assets/img/scene/handOPEN.cur), auto';
	}
	if (dtool == 1) {
	document.getElementById('3darea').style.cursor = 'url(assets/img/scene/scalpel.cur), auto';
	}
}
			
function helptext() {
	document.getElementById('help').style.visibility = (document.getElementById('help').style.visibility == 'visible') ? 'hidden' : 'visible';
}
			
var message="Sorry, right-click has been disabled"; 
function clickIE() {if (document.all) {(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
document.oncontextmenu=new Function("return false")

function disableclick() {
	openhand();
	document.getElementById('3darea').style.pointerEvents = 'none'; 
	setTimeout("document.getElementById('3darea').style.pointerEvents = 'auto'", 500);
}

			function procedure()
			{
							document.getElementById('movement').style.top = window.innerHeight/4 + 'px';	
				document.getElementById('content').style.height = window.innerHeight * (1/2) + 'px';	
				document.getElementById('content').style.width = window.innerWidth/2 - 50 + 'px';	
				document.getElementById('slider').style.height = window.innerHeight * (1/2) + 'px';
				document.getElementById('slider').style.marginLeft = window.innerWidth/2 - 50 + 'px';
				document.getElementById('drag').style.marginTop = (window.innerHeight * (1/4)) - 51 + 'px';
				document.getElementById('movement').style.left = -(window.innerWidth/2.5 - 50) + 'px';	
				
				if (window.innerHeight > 800)
				{
					document.getElementById('movement').style.top = window.innerHeight/2 - 200 + 'px';
					document.getElementById('content').style.height = '400px';
					document.getElementById('slider').style.height = '400px';
					document.getElementById('drag').style.marginTop = '149px';
				}	
				
				if (window.innerWidth > 800)
				{	
					document.getElementById('content').style.width = '500px';	
					document.getElementById('slider').style.marginLeft = '500px';
					document.getElementById('movement').style.left = '-450px';	
				}
				
				//alert(window.innerHeight);
				
				if (window.innerHeight < 1000)
				{
					document.getElementById('imgs1').style.height = '256px';
					document.getElementById('imgs1').style.width = '256px';
					document.getElementById('content1').style.fontSize='24px';
					document.getElementById('content2').style.fontSize='18px';
				}
				
				if (window.innerHeight < 800)
				{
					document.getElementById('imgs1').style.height = '256px';
					document.getElementById('imgs1').style.width = '256px';
					document.getElementById('content1').style.fontSize='18px';
					document.getElementById('content2').style.fontSize='16px';
				}
				
				if (window.innerHeight < 600)
				{
					document.getElementById('imgs1').style.height = '128px';
					document.getElementById('imgs1').style.width = '128px';
					document.getElementById('content1').style.fontSize='14px';
					document.getElementById('content2').style.fontSize='14px';
				}
			}