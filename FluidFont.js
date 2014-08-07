/* Copyright (c) 2014 Attilio Vassallo */
function fluidFont(perc, min, max) {
	var elements = this.length === undefined ? [this] : this;
	this.setMin = function(newMin) { min = parseFloat(newMin !== undefined ? newMin : 1, 10); fluidize(); };
	this.setMax = function(newMax) { max = parseFloat(newMax !== undefined ? newMax : Number.POSITIVE_INFINITY, 10); fluidize(); };
	this.setPerc = function(newPerc) { perc = parseFloat(newPerc >= 0 ? newPerc : 1); };
	this.setPerc(perc); this.setMin(min); this.setMax(max);
	function fluidize() {
		for(var e=0 ; e < elements.length ; e++) {
			var backupDisp = elements[e].style.display;
			if(elements[e].clientWidth === 0) { elements[e].style.display = "block"; }
			var newSize = elements[e].clientWidth * perc;
			elements[e].style.fontSize = (newSize < min ? min : newSize > max ? max : newSize) + "px";
			elements[e].style.display = backupDisp;
		}
	}
	fluidize();
	this.fluidize = fluidize;
	if(window.addEventListener) { window.addEventListener('resize', fluidize, false); } else { window.attachEvent('onresize', fluidize); }
}
Element.prototype.fluidFont = fluidFont;
NodeList.prototype.fluidFont = fluidFont;
HTMLCollection.prototype.fluidFont = fluidFont;
