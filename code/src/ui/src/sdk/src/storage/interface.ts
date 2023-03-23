/**
 * The Storage interface which defines what must be implemented in order to create
 * persistent storage for the Theme Builder.
 */
export interface Storage {
    /** Get the value associated with a key */
    get(key: string): Promise<string>;
    /** Set the value associated with a key  */
    set(key: string, value: string): Promise<void>;
    /** Delete the value associated with a key */
    delete(key: string): Promise<void>;
    /** List all of the keys stored */
    listKeys(): Promise<string[]>;
}