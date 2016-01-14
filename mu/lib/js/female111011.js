			leftpelch = 1;
			rpelch = 0;
			sacrchc = 0;
			pubsymchc = 0;
			lsacrochc = 1;
			lsacrotchc = 1;
			ltendinchc = 1;
			rsacrochc = 0;
			rsacrotchc = 0;
			rtendinchc = 0;
			lcocchc = 1;
			licocchc = 1;
			lobtchc = 1;
			lpirchc = 1;
			lpubchc = 1;
			lsphchc = 1;
			rsphchc = 0;
			rpubchc = 0;
			rpirchc = 0;
			robtchc = 0;
			ricocchc = 0;
			rcocchc = 0;
			lblachc = 1;
			lbubchc = 1;
			lvaschc = 1;
			lprocchc = 1;
			lprochc = 1;
			lsemchc = 1;
			lureterchc = 1;
			lrecchc = 1;
			rureterchc = 0;
			rsemchc = 0;
			rprochc = 0;
			rprocchc = 0;
			rvaschc = 0;
			rbubchc = 0;
			rblachc = 0;
			rrecchc = 0;
			lbucchc = 1;
			lbulchc = 1;
			lcorcchc = 1;
			lcorschc = 1;
			lglachc = 1;
			liscchc = 1;
			lpermchc = 1;
			lperfchc = 1;
			lurethchc = 1;
			lurochc = 1;
			rbucchc = 0;
			rurochc = 0;
			rurethchc = 0;
			rperfchc = 0;
			rpermchc = 0;
			riscchc = 0;
			rglachc = 0;
			rcorschc = 0;
			rcorcchc = 0;
			rbulchc = 0;
			dvinchc = 0;
			susligchc = 0;
			lparchc = 1;
			lteslchc = 1;
			lgonachc = 1;
			lgonvchc = 1;
			lepichc = 1;
			lcrechc = 1;
			lintchc = 1;
			lextchc = 1;
			ltesrchc = 1;
			rparchc = 0;
			rintchc = 0;
			rteslchc = 0;
			rgonvchc = 0;
			rgonachc = 0;
			rextchc = 0;
			repichc = 0;
			rcrechc = 0;
			rtesrchc = 0;
			lducchc = 1;
			rducchc = 0;
			ranuchc = 1;
			lanuchc = 1;
			ruskichc = 1;
			luskichc = 1;
			rlabchc = 1;
			llabchc = 1;
			torsochc = 1;

//function hidedonation() {
//document.getElementById('donation').style.visibility = 'hidden';
//}	

function rotate(val)
{
	rotSceneNode.Rot.Y += val;
	return;
}

function panud(val)
{
	rotSceneNode.Pos.Y += val;
	return;
}

function panlr(val)
{
	rotSceneNode.Pos.Z += val;
	/*
	var x = clap.getScene().getActiveCamera().Pos.X;
	var z = clap.getScene().getActiveCamera().Pos.Z;
	//var zp = (((val^2)/((Math.tan(1.570796327-Math.atan(x/z)))+1))^0.5)
	var zp = Math.atan(x/z);
	//var zp = (Math.tan(1.570796327-Math.atan(x/z)));
	alert(zp);
	*/
	return;
}

function lolr(direc,eleID)
{
	if (direc == 'in')
		{document.getElementById(eleID).style.backgroundImage = "url('assets/copperlichtdata/menu-select-laser-or-loop-highlight.png')"; return;}
		
	if (direc == 'out')
		{document.getElementById(eleID).style.backgroundImage = "url('assets/copperlichtdata/menu-select-laser-or-loop.png')"; return;}
}

function dFOVb(shift) {
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
	cam.setFov(mfov);
}

function getcoord(event) {
	x=event.clientX;
	y=event.clientY;
	c_w = (window.innerWidth/2);
	c_h = (window.innerHeight/2);
}
		
gate=0;
var foo=null;

function addControls()
{
	if (document.getElementById('addCont').style.visibility == 'hidden')
		{document.getElementById('addCont').style.visibility = 'visible'; document.getElementById('addContText').innerHTML = 'Hide Controls'; return;}
		
	if (document.getElementById('addCont').style.visibility != 'hidden')
		{document.getElementById('addCont').style.visibility = 'hidden'; document.getElementById('addContText').innerHTML = 'Show Controls'; return;}
}

function sliddd()
{
	if (gate == 1)
	{
		document.getElementById('movement').style.left = (x - xke) + 'px';
		document.getElementById('movement').style.top = (y - yke) + 'px';
			
	}
}

document.onmousemove = getcoord;

