import { Document } from 'mongoose';
export type AdminDocument = Admin & Document;
export declare class Admin {
    name: string;
    email: string;
    password: string;
    role: string;
}
export declare const AdminSchema: import("mongoose").Schema<Admin, import("mongoose").Model<Admin, any, any, any, Document<unknown, any, Admin> & Admin & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Admin, Document<unknown, {}, import("mongoose").FlatRecord<Admin>> & import("mongoose").FlatRecord<Admin> & {
    _id: import("mongoose").Types.ObjectId;
}>;
