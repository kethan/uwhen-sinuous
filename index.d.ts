export type Callback = (element: HTMLElement) => void;
declare function define(selector: string, props, callback: Callback): void;
export {
    o,
    cleanup,
    computed,
    observable,
    subscribe
} from "sinuous/observable";

export {
    render
} from "sinuous/render";

export { h, hs, svg, html } from 'sinuous';

export { define };