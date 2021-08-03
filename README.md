## When elements based on sinuous render

```html
<my-counter id="my-counter" counter="10">
	<div slot="one">my counter tag slot one</div>
	<div slot="two">
		<another-tag id="another-tag">
			<div slot="three">another tag slot three</div>
		</another-tag>
	</div>
</my-counter>
```

```jsx
import { render, when, o, h } from "uwhen-sinuous";

setTimeout(() => {
	const ele = document.getElementById("another-tag");
	ele.remove();
}, 3000);

when("another-tag", (element, props, slots) => {
	render(
		<div>
			<div>another-tag content</div>
			<div>{slots.three}</div>
		</div>,
		element
	);
	return () => {
		console.log("removed another-tag");
	};
});

when("my-counter", (element, props, slots) => {
	const setValue = o(parseInt(props.counter) || 0);
	render(
		<div>
			<button onclick={() => setValue(setValue() + 1)}>Increment</button>
			<div>Counter: {setValue}</div>
			<button onclick={() => setValue(setValue() - 1)}>Decrement</button>
			<div>{slots.one}</div>
			<div>{slots.two}</div>
		</div>,
		element
	);

	return () => {
		console.log("removed my-counter");
	};
});
```
