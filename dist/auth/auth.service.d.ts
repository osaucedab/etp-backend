/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(email: string, password: string): Promise<{
        _id: string & (string | import("mongoose").Schema.Types.ObjectId) & import("mongoose").Types.ObjectId;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
    } | {
        _id: import("mongoose").Schema.Types.ObjectId & (string | import("mongoose").Schema.Types.ObjectId) & import("mongoose").Types.ObjectId;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
    }>;
    login(user: User): Promise<{
        access_token: string;
        user: User;
    }>;
}
