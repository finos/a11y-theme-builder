import { Storage } from "./interface";

/**
 * The memory storage implementation.
 * @category Utilities
 */
export class MemStorage implements Storage {

    private readonly mem: {[key: string]: string} = {};

    public async get(key: string): Promise<string> {
        return this.mem[key];
    }

    public async set(key: string, value: string) {
        this.mem[key] = value;;
    }

    public async delete(key: string) {
        delete this.mem[key];
    }

    public async listKeys(): Promise<string[]> {
        return Object.keys(this.mem);
    }

}