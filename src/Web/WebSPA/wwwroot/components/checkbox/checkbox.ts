async function checkboxConstructor(el: HTMLElement, app: any): Promise<any> {
    //Initialize
    const checkbox: Checkbox = new Checkbox(el, app);
    await checkbox.Initalize();
    return checkbox;
}

class Checkbox {
    //Field
    private _el: HTMLElement = null;
    private _app: any;
    //Properties
    //Constructors
    constructor(el: HTMLElement, app: any) {
        this._el = el;
        this._app = app;
    }

    public async Initalize(): Promise<void> {
        
    }
}