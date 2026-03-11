import { Shape } from "./Shape";
import { ShapeEventsType } from "../events/ShapeEvents";

export class Rectangle extends Shape {

    protected type: string = "rectangle";

    constructor(
        private _width: number,
        private _height: number
    ) {
        super();
        this.validatePositiveNumber(_width, "ширина");
        this.validatePositiveNumber(_height, "высота");
        this.dispatchShapeEvent(ShapeEventsType.CREATED, {
            width: _width,
            height: _height
        });
    }
    
    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    getParameters(): Record<string, number> {
        return {
            width: this._width,
            height: this._height
        };
    }

    set width(value: number) {
        this.validatePositiveNumber(value, "ширина");
        this._width = value;
        this.dispatchShapeEvent(ShapeEventsType.UPDATED, {
            width: value
        });
    }

    set height(value: number) {
        this.validatePositiveNumber(value, "высота");
        this._height = value;
        this.dispatchShapeEvent(ShapeEventsType.UPDATED, {
            height: value
        });
    }
    
    getArea(): number {
        return this._width * this._height;
    }

    getPerimeter(): number {
        return 2 * (this._width + this._height);
    }
    
}