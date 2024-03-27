import { Utility } from "./functions";

export function drawRuler(page, axis, scaleInterval) {
    const utility = new Utility().page(page)

    if (axis == 'x') utility.drawXRuler(scaleInterval);
    if (axis == 'y') utility.drawYRuler(scaleInterval);

}