function addin()
{
	if (document.getElementById('content').style.visibility == 'hidden')
		{
			document.getElementById('content').style.visibility = 'visible'; 
			document.getElementById('complicationsid').style.visibility = 'visible'; 
			document.getElementById('movement').style.height = '420px'; 
			document.getElementById('addinShad').src = "assets/img/scene/add-in-big-shadow.png"; 
			document.getElementById('addinCOLL').style.MozTransform = 'rotate(0deg)'; 
			document.getElementById('addinCOLL').style.webkitTransform = 'rotate(0deg)'; 
			if (g != 10)
				{document.getElementById('complicationsid').style.visibility = 'hidden';}
			return;
		}
		
	if (document.getElementById('content').style.visibility != 'hidden')
		{
			document.getElementById('content').style.visibility = 'hidden'; 
			document.getElementById('complicationsid').style.visibility = 'hidden'; 
			document.getElementById('movement').style.height = '30px'; 
			document.getElementById('addinShad').src = "assets/img/scene/add-in-lit-shadow.png"; 
			document.getElementById('addinCOLL').style.MozTransform = 'rotate(180deg)'; 
			document.getElementById('addinCOLL').style.webkitTransform = 'rotate(180deg)'; 
			return;
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
            
//start camera control indicators
function fadeIn(objId,opacity) {
	if (document.getElementById) {
		obj = document.getElementById(objId);
		if (opacity <= 100) {
			setOpacity(obj, opacity);
			opacity += 35;
			window.setTimeout("fadeIn('"+objId+"',"+opacity+")", 25);
		}
	}
}

function fadeOut(objId,opacity) {
	if (document.getElementById) {
		obj = document.getElementById(objId);
		if (opacity >= 0) {
			setOpacity(obj, opacity);
			opacity -= 5;
			window.setTimeout("fadeOut('"+objId+"',"+opacity+")", 25);
		}
	}
}
function fadeInX(objId,opacity) {
	if (document.getElementById) {
		obj = document.getElementById(objId);
		if (opacity <= 100) {
			setOpacity(obj, opacity);
			opacity += 25;
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
			function leftsagu() {
				document.getElementById('leftsagu').style.textDecoration = 'underline';
				document.getElementById('infotext1').innerHTML = '';
			}
			function lpelu() {
				document.getElementById('lpelu').style.textDecoration = 'underline';
				document.getElementById('infotext1').innerHTML = '';
			}
function hidetopinfo() {
	document.getElementById('box').style.visibility = 'hidden';
	document.getElementById('infotext1').style.visibility = 'hidden';
}
			function hidebotinfo() {
				var hinfo = document.getElementById('infotext2');
				hinfo.style.visibility = 'hidden';
			}
			function hidesubmenus() {
				document.getElementById('presetsel').style.visibility = 'hidden';
				document.getElementById('prehov1').style.visibility = 'hidden';
			}
			function helptext() {
				document.getElementById('help').style.visibility = (document.getElementById('help').style.visibility == 'visible') ? 'hidden' : 'visible';
			}
			
function invismenus() {
	document.getElementById('presetsel').style.visibility = 'hidden';
	document.getElementById('tesmenu').style.visibility = 'hidden';
	document.getElementById('orgmenu').style.visibility = 'hidden';
	document.getElementById('ligmenu').style.visibility = 'hidden';
	document.getElementById('musmenu').style.visibility = 'hidden';
	document.getElementById('bonmenu').style.visibility = 'hidden';
	document.getElementById('penmenu').style.visibility = 'hidden';
	document.getElementById('skinmenu').style.visibility = 'hidden';
	document.getElementById('prehov1').style.visibility = 'hidden';
	document.getElementById('teshov1').style.visibility = 'hidden';
	document.getElementById('orghov1').style.visibility = 'hidden';
	document.getElementById('mushov1').style.visibility = 'hidden';
	document.getElementById('lighov1').style.visibility = 'hidden';
	document.getElementById('bonhov1').style.visibility = 'hidden';
	document.getElementById('penhov1').style.visibility = 'hidden';
	document.getElementById('newhov1').style.visibility = 'hidden';
	document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lextch').style.visibility = 'hidden';document.getElementById('rextch').style.visibility = 'hidden';document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden'; document.getElementById('llabch').style.visibility = 'hidden'; document.getElementById('rlabch').style.visibility = 'hidden'; document.getElementById('luskich').style.visibility = 'hidden'; document.getElementById('ruskich').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden';
	openhand();
}
			
			var line;
			//penis
			function submenupe() {
					document.getElementById('lbulch').style.visibility = (lbulchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lcorcch').style.visibility = (lcorcchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lcorsch').style.visibility = (lcorschc == 1) ? 'hidden' : 'visible';
					document.getElementById('lglach').style.visibility = (lglachc == 1) ? 'hidden' : 'visible';
					document.getElementById('liscch').style.visibility = (liscchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lpermch').style.visibility = (lpermchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lurethch').style.visibility = (lurethchc == 1) ? 'hidden' : 'visible';
					document.getElementById('luroch').style.visibility = (lurochc == 1) ? 'hidden' : 'visible';
					document.getElementById('ruroch').style.visibility = (rurochc == 1) ? 'hidden' : 'visible';
					document.getElementById('rurethch').style.visibility = (rurethchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rpermch').style.visibility = (rpermchc == 1) ? 'hidden' : 'visible';
					document.getElementById('riscch').style.visibility = (riscchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rglach').style.visibility = (rglachc == 1) ? 'hidden' : 'visible';
					document.getElementById('rcorsch').style.visibility = (rcorschc == 1) ? 'hidden' : 'visible';
					document.getElementById('rcorcch').style.visibility = (rcorcchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rbulch').style.visibility = (rbulchc == 1) ? 'hidden' : 'visible';;
					document.getElementById('presetsel').style.visibility = 'hidden';
					document.getElementById('tesmenu').style.visibility = 'hidden';
					document.getElementById('orgmenu').style.visibility = 'hidden';
					document.getElementById('ligmenu').style.visibility = 'hidden';
					document.getElementById('musmenu').style.visibility = 'hidden';
					document.getElementById('bonmenu').style.visibility = 'hidden';
					document.getElementById('prehov1').style.visibility = 'hidden';
					document.getElementById('teshov1').style.visibility = 'hidden';
					document.getElementById('orghov1').style.visibility = 'hidden';
					document.getElementById('mushov1').style.visibility = 'hidden';
					document.getElementById('lighov1').style.visibility = 'hidden';
					document.getElementById('bonhov1').style.visibility = 'hidden';
					document.getElementById('skinmenu').style.visibility = 'hidden';
					document.getElementById('newhov1').style.visibility = 'hidden';
					document.getElementById('lextch').style.visibility = 'hidden';document.getElementById('rextch').style.visibility = 'hidden';document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden'; document.getElementById('llabch').style.visibility = 'hidden'; document.getElementById('rlabch').style.visibility = 'hidden'; document.getElementById('luskich').style.visibility = 'hidden'; document.getElementById('ruskich').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden';
				document.getElementById('penmenu').style.visibility = 'visible';
				document.getElementById('penhov1').style.visibility = 'visible';
			}

			//testi
			function submenute() {
					document.getElementById('lparch').style.visibility = (lparchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lgonach').style.visibility = (lgonachc == 1) ? 'hidden' : 'visible';
					document.getElementById('lgonvch').style.visibility = (lgonvchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lepich').style.visibility = (lepichc == 1) ? 'hidden' : 'visible';
					document.getElementById('lcrech').style.visibility = (lcrechc == 1) ? 'hidden' : 'visible';
					document.getElementById('lintch').style.visibility = (lintchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rparch').style.visibility = (rparchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rintch').style.visibility = (rintchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rgonvch').style.visibility = (rgonvchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rgonach').style.visibility = (rgonachc == 1) ? 'hidden' : 'visible';
					document.getElementById('repich').style.visibility = (repichc == 1) ? 'hidden' : 'visible';
					document.getElementById('rcrech').style.visibility = (rcrechc == 1) ? 'hidden' : 'visible';
					document.getElementById('rextch').style.visibility = (rextchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lextch').style.visibility = (lextchc == 1) ? 'hidden' : 'visible'
					document.getElementById('penhov1').style.visibility = 'hidden';
					document.getElementById('prehov1').style.visibility = 'hidden';
					document.getElementById('orghov1').style.visibility = 'hidden';
					document.getElementById('mushov1').style.visibility = 'hidden';
					document.getElementById('lighov1').style.visibility = 'hidden';
					document.getElementById('bonhov1').style.visibility = 'hidden';
					document.getElementById('penmenu').style.visibility = 'hidden';
					document.getElementById('presetsel').style.visibility = 'hidden';
					document.getElementById('orgmenu').style.visibility = 'hidden';
					document.getElementById('ligmenu').style.visibility = 'hidden';
					document.getElementById('musmenu').style.visibility = 'hidden';
					document.getElementById('bonmenu').style.visibility = 'hidden';
					document.getElementById('skinmenu').style.visibility = 'hidden';
					document.getElementById('newhov1').style.visibility = 'hidden';
					document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden'; document.getElementById('llabch').style.visibility = 'hidden'; document.getElementById('rlabch').style.visibility = 'hidden'; document.getElementById('luskich').style.visibility = 'hidden'; document.getElementById('ruskich').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden';
				document.getElementById('tesmenu').style.visibility = 'visible';
				document.getElementById('teshov1').style.visibility = 'visible';
			}
			
			//presetselections
			function submenupre() {
					document.getElementById('penmenu').style.visibility = 'hidden';
					document.getElementById('tesmenu').style.visibility = 'hidden';
					document.getElementById('orgmenu').style.visibility = 'hidden';
					document.getElementById('ligmenu').style.visibility = 'hidden';
					document.getElementById('musmenu').style.visibility = 'hidden';
					document.getElementById('bonmenu').style.visibility = 'hidden';
					document.getElementById('penhov1').style.visibility = 'hidden';
					document.getElementById('teshov1').style.visibility = 'hidden';
					document.getElementById('orghov1').style.visibility = 'hidden';
					document.getElementById('mushov1').style.visibility = 'hidden';
					document.getElementById('lighov1').style.visibility = 'hidden';
					document.getElementById('bonhov1').style.visibility = 'hidden';
					document.getElementById('skinmenu').style.visibility = 'hidden';
					document.getElementById('newhov1').style.visibility = 'hidden';
					document.getElementById('lextch').style.visibility = 'hidden';document.getElementById('rextch').style.visibility = 'hidden';document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden'; document.getElementById('llabch').style.visibility = 'hidden'; document.getElementById('rlabch').style.visibility = 'hidden'; document.getElementById('luskich').style.visibility = 'hidden'; document.getElementById('ruskich').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden';
				document.getElementById('presetsel').style.visibility = 'visible';
				document.getElementById('prehov1').style.visibility = 'visible';
			}
			
			//bones
			function submenubon() {
					document.getElementById('leftpelch').style.visibility = (leftpelch == 1) ? 'hidden' : 'visible';
					document.getElementById('rpelch').style.visibility = (rpelch == 1) ? 'hidden' : 'visible';
					document.getElementById('pubsymch').style.visibility = (pubsymchc == 1) ? 'hidden' : 'visible';
					document.getElementById('sacrch').style.visibility = (sacrchc == 1) ? 'hidden' : 'visible';
					document.getElementById('penmenu').style.visibility = 'hidden';
					document.getElementById('tesmenu').style.visibility = 'hidden';
					document.getElementById('orgmenu').style.visibility = 'hidden';
					document.getElementById('ligmenu').style.visibility = 'hidden';
					document.getElementById('musmenu').style.visibility = 'hidden';
					document.getElementById('presetsel').style.visibility = 'hidden';
					document.getElementById('penhov1').style.visibility = 'hidden';
					document.getElementById('teshov1').style.visibility = 'hidden';
					document.getElementById('orghov1').style.visibility = 'hidden';
					document.getElementById('mushov1').style.visibility = 'hidden';
					document.getElementById('lighov1').style.visibility = 'hidden';
					document.getElementById('prehov1').style.visibility = 'hidden';
					document.getElementById('skinmenu').style.visibility = 'hidden';
					document.getElementById('newhov1').style.visibility = 'hidden';
					document.getElementById('lextch').style.visibility = 'hidden';document.getElementById('rextch').style.visibility = 'hidden';document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden'; document.getElementById('llabch').style.visibility = 'hidden'; document.getElementById('rlabch').style.visibility = 'hidden'; document.getElementById('luskich').style.visibility = 'hidden'; document.getElementById('ruskich').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden';
				document.getElementById('bonmenu').style.visibility = 'visible';
				document.getElementById('bonhov1').style.visibility = 'visible';
			}
			
			//ligaments
			function submenulig() {
					document.getElementById('lsacroch').style.visibility = (lsacrochc == 1) ? 'hidden' : 'visible';
					document.getElementById('lsacrotch').style.visibility = (lsacrotchc == 1) ? 'hidden' : 'visible';
					document.getElementById('ltendinch').style.visibility = (ltendinchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rsacroch').style.visibility = (rsacrochc == 1) ? 'hidden' : 'visible';
					document.getElementById('rsacrotch').style.visibility = (rsacrotchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rtendinch').style.visibility = (rtendinchc == 1) ? 'hidden' : 'visible';
					document.getElementById('penmenu').style.visibility = 'hidden';
					document.getElementById('tesmenu').style.visibility = 'hidden';
					document.getElementById('orgmenu').style.visibility = 'hidden';
					document.getElementById('presetsel').style.visibility = 'hidden';
					document.getElementById('musmenu').style.visibility = 'hidden';
					document.getElementById('bonmenu').style.visibility = 'hidden';
					document.getElementById('penhov1').style.visibility = 'hidden';
					document.getElementById('teshov1').style.visibility = 'hidden';
					document.getElementById('orghov1').style.visibility = 'hidden';
					document.getElementById('mushov1').style.visibility = 'hidden';
					document.getElementById('prehov1').style.visibility = 'hidden';
					document.getElementById('bonhov1').style.visibility = 'hidden';
					document.getElementById('skinmenu').style.visibility = 'hidden';
					document.getElementById('newhov1').style.visibility = 'hidden';
					document.getElementById('rextch').style.visibility = 'hidden';document.getElementById('lextch').style.visibility = 'hidden';document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden'; document.getElementById('llabch').style.visibility = 'hidden'; document.getElementById('rlabch').style.visibility = 'hidden'; document.getElementById('luskich').style.visibility = 'hidden'; document.getElementById('ruskich').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden';
				document.getElementById('ligmenu').style.visibility = 'visible';
				document.getElementById('lighov1').style.visibility = 'visible';
			}
			
			//muscles
			function submenumus() {
					document.getElementById('lcocch').style.visibility = (lcocchc == 1) ? 'hidden' : 'visible';
					document.getElementById('licocch').style.visibility = (licocchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lobtch').style.visibility = (lobtchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lpirch').style.visibility = (lpirchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lpubch').style.visibility = (lpubchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lsphch').style.visibility = (lsphchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rsphch').style.visibility = (rsphchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rpubch').style.visibility = (rpubchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rpirch').style.visibility = (rpirchc == 1) ? 'hidden' : 'visible';
					document.getElementById('robtch').style.visibility = (robtchc == 1) ? 'hidden' : 'visible';
					document.getElementById('ricocch').style.visibility = (ricocchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rcocch').style.visibility = (rcocchc == 1) ? 'hidden' : 'visible';
					document.getElementById('penmenu').style.visibility = 'hidden';
					document.getElementById('tesmenu').style.visibility = 'hidden';
					document.getElementById('orgmenu').style.visibility = 'hidden';
					document.getElementById('ligmenu').style.visibility = 'hidden';
					document.getElementById('presetsel').style.visibility = 'hidden';
					document.getElementById('bonmenu').style.visibility = 'hidden';
					document.getElementById('penhov1').style.visibility = 'hidden';
					document.getElementById('teshov1').style.visibility = 'hidden';
					document.getElementById('orghov1').style.visibility = 'hidden';
					document.getElementById('prehov1').style.visibility = 'hidden';
					document.getElementById('lighov1').style.visibility = 'hidden';
					document.getElementById('bonhov1').style.visibility = 'hidden';
					document.getElementById('skinmenu').style.visibility = 'hidden';
					document.getElementById('newhov1').style.visibility = 'hidden';
					document.getElementById('lextch').style.visibility = 'hidden';document.getElementById('rextch').style.visibility = 'hidden';document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden'; document.getElementById('llabch').style.visibility = 'hidden'; document.getElementById('rlabch').style.visibility = 'hidden'; document.getElementById('luskich').style.visibility = 'hidden'; document.getElementById('ruskich').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden';
				document.getElementById('musmenu').style.visibility = 'visible';
				document.getElementById('mushov1').style.visibility = 'visible';
			}
			
			//organs
			function submenuorg() {
				document.getElementById('lblach').style.visibility = (lblachc == 1) ? 'hidden' : 'visible';
				document.getElementById('lprocch').style.visibility = (lprocchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lproch').style.visibility = (lprochc == 1) ? 'hidden' : 'visible';
					document.getElementById('lureterch').style.visibility = (lureterchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lrecch').style.visibility = (lrecchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rureterch').style.visibility = (rureterchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rproch').style.visibility = (rprochc == 1) ? 'hidden' : 'visible';
					document.getElementById('rprocch').style.visibility = (rprocchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rblach').style.visibility = (rblachc == 1) ? 'hidden' : 'visible';
					document.getElementById('rrecch').style.visibility = (rrecchc == 1) ? 'hidden' : 'visible';
					document.getElementById('penmenu').style.visibility = 'hidden';
					document.getElementById('tesmenu').style.visibility = 'hidden';
					document.getElementById('presetsel').style.visibility = 'hidden';
					document.getElementById('ligmenu').style.visibility = 'hidden';
					document.getElementById('musmenu').style.visibility = 'hidden';
					document.getElementById('bonmenu').style.visibility = 'hidden';
					document.getElementById('penhov1').style.visibility = 'hidden';
					document.getElementById('teshov1').style.visibility = 'hidden';
					document.getElementById('prehov1').style.visibility = 'hidden';
					document.getElementById('mushov1').style.visibility = 'hidden';
					document.getElementById('lighov1').style.visibility = 'hidden';
					document.getElementById('bonhov1').style.visibility = 'hidden';
					document.getElementById('skinmenu').style.visibility = 'hidden';
					document.getElementById('newhov1').style.visibility = 'hidden';
					document.getElementById('lextch').style.visibility = 'hidden';document.getElementById('rextch').style.visibility = 'hidden';document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden'; document.getElementById('llabch').style.visibility = 'hidden'; document.getElementById('rlabch').style.visibility = 'hidden'; document.getElementById('luskich').style.visibility = 'hidden'; document.getElementById('ruskich').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden';
				document.getElementById('orgmenu').style.visibility = 'visible';
				document.getElementById('orghov1').style.visibility = 'visible';
			}

			//skin
			function submenuski() {
					document.getElementById('ranuch').style.visibility = (ranuchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lanuch').style.visibility = (lanuchc == 1) ? 'hidden' : 'visible';
					document.getElementById('ruskich').style.visibility = (ruskichc == 1) ? 'hidden' : 'visible';
					document.getElementById('luskich').style.visibility = (luskichc == 1) ? 'hidden' : 'visible';
					document.getElementById('rlabch').style.visibility = (rlabchc == 1) ? 'hidden' : 'visible';
					document.getElementById('llabch').style.visibility = (llabchc == 1) ? 'hidden' : 'visible';
					document.getElementById('torsoch').style.visibility = (torsochc == 1) ? 'hidden' : 'visible';
					document.getElementById('penmenu').style.visibility = 'hidden';
					document.getElementById('tesmenu').style.visibility = 'hidden';
					document.getElementById('presetsel').style.visibility = 'hidden';
					document.getElementById('ligmenu').style.visibility = 'hidden';
					document.getElementById('musmenu').style.visibility = 'hidden';
					document.getElementById('bonmenu').style.visibility = 'hidden';
					document.getElementById('penhov1').style.visibility = 'hidden';
					document.getElementById('teshov1').style.visibility = 'hidden';
					document.getElementById('prehov1').style.visibility = 'hidden';
					document.getElementById('mushov1').style.visibility = 'hidden';
					document.getElementById('lighov1').style.visibility = 'hidden';
					document.getElementById('bonhov1').style.visibility = 'hidden';
					document.getElementById('skinmenu').style.visibility = 'visible';
					document.getElementById('newhov1').style.visibility = 'visible';
				document.getElementById('lextch').style.visibility = 'hidden';document.getElementById('rextch').style.visibility = 'hidden';document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden';
				document.getElementById('orgmenu').style.visibility = 'hidden';
				document.getElementById('orghov1').style.visibility = 'hidden';
			}
			
function prehov(){
	document.getElementById('prehov2').style.visibility = 'visible';
	document.getElementById('penhov2').style.visibility = 'hidden';
	document.getElementById('teshov2').style.visibility = 'hidden';
	document.getElementById('orghov2').style.visibility = 'hidden';
	document.getElementById('mushov2').style.visibility = 'hidden';
	document.getElementById('lighov2').style.visibility = 'hidden';
	document.getElementById('bonhov2').style.visibility = 'hidden';
	document.getElementById('newhov2').style.visibility = 'hidden';
}
function penhov(){
	document.getElementById('prehov2').style.visibility = 'hidden';
	document.getElementById('penhov2').style.visibility = 'visible';
	document.getElementById('teshov2').style.visibility = 'hidden';
	document.getElementById('orghov2').style.visibility = 'hidden';
	document.getElementById('mushov2').style.visibility = 'hidden';
	document.getElementById('lighov2').style.visibility = 'hidden';
	document.getElementById('bonhov2').style.visibility = 'hidden';
	document.getElementById('newhov2').style.visibility = 'hidden';
}
function teshov(){
	document.getElementById('prehov2').style.visibility = 'hidden';
	document.getElementById('penhov2').style.visibility = 'hidden';
	document.getElementById('teshov2').style.visibility = 'visible';
	document.getElementById('orghov2').style.visibility = 'hidden';
	document.getElementById('mushov2').style.visibility = 'hidden';
	document.getElementById('lighov2').style.visibility = 'hidden';
	document.getElementById('bonhov2').style.visibility = 'hidden';
	document.getElementById('newhov2').style.visibility = 'hidden';
}
function orghov(){
	document.getElementById('prehov2').style.visibility = 'hidden';
	document.getElementById('penhov2').style.visibility = 'hidden';
	document.getElementById('teshov2').style.visibility = 'hidden';
	document.getElementById('orghov2').style.visibility = 'visible';
	document.getElementById('mushov2').style.visibility = 'hidden';
	document.getElementById('lighov2').style.visibility = 'hidden';
	document.getElementById('bonhov2').style.visibility = 'hidden';
	document.getElementById('newhov2').style.visibility = 'hidden';
}
function mushov(){
	document.getElementById('prehov2').style.visibility = 'hidden';
	document.getElementById('penhov2').style.visibility = 'hidden';
	document.getElementById('teshov2').style.visibility = 'hidden';
	document.getElementById('orghov2').style.visibility = 'hidden';
	document.getElementById('mushov2').style.visibility = 'visible';
	document.getElementById('lighov2').style.visibility = 'hidden';
	document.getElementById('bonhov2').style.visibility = 'hidden';
	document.getElementById('newhov2').style.visibility = 'hidden';
}
function lighov(){
	document.getElementById('prehov2').style.visibility = 'hidden';
	document.getElementById('penhov2').style.visibility = 'hidden';
	document.getElementById('teshov2').style.visibility = 'hidden';
	document.getElementById('orghov2').style.visibility = 'hidden';
	document.getElementById('mushov2').style.visibility = 'hidden';
	document.getElementById('lighov2').style.visibility = 'visible';
	document.getElementById('bonhov2').style.visibility = 'hidden';
	document.getElementById('newhov2').style.visibility = 'hidden';
}
function bonhov(){
	document.getElementById('prehov2').style.visibility = 'hidden';
	document.getElementById('penhov2').style.visibility = 'hidden';
	document.getElementById('teshov2').style.visibility = 'hidden';
	document.getElementById('orghov2').style.visibility = 'hidden';
	document.getElementById('mushov2').style.visibility = 'hidden';
	document.getElementById('lighov2').style.visibility = 'hidden';
	document.getElementById('bonhov2').style.visibility = 'visible';
	document.getElementById('newhov2').style.visibility = 'hidden';
}
function newhov(){
	document.getElementById('prehov2').style.visibility = 'hidden';
	document.getElementById('penhov2').style.visibility = 'hidden';
	document.getElementById('teshov2').style.visibility = 'hidden';
	document.getElementById('orghov2').style.visibility = 'hidden';
	document.getElementById('mushov2').style.visibility = 'hidden';
	document.getElementById('lighov2').style.visibility = 'hidden';
	document.getElementById('bonhov2').style.visibility = 'hidden';
	document.getElementById('newhov2').style.visibility = 'visible';
}
function offhov(){
	document.getElementById('prehov2').style.visibility = 'hidden';
	document.getElementById('penhov2').style.visibility = 'hidden';
	document.getElementById('teshov2').style.visibility = 'hidden';
	document.getElementById('orghov2').style.visibility = 'hidden';
	document.getElementById('mushov2').style.visibility = 'hidden';
	document.getElementById('lighov2').style.visibility = 'hidden';
	document.getElementById('bonhov2').style.visibility = 'hidden';
	document.getElementById('newhov2').style.visibility = 'hidden';
}
function prehovb(){
	document.getElementById('prehov1').style.visibility = 'visible';
	document.getElementById('penhov1').style.visibility = 'hidden';
	document.getElementById('teshov1').style.visibility = 'hidden';
	document.getElementById('orghov1').style.visibility = 'hidden';
	document.getElementById('mushov1').style.visibility = 'hidden';
	document.getElementById('lighov1').style.visibility = 'hidden';
	document.getElementById('bonhov1').style.visibility = 'hidden';
	document.getElementById('newhov1').style.visibility = 'hidden';
}
function penhovb(){
	document.getElementById('prehov1').style.visibility = 'hidden';
	document.getElementById('penhov1').style.visibility = 'visible';
	document.getElementById('teshov1').style.visibility = 'hidden';
	document.getElementById('orghov1').style.visibility = 'hidden';
	document.getElementById('mushov1').style.visibility = 'hidden';
	document.getElementById('lighov1').style.visibility = 'hidden';
	document.getElementById('bonhov1').style.visibility = 'hidden';
	document.getElementById('newhov1').style.visibility = 'hidden';
}
function teshovb(){
	document.getElementById('prehov1').style.visibility = 'hidden';
	document.getElementById('penhov1').style.visibility = 'hidden';
	document.getElementById('teshov1').style.visibility = 'visible';
	document.getElementById('orghov1').style.visibility = 'hidden';
	document.getElementById('mushov1').style.visibility = 'hidden';
	document.getElementById('lighov1').style.visibility = 'hidden';
	document.getElementById('bonhov1').style.visibility = 'hidden';
	document.getElementById('newhov1').style.visibility = 'hidden';
}
function orghovb(){
	document.getElementById('prehov1').style.visibility = 'hidden';
	document.getElementById('penhov1').style.visibility = 'hidden';
	document.getElementById('teshov1').style.visibility = 'hidden';
	document.getElementById('orghov1').style.visibility = 'visible';
	document.getElementById('mushov1').style.visibility = 'hidden';
	document.getElementById('lighov1').style.visibility = 'hidden';
	document.getElementById('bonhov1').style.visibility = 'hidden';
	document.getElementById('newhov1').style.visibility = 'hidden';
}
function mushovb(){
	document.getElementById('prehov1').style.visibility = 'hidden';
	document.getElementById('penhov1').style.visibility = 'hidden';
	document.getElementById('teshov1').style.visibility = 'hidden';
	document.getElementById('orghov1').style.visibility = 'hidden';
	document.getElementById('mushov1').style.visibility = 'visible';
	document.getElementById('lighov1').style.visibility = 'hidden';
	document.getElementById('bonhov1').style.visibility = 'hidden';
	document.getElementById('newhov1').style.visibility = 'hidden';
}
function lighovb(){
	document.getElementById('prehov1').style.visibility = 'hidden';
	document.getElementById('penhov1').style.visibility = 'hidden';
	document.getElementById('teshov1').style.visibility = 'hidden';
	document.getElementById('orghov1').style.visibility = 'hidden';
	document.getElementById('mushov1').style.visibility = 'hidden';
	document.getElementById('lighov1').style.visibility = 'visible';
	document.getElementById('bonhov1').style.visibility = 'hidden';
	document.getElementById('newhov1').style.visibility = 'hidden';
}
function bonhovb(){
	document.getElementById('prehov1').style.visibility = 'hidden';
	document.getElementById('penhov1').style.visibility = 'hidden';
	document.getElementById('teshov1').style.visibility = 'hidden';
	document.getElementById('orghov1').style.visibility = 'hidden';
	document.getElementById('mushov1').style.visibility = 'hidden';
	document.getElementById('lighov1').style.visibility = 'hidden';
	document.getElementById('bonhov1').style.visibility = 'visible';
	document.getElementById('newhov1').style.visibility = 'hidden';
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

			function leftpelvisch() {
				document.getElementById('leftpelch').style.visibility = (document.getElementById('leftpelch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('leftpelch').style.visibility = (document.getElementById('leftpelch').style.visibility == 'hidden') ? leftpelch = 1 : leftpelch = 0;
			}
			function rightpelvisch() {
				document.getElementById('rpelch').style.visibility = (document.getElementById('rpelch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rpelch').style.visibility = (document.getElementById('rpelch').style.visibility == 'hidden') ? rpelch = 1 : rpelch = 0;
			}
			function sacrch() {
				document.getElementById('sacrch').style.visibility = (document.getElementById('sacrch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('sacrch').style.visibility = (document.getElementById('sacrch').style.visibility == 'hidden') ? sacrchc = 1 : sacrchc = 0;
			}
			function pubsymch() {
				document.getElementById('pubsymch').style.visibility = (document.getElementById('pubsymch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('pubsymch').style.visibility = (document.getElementById('pubsymch').style.visibility == 'hidden') ? pubsymchc = 1 : pubsymchc = 0;
			}
			function leftsacroch() {
				document.getElementById('lsacroch').style.visibility = (document.getElementById('lsacroch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lsacroch').style.visibility = (document.getElementById('lsacroch').style.visibility == 'hidden') ? lsacrochc = 1 : lsacrochc = 0;
			}
			function lsacrotch() {
				document.getElementById('lsacrotch').style.visibility = (document.getElementById('lsacrotch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lsacrotch').style.visibility = (document.getElementById('lsacrotch').style.visibility == 'hidden') ? lsacrotchc = 1 : lsacrotchc = 0;
			}
			function ltendinch() {
				document.getElementById('ltendinch').style.visibility = (document.getElementById('ltendinch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('ltendinch').style.visibility = (document.getElementById('ltendinch').style.visibility == 'hidden') ? ltendinchc = 1 : ltendinchc = 0;
			}
			function rsacroch() {
				document.getElementById('rsacroch').style.visibility = (document.getElementById('rsacroch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rsacroch').style.visibility = (document.getElementById('rsacroch').style.visibility == 'hidden') ? rsacrochc = 1 : rsacrochc = 0;
			}
			function rsacrotch() {
				document.getElementById('rsacrotch').style.visibility = (document.getElementById('rsacrotch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rsacrotch').style.visibility = (document.getElementById('rsacrotch').style.visibility == 'hidden') ? rsacrotchc = 1 : rsacrotchc = 0;
			}
			function rtendinch() {
				document.getElementById('rtendinch').style.visibility = (document.getElementById('rtendinch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rtendinch').style.visibility = (document.getElementById('rtendinch').style.visibility == 'hidden') ? rtendinchc = 1 : rtendinchc = 0;
			}
			function leftcoccych() {
				document.getElementById('lcocch').style.visibility = (document.getElementById('lcocch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lcocch').style.visibility = (document.getElementById('lcocch').style.visibility == 'hidden') ? lcocchc = 1 : lcocchc = 0;
			}
			function leftillioch() {
				document.getElementById('licocch').style.visibility = (document.getElementById('licocch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('licocch').style.visibility = (document.getElementById('licocch').style.visibility == 'hidden') ? licocchc = 1 : licocchc = 0;
			}
			function leftobtch() {
				document.getElementById('lobtch').style.visibility = (document.getElementById('lobtch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lobtch').style.visibility = (document.getElementById('lobtch').style.visibility == 'hidden') ? lobtchc = 1 : lobtchc = 0;
			}
			function leftpirich() {
				document.getElementById('lpirch').style.visibility = (document.getElementById('lpirch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lpirch').style.visibility = (document.getElementById('lpirch').style.visibility == 'hidden') ? lpirchc = 1 : lpirchc = 0;
			}
			function leftpuboch() {
				document.getElementById('lpubch').style.visibility = (document.getElementById('lpubch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lpubch').style.visibility = (document.getElementById('lpubch').style.visibility == 'hidden') ? lpubchc = 1 : lpubchc = 0;
			}
			function leftsphch() {
				document.getElementById('lsphch').style.visibility = (document.getElementById('lsphch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lsphch').style.visibility = (document.getElementById('lsphch').style.visibility == 'hidden') ? lsphchc = 1 : lsphchc = 0;
			}
			function rightsphch() {
				document.getElementById('rsphch').style.visibility = (document.getElementById('rsphch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rsphch').style.visibility = (document.getElementById('rsphch').style.visibility == 'hidden') ? rsphchc = 1 : rsphchc = 0;
			}
			function rightpuboch() {
				document.getElementById('rpubch').style.visibility = (document.getElementById('rpubch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rpubch').style.visibility = (document.getElementById('rpubch').style.visibility == 'hidden') ? rpubchc = 1 : rpubchc = 0;
			}
			function rightpirich() {
				document.getElementById('rpirch').style.visibility = (document.getElementById('rpirch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rpirch').style.visibility = (document.getElementById('rpirch').style.visibility == 'hidden') ? rpirchc = 1 : rpirchc = 0;
			}
			function rightobtch() {
				document.getElementById('robtch').style.visibility = (document.getElementById('robtch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('robtch').style.visibility = (document.getElementById('robtch').style.visibility == 'hidden') ? robtchc = 1 : robtchc = 0;
			}
			function rightillioch() {
				document.getElementById('ricocch').style.visibility = (document.getElementById('ricocch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('ricocch').style.visibility = (document.getElementById('ricocch').style.visibility == 'hidden') ? ricocchc = 1 : ricocchc = 0;
			}
			function rightcoccych() {
				document.getElementById('rcocch').style.visibility = (document.getElementById('rcocch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rcocch').style.visibility = (document.getElementById('rcocch').style.visibility == 'hidden') ? rcocchc = 1 : rcocchc = 0;
			}
			function lbladch() {
				document.getElementById('lblach').style.visibility = (document.getElementById('lblach').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lblach').style.visibility = (document.getElementById('lblach').style.visibility == 'hidden') ? lblachc = 1 : lblachc = 0;
			}
			function lcowpch() {
				document.getElementById('lbubch').style.visibility = (document.getElementById('lbubch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lbubch').style.visibility = (document.getElementById('lbubch').style.visibility == 'hidden') ? lbubchc = 1 : lbubchc = 0;
			}
			function lvasdch() {
				document.getElementById('lvasch').style.visibility = (document.getElementById('lvasch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lvasch').style.visibility = (document.getElementById('lvasch').style.visibility == 'hidden') ? lvaschc = 1 : lvaschc = 0;
			}
			function lproscapch() {
				document.getElementById('lprocch').style.visibility = (document.getElementById('lprocch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lprocch').style.visibility = (document.getElementById('lprocch').style.visibility == 'hidden') ? lprocchc = 1 : lprocchc = 0;
			}
			function lprosch() {
				document.getElementById('lproch').style.visibility = (document.getElementById('lproch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lproch').style.visibility = (document.getElementById('lproch').style.visibility == 'hidden') ? lprochc = 1 : lprochc = 0;
			}
			function lseminch() {
				document.getElementById('lsemch').style.visibility = (document.getElementById('lsemch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lsemch').style.visibility = (document.getElementById('lsemch').style.visibility == 'hidden') ? lsemchc = 1 : lsemchc = 0;
			}
			function luretch() {
				document.getElementById('lureterch').style.visibility = (document.getElementById('lureterch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lureterch').style.visibility = (document.getElementById('lureterch').style.visibility == 'hidden') ? lureterchc = 1 : lureterchc = 0;
			}
			function lrectch() {
				document.getElementById('lrecch').style.visibility = (document.getElementById('lrecch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lrecch').style.visibility = (document.getElementById('lrecch').style.visibility == 'hidden') ? lrecchc = 1 : lrecchc = 0;
			}
			function ruretch() {
				document.getElementById('rureterch').style.visibility = (document.getElementById('rureterch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rureterch').style.visibility = (document.getElementById('rureterch').style.visibility == 'hidden') ? rureterchc = 1 : rureterchc = 0;
			}
			function rseminch() {
				document.getElementById('rsemch').style.visibility = (document.getElementById('rsemch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rsemch').style.visibility = (document.getElementById('rsemch').style.visibility == 'hidden') ? rsemchc = 1 : rsemchc = 0;
			}
			function rprosch() {
				document.getElementById('rproch').style.visibility = (document.getElementById('rproch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rproch').style.visibility = (document.getElementById('rproch').style.visibility == 'hidden') ? rprochc = 1 : rprochc = 0;
			}
			function rproscapch() {
				document.getElementById('rprocch').style.visibility = (document.getElementById('rprocch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rprocch').style.visibility = (document.getElementById('rprocch').style.visibility == 'hidden') ? rprocchc = 1 : rprocchc = 0;
			}
			function rvasdch() {
				document.getElementById('rvasch').style.visibility = (document.getElementById('rvasch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rvasch').style.visibility = (document.getElementById('rvasch').style.visibility == 'hidden') ? rvaschc = 1 : rvaschc = 0;
			}
			function rcowpch() {
				document.getElementById('rbubch').style.visibility = (document.getElementById('rbubch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rbubch').style.visibility = (document.getElementById('rbubch').style.visibility == 'hidden') ? rbubchc = 1 : rbubchc = 0;
			}
			function rbladch() {
				document.getElementById('rblach').style.visibility = (document.getElementById('rblach').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rblach').style.visibility = (document.getElementById('rblach').style.visibility == 'hidden') ? rblachc = 1 : rblachc = 0;
			}
			function rrectch() {			
				document.getElementById('rrecch').style.visibility = (document.getElementById('rrecch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rrecch').style.visibility = (document.getElementById('rrecch').style.visibility == 'hidden') ? rrecchc = 1 : rrecchc = 0;
			}
			function lbuckch() {			
				document.getElementById('lbucch').style.visibility = (document.getElementById('lbucch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lbucch').style.visibility = (document.getElementById('lbucch').style.visibility == 'hidden') ? lbucchc = 1 : lbucchc = 0;
			}
			function lbuboch() {			
				document.getElementById('lbulch').style.visibility = (document.getElementById('lbulch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lbulch').style.visibility = (document.getElementById('lbulch').style.visibility == 'hidden') ? lbulchc = 1 : lbulchc = 0;
			}
			function lcorpcavch() {			
				document.getElementById('lcorcch').style.visibility = (document.getElementById('lcorcch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lcorcch').style.visibility = (document.getElementById('lcorcch').style.visibility == 'hidden') ? lcorcchc = 1 : lcorcchc = 0;
			}
			function lcorpspoch() {			
				document.getElementById('lcorsch').style.visibility = (document.getElementById('lcorsch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lcorsch').style.visibility = (document.getElementById('lcorsch').style.visibility == 'hidden') ? lcorschc = 1 : lcorschc = 0;
			}
			function lglanch() {			
				document.getElementById('lglach').style.visibility = (document.getElementById('lglach').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lglach').style.visibility = (document.getElementById('lglach').style.visibility == 'hidden') ? lglachc = 1 : lglachc = 0;
			}
			function lischch() {
				document.getElementById('liscch').style.visibility = (document.getElementById('liscch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('liscch').style.visibility = (document.getElementById('liscch').style.visibility == 'hidden') ? liscchc = 1 : liscchc = 0;
			}
			function lperinch() {			
				document.getElementById('lpermch').style.visibility = (document.getElementById('lpermch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lpermch').style.visibility = (document.getElementById('lpermch').style.visibility == 'hidden') ? lpermchc = 1 : lpermchc = 0;
			}
			function lperinfasch() {			
				document.getElementById('lperfch').style.visibility = (document.getElementById('lperfch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lperfch').style.visibility = (document.getElementById('lperfch').style.visibility == 'hidden') ? lperfchc = 1 : lperfchc = 0;
			}
			function lurethch() {			
				document.getElementById('lurethch').style.visibility = (document.getElementById('lurethch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lurethch').style.visibility = (document.getElementById('lurethch').style.visibility == 'hidden') ? lurethchc = 1 : lurethchc = 0;
			}
			function lurogch() {			
				document.getElementById('luroch').style.visibility = (document.getElementById('luroch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('luroch').style.visibility = (document.getElementById('luroch').style.visibility == 'hidden') ? lurochc = 1 : lurochc = 0;
			}
			function rbuckch() {			
				document.getElementById('rbucch').style.visibility = (document.getElementById('rbucch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rbucch').style.visibility = (document.getElementById('rbucch').style.visibility == 'hidden') ? rbucchc = 1 : rbucchc = 0;
			}
			function rurogch() {			
				document.getElementById('ruroch').style.visibility = (document.getElementById('ruroch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('ruroch').style.visibility = (document.getElementById('ruroch').style.visibility == 'hidden') ? rurochc = 1 : rurochc = 0;
			}
			function rurethch() {			
				document.getElementById('rurethch').style.visibility = (document.getElementById('rurethch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rurethch').style.visibility = (document.getElementById('rurethch').style.visibility == 'hidden') ? rurethchc = 1 : rurethchc = 0;
			}
			function rperinfasch() {			
				document.getElementById('rperfch').style.visibility = (document.getElementById('rperfch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rperfch').style.visibility = (document.getElementById('rperfch').style.visibility == 'hidden') ? rperfchc = 1 : rperfchc = 0;
			}
			function rperinch() {			
				document.getElementById('rpermch').style.visibility = (document.getElementById('rpermch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rpermch').style.visibility = (document.getElementById('rpermch').style.visibility == 'hidden') ? rpermchc = 1 : rpermchc = 0;
			}
			function rischch() {			
				document.getElementById('riscch').style.visibility = (document.getElementById('riscch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('riscch').style.visibility = (document.getElementById('riscch').style.visibility == 'hidden') ? riscchc = 1 : riscchc = 0;
			}
			function rglanch() {			
				document.getElementById('rglach').style.visibility = (document.getElementById('rglach').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rglach').style.visibility = (document.getElementById('rglach').style.visibility == 'hidden') ? rglachc = 1 : rglachc = 0;
			}
			function rcorpspoch() {			
				document.getElementById('rcorsch').style.visibility = (document.getElementById('rcorsch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rcorsch').style.visibility = (document.getElementById('rcorsch').style.visibility == 'hidden') ? rcorschc = 1 : rcorschc = 0;
			}
			function rcorpcavch() {			
				document.getElementById('rcorcch').style.visibility = (document.getElementById('rcorcch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rcorcch').style.visibility = (document.getElementById('rcorcch').style.visibility == 'hidden') ? rcorcchc = 1 : rcorcchc = 0;
			}
			function rbuboch() {			
				document.getElementById('rbulch').style.visibility = (document.getElementById('rbulch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rbulch').style.visibility = (document.getElementById('rbulch').style.visibility == 'hidden') ? rbulchc = 1 : rbulchc = 0;
			}
			function dvinch() {			
				document.getElementById('dvinch').style.visibility = (document.getElementById('dvinch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('dvinch').style.visibility = (document.getElementById('dvinch').style.visibility == 'hidden') ? dvinchc = 1 : dvinchc = 0;
			}
			function susligch() {			
				document.getElementById('susligch').style.visibility = (document.getElementById('susligch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('susligch').style.visibility = (document.getElementById('susligch').style.visibility == 'hidden') ? susligchc = 1 : susligchc = 0;
			}
			function lparich() {			
				document.getElementById('lparch').style.visibility = (document.getElementById('lparch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lparch').style.visibility = (document.getElementById('lparch').style.visibility == 'hidden') ? lparchc = 1 : lparchc = 0;
			}
			function lteslch() {			
				document.getElementById('lteslch').style.visibility = (document.getElementById('lteslch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lteslch').style.visibility = (document.getElementById('lteslch').style.visibility == 'hidden') ? lteslchc = 1 : lteslchc = 0;
			}
			function lgonach() {			
				document.getElementById('lgonach').style.visibility = (document.getElementById('lgonach').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lgonach').style.visibility = (document.getElementById('lgonach').style.visibility == 'hidden') ? lgonachc = 1 : lgonachc = 0;
			}
			function lgonvch() {			
				document.getElementById('lgonvch').style.visibility = (document.getElementById('lgonvch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lgonvch').style.visibility = (document.getElementById('lgonvch').style.visibility == 'hidden') ? lgonvchc = 1 : lgonvchc = 0;
			}
			function lepidch() {			
				document.getElementById('lepich').style.visibility = (document.getElementById('lepich').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lepich').style.visibility = (document.getElementById('lepich').style.visibility == 'hidden') ? lepichc = 1 : lepichc = 0;
			}
			function lcremch() {			
				document.getElementById('lcrech').style.visibility = (document.getElementById('lcrech').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lcrech').style.visibility = (document.getElementById('lcrech').style.visibility == 'hidden') ? lcrechc = 1 : lcrechc = 0;
			}
			function lintech() {			
				document.getElementById('lintch').style.visibility = (document.getElementById('lintch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lintch').style.visibility = (document.getElementById('lintch').style.visibility == 'hidden') ? lintchc = 1 : lintchc = 0;
			}
			function lextech() {			
				document.getElementById('lextch').style.visibility = (document.getElementById('lextch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lextch').style.visibility = (document.getElementById('lextch').style.visibility == 'hidden') ? lextchc = 1 : lextchc = 0;
			}
			function ltesrch() {			
				document.getElementById('ltesrch').style.visibility = (document.getElementById('ltesrch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('ltesrch').style.visibility = (document.getElementById('ltesrch').style.visibility == 'hidden') ? ltesrchc = 1 : ltesrchc = 0;
			}
			function rparich() {			
				document.getElementById('rparch').style.visibility = (document.getElementById('rparch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rparch').style.visibility = (document.getElementById('rparch').style.visibility == 'hidden') ? rparchc = 1 : rparchc = 0;
			}
			function rintech() {			
				document.getElementById('rintch').style.visibility = (document.getElementById('rintch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rintch').style.visibility = (document.getElementById('rintch').style.visibility == 'hidden') ? rintchc = 1 : rintchc = 0;
			}
			function rteslch() {			
				document.getElementById('rteslch').style.visibility = (document.getElementById('rteslch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rteslch').style.visibility = (document.getElementById('rteslch').style.visibility == 'hidden') ? rteslchc = 1 : rteslchc = 0;
			}
			function rgonvch() {			
				document.getElementById('rgonvch').style.visibility = (document.getElementById('rgonvch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rgonvch').style.visibility = (document.getElementById('rgonvch').style.visibility == 'hidden') ? rgonvchc = 1 : rgonvchc = 0;
			}
			function rgonach() {			
				document.getElementById('rgonach').style.visibility = (document.getElementById('rgonach').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rgonach').style.visibility = (document.getElementById('rgonach').style.visibility == 'hidden') ? rgonachc = 1 : rgonachc = 0;
			}
			function rextech() {			
				document.getElementById('rextch').style.visibility = (document.getElementById('rextch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rextch').style.visibility = (document.getElementById('rextch').style.visibility == 'hidden') ? rextchc = 1 : rextchc = 0;
			}
			function repidch() {			
				document.getElementById('repich').style.visibility = (document.getElementById('repich').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('repich').style.visibility = (document.getElementById('repich').style.visibility == 'hidden') ? repichc = 1 : repichc = 0;
			}
			function rcremch() {			
				document.getElementById('rcrech').style.visibility = (document.getElementById('rcrech').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rcrech').style.visibility = (document.getElementById('rcrech').style.visibility == 'hidden') ? rcrechc = 1 : rcrechc = 0;
			}
			function rtesrch() {			
				document.getElementById('rtesrch').style.visibility = (document.getElementById('rtesrch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rtesrch').style.visibility = (document.getElementById('rtesrch').style.visibility == 'hidden') ? rtesrchc = 1 : rtesrchc = 0;
			}
			function lductch() {			
				document.getElementById('lducch').style.visibility = (document.getElementById('lducch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lducch').style.visibility = (document.getElementById('lducch').style.visibility == 'hidden') ? lducchc = 1 : lducchc = 0;
			}
			function rductch() {			
				document.getElementById('rducch').style.visibility = (document.getElementById('rducch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rducch').style.visibility = (document.getElementById('rducch').style.visibility == 'hidden') ? rducchc = 1 : rducchc = 0;
			}
			function lextech() {			
				document.getElementById('lextch').style.visibility = (document.getElementById('lextch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lextch').style.visibility = (document.getElementById('lextch').style.visibility == 'hidden') ? lextchc = 1 : lextchc = 0;
			}
			function rextech() {			
				document.getElementById('rextch').style.visibility = (document.getElementById('rextch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rextch').style.visibility = (document.getElementById('rextch').style.visibility == 'hidden') ? rextchc = 1 : rextchc = 0;
			}
			function ranusch() {			
				document.getElementById('ranuch').style.visibility = (document.getElementById('ranuch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('ranuch').style.visibility = (document.getElementById('ranuch').style.visibility == 'hidden') ? ranuchc = 1 : ranuchc = 0;
			}
			function lanusch() {			
				document.getElementById('lanuch').style.visibility = (document.getElementById('lanuch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('lanuch').style.visibility = (document.getElementById('lanuch').style.visibility == 'hidden') ? lanuchc = 1 : lanuchc = 0;
			}
			function llabch() {			
				document.getElementById('llabch').style.visibility = (document.getElementById('llabch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('llabch').style.visibility = (document.getElementById('llabch').style.visibility == 'hidden') ? llabchc = 1 : llabchc = 0;
			}
			function rlabch() {			
				document.getElementById('rlabch').style.visibility = (document.getElementById('rlabch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('rlabch').style.visibility = (document.getElementById('rlabch').style.visibility == 'hidden') ? rlabchc = 1 : rlabchc = 0;
			}
			function luskich() {			
				document.getElementById('luskich').style.visibility = (document.getElementById('luskich').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('luskich').style.visibility = (document.getElementById('luskich').style.visibility == 'hidden') ? luskichc = 1 : luskichc = 0;
			}
			function ruskich() {			
				document.getElementById('ruskich').style.visibility = (document.getElementById('ruskich').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('ruskich').style.visibility = (document.getElementById('ruskich').style.visibility == 'hidden') ? ruskichc = 1 : ruskichc = 0;
			}
			function torsoch() {			
				document.getElementById('torsoch').style.visibility = (document.getElementById('torsoch').style.visibility == 'hidden') ? 'visible' : 'hidden';
				document.getElementById('torsoch').style.visibility = (document.getElementById('torsoch').style.visibility == 'hidden') ? torsochc = 1 : torsochc = 0;
			}

function hideallbonch() {
	document.getElementById('leftpelch').style.visibility = 'hidden';
	document.getElementById('rpelch').style.visibility = 'hidden';
	document.getElementById('sacrch').style.visibility = 'hidden';
	document.getElementById('pubsymch').style.visibility = 'hidden';
	leftpelch = 1; rpelch = 1; sacrchc = 1; pubsymchc = 1;
}

function hideallligch() {
	document.getElementById('lsacroch').style.visibility = 'hidden';
	document.getElementById('lsacrotch').style.visibility = 'hidden';
	document.getElementById('ltendinch').style.visibility = 'hidden';
	document.getElementById('rsacroch').style.visibility = 'hidden';
	document.getElementById('rsacrotch').style.visibility = 'hidden';
	document.getElementById('rtendinch').style.visibility = 'hidden';
	lsacrochc = 1; lsacrotchc = 1; ltendinchc = 1; rsacrochc = 1; rsacrotchc = 1;	rtendinchc = 1;
}

function hideallmusch() {
	document.getElementById('lcocch').style.visibility = 'hidden';
	document.getElementById('licocch').style.visibility = 'hidden';
	document.getElementById('lobtch').style.visibility = 'hidden';
	document.getElementById('lpirch').style.visibility = 'hidden';
	document.getElementById('lpubch').style.visibility = 'hidden';
	document.getElementById('lsphch').style.visibility = 'hidden';
	document.getElementById('rsphch').style.visibility = 'hidden';
	document.getElementById('rpubch').style.visibility = 'hidden';
	document.getElementById('rpirch').style.visibility = 'hidden';
	document.getElementById('robtch').style.visibility = 'hidden';
	document.getElementById('ricocch').style.visibility = 'hidden';
	document.getElementById('rcocch').style.visibility = 'hidden';
	lcocchc = 1; licocchc = 1; lobtchc = 1; lpirchc = 1; lpubchc = 1; lsphchc = 1; rsphchc = 1; rpubchc = 1; rpirchc = 1; robtchc = 1; ricocchc = 1; rcocchc = 1;
}

function hideallorgch() {
	document.getElementById('lblach').style.visibility = 'hidden';
	document.getElementById('lprocch').style.visibility = 'hidden';
	document.getElementById('lproch').style.visibility = 'hidden';
	document.getElementById('lureterch').style.visibility = 'hidden';
	document.getElementById('lrecch').style.visibility = 'hidden';
	document.getElementById('rureterch').style.visibility = 'hidden';
	document.getElementById('rproch').style.visibility = 'hidden';
	document.getElementById('rprocch').style.visibility = 'hidden';
	document.getElementById('rblach').style.visibility = 'hidden';
	document.getElementById('rrecch').style.visibility = 'hidden';
	lblachc = 1; lbubchc = 1; lvaschc = 1; lprocchc = 1; lprochc = 1; lsemchc = 1; lureterchc = 1; lrecchc = 1; rureterchc = 1; rsemchc = 1; rprochc = 1; rprocchc = 1; rvaschc = 1; rbubchc = 1; rblachc = 1; rrecchc = 1;
}

function hideallpench() {
	document.getElementById('lbulch').style.visibility = 'hidden';
	document.getElementById('lcorcch').style.visibility = 'hidden';
	document.getElementById('lcorsch').style.visibility = 'hidden';
	document.getElementById('lglach').style.visibility = 'hidden';
	document.getElementById('liscch').style.visibility = 'hidden';
	document.getElementById('lpermch').style.visibility = 'hidden';
	document.getElementById('lurethch').style.visibility = 'hidden';
	document.getElementById('luroch').style.visibility = 'hidden';
	document.getElementById('ruroch').style.visibility = 'hidden';
	document.getElementById('rurethch').style.visibility = 'hidden';
	document.getElementById('rpermch').style.visibility = 'hidden';
	document.getElementById('riscch').style.visibility = 'hidden';
	document.getElementById('rglach').style.visibility = 'hidden';
	document.getElementById('rcorsch').style.visibility = 'hidden';
	document.getElementById('rcorcch').style.visibility = 'hidden';
	document.getElementById('rbulch').style.visibility = 'hidden';
	lbucchc = 1; lbulchc = 1; lcorcchc = 1; lcorschc = 1; lglachc = 1; liscchc = 1; lpermchc = 1; lperfchc = 1; lurethchc = 1; lurochc = 1; rbucchc = 1; rurochc = 1; rurethchc = 1; rperfchc = 1; rpermchc = 1; riscchc = 1;	rglachc = 1; rcorschc = 1; rcorcchc = 1; rbulchc = 1; dvinchc = 1; susligchc = 1;
}

function hidealltesch() {
	document.getElementById('lparch').style.visibility = 'hidden';
	document.getElementById('lgonach').style.visibility = 'hidden';
	document.getElementById('lgonvch').style.visibility = 'hidden';
	document.getElementById('lepich').style.visibility = 'hidden';
	document.getElementById('lcrech').style.visibility = 'hidden';
	document.getElementById('lintch').style.visibility = 'hidden';
	document.getElementById('rparch').style.visibility = 'hidden';
	document.getElementById('rintch').style.visibility = 'hidden';
	document.getElementById('rgonvch').style.visibility = 'hidden';
	document.getElementById('rgonach').style.visibility = 'hidden';
	document.getElementById('repich').style.visibility = 'hidden';
	document.getElementById('rcrech').style.visibility = 'hidden';
	document.getElementById('lextch').style.visibility = 'hidden';
	document.getElementById('lextch').style.visibility = 'hidden';
	lparchc = 1; lteslchc = 1; lgonachc = 1; lgonvchc = 1; lepichc = 1; lcrechc = 1; lintchc = 1;	lextchc = 1; ltesrchc = 1; rparchc = 1;	rintchc = 1; rteslchc = 1; rgonvchc = 1; rgonachc = 1; rextchc = 1;	repichc = 1; rcrechc = 1; rtesrchc = 1;	lducchc = 1; rducchc = 1;
}

function hideallskinch() {
	document.getElementById('ranuch').style.visibility = 'hidden';
	document.getElementById('lanuch').style.visibility = 'hidden';
	document.getElementById('ruskich').style.visibility = 'hidden';
	document.getElementById('luskich').style.visibility = 'hidden';
	document.getElementById('rlabch').style.visibility = 'hidden';
	document.getElementById('llabch').style.visibility = 'hidden';
	document.getElementById('torsoch').style.visibility = 'hidden';
	ranuchc = 1; lanuchc = 1; ruskichc = 1; luskichc = 1; rlabchc = 1; llabchc = 1; torsochc = 1;
}

function showallbonch() {
	document.getElementById('leftpelch').style.visibility = '';
	document.getElementById('rpelch').style.visibility = '';
	document.getElementById('sacrch').style.visibility = '';
	document.getElementById('pubsymch').style.visibility = '';
	leftpelch = 0; rpelch = 0; sacrchc = 0; pubsymchc = 0;
}

function showallligch() {
	document.getElementById('lsacroch').style.visibility = '';
	document.getElementById('lsacrotch').style.visibility = '';
	document.getElementById('ltendinch').style.visibility = '';
	document.getElementById('rsacroch').style.visibility = '';
	document.getElementById('rsacrotch').style.visibility = '';
	document.getElementById('rtendinch').style.visibility = '';
	lsacrochc = 0; lsacrotchc = 0; ltendinchc = 0; rsacrochc = 0; rsacrotchc = 0;	rtendinchc = 0;
}

function showallmusch() {
	document.getElementById('lcocch').style.visibility = '';
	document.getElementById('licocch').style.visibility = '';
	document.getElementById('lobtch').style.visibility = '';
	document.getElementById('lpirch').style.visibility = '';
	document.getElementById('lpubch').style.visibility = '';
	document.getElementById('lsphch').style.visibility = '';
	document.getElementById('rsphch').style.visibility = '';
	document.getElementById('rpubch').style.visibility = '';
	document.getElementById('rpirch').style.visibility = '';
	document.getElementById('robtch').style.visibility = '';
	document.getElementById('ricocch').style.visibility = '';
	document.getElementById('rcocch').style.visibility = '';
	lcocchc = 0; licocchc = 0; lobtchc = 0; lpirchc = 0; lpubchc = 0; lsphchc = 0; rsphchc = 0; rpubchc = 0; rpirchc = 0; robtchc = 0; ricocchc = 0; rcocchc = 0;
}

function showallorgch() {
	document.getElementById('lblach').style.visibility = '';
	document.getElementById('lprocch').style.visibility = '';
	document.getElementById('lproch').style.visibility = '';
	document.getElementById('lureterch').style.visibility = '';
	document.getElementById('lrecch').style.visibility = '';
	document.getElementById('rureterch').style.visibility = '';
	document.getElementById('rproch').style.visibility = '';
	document.getElementById('rprocch').style.visibility = '';
	document.getElementById('rblach').style.visibility = '';
	document.getElementById('rrecch').style.visibility = '';
	lblachc = 0; lbubchc = 0; lvaschc = 0; lprocchc = 0; lprochc = 0; lsemchc = 0; lureterchc = 0; lrecchc = 0; rureterchc = 0; rsemchc = 0; rprochc = 0; rprocchc = 0; rvaschc = 0; rbubchc = 0; rblachc = 0; rrecchc = 0;
}

function showallpench() {
	document.getElementById('lbulch').style.visibility = '';
	document.getElementById('lcorcch').style.visibility = '';
	document.getElementById('lcorsch').style.visibility = '';
	document.getElementById('lglach').style.visibility = '';
	document.getElementById('liscch').style.visibility = '';
	document.getElementById('lpermch').style.visibility = '';
	document.getElementById('lurethch').style.visibility = '';
	document.getElementById('luroch').style.visibility = '';
	document.getElementById('ruroch').style.visibility = '';
	document.getElementById('rurethch').style.visibility = '';
	document.getElementById('rpermch').style.visibility = '';
	document.getElementById('riscch').style.visibility = '';
	document.getElementById('rglach').style.visibility = '';
	document.getElementById('rcorsch').style.visibility = '';
	document.getElementById('rcorcch').style.visibility = '';
	document.getElementById('rbulch').style.visibility = '';
	lbucchc = 0; lbulchc = 0; lcorcchc = 0; lcorschc = 0; lglachc = 0; liscchc = 0; lpermchc = 0; lperfchc = 0; lurethchc = 0; lurochc = 0; rbucchc = 0; rurochc = 0; rurethchc = 0; rperfchc = 0; rpermchc = 0; riscchc = 0;	rglachc = 0; rcorschc = 0; rcorcchc = 0; rbulchc = 0; dvinchc = 0; susligchc = 0;
}

function showalltesch() {
	document.getElementById('lparch').style.visibility = '';
	document.getElementById('lgonach').style.visibility = '';
	document.getElementById('lgonvch').style.visibility = '';
	document.getElementById('lepich').style.visibility = '';
	document.getElementById('lcrech').style.visibility = '';
	document.getElementById('lintch').style.visibility = '';
	document.getElementById('rparch').style.visibility = '';
	document.getElementById('rintch').style.visibility = '';
	document.getElementById('rgonvch').style.visibility = '';
	document.getElementById('rgonach').style.visibility = '';
	document.getElementById('repich').style.visibility = '';
	document.getElementById('rcrech').style.visibility = '';
	document.getElementById('lextch').style.visibility = '';
	document.getElementById('lextch').style.visibility = '';
	lparchc = 0; lteslchc = 0; lgonachc = 0; lgonvchc = 0; lepichc = 0; lcrechc = 0; lintchc = 0;	lextchc = 0; ltesrchc = 0; rparchc = 0;	rintchc = 0; rteslchc = 0; rgonvchc = 0; rgonachc = 0; rextchc = 0;	repichc = 0; rcrechc = 0; rtesrchc = 0;	lducchc = 0; rducchc = 0;
}

function showallskinch() {
	document.getElementById('ranuch').style.visibility = '';
	document.getElementById('lanuch').style.visibility = '';
	document.getElementById('ruskich').style.visibility = '';
	document.getElementById('luskich').style.visibility = '';
	document.getElementById('rlabch').style.visibility = '';
	document.getElementById('llabch').style.visibility = '';
	document.getElementById('torsoch').style.visibility = '';
	ranuchc = 0; lanuchc = 0; ruskichc = 0; luskichc = 0; rlabchc = 0; llabchc = 0; torsochc = 0;
}

function showallch() { leftpelch = 0; rpelch = 0; sacrchc = 0; pubsymchc =0; lsacrochc =0; lsacrotchc =0; ltendinchc =0; rsacrochc =0; rsacrotchc =0;	rtendinchc =0;	lcocchc =0; licocchc =0; lobtchc =0; lpirchc =0; lpubchc =0; lsphchc =0; rsphchc =0; rpubchc =0; rpirchc =0; robtchc =0; ricocchc =0; rcocchc =0; lblachc =0; lbubchc =0; lvaschc =0; lprocchc =0; lprochc =0; lsemchc =0; lureterchc =0; lrecchc =0; rureterchc =0; rsemchc =0; rprochc =0; rprocchc =0; rvaschc =0; rbubchc =0; rblachc =0; rrecchc =0; lbucchc =0; lbulchc =0; lcorcchc =0; lcorschc =0; lglachc =0; liscchc =0; lpermchc =0; lperfchc =0; lurethchc =0; lurochc =0; rbucchc =0; rurochc =0; rurethchc =0; rperfchc =0; rpermchc =0; riscchc =0;	rglachc =0; rcorschc =0; rcorcchc =0; rbulchc =0; dvinchc =0; susligchc =0; lparchc =0; lteslchc =0; lgonachc =0; lgonvchc =0; lepichc =0; lcrechc =0; lintchc =0;	lextchc =0; ltesrchc =0; rparchc =0;	rintchc =0; rteslchc =0; rgonvchc =0; rgonachc =0; rextchc =0;	repichc =0; rcrechc =0; rtesrchc =0; lducchc =0; rducchc =0;document.getElementById('prehov1').style.visibility = 'hidden'; document.getElementById('presetline').style.visibility = 'hidden'; document.getElementById('infotext2').style.visibility = 'hidden';}

function rsagchch() { leftpelch = 1; rpelch = 0; sacrchc = 0; pubsymchc = 0; lsacrochc = 1; lsacrotchc = 1; ltendinchc = 1; rsacrochc = 0; rsacrotchc = 0;	rtendinchc = 0;	lcocchc = 1; licocchc = 1; lobtchc = 1; lpirchc = 1; lpubchc = 1; lsphchc = 1; rsphchc = 0; rpubchc = 0; rpirchc = 0; robtchc = 0; ricocchc = 0; rcocchc = 0; lblachc = 1; lbubchc = 1; lvaschc = 1; lprocchc = 1; lprochc = 1; lsemchc = 1; lureterchc = 1; lrecchc = 1; rureterchc = 0; rsemchc = 0; rprochc = 0; rprocchc = 0; rvaschc = 0; rbubchc = 0; rblachc = 0; rrecchc = 0; lbucchc = 1; lbulchc = 1; lcorcchc = 1; lcorschc = 1; lglachc = 1; liscchc = 1; lpermchc = 1; lperfchc = 1; lurethchc = 1; lurochc = 1; rbucchc = 0; rurochc = 0; rurethchc = 0; rperfchc = 0; rpermchc = 0; riscchc = 0;	rglachc = 0; rcorschc = 0; rcorcchc = 0; rbulchc = 0; dvinchc = 0; susligchc = 0; lparchc = 1; lteslchc = 1; lgonachc = 1; lgonvchc = 1; lepichc = 1; lcrechc = 1; lintchc = 1;	lextchc = 1; ltesrchc = 1; rparchc = 0;	rintchc = 0; rteslchc = 0; rgonvchc = 0; rgonachc = 0; rextchc = 0;	repichc = 0; rcrechc = 0; rtesrchc = 0;	lducchc = 1; rducchc = 0; document.getElementById('prehov1').style.visibility = 'hidden'; document.getElementById('presetline').style.visibility = 'hidden'; document.getElementById('infotext2').style.visibility = 'hidden';}

function lsagchch() { leftpelch = 0; rpelch = 1; sacrchc = 0; pubsymchc = 0; lsacrochc = 0; lsacrotchc = 0; ltendinchc = 0; rsacrochc = 1; rsacrotchc = 1;	rtendinchc = 1;	lcocchc = 0; licocchc = 0; lobtchc = 0; lpirchc = 0; lpubchc = 0; lsphchc = 0; rsphchc = 1; rpubchc = 1; rpirchc = 1; robtchc = 1; ricocchc = 1; rcocchc = 1; lblachc = 0; lbubchc = 0; lvaschc = 0; lprocchc = 0; lprochc = 0; lsemchc = 0; lureterchc = 0; lrecchc = 0; rureterchc = 1; rsemchc = 1; rprochc = 1; rprocchc = 1; rvaschc = 1; rbubchc = 1; rblachc = 1; rrecchc = 1; lbucchc = 0; lbulchc = 0; lcorcchc = 0; lcorschc = 0; lglachc = 0; liscchc = 0; lpermchc = 0; lperfchc = 0; lurethchc = 0; lurochc = 0; rbucchc = 1; rurochc = 1; rurethchc = 1; rperfchc = 1; rpermchc = 1; riscchc = 1;	rglachc = 1; rcorschc = 1; rcorcchc = 1; rbulchc = 1; dvinchc = 0; susligchc = 0; lparchc = 0; lteslchc = 0; lgonachc = 0; lgonvchc = 0; lepichc = 0; lcrechc = 0; lintchc = 0;	lextchc = 0; ltesrchc = 0; rparchc = 1;	rintchc = 1; rteslchc = 1; rgonvchc = 1; rgonachc = 1; rextchc = 1;	repichc = 1; rcrechc = 1; rtesrchc = 1;	lducchc = 0; rducchc = 1; document.getElementById('prehov1').style.visibility = 'hidden'; document.getElementById('presetline').style.visibility = 'hidden'; document.getElementById('infotext2').style.visibility = 'hidden';}

function leftpelvischz() {
				document.getElementById('leftpelch').style.visibility = 'hidden';
				document.getElementById('lpelu').style.textDecoration = 'none';
				leftpelch = 1;
			}
			function rightpelvischz() {
				document.getElementById('rpelch').style.visibility = 'hidden';
				document.getElementById('rpelu').style.textDecoration = 'none';
				rpelch = 1;
			}
			function sacrchz() {
				document.getElementById('sacrch').style.visibility = 'hidden';
				document.getElementById('sacu').style.textDecoration = 'none';
				sacrchc = 1;
			}
			function pubsymchz() {
				document.getElementById('pubsymu').style.textDecoration = 'none';
				document.getElementById('pubsymch').style.visibility = 'hidden';
				pubsymchc = 1;
			}
			function leftsacrochz() {
				document.getElementById('lsacsu').style.textDecoration = 'none';
				document.getElementById('lsacroch').style.visibility = 'hidden';
				lsacrochc = 1;
			}
			function lsacrotchz() {
				document.getElementById('lsactu').style.textDecoration = 'none';
				document.getElementById('lsacrotch').style.visibility = 'hidden';
				lsacrotchc = 1;
			}
			function ltendinchz() {
				document.getElementById('ltenu').style.textDecoration = 'none';
				document.getElementById('ltendinch').style.visibility = 'hidden';
				ltendinchc = 1;
			}
			function rsacrochz() {
				document.getElementById('rsacsu').style.textDecoration = 'none';
				document.getElementById('rsacroch').style.visibility = 'hidden';
				rsacrochc = 1;
			}
			function rsacrotchz() {
				document.getElementById('rsactu').style.textDecoration = 'none';
				document.getElementById('rsacrotch').style.visibility = 'hidden';
				rsacrotchc = 1;
			}
			function rtendinchz() {
				document.getElementById('rtenu').style.textDecoration = 'none';
				document.getElementById('rtendinch').style.visibility = 'hidden';
				rtendinchc = 1;
			}
			function leftcoccychz() {
				document.getElementById('lcocu').style.textDecoration = 'none';
				document.getElementById('lcocch').style.visibility = 'hidden';
				lcocchc = 1;
			}
			function leftilliochz() {
				document.getElementById('lillu').style.textDecoration = 'none';
				document.getElementById('licocch').style.visibility = 'hidden';
				licocchc = 1;
			}
			function leftobtchz() {
				document.getElementById('lobtu').style.textDecoration = 'none';
				document.getElementById('lobtch').style.visibility = 'hidden';
				lobtchc = 1;
			}
			function leftpirichz() {
				document.getElementById('lpiru').style.textDecoration = 'none';
				document.getElementById('lpirch').style.visibility = 'hidden';
				lpirchc = 1;
			}
			function leftpubochz() {
				document.getElementById('lpubu').style.textDecoration = 'none';
				document.getElementById('lpubch').style.visibility = 'hidden';
				lpubchc = 1;
			}
			function leftsphchz() {
				document.getElementById('lsphu').style.textDecoration = 'none';
				document.getElementById('lsphch').style.visibility = 'hidden';
				lsphchc = 1;
			}
			function rightsphchz() {
				document.getElementById('rsphu').style.textDecoration = 'none';
				document.getElementById('rsphch').style.visibility = 'hidden';
				rsphchc = 1;
			}
			function rightpubochz() {
				document.getElementById('rpubu').style.textDecoration = 'none';
				document.getElementById('rpubch').style.visibility = 'hidden';
				rpubchc = 1;
			}
			function rightpirichz() {
				document.getElementById('rpiru').style.textDecoration = 'none';
				document.getElementById('rpirch').style.visibility = 'hidden';
				rpirchc = 1;
			}
			function rightobtchz() {
				document.getElementById('robtu').style.textDecoration = 'none';
				document.getElementById('robtch').style.visibility = 'hidden';
				robtchc = 1;
			}
			function rightilliochz() {
				document.getElementById('rillu').style.textDecoration = 'none';
				document.getElementById('ricocch').style.visibility = 'hidden';
				ricocchc = 1;
			}
			function rightcoccychz() {
				document.getElementById('rcocu').style.textDecoration = 'none';
				document.getElementById('rcocch').style.visibility = 'hidden';
				rcocchc = 1;
			}
			function lbladchz() {
				document.getElementById('lblau').style.textDecoration = 'none';
				document.getElementById('lblach').style.visibility = 'hidden';
				lblachc = 1;
			}
			function lcowpchz() {
				document.getElementById('lbulu').style.textDecoration = 'none';
				document.getElementById('lbubch').style.visibility = 'hidden';
				lbubchc = 1;
			}
			function lvasdchz() {
				document.getElementById('lvasu').style.textDecoration = 'none';
				document.getElementById('lvasch').style.visibility = 'hidden';
				lvaschc = 1;
			}
			function lproscapchz() {
				document.getElementById('lprcu').style.textDecoration = 'none';
				document.getElementById('lprocch').style.visibility = 'hidden';
				lprocchc = 1;
			}
			function lproschz() {
				document.getElementById('lprou').style.textDecoration = 'none';
				document.getElementById('lproch').style.visibility = 'hidden';
				lprochc = 1;
			}
			function lseminchz() {
				document.getElementById('lsemu').style.textDecoration = 'none';
				document.getElementById('lsemch').style.visibility = 'hidden';
				lsemchc = 1;
			}
			function luretchz() {
				document.getElementById('lureu').style.textDecoration = 'none';
				document.getElementById('lureterch').style.visibility = 'hidden';
				lureterchc = 1;
			}
			function lrectchz() {
				document.getElementById('lrecu').style.textDecoration = 'none';
				document.getElementById('lrecch').style.visibility = 'hidden';
				lrecchc = 1;
			}
			function ruretchz() {
				document.getElementById('rureu').style.textDecoration = 'none';
				document.getElementById('rureterch').style.visibility = 'hidden';
				rureterchc = 1;
			}
			function rseminchz() {
				document.getElementById('rsemu').style.textDecoration = 'none';
				document.getElementById('rsemch').style.visibility = 'hidden';
				rsemchc = 1;
			}
			function rproschz() {
				document.getElementById('rprou').style.textDecoration = 'none';
				document.getElementById('rproch').style.visibility = 'hidden';
				rprochc = 1;
			}
			function rproscapchz() {
				document.getElementById('rprcu').style.textDecoration = 'none';
				document.getElementById('rprocch').style.visibility = 'hidden';
				rprocchc = 1;
			}
			function rvasdchz() {
				document.getElementById('rvasu').style.textDecoration = 'none';
				document.getElementById('rvasch').style.visibility = 'hidden';
				rvaschc = 1;
			}
			function rcowpchz() {
				document.getElementById('rbulu').style.textDecoration = 'none';
				document.getElementById('rbubch').style.visibility = 'hidden';
				rbubchc = 1;
			}
			function rbladchz() {
				document.getElementById('rblau').style.textDecoration = 'none';
				document.getElementById('rblach').style.visibility = 'hidden';
				rblachc = 1;
			}
			function rrectchz() {			
				document.getElementById('rrecu').style.textDecoration = 'none';
				document.getElementById('rrecch').style.visibility = 'hidden';
				rrecchc = 1;
			}
			function lbuckchz() {			
				document.getElementById('lbucku').style.textDecoration = 'none';
				document.getElementById('lbucch').style.visibility = 'hidden';
				lbucchc = 1;
			}
			function lbubochz() {			
				document.getElementById('lbubu').style.textDecoration = 'none';
				document.getElementById('lbulch').style.visibility = 'hidden';
				lbulchc = 1;
			}
			function lcorpcavchz() {			
				document.getElementById('lcorcu').style.textDecoration = 'none';
				document.getElementById('lcorcch').style.visibility = 'hidden';
				lcorcchc = 1;
			}
			function lcorpspochz() {			
				document.getElementById('lcorsu').style.textDecoration = 'none';
				document.getElementById('lcorsch').style.visibility = 'hidden';
				lcorschc = 1;
			}
			function lglanchz() {			
				document.getElementById('lglau').style.textDecoration = 'none';
				document.getElementById('lglach').style.visibility = 'hidden';
				lglachc = 1;
			}
			function lischchz() {
				document.getElementById('liscu').style.textDecoration = 'none';
				document.getElementById('liscch').style.visibility = 'hidden';
				liscchc = 1;
			}
			function lperinchz() {			
				document.getElementById('lpermu').style.textDecoration = 'none';
				document.getElementById('lpermch').style.visibility = 'hidden';
				lpermchc = 1;
			}
			function lperinfaschz() {			
				document.getElementById('lperfu').style.textDecoration = 'none';
				document.getElementById('lperfch').style.visibility = 'hidden';
				lperfchc = 1;
			}
			function lurethchz() {			
				document.getElementById('lurethu').style.textDecoration = 'none';
				document.getElementById('lurethch').style.visibility = 'hidden';
				lurethchc = 1;
			}
			function lurogchz() {			
				document.getElementById('lurou').style.textDecoration = 'none';
				document.getElementById('luroch').style.visibility = 'hidden';
				lurochc = 1;
			}
			function rbuckchz() {			
				document.getElementById('rbucku').style.textDecoration = 'none';
				document.getElementById('rbucch').style.visibility = 'hidden';
				rbucchc = 1;
			}
			function rurogchz() {			
				document.getElementById('rurou').style.textDecoration = 'none';
				document.getElementById('ruroch').style.visibility = 'hidden';
				rurochc = 1;
			}
			function rurethchz() {			
				document.getElementById('rurethu').style.textDecoration = 'none';
				document.getElementById('rurethch').style.visibility = 'hidden';
				rurethchc = 1;
			}
			function rperinfaschz() {			
				document.getElementById('rperfu').style.textDecoration = 'none';
				document.getElementById('rperfch').style.visibility = 'hidden';
				rperfchc = 1;
			}
			function rperinchz() {			
				document.getElementById('rpermu').style.textDecoration = 'none';
				document.getElementById('rpermch').style.visibility = 'hidden';
				rpermchc = 1;
			}
			function rischchz() {			
				document.getElementById('riscu').style.textDecoration = 'none';
				document.getElementById('riscch').style.visibility = 'hidden';
				riscchc = 1;
			}
			function rglanchz() {			
				document.getElementById('rglau').style.textDecoration = 'none';
				document.getElementById('rglach').style.visibility = 'hidden';
				rglachc = 1;
			}
			function rcorpspochz() {			
				document.getElementById('rcorsu').style.textDecoration = 'none';
				document.getElementById('rcorsch').style.visibility = 'hidden';
				rcorschc = 1;
			}
			function rcorpcavchz() {			
				document.getElementById('rcorcu').style.textDecoration = 'none';
				document.getElementById('rcorcch').style.visibility = 'hidden';
				rcorcchc = 1;
			}
			function rbubochz() {			
				document.getElementById('rbubu').style.textDecoration = 'none';
				document.getElementById('rbulch').style.visibility = 'hidden';
				rbulchc = 1;
			}
			function dvinchz() {			
				document.getElementById('dvinu').style.textDecoration = 'none';
				document.getElementById('dvinch').style.visibility = 'hidden';
				dvinchc = 1;
			}
			function susligchz() {			
				document.getElementById('susligu').style.textDecoration = 'none';
				document.getElementById('susligch').style.visibility = 'hidden';
				susligchc = 1;
			}
			function lparichz() {			
				document.getElementById('lparu').style.textDecoration = 'none';
				document.getElementById('lparch').style.visibility = 'hidden';
				lparchc = 1;
			}
			function lteslchz() {			
				document.getElementById('lteslu').style.textDecoration = 'none';
				document.getElementById('lteslch').style.visibility = 'hidden';
				lteslchc = 1;
			}
			function lgonachz() {			
				document.getElementById('lgonvu').style.textDecoration = 'none';
				document.getElementById('lgonach').style.visibility = 'hidden';
				lgonachc = 1;
			}
			function lgonvchz() {			
				document.getElementById('lgonau').style.textDecoration = 'none';
				document.getElementById('lgonvch').style.visibility = 'hidden';
				lgonvchc = 1;
			}
			function lepidchz() {			
				document.getElementById('lepiu').style.textDecoration = 'none';
				document.getElementById('lepich').style.visibility = 'hidden';
				lepichc = 1;
			}
			function lcremchz() {			
				document.getElementById('lcreu').style.textDecoration = 'none';
				document.getElementById('lcrech').style.visibility = 'hidden';
				lcrechc = 1;
			}
			function lintechz() {			
				document.getElementById('lintu').style.textDecoration = 'none';
				document.getElementById('lintch').style.visibility = 'hidden';
				lintchc = 1;
			}
			function lextechz() {			
				document.getElementById('lextu').style.textDecoration = 'none';
				document.getElementById('lextch').style.visibility = 'hidden';
				lextchc = 1;
			}
			function ltesrchz() {			
				document.getElementById('ltesru').style.textDecoration = 'none';
				document.getElementById('ltesrch').style.visibility = 'hidden';
				ltesrchc = 1;
			}
			function rparichz() {			
				document.getElementById('rparu').style.textDecoration = 'none';
				document.getElementById('rparch').style.visibility = 'hidden';
				rparchc = 1;
			}
			function rintechz() {			
				document.getElementById('rintu').style.textDecoration = 'none';
				document.getElementById('rintch').style.visibility = 'hidden';
				rintchc = 1;
			}
			function rteslchz() {
				document.getElementById('rteslu').style.textDecoration = 'none';
				document.getElementById('rteslch').style.visibility = 'hidden';
				rteslchc = 1;
			}
			function rgonvchz() {			
				document.getElementById('rgonvu').style.textDecoration = 'none';
				document.getElementById('rgonvch').style.visibility = 'hidden';
				rgonvchc = 1;
			}
			function rgonachz() {			
				document.getElementById('rgonau').style.textDecoration = 'none';
				document.getElementById('rgonach').style.visibility = 'hidden';
				rgonachc = 1;
			}
			function rextechz() {			
				document.getElementById('rextu').style.textDecoration = 'none';
				document.getElementById('rextch').style.visibility = 'hidden';
				rextchc = 1;
			}
			function repidchz() {			
				document.getElementById('repiu').style.textDecoration = 'none';
				document.getElementById('repich').style.visibility = 'hidden';
				repichc = 1;
			}
			function rcremchz() {			
				document.getElementById('rcreu').style.textDecoration = 'none';
				document.getElementById('rcrech').style.visibility = 'hidden';
				rcrechc = 1;
			}
			function rtesrchz() {			
				document.getElementById('rtesru').style.textDecoration = 'none';
				document.getElementById('rtesrch').style.visibility = 'hidden';
				rtesrchc = 1;
			}
			function lductchz() {			
				document.getElementById('lducu').style.textDecoration = 'none';
				document.getElementById('lducch').style.visibility = 'hidden';
				lducchc = 1;
			}
			function rductchz() {			
				document.getElementById('rducu').style.textDecoration = 'none';
				document.getElementById('rducch').style.visibility = 'hidden';
				rducchc = 1;
			}
			function lanuschz() {			
				document.getElementById('lanuu').style.textDecoration = 'none';
				document.getElementById('lanuch').style.visibility = 'hidden';
				lanuchc = 1;
			}
			function ranuschz() {			
				document.getElementById('ranuu').style.textDecoration = 'none';
				document.getElementById('ranuch').style.visibility = 'hidden';
				ranuchc = 1;
			}
			function llabchz() {			
				document.getElementById('llabu').style.textDecoration = 'none';
				document.getElementById('llabch').style.visibility = 'hidden';
				llabchc = 1;
			}
			function rlabchz() {			
				document.getElementById('rlabu').style.textDecoration = 'none';
				document.getElementById('rlabch').style.visibility = 'hidden';
				rlabchc = 1;
			}
			function torschz() {			
				document.getElementById('torsou').style.textDecoration = 'none';
				document.getElementById('torsoch').style.visibility = 'hidden';
				torsochc = 1;
			}
			function luskichz() {			
				document.getElementById('luskiu').style.textDecoration = 'none';
				document.getElementById('luskich').style.visibility = 'hidden';
				luskichc = 1;
			}
			function ruskichz() {			
				document.getElementById('ruskiu').style.textDecoration = 'none';
				document.getElementById('ruskich').style.visibility = 'hidden';
				ruskichc = 1;
			}

						var canvas = document.getElementById("3darea");
				var c_w = window.innerWidth,  c_h = window.innerHeight;
				if (c_w>1087) {
					var imgName = document.getElementById('imgX');
					imgName.width = c_w - 1087;
				}
				canvas.width = c_w - 0;   canvas.height = c_h;
				var imgName = document.getElementById('imgZ');
				imgName.width = c_w;
			
			
			trunk=0;
			slim = 0;
			
			function showshield() {
				fadeInX('shield',0)
				setTimeout("document.getElementById('3darea').style.visibility='';",500);
				setTimeout("fadeInX('3darea',0)",500);
				document.getElementById('cl_loadinglabel').style.visibility = 'hidden';
				//document.getElementById('tacou').style.visibility = 'visible';
			}
			
			function startMapLoading() {
			
				canvas = document.getElementById('3darea');
				var c_w = window.innerWidth,  c_h = window.innerHeight;
				if (c_w>1087) {
					var imgName = document.getElementById('imgX');
					imgName.width = c_w - 1087;
				}
				canvas.width = c_w - 0;   canvas.height = c_h;
				var imgName = document.getElementById('imgZ');
				imgName.width = c_w;
				
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
		
				
				var engine = clap.load('assets/copperlichtdata/female_anatomy.ccbjs');
				nameOfFolderContainingDraggableNodes = 'parent';
			
				clap.OnLoadingComplete = function() {
					
					// change the background color of the canvas from white to black; this affects models with transparent textures
					document.getElementById('3darea').style.background = '#000';
					
					document.getElementById('cl_nowebgl').style.visibility='hidden';
					document.getElementById('wblock').style.visibility = 'hidden';
					document.getElementById('shield').style.visibility = 'visible';
					setTimeout("showshield()",4000);
					
					var scene = clap.getScene();
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
					var cam = clap.getScene().getActiveCamera();
					var cfov = cam.getFov()
					mfov = cfov;
					
					rotSceneNode = scene.getSceneNodeFromName('anatomy-models');
				}
				
				//functions needed to activate camera panning
				draggingNode = null;
				distance = 0;
				folder = null;
				originalPosition = null;
				folderTransformation = null;
				folderTransformationInv = null;
				itemWasDragged = false;
				startItemDragPosX = 0;
				startItemDragPosY = 0;
						
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
						mfov = 1.3066370964050291
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