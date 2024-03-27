export class Utility {
    constructor({page=undefined} ={}) {
        this._page = page
    }

    setPage(page) {
        this._page = page
        return this;
    }

    drawXRuler(scaleInterval, color) {
        const loopLength = this._page.getWidth();
        for (let loop = scaleInterval; loop <= loopLength; loop += scaleInterval) {

            this._page.drawLine({
                start: { x: loop, y: 792 },
                end: { x: loop, y: 590},
                thickness: 1,
                color: color,
                opacity: 1,
            });

            this._page.drawText(loop.toString(), {
                x: loop - 9,
                y: 580,
                size: 10,
                color: color,
            });

        }
    }

    drawYRuler(scaleInterval, color) {
        const height = this._page.getHeight();
        for (let loop = scaleInterval; loop < height; loop += scaleInterval) {
    
            this._page.drawLine({
                start: { x: 0, y: loop },
                end: { x: 20, y: loop},
                thickness: 1,
                color: color,
                opacity: 1,
            });
    
            this._page.drawText(loop.toString(), {
                x: 25,
                y: loop,
                size: 10,
                color: color,
            });
        }
    }

    build() {
        return {
          page: this._page,
          drawXRuler: this.drawXRuler.bind(this),
          drawYRuler: this.drawYRuler.bind(this)
        }
    }
}