import { h, render, Fragment, createElement } from 'preact';
import { createContext, define as $define, defineAsync as $defineAsync, get, upgrade, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState, whenDefined } from 'hooked-elements';
import htm from 'htm';
const html = htm.bind(h);

function completeAssign(target: any, ...sources: any[]) {
    const options = {
        enumerable: true,
        configurable: true
    };
    sources.forEach((source) => {
        if (source) {
            Object.keys(source).forEach((prop) => {
                const descriptor: any = Object.getOwnPropertyDescriptor(source, prop);
                Object.defineProperty(target, prop, Object.assign(descriptor, options));
            });
        }
    });
    return target;
}

const define = (name: string, callback, attrs = []) => {
    $define(name, {
        observedAttributes: attrs,
        attributeChanged() {
            (this as any).render();
        },
        render(element) {
            const Comp = callback(element);
            render(Comp, element);
        }
    });
};

export {
    createContext,
    $define,
    $defineAsync,
    define,
    get,
    upgrade,
    useCallback,
    useContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    whenDefined,
    html,
    h,
    render,
    Fragment,
    createElement,
    completeAssign
};