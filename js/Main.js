var wid = window.innerWidth;
var hei = window.innerHeight;

var app, stage, container;
var pixiControl;

$(function() {

	initPixi();

	render();
});

function initPixi() {
	app = new PIXI.Application(640, 640 / (wid / hei), {
		backgroundColor: 0x000000,
		transparent: true
	});
	document.getElementById('pixiStage').appendChild(app.view);

	stage = app.stage;

	container = new PIXI.Container();

	stage.addChild(container);

	//摇杆
	pixiControl = new Rocker();
	container.addChild(pixiControl);
	pixiControl.init();

	pixiControl.x = app.view.width * 0.5;
	pixiControl.y = app.view.height * 0.5;

}

//==================================================================================================//

function render() {

	if(pixiControl) {
		pixiControl.update();
	}

	requestAnimationFrame(render);
}