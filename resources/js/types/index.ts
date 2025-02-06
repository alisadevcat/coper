import { SyntheticEvent } from "react";

export type AuthData = {
    user: AuthenticatedUserData;
};

export type AuthenticatedUserData = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    email_verified_at: string | null;
};

export type RoleOption = {
    value: string;
    label: string;
    selected: boolean;
};

export type Roles = string[];

export type RolesData = {
    user_roles: Roles;
    options: RoleOption[];
};

export type PagePropsData = {
    auth: AuthData;
    roles: RolesData;
};

export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
}