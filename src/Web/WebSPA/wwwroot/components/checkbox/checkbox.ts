async function checkboxConstructor(el: HTMLElement, app: DrapoApplication): Promise<any> {
    //Initialize
    const checkbox: Checkbox = new Checkbox(el, app);
    await checkbox.Initalize();
    return checkbox;
}

class Checkbox {
    //Field
    private _el: HTMLElement = null;
    private _app: DrapoApplication;
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
        let checkboxLabel = this._el.getAttribute('dc-label');
        this._el.removeAttribute('dc-label');
        let elLabel: any = this._el.children[0].children[1];
        elLabel.setAttribute('d-model', checkboxLabel);

        let checkboxValue = this._el.getAttribute('dc-value');
        this._el.removeAttribute('dc-value');
        let elValue: any = this._el.children[0].children[0];
        elValue.setAttribute('d-model', checkboxValue);
    }
}