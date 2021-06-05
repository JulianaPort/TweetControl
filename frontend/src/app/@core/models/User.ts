import { tokenReference } from "@angular/compiler";

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: {
    accessToken: string;
    expiresIn: string;
    refreshToken: string;
    tokenType: string;
  };

  constructor(id: number, username: string, password: string, firstName: string, lastName: string, token: {
    accessToken: string;
    expiresIn: string;
    refreshToken: string;
    tokenType: string;
  }) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.token = {
      accessToken: token.accessToken,
      expiresIn: token.accessToken,
      refreshToken:  token.accessToken,
      tokenType: token.accessToken
    };
  }
}

