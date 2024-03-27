export class Utility {
    constructor({page = {}}) {
        this.page = page
    }

    set page(page) {
        this.page = page
    }

    drawXRuler(scaleInterval) {
        const loopLength = this.pdfPage.getWidth();
        for (let loop = 0; loop <= loopLength; loop += scaleInterval) {

            this.pdfPage.drawLine({
                start: { x: loop, y: 792 },
                end: { x: loop, y: 590},
                thickness: 1,
                color: rgb(.21, .24, .85),
                opacity: 1,
            });
        }
    }

    drawYRuler(scaleInterval) {
       const height = this.pdfPage.getHeight();
        for (let loop = 0; loop < height; loop += scaleInterval) {
    
            this.pdfPage.drawText(loop.toString(), {
                x: 25,
                y: loop,
                size: 10,
                color: rgb(.21, .24, .85),
            });
        }
    }
}