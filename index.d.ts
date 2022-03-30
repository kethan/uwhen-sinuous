type Inputs = ReadonlyArray<unknown>;

export type StateUpdater<S> = (value: S | ((prevState: S) => S)) => void;
/**
 * Returns a stateful value, and a function to update it.
 * @param initialState The initial value (or a function that returns the initial value)
 */
export function useState<S>(initialState: S | (() => S)): [S, StateUpdater<S>];

export function useState<S = undefined>(): [
    S | undefined,
    StateUpdater<S | undefined>
];

export type Reducer<S, A> = (prevState: S, action: A) => S;
/**
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 * @param reducer Given the current state and an action, returns the new state
 * @param initialState The initial value to store as state
 */
export function useReducer<S, A>(
    reducer: Reducer<S, A>,
    initialState: S
): [S, (action: A) => void];

/**
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 * @param reducer Given the current state and an action, returns the new state
 * @param initialArg The initial argument to pass to the `init` function
 * @param init A function that, given the `initialArg`, returns the initial value to store as state
 */
export function useReducer<S, A, I>(
    reducer: Reducer<S, A>,
    initialArg: I,
    init: (arg: I) => S
): [S, (action: A) => void];


interface Ref<T> {
    readonly current: T | null;
}

interface MutableRef<T> {
    current: T;
}

/**
 * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
 * (`initialValue`). The returned object will persist for the full lifetime of the component.
 *
 * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
 * value around similar to how you’d use instance fields in classes.
 *
 * @param initialValue the initial value to store in the ref object
 */
export function useRef<T>(initialValue: T): MutableRef<T>;
export function useRef<T>(initialValue: T | null): Ref<T>;
export function useRef<T = undefined>(): MutableRef<T | undefined>;

type EffectCallback = () => void | (() => void);
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after browser paint, without blocking it.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export function useEffect(effect: EffectCallback, inputs?: Inputs): void;

/**
 * Accepts a function that contains imperative, possibly effectful code.
 * Use this to read layout from the DOM and synchronously re-render.
 * Updates scheduled inside `useLayoutEffect` will be flushed synchronously, after all DOM mutations but before the browser has a chance to paint.
 * Prefer the standard `useEffect` hook when possible to avoid blocking visual updates.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export function useLayoutEffect(effect: EffectCallback, inputs?: Inputs): void;

/**
 * Returns a memoized version of the callback that only changes if one of the `inputs`
 * has changed (using ===).
 */
export function useCallback<T extends Function>(callback: T, inputs: Inputs): T;

/**
 * Pass a factory function and an array of inputs.
 * useMemo will only recompute the memoized value when one of the inputs has changed.
 * This optimization helps to avoid expensive calculations on every render.
 * If no array is provided, a new value will be computed whenever a new function instance is passed as the first argument.
 */
// for `inputs`, allow undefined, but don't make it optional as that is very likely a mistake
export function useMemo<T>(factory: () => T, inputs: Inputs | undefined): T;

/**
 * Returns the current context value, as given by the nearest context provider for the given context.
 * When the provider updates, this Hook will trigger a rerender with the latest context value.
 *
 * @param context The context you want to use
 */
export function useContext<T>(Context: T): T;

/**
 * Similar to `React.createContext`. Returns a `Context` object.
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
*/
export function createContext<T>(object: T): T;

type FunctionWithElement = (element: HTMLElement) => void;

/**
     * Defines a hooked component via a selector and a literal,
     * with a `render()` method, or a function, used as `render()`.
     * The function will receive the `element` as bound argument.
     * 
     * @example
     * define(selector, element => {} || {
     *   init() { this.element; },
     *   connected() {},
     *   disconnected() {},
     *   attributeChanged(name, newValue, oldValue) {},
     *   observedAttributes: [],
     *   onEventName(event) {},
     *   onEventNameOptions: false
     * });
     */
export function define(
    selector: string,
    component: FunctionWithElement | IPalElementsComponent,
    attrs?: string[]
): void;

/**
 * Defines asynchronously a wicked element via a selector and a callback.
 * The callback must return a Promise that resolves through a component
 * definition.
 * 
 * @example
 * defineAsync(selector, () => import('/comp.js'));
 */
export function defineAsync(
    selector: string,
    callback: Function
): void;

/**
 * Retrieves a hooked element definition.
 */
export function get(selector: string): void | IPalElementsComponent;

/**
 * Force/upgrade a specific node, if it matches any defined selector.
 */
export function upgrade(element: Element): void;

/**
 * Resolves once a specific selector gets defined.
 */
export function whenDefined(selector: string): Promise<void>;

interface IPalElementsComponent {
    /**
     * Always triggered once per node => definition, like a `constructor`.
     * Ideal to setup anything as a one off operation.
     * `this.element` will point at the node handled by this instance.
     * If not provided it will default to:
     * `function init() { render(this); }`
     * The `render(component)` is exported, to enable a custom `init()`.
     */
    init?(): void;

    /**
     * Triggered once the node is live.
     */
    connected?(): void;

    /**
     * Triggered once the node is lost/removed.
     * If `useEffect` was used, and returned a callback.
     * this will always trigger *after* that callback.
     */
    disconnected?(): void;

    /**
     * Triggered when an attribute in the `observedAttributes` list changes or,
     * if `observedAttributes` is not defined, for any attribute changes. 
     */
    attributeChanged?(
        attributeName: string,
        newValue: string | null,
        oldValue: string | null
    ): void;

    /**
     * Optionally you can specify one or more attribute to observe.
     * If empty, or not provided, but `attributeChanged()` method exists,
     * all attributes changes are notified.
     */
    observedAttributes?: Array<string>;

    /**
     * A method to define rendering logic, automatically
     * augmented for hooks such as `useState` and others.
     * The `element` is bound and passed along each time.
     * It's the exact same `element` retrieved via `this.element`.
     */
    render(element: Element): any

    /**
     * Any event can be defined as method.
     * Example: `onClick` or `onCustomEvent`.
     */
    onEventName?(event: Event): void;

    /**
     * Ane event could optionally have `Options` used as third argument,
     * when the event is added via `addEventListener`: `false` by default.
     */
    onEventNameOptions?: boolean | object;

    /**
     * Any property, method, or accessor, reflected via prototypal inheritance.
     */
    [k: string]: any;
}

export interface UElements {
    useState: typeof useState;
    useReducer: typeof useReducer;
    useContext: typeof useContext;
    useRef: typeof useRef;
    useCallback: typeof useCallback;
    useMemo: typeof useMemo;
    useEffect: typeof useEffect;
    useLayoutEffect: typeof useLayoutEffect;
    createContext: typeof createContext;
    define: typeof define;
    defineAsync: typeof defineAsync;
    get: typeof get;
    upgrade: typeof upgrade;
    whenDefined: typeof whenDefined;
    render: any;
    html: any;
    h: any;
    Fragment: any;
    createElement: any;
    completeAssign: (target: any, ...sources: any[]) => void;
}

declare let html:any;
export { html };
export { h, render, Fragment, createElement } from "preact";