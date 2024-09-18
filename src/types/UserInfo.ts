export type User = {
    avatar?: string;
    url?: string;
    score?: number;
    name: string;
    id: string;
}

export const createUserData = (item: any) => {
    const { id } = item;
    if (id) return item as User;
    else return {} as User
}