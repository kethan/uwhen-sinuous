import { whenAdded } from "when-elements";

import {
    render,
    rhtml as html,
    rsvg as svg,
    r as h,
    rs as hs,
} from "sinuous/render";

import {
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

const get = (child, name) => child.getAttribute(name);

const queryHelper = (attr, arr) => (element) =>
    [].reduce.call(
        element.querySelectorAll("[" + attr + "]"),
        (slot: any, node) => {
            let { parentNode }: any = node;
            do {
                if (parentNode === element) {
                    const name = get(node, attr);
                    slot[name] = arr ? [].concat(slot[name] || [], node) : node;
                    break;
                } else if (
                    /-/.test(parentNode.tagName) ||
                    get(parentNode, "is")
                )
                    break;
            } while ((parentNode = parentNode.parentNode));
            return slot;
        },
        {}
    );


const slot = queryHelper("slot", true);

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const when = (selector: string, callback) => {
    whenAdded(selector, (element: HTMLElement) => {
        const props = {};
        for (let i = 0; i < element.attributes.length; i++) {
            props[[element.attributes[i].name] as any] = element.attributes[i].value;
        }
        const slots = slot(element);
        removeAllChildNodes(element);
        const fn = callback(element, props, slots);
        return () => {
            if (fn) fn();
        };
    });
};

export {
    h,
    html,
    render,
    svg,
    hs,
    when,
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
};
