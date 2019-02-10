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



// stage content:
(lib.pageConstruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("", "110px 'TimesNewRomanPSMT'", "#FF0000");
	this.text.lineHeight = 124;
	this.text.parent = this;
	this.text.setTransform(351,144);

	this.text_1 = new cjs.Text("", "110px 'TimesNewRomanPSMT'", "#FF0000");
	this.text_1.lineHeight = 124;
	this.text_1.parent = this;
	this.text_1.setTransform(390,159);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiQDAQg/hFAAh0QAAh+BBhGQBAhHBhAAQBTAAA1A3QA1A2AABbIlTAAQgBBtA2A+QA2A+BHAAQAxABAkgbQAkgbAXhAIARAKQgLBKg2A9Qg2A8hSAAQhYAAg/hFgAhZi7QgkAjgGA9IDjAAQgDgvgJgUQgNgegagRQgbgRgcAAQgsAAgjAjg");
	this.shape.setTransform(260.2,247.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAbF+IAAgUIALAAQAiABANgLQAOgLAFgTQACgJAAgqIAAiuQAAhRgIgYQgJgagSgLQgSgNgagBQgbABgbAOQgcANgoAqIAAEEQAAAyAGANQAFAMAPAIQAQAJAlgBIAAAUIjzAAIAAgUQAgABATgLQALgFAHgPQAFgPAAguIAAm9QABhUgEgTQgEgTgJgIQgIgHgOAAQgLAAgZAJIgIgTICTg8IAZAAIAAFoQA7hCAkgSQAhgSAjgBQAqAAAeAYQAeAWAPAyQAKAiAABbIAACuQAAAvAHAQQAGANANAIQANAHAiAAIAAAUg");
	this.shape_1.setTransform(207.8,234.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AicFsIAAgUIAaAAQAuAAATgcQAMgRAAg9IAAorIhXAAQgzAAgWAHQgcAKgUAdQgTAdgEAyIgVAAIAJirIJRAAIAICrIgUAAQgGgtgKgUQgRgfgbgOQgcgPgtAAIhmAAIAAIrQAABDAOARQAUAWAqAAIAaAAIAAAUg");
	this.shape_2.setTransform(147,236.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiQDAQg/hFAAh0QAAh+BBhGQBBhHBgAAQBSAAA2A3QA1A2AABbIlTAAQgBBtA3A+QA1A+BIAAQAwABAkgbQAjgbAZhAIAQAKQgLBKg3A9Qg2A8hSAAQhXAAg/hFgAhZi7QgkAjgGA9IDjAAQgDgvgJgUQgNgegagRQgbgRgcAAQgsAAgjAjg");
	this.shape_3.setTransform(514.9,247.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AjQFFQgogbAAgcQABgNAFgNQAKgVAcgjIA3g6QgdgQgKgNQgMgOgBgQQAAgTAQgZQAPgZA4guQgugWgYgnQgYgoAAgwQAAhIA4g2QA2g0BWAAQBFAAA0AiIBoAAQAXAAAEACQAEABACADQACAFAAANQABANgDAGQgBADgFABQgDACgYAAIhAAAQAeAmABA9QAABFg1AwQg1AxhYAAQgkAAgmgKQgYATgIAPQgJAQAAAKQABAJAIAJQAJAIAaAEQAPADA8ABQBuACAgAFQAzAHAdAfQAeAeAAAsQAAA9g5A0QhUBPiFAAQhoAAhIgvgAieC5QgNAYAAAUQAAAaAfATQA2AhBkAAQBhABAugjQAugiAAgnQAAgcgcgLQgcgMhSgCQh4gEhBgIQgZAbgNAXgAhXk5QgbAfAABCQAABVAkAuQAcAkArgBQAoABAagfQAbgegBhCQABhWglgwQgcgjgqAAQgoAAgaAgg");
	this.shape_4.setTransform(463.2,259.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ai9DgQgigjAAg5QABgkAQgbQAWgkA3ggQA2ggB+guIAAgTQAAhKgYgbQgXgbgrAAQgjAAgTASQgVASAAAYIACAfQAAAZgNANQgNANgUAAQgUAAgNgOQgMgOAAgYQAAguAvgnQAvgmBWAAQBAAAAqAWQAfAQAQAkQAJAXABBHIAACmQgBBHADAQQACAQAHAFQAGAFAIAAQAIAAAHgEQAMgGAfghIAAAeQg7BRg4AAQgaAAgPgSQgQgTAAgsQhLA7gUAJQgdANggAAQgzAAghgigAg1ABQgrAXgSAaQgSAaAAAeQAAAnAXAaQAXAZAeAAQApAABCg2IAAi6QhQAggYANg");
	this.shape_5.setTransform(412.5,247.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AkUFsIAAgUIAbAAQAuAAAUgeQALgQAAg/IAAnVQAAhFgPgRQgVgXgpAAIgbAAIAAgUIEKAAQBhAAA5AUQA4AUAnAwQAmAwAABBQAABag6A3Qg7A3hsAAQgaAAgegEQgegDgjgIIAADUQAABFAPARQAUAXApAAIAcAAIAAAUgAhFk1IAAEvIAyAHQAVACAQAAQA4AAApgqQAogrAAhFQAAgvgTgoQgUgpgjgUQgkgVgtAAQgaAAgrALg");
	this.shape_6.setTransform(354.6,236.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhiD1QgTgGgLAAQgMAAgHAOIgSAAIAAivIASAAQAPBLArAmQAqAmAzAAQAlAAAYgVQAYgWAAgfQAAglgagZQgagahOgmQhNgmgYgfQgZgfAAguQAAg9AqgpQApgpBDAAQAcAAApANQAbAIAKAAQAIAAAFgEQAEgEAHgNIASAAIAACoIgSAAQgVhPgfgdQgggcgxAAQglAAgXAUQgYAUAAAYQAAAeASAVQARAWAzAZIBNAmQBtA0AABXQAABEgyApQgzAphAAAQgrAAg6gQg");
	this.shape_7.setTransform(642.8,247.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AibFsIAAgUIAaAAQAtAAAUgaQANgRAAhCIAAnVQAAg3gHgSQgFgOgRgJQgXgNgaAAIgaAAIAAgUIE3AAIAAAUIgaAAQgtAAgVAaQgNARAABCIAAHVQAAA4AHARQAFAOASAJQAXANAaAAIAaAAIAAAUg");
	this.shape_8.setTransform(602.4,236.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AjRErIAAgXQAsAAAWgOQAQgKAGgWQADgLAAgzIAAjgQAAhlgEgTQgEgUgLgJQgLgJgRAAQgTAAgZAKIgGgXICvhHIAbAAIAACCQBIiCBNAAQAjAAAXAVQAWAVAAAcQAAAZgQARQgRARgWAAQgXAAgbgVQgcgXgNAAQgMAAgNANQgdAagdA8IAAEVQAAAxAMAYQAHASAVALQAVALAoAAIAAAXg");
	this.shape_9.setTransform(536.1,392.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AiqDjQhLhSAAiKQAAiUBNhTQBMhTBzgBQBhAABABBQA+BAAABsImRAAQAACAA/BKQA/BKBWAAQA5AAAqgfQAqggAchMIAUAMQgNBXhABIQhBBHhgABQhoAAhKhSgAhqjdQgpAogIBJIENAAQgDg3gLgYQgPgjgggVQgggTghgBQg1ABgpApg");
	this.shape_10.setTransform(485.4,393.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("ABoHMIAAhTQgrAsgpAUQgoATguAAQhgAAhHhPQhHhQAAh9QAAh9BPhnQBOhoB8AAQBMAAAzAxIAAhrQAAhkgFgXQgFgXgLgIQgJgIgPAAQgSAAgaAKIgJgWICthHIAdAAIAAKfQAABmAFAXQAFAWAKAJQAKAJAOAAQARAAAdgLIAHAWIisBIgAiChCQg5BCgBB+QABCAA3BEQA4BEBEAAQA5AAA3g6IAAkrQgFgqgTgkQgSgjgggSQgegTgeAAQg4AAgsAzg");
	this.shape_11.setTransform(425.8,377.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAfErIAAgXIAMAAQApAAAQgMQAQgMAGgYQADgKgBgyIAAjtQAAhQgTgjQgWgkgxAAQhKAAhLBSIAAEyQAAA7AHAOQAJASAQAJQAPAIAvAAIAAAXIkfAAIAAgXIANAAQAsAAAQgWQAQgXAAg/IAAjXQgBhpgEgXQgFgWgJgJQgLgIgQAAQgSAAgZAKIgKgXICwhHIAbAAIAAB7QBnh7BbAAQAvAAAjAYQAiAXAUA3QAOAmABBPIAAD3QgBA3AKAUQAGAQAQAJQAQAIAqAAIAAAXg");
	this.shape_12.setTransform(358.6,392.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AjRGIQhJgygehSQgVg4AAicIAAlQQAAhPgWgYQgWgagxAAIggAAIAAgXIF0AAIAAAXIghAAQg1AAgXAjQgQAWAABIIAAF2QAAAzAJBBQAKBAAYAkQAYAlAuAXQAsAYBCgBQBUAABDgkQBCglAZg5QAYg6AAiJIAAlcQAAhQgSgVQgZgcgxAAIggAAIAAgXIExAAIAAAXIghAAQgzABgbArQgNATAABIIAAFcQAACBgZBIQgaBHhLA0QhMAyiBAAQiMABhJgxg");
	this.shape_13.setTransform(278.7,380.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgqFrQgRgSAAgYQAAgZARgRQASgSAYAAQAYAAASASQARARAAAZQAAAYgRASQgSARgYAAQgYAAgSgRgAgJCsIgwmyQgDgdAAgOQAAghASgVQASgUAYAAQAaAAARAUQASAVAAAoQAAANgDAXIgwGyg");
	this.shape_14.setTransform(692.9,515.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgqFrQgRgSAAgYQAAgZARgRQASgSAYAAQAYAAASASQARARAAAZQAAAYgRASQgSARgYAAQgYAAgSgRgAgJCsIgwmyQgDgdAAgOQAAghASgVQASgUAYAAQAaAAARAUQASAVAAAoQAAANgDAXIgwGyg");
	this.shape_15.setTransform(656.3,515.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgqFrQgRgSAAgYQAAgZARgRQASgSAYAAQAYAAASASQARARAAAZQAAAYgRASQgSARgYAAQgYAAgSgRgAgJCsIgwmyQgDgdAAgOQAAghASgVQASgUAYAAQAaAAARAUQASAVAAAoQAAANgDAXIgwGyg");
	this.shape_16.setTransform(619.6,515.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAaD9IAAgTIAKAAQAjAAAOgKQANgLAFgUQADgIAAgrIAAjIQAAhDgSgfQgRgegqAAQg/AAg/BGIAAECQAAAyAGAMQAHAPAOAIQANAHAoAAIAAATIjzAAIAAgTIAKAAQAmAAAOgTQAMgTAAg2IAAi2QAAhYgDgUQgFgTgIgHQgIgHgOAAQgPAAgVAIIgIgTICUg8IAXAAIAABoQBXhoBNAAQAoAAAdAUQAdAUARAuQAMAgAABDIAADRQAAAvAIAQQAGAOANAHQANAIAjAAIAAATg");
	this.shape_17.setTransform(573.9,526.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ai1CsQg3hKgBhdQAAhDAjhDQAghDA4ggQA3ggA7AAQBwAABEBVQA5BJABBeQAABBghBDQgfBEg3AiQg4AjhDAAQhwAAhBhZgAhIjQQgdARgSAqQgSArAABCQABBrArBOQAqBOBEAAQA1AAAigrQAhgrABhpQAAiCg5hLQgmg0g6AAQgcAAgdARg");
	this.shape_18.setTransform(518.8,527.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AhzF+IAAgUQAkAAAMgGQANgIAHgQQAIgQgBgtIAAi+QAAhQgEgWQgEgSgIgGQgJgHgNAAQgPAAgWAIIgIgTICUg9IAXAAIAAGLQAAAuAIAPQAGAQANAHQAOAIAigBIAAAUgAghkgQgRgQAAgWQAAgXARgPQAPgRAWAAQAWAAAQARQARAPgBAXQABAWgRAQQgQARgWAAQgWAAgPgRg");
	this.shape_19.setTransform(476.3,514.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgXE9QgYgOgLgZQgLgaAAg1IAAlKIhOAAIAAgRQAegMAfgcQAegdAYgmQANgVAVg2IAQAAIAACiIBzAAIAAAlIhzAAIAAE+QAAAwAOARQAOARAVAAQASAAARgLQAQgMAKgVIAUAAQgSA1gjAaQgiAbglAAQgYAAgXgOg");
	this.shape_20.setTransform(446.1,520);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AiQC+Qg+hGAAh4QAAhzBFhIQBFhJBgAAQBIAAAvAnQAvAmAAApQAAAVgNANQgOAMgXAAQggAAgQgUQgJgMgDgfQgDgggTgRQgTgQghAAQg1AAghAoQgrA1AABWQAABXArBEQArBDBJAAQA1AAApgkQAegZAchBIAPAIQgTBhg6A1Qg6A0hHAAQhTAAg+hHg");
	this.shape_21.setTransform(405.9,527.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("ABmD+IAAhpQg/BFghASQghASglAAQgpgBgegXQgfgYgMgmQgLgmAAhEIAAjbQAAgjgIgNQgHgNgPgIQgPgHgnABIAAgVICtAAIAAFJQAABFAYAVQAYAVAhAAQAWAAAegOQAdgOAogpIAAkWQAAgqgPgPQgPgPgxAAIAAgVICoAAIAAEqQAABVAEATQAEATAJAHQAJAIAMAAQAQAAAVgJIAIATIiUA9g");
	this.shape_22.setTransform(353.9,528.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AixD9IAAgTQAmAAASgMQANgIAGgTQACgJAAgrIAAi+QAAhWgDgQQgEgRgJgHQgJgIgOAAQgRAAgVAIIgFgTICVg8IAWAAIAABuQA9huBBAAQAdAAAUASQATASAAAXQAAAVgOAPQgOAOgTAAQgTAAgXgSQgYgTgLAAQgKAAgLALQgYAWgZAzIAADqQAAApAKAVQAGAPASAJQASAKAhAAIAAATg");
	this.shape_23.setTransform(308.8,526.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgXE9QgYgOgLgZQgLgaAAg1IAAlKIhOAAIAAgRQAegMAfgcQAegdAYgmQANgVAVg2IAQAAIAACiIBzAAIAAAlIhzAAIAAE+QAAAwAOARQAOARAVAAQASAAARgLQAQgMAKgVIAUAAQgSA1gjAaQgiAbglAAQgYAAgXgOg");
	this.shape_24.setTransform(275.1,520);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AhjD1QgRgGgLAAQgNAAgHAOIgRAAIAAivIARAAQAPBLAqAmQArAmA0AAQAlAAAXgVQAYgWAAgfQAAglgagZQgbgahNgmQhNgmgZgfQgYgfAAguQAAg9AqgpQAqgpBBAAQAcAAAqANQAbAIAKAAQAIAAAFgEQAFgEAGgNIASAAIAACoIgSAAQgUhPgggdQgggcgwAAQgmAAgYAUQgXAUAAAYQABAeARAVQAQAWA0AZIBNAmQBtA0AABXQAABEgzApQgzApg/AAQgsAAg6gQg");
	this.shape_25.setTransform(238.6,527.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AAaD9IAAgTIAKAAQAjAAAOgKQANgLAFgUQADgIAAgrIAAjIQAAhDgSgfQgRgegqAAQg/AAg/BGIAAECQAAAyAGAMQAHAPAOAIQANAHAoAAIAAATIjzAAIAAgTIAKAAQAmAAAOgTQAMgTAAg2IAAi2QAAhYgDgUQgFgTgIgHQgIgHgOAAQgPAAgVAIIgIgTICUg8IAXAAIAABoQBXhoBNAAQAoAAAdAUQAdAUARAuQAMAgAABDIAADRQAAAvAIAQQAGAOANAHQANAIAjAAIAAATg");
	this.shape_26.setTransform(189,526.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("Ai1CsQg4hKAAhdQABhDAhhDQAihDA3ggQA2ggA9AAQBvAABEBVQA5BJAABeQAABBgfBDQggBEg3AiQg4AjhEAAQhuAAhChZgAhIjQQgdARgSAqQgRArgBBCQAABrArBOQArBOBFAAQA0AAAhgrQAjgrgBhpQAAiCg4hLQgmg0g6AAQgdAAgcARg");
	this.shape_27.setTransform(133.9,527.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("Aj8D3QhLhkAAiIQAAhsAxhbQAxhbBWgyQBWgzBkAAQBPAABMAnQAXAMAKAAQAOAAALgKQAOgPAGgaIATAAIARD4IgRAAQghhvg/gxQg9gxhWAAQhIAAg7AlQg6AlgiBQQgiBRAAB2QAABjAhBJQAfBIBAAnQBAAnBQAAQBHAAA2geQA3gfBBhaIAQAKQg3BihJAtQhJAthlAAQizAAhjiGg");
	this.shape_28.setTransform(69.8,515.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(15,1,1).p("ACCAAIkDAA");
	this.shape_29.setTransform(721,737.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(15,1,1).p("AiJAAIkEAAAGOAAIkEAA");
	this.shape_30.setTransform(694.3,737.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(15,1,1).p("ACKAAIkEAAAKhAAIkEAAAmcAAIkEAA");
	this.shape_31.setTransform(666.8,737.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(15,1,1).p("AGYAAIkEAAAOvAAIkEAAAiOAAIkEAAAqqAAIkEAA");
	this.shape_32.setTransform(639.8,737.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(15,1,1).p("AK6AAIkEAAATRAAIkEAAAvMAAIkEAAACUAAIkEAAAmIAAIkEAA");
	this.shape_33.setTransform(610.8,737.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(15,1,1).p("AO5AAIkEAAAXQAAIkEAAAzLAAIkEAAArNAAIkEAAAGTAAIkEAAAiJAAIkEAA");
	this.shape_34.setTransform(585.3,737.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(15,1,1).p("ATJAAIkEAAAbgAAIkEAAAu6AAIkEAAA3bAAIkEAAAm8AAIkEAAAKjAAIkEAAACHAAIkDAA");
	this.shape_35.setTransform(558,737.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(15,1,1).p("AXwAAIkEAAEAgHAAAIkEAAAqTAAIkEAAAy0AAIkEAAAiVAAIkEAAAPKAAIkEAAAGuAAIkEAAA8CAAIkEAA");
	this.shape_36.setTransform(528.5,737.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(15,1,1).p("AcFAAIkEAAEAkcAAAIkEAAEggXAAAIkEAAAl+AAIkEAAAufAAIkEAAAB/AAIkDAAATfAAIkEAAALDAAIkEAAA3tAAIkEAA");
	this.shape_37.setTransform(500.8,737.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(15,1,1).p("EAgiAAAIkEAAEAo5AAAIkEAAEgk0AAAIkEAAA76AAIkEAAAhhAAIkEAAAqCAAIkEAAAGcAAIkEAAAX8AAIkEAAAPgAAIkEAAAzQAAIkEAA");
	this.shape_38.setTransform(472.3,737.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(15,1,1).p("EAk1AAAIkEAAEAtMAAAIkEAAEgghAAAIkEAAA3nAAIkEAAEgpHAAAIkEAAACxAAIkDAAAlvAAIkEAAAKvAAIkEAAAcPAAIkEAAATzAAIkEAAAu9AAIkEAA");
	this.shape_39.setTransform(444.8,737.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(15,1,1).p("EApDAAAIkEAAEAxaAAAIkEAAEgtVAAAIkEAAA8TAAIkEAAAzZAAIkEAAEgk5AAAIkEAAAG/AAIkEAAAhhAAIkEAAAO9AAIkEAAEAgdAAAIkEAAAYBAAIkEAAAqvAAIkEAA");
	this.shape_40.setTransform(417.8,737.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(15,1,1).p("EAtHAAAIkEAAEA1eAAAIkEAAEgxZAAAIkEAAEgpRAAAIkEAAA4PAAIkEAAAvVAAIkEAAEgg1AAAIkEAAALDAAIkEAAACiAAIkDAAATBAAIkEAAEAkhAAAIkEAAAcFAAIkEAAAmrAAIkEAA");
	this.shape_41.setTransform(391.8,737.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(15,1,1).p("EAviADSIkEAAEA35ADSIkEAAEgu+ADSIkEAAEg34gDRIAAFcEgm2ADSIkEAAA10DSIkEAAAs6DSIkEAAA+aDSIkEAAANeDSIkEAAAE9DSIkEAAAVcDSIkEAAEAm8ADSIkEAAAegDSIkEAAAkQDSIkEAA");
	this.shape_42.setTransform(376.3,716.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(15,1,1).p("EAviAIcIkEAAEA35AIcIkEAAEg34gIbIAAFdEgu+AIcIkEAAEg34AB4IAAFdEgm2AIcIkEAAA10IcIkEAAAs6IcIkEAAA+aIcIkEAAANeIcIkEAAAE9IcIkEAAAVcIcIkEAAEAm8AIcIkEAAAegIcIkEAAAkQIcIkEAA");
	this.shape_43.setTransform(376.3,683.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(15,1,1).p("EAviANmIkEAAEA35ANmIkEAAEg34gDRIAAFcEgu+ANmIkEAAEg34AHCIAAFdEgm2ANmIkEAAA10NmIkEAAAs6NmIkEAAEg34gNlIAAFdA+aNmIkEAAANeNmIkEAAAE9NmIkEAAAVcNmIkEAAEAm8ANmIkEAAAegNmIkEAAAkQNmIkEAA");
	this.shape_44.setTransform(376.3,650.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(15,1,1).p("EAviASwIkEAAEA35ASwIkEAAEg34gSvIAAFdEg34AB4IAAFdEgu+ASwIkEAAEg34AMMIAAFdEgm2ASwIkEAAA10SwIkEAAAs6SwIkEAAEg34gIbIAAFdA+aSwIkEAAANeSwIkEAAAE9SwIkEAAAVcSwIkEAAEAm8ASwIkEAAAegSwIkEAAAkQSwIkEAA");
	this.shape_45.setTransform(376.3,617.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0000").ss(15,1,1).p("EAviAYTIkEAAEA35AYTIkEAAEg34gYSIAAFdEg34gNMIAAFdEg34AHbIAAFdEgu+AYTIkEAAEg34ARuIAAFdEgm2AYTIkEAAA10YTIkEAAAs6YTIkEAAEg34gC4IAAFcA+aYTIkEAAANeYTIkEAAAE9YTIkEAAAVcYTIkEAAEAm8AYTIkEAAAegYTIkEAAAkQYTIkEAA");
	this.shape_46.setTransform(376.3,582.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF0000").ss(15,1,1).p("EAviAdnIkEAAEA35AdnIkEAAEg34gdmIAAFdEg34gS+IAAFdEg34gH4IAAFdEg34AMvIAAFdEgu+AdnIkEAAEg34AXCIAAFdEgm2AdnIkEAAA10dnIkEAAAs6dnIkEAAEg34ACbIAAFdA+adnIkEAAANednIkEAAAE9dnIkEAAAVcdnIkEAAEAm8AdnIkEAAAegdnIkEAAAkQdnIkEAA");
	this.shape_47.setTransform(376.3,548.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(15,1,1).p("EAviAi2IkEAAEA35Ai2IkEAAEg34gYXIAAFdEg34gi1IAAFdEg34gNvIAAFdEg34gCpIAAFcEg34AR+IAAFdEgu+Ai2IkEAAEg34AcRIAAFdEgm2Ai2IkEAAEgV0Ai2IkEAAEgM6Ai2IkEAAEg34AHqIAAFdEgeaAi2IkEAAEANeAi2IkEAAEAE9Ai2IkEAAEAVcAi2IkEAAEAm8Ai2IkEAAEAegAi2IkEAAEgEQAi2IkEAA");
	this.shape_48.setTransform(376.3,514.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(15,1,1).p("EAviAn7IkEAAEA35An7IkEAAEg34gn6IAAFdEg34gTSIAAFdEg34gdwIAAFdEg34gIqIAAFdEg34ACbIAAFdEg34AXDIAAFdEgu+An7IkEAAEg34AhWIAAFdEgm2An7IkEAAEgV0An7IkEAAEgM6An7IkEAAEg34AMvIAAFdEgeaAn7IkEAAEANeAn7IkEAAEAE9An7IkEAAEAVcAn7IkEAAEAm8An7IkEAAEAegAn7IkEAAEgEQAn7IkEAA");
	this.shape_49.setTransform(376.3,482.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(15,1,1).p("EAviAsxIkEAAEA35AsxIkEAAEg34gjEIAAFdEg34gOcIAAFdEg34gY6IAAFdEg34gswIAAFdEg34gD0IAAFcEg34AHRIAAFdEg34Ab5IAAFdEgu+AsxIkEAAEg34AmMIAAFdEgm2AsxIkEAAEgV0AsxIkEAAEgM6AsxIkEAAEg34ARlIAAFdEgeaAsxIkEAAEANeAsxIkEAAEAE9AsxIkEAAEAVcAsxIkEAAEAm8AsxIkEAAEAegAsxIkEAAEgEQAsxIkEAA");
	this.shape_50.setTransform(376.3,451.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF0000").ss(15,1,1).p("EAviAxiIkEAAEA35AxiIkEAAEg34gxhIAAFdEg34geTIAAFdEg34gJrIAAFdEg34gUJIAAFdEg34gn/IAAFdEg34AA8IAAFdEg34AMCIAAFdEg34AgqIAAFdEgu+AxiIkEAAEg34Aq9IAAFdEgm2AxiIkEAAEgV0AxiIkEAAEgM6AxiIkEAAEg34AWWIAAFdEgeaAxiIkEAAEANeAxiIkEAAEAE9AxiIkEAAEAVcAxiIkEAAEAm8AxiIkEAAEAegAxiIkEAAEgEQAxiIkEAA");
	this.shape_51.setTransform(376.3,420.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA21IkEAAEA35A21IkEAAEg34g20IAAFdEg34gsNIAAFdEg34gY/IAAFdEg34gEXIAAFcEg34gO1IAAFdEg34girIAAFdEg34AGQIAAFdEg34ARVIAAFdEg34Al9IAAFdEgu+A21IkEAAEg34AwRIAAFdEgm2A21IkEAAEgV0A21IkEAAEgM6A21IkEAAEg34AbpIAAFdEgeaA21IkEAAEANeA21IkEAAEAE9A21IkEAAEAVcA21IkEAAEAm8A21IkEAAEAegA21IkEAAEgEQA21IkEAA");
	this.shape_52.setTransform(376.3,387);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAA");
	this.shape_53.setTransform(376.3,376.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAA");
	this.shape_54.setTransform(376.3,376.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAA");
	this.shape_55.setTransform(376.3,376.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAA");
	this.shape_56.setTransform(376.3,376.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAA");
	this.shape_57.setTransform(376.3,376.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg34g1NIAAFdEg17g4cIFdAAEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEg34ghEIAAFdEgieg4cIFdAAEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEgeaA4dIkEAAEg34AdRIAAFdEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAA");
	this.shape_58.setTransform(376.3,376.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAA");
	this.shape_59.setTransform(376.3,376.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAA");
	this.shape_60.setTransform(376.3,376.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAA");
	this.shape_61.setTransform(376.3,376.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF0000").ss(15,1,1).p("EAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg34g1NIAAFdEg17g4cIFdAAEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEg34ghEIAAFdEgieg4cIFdAAEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEgeaA4dIkEAAEg34AdRIAAFdEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_62.setTransform(376.3,376.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF0000").ss(15,1,1).p("EAycg4cIFdAAEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_63.setTransform(376.3,376.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEAycg4cIFdAAEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_64.setTransform(376.3,376.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_65.setTransform(376.3,376.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEA35ghEIAAFdEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_66.setTransform(376.3,376.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEA35gXYIAAFdEA35ghEIAAFdEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_67.setTransform(376.3,376.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEA35gXYIAAFdEA35gNOIAAFdEA35ghEIAAFdEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_68.setTransform(376.3,376.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEA35gXYIAAFdEA35gCwIAAFcEA35gNOIAAFdEA35ghEIAAFdEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_69.setTransform(376.3,376.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEA35gXYIAAFdEA35gCwIAAFcEA35gNOIAAFdEA35ghEIAAFdEA35AH3IAAFdEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_70.setTransform(376.3,376.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEA35gXYIAAFdEA35gCwIAAFcEA35gNOIAAFdEA35ghEIAAFdEA35AH3IAAFdEA35AR3IAAFcEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_71.setTransform(376.3,376.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEA35gXYIAAFdEA35gCwIAAFcEA35gNOIAAFdEA35ghEIAAFdEA35AH3IAAFdEA35AcLIAAFdEA35AR3IAAFcEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_72.setTransform(376.3,376.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEA35gXYIAAFdEA35gCwIAAFcEA35gNOIAAFdEA35ghEIAAFdEA35AH3IAAFdEA35AcLIAAFdEA35AR3IAAFcEA35AlZIAAFdEAviA4dIkEAAEA35A4dIkEAAEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_73.setTransform(376.3,376.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF0000").ss(15,1,1).p("EA35g0lIAAFdEA35gqmIAAFdEAycg4cIFdAAEA35gXYIAAFdEA35gCwIAAFcEA35gNOIAAFdEA35ghEIAAFdEA35AH3IAAFdEA35AcLIAAFdEA35AR3IAAFcEA35AlZIAAFdEAviA4dIkEAAEA35A4dIkEAAEA35AvFIAAFdEAegg4cIFdAAEATWg4cIFdAAEAIug4cIFdAAEgCrg4cIFcAAEgNxg4cIFdAAEgYZg4cIFdAAEgsTg4cIFdAAEg17g4cIFdAAEg34g1NIAAFdEg34gqmIAAFdEg34gXYIAAFdEg34gCwIAAFcEg34gNOIAAFdEgieg4cIFdAAEg34ghEIAAFdEg34AH3IAAFdEg34AS9IAAFcEg34AnlIAAFdEgu+A4dIkEAAEg34Ax4IAAFdEgm2A4dIkEAAEgV0A4dIkEAAEgM6A4dIkEAAEg34AdRIAAFdEgeaA4dIkEAAEANeA4dIkEAAEAE9A4dIkEAAEAVcA4dIkEAAEAm8A4dIkEAAEAegA4dIkEAAEgEQA4dIkEAAEAo6g4cIFdAA");
	this.shape_74.setTransform(376.3,376.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text,p:{x:351,y:144,color:"#FF0000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}}]},10).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},12).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7}]},13).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},12).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"130px 'TimesNewRomanPSMT'",lineHeight:145.95}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},12).to({state:[{t:this.shape_29},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},10).to({state:[{t:this.shape_30},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_31},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_32},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_33},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_34},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_35},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_36},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_37},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_38},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_39},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_40},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_41},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_42},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},7).to({state:[{t:this.shape_43},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_44},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_45},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_46},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_47},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_48},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_49},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_50},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_51},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_52},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_53},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_54},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_55},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_56},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_57},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_58},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_59},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_60},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_61},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_62},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_62},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_63},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_64},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_65},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_66},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_67},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_68},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},6).to({state:[{t:this.shape_69},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},6).to({state:[{t:this.shape_70},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},6).to({state:[{t:this.shape_71},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},6).to({state:[{t:this.shape_72},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_73},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_74},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:390,y:159,color:"#000000",font:"110px 'TimesNewRomanPSMT'",lineHeight:123.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 750,
	height: 750,
	fps: 24,
	color: "#D7B5B5",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;