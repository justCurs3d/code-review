
export enum ShapeEventsType {
    
    CREATED = 'created',
    UPDATED = 'updated',
    VALIDATED = 'validated',
    ERROR = 'error'

}

export interface ShapeEvents extends Event {
    type: ShapeEventsType;
    shapeid?: string;
    data?: any;
    error?: Error;
}

export class ShapeEventsTarget extends EventTarget {
    
    protected id:string = this.generateId();

    private generateId(): string {
        return `shape_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    }

    getId(): string {
        return this.id;
    }

    protected dispatchShapeEvent(type: ShapeEventsType, data?: any): void {
        const event = new CustomEvent (type, {
            detail: {
                shapeid: this.id,
                data,
                timestamp: Date.now(),
            } 
        });
        this.dispatchEvent(event);
    }

    protected async handleAsync<T>(operation: () => Promise<T>): Promise<T> {
        try {
            const result = await operation();
            this.dispatchShapeEvent(ShapeEventsType.UPDATED, result);
            return result;
        } catch (error) {
            this.dispatchShapeEvent(ShapeEventsType.ERROR, error);
            throw error;
        }
    }

}