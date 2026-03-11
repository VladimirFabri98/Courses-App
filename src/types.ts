export type Author = {
    id: string;
    name: string;
};

export type AuthorDto = {
    name: string;
};

export type Course = {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
};

export type CourseDto = {
    title: string;
    description: string;
    duration: number;
    authors: string[];
};

export type User = {
    isAuth: boolean;
    name: string;
    email: string;
    token: string;
    role: string;
};

export type BackEndResponse<T = object> = {
    successful: string;
    result: T[];
};

export type BackEndResponseSingular<T = object> = {
    successful: string;
    result: T;
};
