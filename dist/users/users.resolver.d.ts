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
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserInput: CreateUserInput): Promise<(import("mongoose").Document<unknown, any, User> & {
        _id?: string;
    } & User & {
        _id: import("mongoose").Types.ObjectId;
    }) | (import("mongoose").Document<unknown, any, User> & {
        _id?: import("mongoose").Schema.Types.ObjectId;
    } & User & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, User> & (({
        _id?: string;
    } & User & {
        _id: import("mongoose").Types.ObjectId;
    }) | ({
        _id?: import("mongoose").Schema.Types.ObjectId;
    } & User & {
        _id: import("mongoose").Types.ObjectId;
    })))[]>;
    findOne(email: string): Promise<({
        _id?: string;
    } & Omit<import("mongoose")._LeanDocument<User>, "set" | "get" | "remove" | "validate" | "$assertPopulated" | "$getAllSubdocs" | "$ignore" | "$isDefault" | "$isDeleted" | "$getPopulatedDocs" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$model" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "delete" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "getChanges" | "increment" | "init" | "invalidate" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "modelName" | "overwrite" | "$parent" | "populate" | "populated" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "update" | "updateOne" | "validateSync" | "$isSingleNested"> & {
        _id: import("mongoose").Types.ObjectId;
    }) | ({
        _id?: import("mongoose").Schema.Types.ObjectId;
    } & Omit<import("mongoose")._LeanDocument<User>, "set" | "get" | "remove" | "validate" | "$assertPopulated" | "$getAllSubdocs" | "$ignore" | "$isDefault" | "$isDeleted" | "$getPopulatedDocs" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$model" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "delete" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "getChanges" | "increment" | "init" | "invalidate" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "modelName" | "overwrite" | "$parent" | "populate" | "populated" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "update" | "updateOne" | "validateSync" | "$isSingleNested"> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
}
