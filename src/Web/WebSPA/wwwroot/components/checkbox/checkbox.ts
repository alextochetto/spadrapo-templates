async function checkboxConstructor(el: HTMLElement, app: DrapoApplication): Promise<any> {
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
    constructor(el: HTMLElement, app: DrapoApplication) {
        this._el = el;
        this._app = app;
    }

    get Application(): DrapoApplication {
        return this._app;
    }

    public async Initalize(): Promise<void> {
        
    }
}