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
    render,
    rhtml as html,
    rsvg as svg,
    r as h,
    rs as hs,
} from "sinuous/render";

export { define };