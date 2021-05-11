export interface UserResponse {
    id: number;
    username: string;
    passwordHash: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}