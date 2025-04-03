export declare enum UserRole {
    user = 0,
    admin = 1,
    vendor = 2
}
export declare class RegisterUserDTO {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
