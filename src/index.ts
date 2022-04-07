import { define as $define } from 'swiss';

import {
    render
} from "sinuous/render";

const define = (selector: string, props, callback) => {
    const setup = (CE) => (el) => {
        return {
            update: () => render(callback(el), el)
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
    render,
    rhtml as html,
    rsvg as svg,
    r as h,
    rs as hs,
} from "sinuous/render";

export {
    define
};

export * as swiss from 'swiss';