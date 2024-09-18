export interface Repo {
    id: string;
    name: string;
    avatar?: string;
    owner: string;
    size: number;
    updatedAt: Date;
    createdAt: Date;
    description?: string;
    url: string;
    isPublic: boolean;
    language: string;
}

export const createRepoData = (item: any) => {
    const { id, name, owner } = item;
    if (id && name && owner) return item as Repo
    else return {} as Repo
}