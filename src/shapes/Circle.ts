import { Shape } from "./Shape";
import { ShapeEventsType } from "../events/ShapeEvents";

export class Circle extends Shape {
    protected type: string = "circle";

    constructor(
        private _radius: number
    ) {
        super();
        this.validatePositiveNumber(_radius, "радиус");
        this.dispatchShapeEvent(ShapeEventsType.CREATED, {
            radius: _radius
        });
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this.validatePositiveNumber(value, "радиус");
        this._radius = value;
        this.dispatchShapeEvent(ShapeEventsType.UPDATED, {radius: value});
    }

    getDiameter(): number {
        return 2 * this._radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this._radius;
    }

}