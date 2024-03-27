import { Utility } from "./functions";

export function drawRuler(page, axis, scaleInterval, color) {
    const utility = new Utility().setPage(page).build();

    if (axis == 'x') utility.drawXRuler(scaleInterval, color);
    if (axis == 'y') utility.drawYRuler(scaleInterval, color);

    return true;
}