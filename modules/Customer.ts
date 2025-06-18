
export class Customer3 {
    constructor(private _firstN: string, private _lastN: string) {}

    public getFirstName(): string {
        return this._firstN;
    }

    public setFirstName(name: string): void {
        this._firstN = name;
    }
}
