(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bulldozer = function() {
	this.initialize(img.bulldozer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bulldozer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.725,0.736);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol66, new cjs.Rectangle(0,0,185.7,188.5), null);


// stage content:
(lib.dozerConst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.Symbol66();
	this.instance.parent = this;
	this.instance.setTransform(-131.6,681.5,1.28,1.28,0,-17.2,162.8,92.9,94.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:92.8,regY:94.3,skewX:-10.2,skewY:169.8,x:1119.6,y:669.4},302,cjs.Ease.get(0.05)).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("Ag2HTQgXgWAAggQAAgfAXgXQAWgWAgAAQAfAAAXAWQAWAXAAAfQAAAggWAWQgXAXgfAAQggAAgWgXgAgMDeIg9owQgEglAAgSQAAgrAXgbQAXgaAgAAQAgAAAXAaQAWAbAAA0QAAAQgDAeIg+Iwg");
	this.shape.setTransform(915.8,509.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Ag2HTQgXgWAAggQAAgfAXgXQAWgWAgAAQAfAAAXAWQAWAXAAAfQAAAggWAWQgXAXgfAAQggAAgWgXgAgMDeIg9owQgEglAAgSQAAgrAXgbQAXgaAgAAQAgAAAXAaQAWAbAAA0QAAAQgDAeIg+Iwg");
	this.shape_1.setTransform(868.6,509.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("Ag2HTQgXgWAAggQAAgfAXgXQAWgWAgAAQAfAAAXAWQAWAXAAAfQAAAggWAWQgXAXgfAAQggAAgWgXgAgMDeIg9owQgEglAAgSQAAgrAXgbQAXgaAgAAQAgAAAXAaQAWAbAAA0QAAAQgDAeIg+Iwg");
	this.shape_2.setTransform(821.4,509.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AAiFGIAAgYIAMAAQAtAAASgOQASgNAGgaQADgLAAg3IAAkCQAAhXgWgmQgXgog2AAQhRAAhSBaIAAFNQAABBAIAPQAKAUARAKQARAIA0ABIAAAYIk6AAIAAgYIAOAAQAwAAASgYQAQgaAAhFIAAjqQAAhzgEgYQgGgZgLgJQgLgJgRAAQgUAAgbAKIgKgZIC/hNIAdAAIAACGQBwiHBkABQA0gBAmAbQAlAZAWA8QAPAqAABVIAAEOQAAA8AKAWQAHARASAKQARAKAtAAIAAAYg");
	this.shape_3.setTransform(762.5,524.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AjqDeQhHhgAAh4QAAhWAshWQArhXBGgpQBHgpBOAAQCQAABXBtQBKBeAAB5QAABUgpBXQgpBYhHAsQhIAshXAAQiPAAhVhygAhdkMQgmAWgWA2QgXA3AABWQAACJA3BlQA3BkBZAAQBDAAAsg3QArg4AAiHQAAiohIhhQgyhChLAAQgkAAglAWg");
	this.shape_4.setTransform(691.4,525.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AiVHsIAAgZQAvAAAQgJQAQgJAJgUQAKgVgBg7IAAj0QABhogHgdQgEgWgLgIQgKgJgSAAQgTAAgdAKIgJgZIC+hOIAfAAIAAH9QgBA7AKAVQAIATARAKQARAJAtAAIAAAZgAgslzQgVgVABgdQgBgdAVgUQAUgVAdAAQAdAAAVAVQAUAUAAAdQAAAdgUAVQgVAUgdAAQgcAAgVgUg");
	this.shape_5.setTransform(636.7,507.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("AgeGZQgfgSgOghQgPggAAhFIAAmpIhkAAIAAgYQAmgPAogjQAnglAfgyQARgbAbhGIAWAAIAADRICTAAIAAAxIiTAAIAAGZQgBA+ATAWQARAVAcAAQAWAAAWgOQAVgPAMgbIAbAAQgYBEgsAiQgtAjgvgBQgfABgegSg");
	this.shape_6.setTransform(597.8,515.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("Ai6D1QhQhaAAibQAAiUBZheQBZhdB7AAQBeAAA8AyQA8AxAAA1QAAAbgQAQQgSAQgeAAQgpAAgVgaQgMgPgDgpQgEgogYgWQgZgVgrAAQhEAAgqA0Qg4BDAABwQAABwA4BYQA3BWBeAAQBEAAA2guQAmggAkhUIAUAKQgZB9hLBEQhLBDhbAAQhrAAhQhbg");
	this.shape_7.setTransform(545.9,525.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("ACEFHIAAiHQhSBZgrAXQgqAXgwAAQg1AAgngfQgngfgPgwQgQgxAAhZIAAkaQAAgtgJgRQgKgRgTgJQgTgKgyABIAAgaIDeAAIAAGnQAABZAgAcQAeAbAsAAQAcAAAmgSQAmgTA0g1IAAlmQAAg2gUgSQgUgUg+gBIAAgaIDYAAIAAF/QAABuAFAZQAFAZAMAJQALAKAPAAQAWAAAbgMIAKAYIi+BPg");
	this.shape_8.setTransform(478.9,526.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AjkFGIAAgYQAwAAAYgPQARgMAHgYQADgLAAg4IAAj1QAAhvgDgUQgGgWgLgKQgMgJgTAAQgVAAgbAKIgHgZIDAhNIAdAAIAACPQBOiQBUABQAngBAYAYQAZAXAAAeQAAAbgSATQgSATgZAAQgYAAgegXQgegZgPAAQgMAAgPAOQgfAcggBBIAAEwQAAA0ANAbQAIATAXAMQAXANAqAAIAAAYg");
	this.shape_9.setTransform(420.8,524.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AgeGZQgfgSgOghQgPggAAhFIAAmpIhkAAIAAgYQAmgPAogjQAoglAegyQAQgbAchGIAVAAIAADRICVAAIAAAxIiVAAIAAGZQAAA+ASAWQASAVAbAAQAXAAAWgOQAVgPAMgbIAbAAQgYBEgtAiQgsAjgvgBQgfABgegSg");
	this.shape_10.setTransform(377.3,515.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("Ah/E7QgXgHgOAAQgRAAgIASIgYAAIAAjiIAYAAQASBhA4AxQA2AxBDAAQAwAAAegbQAegdAAgnQAAgwghghQgigghkgyQhkgxgfgoQgfgnAAg9QAAhOA2g0QA1g1BVAAQAlAAA1AQQAjAKAMAAQALAAAHgFQAFgEAJgRIAXAAIAADYIgXAAQgahmgpglQgqgkg+AAQgxAAgeAZQgdAagBAfQABAnAVAcQAWAcBCAgIBkAxQCMBEAABwQABBWhBA2QhDA0hRAAQg5AAhKgVg");
	this.shape_11.setTransform(330.3,525.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AAiFGIAAgYIAMAAQAtAAASgOQASgNAGgaQADgLAAg3IAAkCQAAhXgWgmQgXgog2AAQhRAAhRBaIAAFNQgBBBAJAPQAJAUASAKQAQAIA0ABIAAAYIk6AAIAAgYIAOAAQAxAAARgYQAQgaAAhFIAAjqQAAhzgEgYQgGgZgKgJQgMgJgRAAQgUAAgbAKIgKgZIC/hNIAeAAIAACGQBviHBkABQA0gBAlAbQAmAZAWA8QAPAqAABVIAAEOQAAA8AKAWQAIARARAKQARAKAtAAIAAAYg");
	this.shape_12.setTransform(266.4,524.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AjqDeQhHhgAAh4QAAhWAshWQArhXBGgpQBHgpBOAAQCQAABXBtQBKBeAAB5QAABUgpBXQgpBYhHAsQhIAshXAAQiPAAhVhygAhdkMQgmAWgWA2QgXA3AABWQAACJA3BlQA3BkBZAAQBDAAAsg3QArg4AAiHQAAiohIhhQgyhChLAAQgkAAglAWg");
	this.shape_13.setTransform(195.3,525.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AlGE+QhgiBAAivQAAiLA/h2QA/h1BvhBQBuhBCCAAQBmAABjAyQAdAPAMAAQATAAAOgNQASgTAIghIAYAAIAVE/IgVAAQgriPhQg/QhPg/hwAAQhcAAhMAwQhLAvgrBoQgsBnAACaQAAB/ApBeQApBdBSAyQBSAyBoAAQBcAABGgnQBGgnBTh1IAWAOQhHB9heA7QheA6iCAAQjoAAiAitg");
	this.shape_14.setTransform(112.7,510);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AjkFGIAAgZQAxAAAXgOQARgLAHgZQAEgMAAg3IAAj1QgBhugEgWQgEgVgMgJQgNgKgRAAQgWAAgbAKIgHgZIDAhNIAdAAIAACOQBPiOBTAAQAnAAAYAXQAZAXAAAeQAAAbgSATQgSATgZAAQgYAAgegXQgegZgPAAQgMAAgPAOQgfAcggBCIAAEvQAAA0ANAbQAIATAXAMQAWAMAsAAIAAAZg");
	this.shape_15.setTransform(621.4,362.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("Ai5D4QhShZAAiXQAAiiBUhaQBThcB9ABQBqgBBFBHQBEBGAAB2Im1AAQgBCMBGBQQBFBRBcgBQA/ABAugjQAugiAfhTIAVAOQgOBehGBPQhGBNhpABQhxAAhRhZgAh0jyQgtAtgIBPIElAAQgEg8gLgZQgRgngigWQgjgWgkgBQg6AAgtAtg");
	this.shape_16.setTransform(566.1,363.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("ABwH2IAAhbQguAwgsAWQgsAVgzAAQhoAAhNhWQhOhYAAiIQAAiJBWhwQBWhxCHAAQBTAAA2A1IAAh1QAAhtgEgYQgGgZgLgJQgLgJgRAAQgSAAgdALIgJgZIC9hNIAfAAIAALcQAABvAFAZQAFAZAMAJQALAKAPAAQATAAAfgLIAIAYIi9BOgAiOhJQg/BJAACJQAACMA9BLQA9BJBLABQA+gBA6g+IAAlHQgEgugUgnQgVgmgigUQgigUggAAQg9AAgwA2g");
	this.shape_17.setTransform(501.1,347);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AAiFGIAAgZIAMAAQAtAAASgMQASgPAGgaQADgKAAg3IAAkDQAAhWgWgnQgXgng2AAQhQAAhSBaIAAFNQgBBAAJAQQAJAUASAJQAQAJA0AAIAAAZIk6AAIAAgZIAOAAQAwAAASgXQAQgZAAhGIAAjqQAAhzgEgYQgGgZgKgJQgMgJgRAAQgUAAgbAKIgKgZIC/hNIAeAAIAACGQBviGBkAAQA0AAAlAaQAmAaAWA7QAPApAABWIAAEOQAAA8AKAWQAIARARAKQARAJAtAAIAAAZg");
	this.shape_18.setTransform(427.8,362.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AjkGrQhQg1ghhaQgWg+AAipIAAluQAAhXgYgbQgYgbg1AAIgjAAIAAgZIGVAAIAAAZIgjAAQg7AAgZAlQgRAZAABPIAAGYQAAA2ALBHQAJBHAaAnQAbAoAxAZQAyAaBHAAQBcAABIgoQBJgoAbg/QAbg/gBiVIAAl7QAAhYgTgWQgbgfg2AAIgjAAIAAgZIFMAAIAAAZIgjAAQg3AAgeAvQgPAVAABOIAAF8QABCNgcBOQgdBOhRA4QhTA3iMAAQiaAAhPg1g");
	this.shape_19.setTransform(340.7,349.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AiAE7QgWgHgPAAQgQAAgIASIgYAAIAAjiIAYAAQATBhA3AxQA2AxBDAAQAvAAAfgbQAegdAAgnQAAgwghghQgigghjgyQhlgxgfgoQgggnABg9QAAhOA2g0QA1g1BVAAQAkAAA2AQQAjAKAMAAQALAAAGgFQAHgEAIgRIAWAAIAADYIgWAAQgbhmgpglQgpgkg+AAQgxAAgeAZQgeAaABAfQAAAnAVAcQAWAcBCAgIBkAxQCMBEABBwQgBBWhAA2QhDA0hRAAQg4AAhMgVg");
	this.shape_20.setTransform(840.4,188.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AjIHVIAAgZIAhAAQA6AAAbgiQAQgWAAhVIAApdQAAhIgJgWQgHgSgWgMQgegRghAAIghAAIAAgZIGRAAIAAAZIgiAAQg5AAgbAiQgRAWAABVIAAJdQAABHAJAXQAHASAWAMQAeARAhAAIAiAAIAAAZg");
	this.shape_21.setTransform(788.3,173.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("Ai5D4QhShZAAiXQAAiiBUhaQBThcB9AAQBqAABFBHQBEBGAAB2Im1AAQgBCMBGBQQBFBRBcgBQA/ABAugjQAugiAfhTIAVAOQgOBehGBPQhGBNhpABQhxAAhRhZgAh0jyQgtAtgIBPIElAAQgEg8gLgZQgRgngigWQgjgWgkgBQg6AAgtAtg");
	this.shape_22.setTransform(639,188.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("AkMGjQg0giAAgmQAAgRAIgQQAMgaAlgtQAEgHBChEQgkgWgOgQQgQgSAAgVQAAgYAUggQAUghBHg7Qg6gcgfgyQgfg0AAg+QAAheBHhEQBHhDBuAAQBaAABDAsICGAAQAeAAAEACQAFABACAEQAFAHAAAQQAAASgEAHQgCADgFACQgFACgeAAIhTAAQAnAyAABOQAABZhEA+QhDA/hyAAQgvAAgxgNQgeAZgLAUQgLATAAAOQAAAMAMALQALALAhAFQAUACBNADQCOADAqAHQBAAJAnAmQAmAnAAA5QAABOhJBFQhsBkitAAQiGABhcg9gAjMDvQgRAfAAAaQAAAgApAZQBFArCCABQB8AAA8gsQA7gtAAgxQAAglgkgOQgkgQhqgCQibgEhUgNQggAkgRAegAhxmUQgjAoAABVQAABtAvA9QAkAuA4AAQAzAAAigoQAigoAAhUQAAhugwg/Qgjgtg2AAQg0AAgiApg");
	this.shape_23.setTransform(572.3,203.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0000").s().p("Aj0EgQgrgtAAhJQAAguAVgiQAcgvBHgqQBFgoCjg8IAAgZQAAhfgegjQgegkg5ABQgrgBgaAYQgaAYAAAeIABAoQAAAggQARQgRASgagBQgZABgQgTQgQgRAAgfQAAg8A8gyQA9gyBuAAQBTAAA2AcQAqAWATAuQAMAdAABcIAADXQABBaADAWQADATAJAIQAHAGALAAQALAAAIgEQAPgKApgpIAAAmQhNBohHAAQgiABgUgYQgUgXgBg6QhgBMgZAMQgmARgqAAQhCAAgqgtgAhFABQg2AfgYAgQgXAigBAnQABAyAdAiQAeAgAmAAQA2AABUhGIAAjwQhoApgeARg");
	this.shape_24.setTransform(507,188.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0000").s().p("AlkHVIAAgZIAjAAQA8AAAZgnQAOgWAAhQIAApdQAAhZgTgVQgbgfg1AAIgjAAIAAgZIFYAAQB9AABIAaQBJAZAyA+QAyA+gBBUQABBzhMBIQhMBHiKAAQgjAAgmgFQgngFgtgJIAAERQAABZATAVQAbAfA0AAIAjAAIAAAZgAhZmPIAAGGQAlAHAcADQAbADAUAAQBIAAA1g2QA0g4AAhZQAAg9gZg0QgZg0gugaQgtgag7AAQgiAAg3ANg");
	this.shape_25.setTransform(432.4,173.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC0000").s().p("Ah/E7QgXgHgPAAQgQAAgIASIgYAAIAAjiIAYAAQASBhA4AxQA2AxBDAAQAvAAAfgbQAegdAAgnQAAgwghghQgigghjgyQhlgxgfgoQgggnABg9QAAhOA2g0QA1g1BVAAQAkAAA2AQQAjAKAMAAQALAAAGgFQAHgEAIgRIAXAAIAADYIgXAAQgahmgpglQgqgkg+AAQgxAAgeAZQgeAaABAfQAAAnAVAcQAWAcBCAgIBkAxQCMBEABBwQgBBWhAA2QhDA0hRAAQg5AAhKgVg");
	this.shape_26.setTransform(285.2,188.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC0000").s().p("AiUHsIAAgZQAuAAAQgJQAQgJAKgUQAIgVABg7IAAj0QAAhogHgdQgEgWgLgIQgKgJgSAAQgUAAgbAKIgKgZIC+hOIAfAAIAAH9QAAA7AJAVQAIATARAKQARAJAtAAIAAAZgAgrlzQgWgVAAgdQAAgdAWgUQATgVAdAAQAdAAAVAVQAUAUAAAdQAAAdgUAVQgVAUgdAAQgcAAgUgUg");
	this.shape_27.setTransform(237.3,171.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0000").s().p("AAiHsIAAgZIAOAAQAtAAARgNQASgOAGgaQADgLgBg2IAAjgQAAhogKggQgLgggYgQQgXgRghAAQgjAAgjASQglASgzA2IAAFPQAABBAHAQQAIAQAUALQATAKAxAAIAAAZIk7AAIAAgZQAqAAAZgNQANgHAJgTQAIgUAAg7IAAo9QAAhtgEgZQgHgYgKgJQgLgJgRAAQgPAAghALIgJgZIC9hNIAgAAIAAHQQBNhVAtgXQAsgZAtAAQA2AAAnAeQAnAeASBAQANArAAB2IAADgQAAA8AKAWQAHARARAKQAQAJAsAAIAAAZg");
	this.shape_28.setTransform(181.8,171.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0000").s().p("AjJHVIAAgZIAhAAQA8AAAZgkQAPgXAAhOIAArNIhxAAQhCAAgbAKQgkANgaAmQgaAlgFBAIgaAAIALjcIL+AAIAKDcIgaAAQgIg6gNgZQgWgpgjgSQgkgUg6AAIiEAAIAALNQAABWASAWQAbAdA2AAIAhAAIAAAZg");
	this.shape_29.setTransform(103.4,173.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(303));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(219.3,466.9,1222.8,739.8);
// library properties:
lib.properties = {
	width: 1000,
	height: 750,
	fps: 24,
	color: "#D7B5B5",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bulldozer.png", id:"bulldozer"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;