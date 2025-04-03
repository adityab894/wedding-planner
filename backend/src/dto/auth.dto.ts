import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";

export enum UserRole {
  user,
  admin,
  vendor
}



export class RegisterUserDTO {
  @IsNotEmpty({ message: "Name is required" })
  name: string;

  @IsNotEmpty({message: "Email is required" })
  @IsEmail()
  email: string;

  @IsNotEmpty({message: "Password is required" })
  password: string;


  @IsNotEmpty({message: "Role is required" })
  @IsEnum(UserRole)
  role: UserRole;
}