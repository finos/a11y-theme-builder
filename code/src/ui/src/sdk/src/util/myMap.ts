export class MyMap<K,V> extends Map<K,V> {

    public getKeys(): K[] {
        return Array.from(this.keys());
    }

    public getValues(): V[] {
        const values: V[] = [];
        this.forEach((value) => values.push(value));
        return values;
    }

}