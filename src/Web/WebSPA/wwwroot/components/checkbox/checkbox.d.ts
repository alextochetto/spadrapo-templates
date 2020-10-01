/// <reference types="drapo" />
declare function checkboxConstructor(el: HTMLElement, app: DrapoApplication): Promise<any>;
declare class Checkbox {
    private _el;
    private _app;
    constructor(el: HTMLElement, app: DrapoApplication);
    get Application(): DrapoApplication;
    Initalize(): Promise<void>;
}
