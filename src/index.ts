import { Rectangle } from './shapes/Rectangle'
import { Triangle } from './shapes/Triangle'
import { Circle } from './shapes/Circle'

export {Shape} from './shapes/Shape'
export {ShapeEventsType, ShapeEventsTarget} from './events/ShapeEvents'
export {IShape} from './interfaces/IShape'

export {Triangle} from './shapes/Triangle'
export {Rectangle} from './shapes/Rectangle'
export {Circle} from './shapes/Circle'

export class ShapeFactory {
    static async createRectangle(
        width: number,
        height: number
    ): Promise<Rectangle> {
        return new Rectangle(width, height);
    }

    static async createTriangle(
        sideA: number,
        sideB: number,
        sideC: number
    ): Promise<Triangle> {
        return new Triangle(sideA, sideB, sideC);
    }
    
    static async createCircle(radius: number): Promise<Circle> {
        return new Circle(radius);
    }
}

