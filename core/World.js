export default class World {

    static TILE = 16;

    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector("canvas");
        this.context = this.canvas.getContext("2d");
        this.keyboardController = null;
        this.map = null;
    }

    init() {
        console.log("Hey!")
    }

    loop() {
        const image = new Image();
        image.onload = function () {
            this.context.drawImage(image, 0, 0);
        }.bind(this)
        image.src = this.map.lowerLayer.src;
    }

    setMap(map) {
        this.map = map;
    }
}