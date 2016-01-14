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

function p(text1) {
	if (mousedown==2) {
		tempX = x;
		tempY = y - 69;
		if (x <= c_w) {
			document.getElementById('box').style.webkitTransform='scaleX(1)';
			document.getElementById('box').style.msTransform='scaleX(1)';
			document.getElementById('box').style.MozTransform='scaleX(1)';
			document.getElementById('box').style.OTransform='scaleX(1)';
			document.getElementById('box').style.transform='scaleX(1)';
			document.getElementById('infotext1').style.webkitTransform='scaleX(1)';
			document.getElementById('infotext1').style.msTransform='scaleX(1)';
			document.getElementById('infotext1').style.MozTransform='scaleX(1)';
			document.getElementById('infotext1').style.OTransform='scaleX(1)';
			document.getElementById('infotext1').style.transform='scaleX(1)';
			document.getElementById('box').style.left = (tempX) + 'px';
		}
		if (x > c_w) {
			document.getElementById('box').style.webkitTransform='scaleX(-1)';
			document.getElementById('box').style.msTransform='scaleX(-1)';
			document.getElementById('box').style.MozTransform='scaleX(-1)';
			document.getElementById('box').style.OTransform='scaleX(-1)';
			document.getElementById('box').style.transform='scaleX(-1)';
			document.getElementById('infotext1').style.webkitTransform='scaleX(-1)';
			document.getElementById('infotext1').style.msTransform='scaleX(-1)';
			document.getElementById('infotext1').style.MozTransform='scaleX(-1)';
			document.getElementById('infotext1').style.OTransform='scaleX(-1)';
			document.getElementById('infotext1').style.transform='scaleX(-1)';
			document.getElementById('box').style.left = (tempX - 342) + 'px';
		}
		document.getElementById('box').style.top = (tempY) + 'px';
		document.getElementById('box').style.visibility = 'visible';
		document.getElementById('infotext1').style.visibility = 'visible';
	}
	document.getElementById('infotext1').innerHTML = text1;
}
					
			//preset selection infoplate
			function leftsagp() {			
				document.getElementById('leftsagu').style.textDecoration = 'underline';
				document.getElementById('prehov1').style.visibility = 'hidden';
				document.getElementById('presetline').style.visibility = 'hidden';
			}
			function rigsagp() {			
				document.getElementById('rsagu').style.textDecoration = 'underline';
				document.getElementById('prehov1').style.visibility = 'hidden';
				document.getElementById('presetline').style.visibility = 'hidden';
			}
			function ovep() {			
				document.getElementById('overheadu').style.textDecoration = 'underline';
				document.getElementById('prehov1').style.visibility = 'hidden';
				document.getElementById('presetline').style.visibility = 'hidden';
			}
			function perinealp() {
				document.getElementById('perinealu').style.textDecoration = 'underline';
				document.getElementById('prehov1').style.visibility = 'hidden';
				document.getElementById('presetline').style.visibility = 'hidden';
			}