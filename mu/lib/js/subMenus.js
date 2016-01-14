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
			
function hidetopinfo() {
	document.getElementById('box').style.visibility = 'hidden';
	document.getElementById('infotext1').style.visibility = 'hidden';
}
function hidebotinfo() {
	document.getElementById('infotext2').style.visibility = 'hidden';
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
	document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lteslch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('lextch').style.visibility = 'hidden'; document.getElementById('ltesrch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rteslch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('rextch').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('rtesrch').style.visibility = 'hidden'; document.getElementById('lducch').style.visibility = 'hidden'; document.getElementById('rducch').style.visibility = 'hidden'; document.getElementById('lbucch').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lperfch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('rbucch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rperfch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('dvinch').style.visibility = 'hidden'; document.getElementById('susligch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lbubch').style.visibility = 'hidden'; document.getElementById('lvasch').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lsemch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rsemch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rvasch').style.visibility = 'hidden'; document.getElementById('rbubch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('infotext1').innerHTML = ''; document.getElementById('ranuch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('rpenisch').style.visibility = 'hidden'; document.getElementById('lpenisch').style.visibility = 'hidden'; document.getElementById('rpensfasch').style.visibility = 'hidden'; document.getElementById('lpensfasch').style.visibility = 'hidden'; document.getElementById('rpersfasch').style.visibility = 'hidden'; document.getElementById('lpersfasch').style.visibility = 'hidden'; document.getElementById('rscrotumch').style.visibility = 'hidden'; document.getElementById('lscrotumch').style.visibility = 'hidden'; document.getElementById('rssfasch').style.visibility = 'hidden'; document.getElementById('lssfasch').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden';
	openhand();
}	
			var line;
			//penis
			function submenupe() {
					document.getElementById('lbucch').style.visibility = (lbucchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lbulch').style.visibility = (lbulchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lcorcch').style.visibility = (lcorcchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lcorsch').style.visibility = (lcorschc == 1) ? 'hidden' : 'visible';
					document.getElementById('lglach').style.visibility = (lglachc == 1) ? 'hidden' : 'visible';
					document.getElementById('liscch').style.visibility = (liscchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lpermch').style.visibility = (lpermchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lperfch').style.visibility = (lperfchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lurethch').style.visibility = (lurethchc == 1) ? 'hidden' : 'visible';
					document.getElementById('luroch').style.visibility = (lurochc == 1) ? 'hidden' : 'visible';
					document.getElementById('rbucch').style.visibility = (rbucchc == 1) ? 'hidden' : 'visible';
					document.getElementById('ruroch').style.visibility = (rurochc == 1) ? 'hidden' : 'visible';
					document.getElementById('rurethch').style.visibility = (rurethchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rperfch').style.visibility = (rperfchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rpermch').style.visibility = (rpermchc == 1) ? 'hidden' : 'visible';
					document.getElementById('riscch').style.visibility = (riscchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rglach').style.visibility = (rglachc == 1) ? 'hidden' : 'visible';
					document.getElementById('rcorsch').style.visibility = (rcorschc == 1) ? 'hidden' : 'visible';
					document.getElementById('rcorcch').style.visibility = (rcorcchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rbulch').style.visibility = (rbulchc == 1) ? 'hidden' : 'visible';
					document.getElementById('dvinch').style.visibility = (dvinchc == 1) ? 'hidden' : 'visible';
					document.getElementById('susligch').style.visibility = (susligchc == 1) ? 'hidden' : 'visible';
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
				document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lbubch').style.visibility = 'hidden'; document.getElementById('lvasch').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lsemch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rsemch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rvasch').style.visibility = 'hidden'; document.getElementById('rbubch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lteslch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('lextch').style.visibility = 'hidden'; document.getElementById('ltesrch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rteslch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('rextch').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('rtesrch').style.visibility = 'hidden'; document.getElementById('lducch').style.visibility = 'hidden'; document.getElementById('rducch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('rpenisch').style.visibility = 'hidden'; document.getElementById('lpenisch').style.visibility = 'hidden'; document.getElementById('rpensfasch').style.visibility = 'hidden'; document.getElementById('lpensfasch').style.visibility = 'hidden'; document.getElementById('rpersfasch').style.visibility = 'hidden'; document.getElementById('lpersfasch').style.visibility = 'hidden'; document.getElementById('rscrotumch').style.visibility = 'hidden'; document.getElementById('lscrotumch').style.visibility = 'hidden'; document.getElementById('rssfasch').style.visibility = 'hidden'; document.getElementById('lssfasch').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden';
				document.getElementById('penmenu').style.visibility = 'visible';
				document.getElementById('penhov1').style.visibility = 'visible';
			}

			//testi
			function submenute() {
					document.getElementById('lparch').style.visibility = (lparchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lteslch').style.visibility = (lteslchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lgonach').style.visibility = (lgonachc == 1) ? 'hidden' : 'visible';
					document.getElementById('lgonvch').style.visibility = (lgonvchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lepich').style.visibility = (lepichc == 1) ? 'hidden' : 'visible';
					document.getElementById('lcrech').style.visibility = (lcrechc == 1) ? 'hidden' : 'visible';
					document.getElementById('lintch').style.visibility = (lintchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lextch').style.visibility = (lextchc == 1) ? 'hidden' : 'visible';
					document.getElementById('ltesrch').style.visibility = (ltesrchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rparch').style.visibility = (rparchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rintch').style.visibility = (rintchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rteslch').style.visibility = (rteslchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rgonvch').style.visibility = (rgonvchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rgonach').style.visibility = (rgonachc == 1) ? 'hidden' : 'visible';
					document.getElementById('rextch').style.visibility = (rextchc == 1) ? 'hidden' : 'visible';
					document.getElementById('repich').style.visibility = (repichc == 1) ? 'hidden' : 'visible';
					document.getElementById('rcrech').style.visibility = (rcrechc == 1) ? 'hidden' : 'visible';
					document.getElementById('rtesrch').style.visibility = (rtesrchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lducch').style.visibility = (lducchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rducch').style.visibility = (rducchc == 1) ? 'hidden' : 'visible';
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
				document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lbubch').style.visibility = 'hidden'; document.getElementById('lvasch').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lsemch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rsemch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rvasch').style.visibility = 'hidden'; document.getElementById('rbubch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lbucch').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lperfch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('rbucch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rperfch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('dvinch').style.visibility = 'hidden'; document.getElementById('susligch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('rpenisch').style.visibility = 'hidden'; document.getElementById('lpenisch').style.visibility = 'hidden'; document.getElementById('rpensfasch').style.visibility = 'hidden'; document.getElementById('lpensfasch').style.visibility = 'hidden'; document.getElementById('rpersfasch').style.visibility = 'hidden'; document.getElementById('lpersfasch').style.visibility = 'hidden'; document.getElementById('rscrotumch').style.visibility = 'hidden'; document.getElementById('lscrotumch').style.visibility = 'hidden'; document.getElementById('rssfasch').style.visibility = 'hidden'; document.getElementById('lssfasch').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden';
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
				document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lteslch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('lextch').style.visibility = 'hidden'; document.getElementById('ltesrch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rteslch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('rextch').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('rtesrch').style.visibility = 'hidden'; document.getElementById('lducch').style.visibility = 'hidden'; document.getElementById('rducch').style.visibility = 'hidden'; document.getElementById('lbucch').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lperfch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('rbucch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rperfch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('dvinch').style.visibility = 'hidden'; document.getElementById('susligch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lbubch').style.visibility = 'hidden'; document.getElementById('lvasch').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lsemch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rsemch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rvasch').style.visibility = 'hidden'; document.getElementById('rbubch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('rpenisch').style.visibility = 'hidden'; document.getElementById('lpenisch').style.visibility = 'hidden'; document.getElementById('rpensfasch').style.visibility = 'hidden'; document.getElementById('lpensfasch').style.visibility = 'hidden'; document.getElementById('rpersfasch').style.visibility = 'hidden'; document.getElementById('lpersfasch').style.visibility = 'hidden'; document.getElementById('rscrotumch').style.visibility = 'hidden'; document.getElementById('lscrotumch').style.visibility = 'hidden'; document.getElementById('rssfasch').style.visibility = 'hidden'; document.getElementById('lssfasch').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden';
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
				document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lbubch').style.visibility = 'hidden'; document.getElementById('lvasch').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lsemch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rsemch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rvasch').style.visibility = 'hidden'; document.getElementById('rbubch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lbucch').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lperfch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('rbucch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rperfch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('dvinch').style.visibility = 'hidden'; document.getElementById('susligch').style.visibility = 'hidden'; document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lteslch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('lextch').style.visibility = 'hidden'; document.getElementById('ltesrch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rteslch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('rextch').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('rtesrch').style.visibility = 'hidden'; document.getElementById('lducch').style.visibility = 'hidden'; document.getElementById('rducch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden';
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
				document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lbubch').style.visibility = 'hidden'; document.getElementById('lvasch').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lsemch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rsemch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rvasch').style.visibility = 'hidden'; document.getElementById('rbubch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lbucch').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lperfch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('rbucch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rperfch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('dvinch').style.visibility = 'hidden'; document.getElementById('susligch').style.visibility = 'hidden'; document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lteslch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('lextch').style.visibility = 'hidden'; document.getElementById('ltesrch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rteslch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('rextch').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('rtesrch').style.visibility = 'hidden'; document.getElementById('lducch').style.visibility = 'hidden'; document.getElementById('rducch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden';
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
				document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lbubch').style.visibility = 'hidden'; document.getElementById('lvasch').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lsemch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rsemch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rvasch').style.visibility = 'hidden'; document.getElementById('rbubch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lbucch').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lperfch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('rbucch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rperfch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('dvinch').style.visibility = 'hidden'; document.getElementById('susligch').style.visibility = 'hidden'; document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lteslch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('lextch').style.visibility = 'hidden'; document.getElementById('ltesrch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rteslch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('rextch').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('rtesrch').style.visibility = 'hidden'; document.getElementById('lducch').style.visibility = 'hidden'; document.getElementById('rducch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('rpenisch').style.visibility = 'hidden'; document.getElementById('lpenisch').style.visibility = 'hidden'; document.getElementById('rpensfasch').style.visibility = 'hidden'; document.getElementById('lpensfasch').style.visibility = 'hidden'; document.getElementById('rpersfasch').style.visibility = 'hidden'; document.getElementById('lpersfasch').style.visibility = 'hidden'; document.getElementById('rscrotumch').style.visibility = 'hidden'; document.getElementById('lscrotumch').style.visibility = 'hidden'; document.getElementById('rssfasch').style.visibility = 'hidden'; document.getElementById('lssfasch').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden';
				document.getElementById('musmenu').style.visibility = 'visible';
				document.getElementById('mushov1').style.visibility = 'visible';
			}
			
			//organs
			function submenuorg() {
					document.getElementById('lblach').style.visibility = (lblachc == 1) ? 'hidden' : 'visible';
					document.getElementById('lbubch').style.visibility = (lbubchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lvasch').style.visibility = (lvaschc == 1) ? 'hidden' : 'visible';
					document.getElementById('lprocch').style.visibility = (lprocchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lproch').style.visibility = (lprochc == 1) ? 'hidden' : 'visible';
					document.getElementById('lsemch').style.visibility = (lsemchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lureterch').style.visibility = (lureterchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lrecch').style.visibility = (lrecchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rureterch').style.visibility = (rureterchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rsemch').style.visibility = (rsemchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rproch').style.visibility = (rprochc == 1) ? 'hidden' : 'visible';
					document.getElementById('rprocch').style.visibility = (rprocchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rvasch').style.visibility = (rvaschc == 1) ? 'hidden' : 'visible';
					document.getElementById('rbubch').style.visibility = (rbubchc == 1) ? 'hidden' : 'visible';
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
				document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lbucch').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lperfch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('rbucch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rperfch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('dvinch').style.visibility = 'hidden'; document.getElementById('susligch').style.visibility = 'hidden'; document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lteslch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('lextch').style.visibility = 'hidden'; document.getElementById('ltesrch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rteslch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('rextch').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('rtesrch').style.visibility = 'hidden'; document.getElementById('lducch').style.visibility = 'hidden'; document.getElementById('rducch').style.visibility = 'hidden'; document.getElementById('lanuch').style.visibility = 'hidden'; document.getElementById('rpenisch').style.visibility = 'hidden'; document.getElementById('lpenisch').style.visibility = 'hidden'; document.getElementById('rpensfasch').style.visibility = 'hidden'; document.getElementById('lpensfasch').style.visibility = 'hidden'; document.getElementById('rpersfasch').style.visibility = 'hidden'; document.getElementById('lpersfasch').style.visibility = 'hidden'; document.getElementById('rscrotumch').style.visibility = 'hidden'; document.getElementById('lscrotumch').style.visibility = 'hidden'; document.getElementById('rssfasch').style.visibility = 'hidden'; document.getElementById('lssfasch').style.visibility = 'hidden'; document.getElementById('torsoch').style.visibility = 'hidden'; document.getElementById('ranuch').style.visibility = 'hidden';
				document.getElementById('orgmenu').style.visibility = 'visible';
				document.getElementById('orghov1').style.visibility = 'visible';
			}
			
			//skin
			function submenuski() {
					document.getElementById('ranuch').style.visibility = (ranuchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lanuch').style.visibility = (lanuchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rpenisch').style.visibility = (rpenischc == 1) ? 'hidden' : 'visible';
					document.getElementById('lpenisch').style.visibility = (lpenischc == 1) ? 'hidden' : 'visible';
					document.getElementById('rpensfasch').style.visibility = (rpensfaschc == 1) ? 'hidden' : 'visible';
					document.getElementById('lpensfasch').style.visibility = (lpensfaschc == 1) ? 'hidden' : 'visible';
					document.getElementById('torsoch').style.visibility = (torsochc == 1) ? 'hidden' : 'visible';
					document.getElementById('rpersfasch').style.visibility = (rpersfaschc == 1) ? 'hidden' : 'visible';
					document.getElementById('lpersfasch').style.visibility = (lpersfaschc == 1) ? 'hidden' : 'visible';
					document.getElementById('rscrotumch').style.visibility = (rscrotumchc == 1) ? 'hidden' : 'visible';
					document.getElementById('lscrotumch').style.visibility = (lscrotumchc == 1) ? 'hidden' : 'visible';
					document.getElementById('rssfasch').style.visibility = (rssfaschc == 1) ? 'hidden' : 'visible';
					document.getElementById('lssfasch').style.visibility = (lssfaschc == 1) ? 'hidden' : 'visible';
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
				document.getElementById('lparch').style.visibility = 'hidden'; document.getElementById('lteslch').style.visibility = 'hidden'; document.getElementById('lgonach').style.visibility = 'hidden'; document.getElementById('lgonvch').style.visibility = 'hidden'; document.getElementById('lepich').style.visibility = 'hidden'; document.getElementById('lcrech').style.visibility = 'hidden'; document.getElementById('lintch').style.visibility = 'hidden'; document.getElementById('lextch').style.visibility = 'hidden'; document.getElementById('ltesrch').style.visibility = 'hidden'; document.getElementById('rparch').style.visibility = 'hidden'; document.getElementById('rintch').style.visibility = 'hidden'; document.getElementById('rteslch').style.visibility = 'hidden'; document.getElementById('rgonvch').style.visibility = 'hidden'; document.getElementById('rgonach').style.visibility = 'hidden'; document.getElementById('rextch').style.visibility = 'hidden'; document.getElementById('repich').style.visibility = 'hidden'; document.getElementById('rcrech').style.visibility = 'hidden'; document.getElementById('rtesrch').style.visibility = 'hidden'; document.getElementById('lducch').style.visibility = 'hidden'; document.getElementById('rducch').style.visibility = 'hidden'; document.getElementById('lbucch').style.visibility = 'hidden'; document.getElementById('lbulch').style.visibility = 'hidden'; document.getElementById('lcorcch').style.visibility = 'hidden'; document.getElementById('lcorsch').style.visibility = 'hidden'; document.getElementById('lglach').style.visibility = 'hidden'; document.getElementById('liscch').style.visibility = 'hidden'; document.getElementById('lpermch').style.visibility = 'hidden'; document.getElementById('lperfch').style.visibility = 'hidden'; document.getElementById('lurethch').style.visibility = 'hidden'; document.getElementById('luroch').style.visibility = 'hidden'; document.getElementById('rbucch').style.visibility = 'hidden'; document.getElementById('ruroch').style.visibility = 'hidden'; document.getElementById('rurethch').style.visibility = 'hidden'; document.getElementById('rperfch').style.visibility = 'hidden'; document.getElementById('rpermch').style.visibility = 'hidden'; document.getElementById('riscch').style.visibility = 'hidden'; document.getElementById('rglach').style.visibility = 'hidden'; document.getElementById('rcorsch').style.visibility = 'hidden'; document.getElementById('rcorcch').style.visibility = 'hidden'; document.getElementById('rbulch').style.visibility = 'hidden'; document.getElementById('dvinch').style.visibility = 'hidden'; document.getElementById('susligch').style.visibility = 'hidden'; document.getElementById('lblach').style.visibility = 'hidden'; document.getElementById('lbubch').style.visibility = 'hidden'; document.getElementById('lvasch').style.visibility = 'hidden'; document.getElementById('lprocch').style.visibility = 'hidden'; document.getElementById('lproch').style.visibility = 'hidden'; document.getElementById('lsemch').style.visibility = 'hidden'; document.getElementById('lureterch').style.visibility = 'hidden'; document.getElementById('lrecch').style.visibility = 'hidden'; document.getElementById('rureterch').style.visibility = 'hidden'; document.getElementById('rsemch').style.visibility = 'hidden'; document.getElementById('rproch').style.visibility = 'hidden'; document.getElementById('rprocch').style.visibility = 'hidden'; document.getElementById('rvasch').style.visibility = 'hidden'; document.getElementById('rbubch').style.visibility = 'hidden'; document.getElementById('rblach').style.visibility = 'hidden'; document.getElementById('rrecch').style.visibility = 'hidden'; document.getElementById('lcocch').style.visibility = 'hidden'; document.getElementById('licocch').style.visibility = 'hidden'; document.getElementById('lobtch').style.visibility = 'hidden'; document.getElementById('lpirch').style.visibility = 'hidden'; document.getElementById('lpubch').style.visibility = 'hidden'; document.getElementById('lsphch').style.visibility = 'hidden'; document.getElementById('rsphch').style.visibility = 'hidden'; document.getElementById('rpubch').style.visibility = 'hidden'; document.getElementById('rpirch').style.visibility = 'hidden'; document.getElementById('robtch').style.visibility = 'hidden'; document.getElementById('ricocch').style.visibility = 'hidden'; document.getElementById('rcocch').style.visibility = 'hidden'; document.getElementById('lsacroch').style.visibility = 'hidden'; document.getElementById('lsacrotch').style.visibility = 'hidden'; document.getElementById('ltendinch').style.visibility = 'hidden'; document.getElementById('rsacroch').style.visibility = 'hidden'; document.getElementById('rsacrotch').style.visibility = 'hidden'; document.getElementById('rtendinch').style.visibility = 'hidden'; document.getElementById('leftpelch').style.visibility = 'hidden'; document.getElementById('rpelch').style.visibility = 'hidden'; document.getElementById('sacrch').style.visibility = 'hidden'; document.getElementById('pubsymch').style.visibility = 'hidden';
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
function newhovb(){
	document.getElementById('prehov1').style.visibility = 'hidden';
	document.getElementById('penhov1').style.visibility = 'hidden';
	document.getElementById('teshov1').style.visibility = 'hidden';
	document.getElementById('orghov1').style.visibility = 'hidden';
	document.getElementById('mushov1').style.visibility = 'hidden';
	document.getElementById('lighov1').style.visibility = 'hidden';
	document.getElementById('bonhov1').style.visibility = 'hidden';
	document.getElementById('newhov1').style.visibility = 'visible';
}