export interface IProject {
    id: string;
    title: string;
    tags: string[];
    excerpt: string;
    coverImage: {
        url: string;
    };
}

export interface ILongProject extends IProject {
    content: {
        html: string;
    };
    typeOfProject: string;
    typeOfApplication: string;
    dates: string;
}

export interface Iresponse {}

export interface IShortProjectsApiResponse extends Iresponse {
    data: {
        posts: IProject[];
    };
}

export interface ILongProjectsApiResponse extends Iresponse {
    data: {
        posts: ILongProject;
    };
}

export type query = string;
