/* eslint-disable no-unused-vars */
export type SelectedTopic = {
    id: number;
}

export type NewBook = {
    title: string;
    author: string;
    coverUrl: string;
    numberOfCopies: number;
    description: string;
    topics: SelectedTopic[];
};

export type Topic = {
    id: number;
    name: string;
}

export interface INewBookContext {
    showedNewBookForm: boolean;
    addBook?: (book: NewBook) => Promise<any>;
    hideNewBookForm?: () => void;
    showNewBookForm?: () => void;
    existingTopics: Topic[];
}
