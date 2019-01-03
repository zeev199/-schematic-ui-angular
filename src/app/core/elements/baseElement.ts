import { OnInit, Input } from "@angular/core";

export abstract class BaseElement<T> implements OnInit {
    abstract render(): void;
    abstract getName(): string;
    abstract initConfig(config: T): void;
    //config
    private _config: T;
    @Input('config')
    public set config(config: T) {
        if (config) {
            this._config = config;
            this.initConfig(config);
        }

    }
    public get config(): T {
        return this._config;
    }
    //end config
    @Input() optionClass: Array<String>;

    ngOnInit(): void {
        setTimeout(() => {
            this.render();
        }, 100);

    }

    constructor() {

    }

}