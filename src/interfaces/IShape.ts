
export interface IShape {
    getType(): string;
    getArea(): number;
    getPerimeter(): number;
    getParameters(): Record<string, number>;
    isValid(): boolean;
}