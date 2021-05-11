export interface ActionItemResponse {
    id: number;
    userId: number;
    goalId: number;
    dueDate: string;
    description: string;
    isComplete: boolean;
    updatedAt: Date;
    createdAt: Date;
}