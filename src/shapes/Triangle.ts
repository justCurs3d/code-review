import { Shape } from "./Shape";
import { ShapeEventsType } from "../events/ShapeEvents";

export class Triangle extends Shape {
    protected type: string = "triangle";

    constructor(
        private _sideA: number,
        private _sideB: number,
        private _sideC: number
    ) {
        super();
        this.validatePositiveNumber(_sideA, "сторона a");
        this.validatePositiveNumber(_sideB, "сторона b");
        this.validatePositiveNumber(_sideC, "сторона c");

        if (!this.isValidTriangle()) {
            throw new Error("Указанные стороны не образуют треугольник");
        }

        this.dispatchShapeEvent(ShapeEventsType.CREATED, {
            sideA: _sideA,
            sideB: _sideB,
            sideC: _sideC
        });

    }

    private isValidTriangle(): boolean {
        return (
            this._sideA + this._sideB > this._sideC &&
            this._sideA + this._sideC > this._sideB &&
            this._sideB + this._sideC > this._sideA
        );
    }

    getParameters(): Record<string, number> {
        return {
            sideA: this._sideA,
            sideB: this._sideB,
            sideC: this._sideC
        };
    }

    getArea(): number {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this._sideA) * (p - this._sideB) * (p - this._sideC));
    }

    getPerimeter(): number {
        return this._sideA + this._sideB + this._sideC;
    }

}