interface Tag {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

interface Discussion {
    _id: string;
    title: string;
    content: string;
    tags: Tag[];
    __v: number;
}

interface DiscussionsResponse {
    success: boolean;
    data: Discussion[];
}
