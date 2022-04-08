import { define as $define } from 'swiss';

import {
    render
} from "sinuous/render";

export type Callback = (element: HTMLElement) => void;

const define = (selector: string, props: Record<string, any>, callback: Callback) => {
    const setup = (CE) => (el: HTMLElement) => {
        return {
            update: () => render(callback(el) as any, el)
        };
    };
    $define(selector, {
        props,
        setup
    });
};

export {
    o,
    cleanup,
    computed,
    o as observable,
    subscribe
} from "sinuous/observable";

export {
    render
} from "sinuous/render";

export {
    define
};

export { h, hs, svg, html } from 'sinuous';

export * as swiss from 'swiss';