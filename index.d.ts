export type Callback = (element: HTMLElement, props: any, slots: any) => void;
type cleanup = () => void;
declare function when(selector: string, callback: Callback): cleanup;
export {
    o,
    cleanup,
    computed,
    observable,
    subscribe,
    S,
    sample,
    isListening,
    on,
    root,
    transaction,
    unsubscribe
} from "sinuous/observable";

export {
    render,
    rhtml as html,
    rsvg as svg,
    r as h,
    rs as hs,
} from "sinuous/render";

export { when };