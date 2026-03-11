import { IShape } from "../interfaces/IShape";
import { ShapeEventsTarget } from "../events/ShapeEvents";

export abstract class Shape extends ShapeEventsTarget implements IShape {
    
    protected abstract type: string;
    
    getType(): string {
        return this.type;
    }

    getArea(): number {
        throw new Error('Метод getArea должен быть реализован в наследнике')
    }
    
    getPerimeter(): number {
        throw new Error('Метод getPerimeter должен быть реализован в наследнике')
    }

    getParameters(): Record<string, number> {
        throw new Error('Метод getParameters должен быть реализован в наследнике')
    }

    isValid(): boolean {
        return true;
    }

    protected validatePositiveNumber(value: number, name: string): void {
        if (value <= 0) {
            throw new Error(`${name} должен быть больше 0`);
        }
    }
}