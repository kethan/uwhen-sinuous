## When elements based on sinuous render

```html
<my-counter id="my-counter">
	<div slot="one">my counter tag slot one</div>
	<div slot="two">
		<another-tag id="another-tag">
			<div slot="three">another tag slot three</div>
		</another-tag>
	</div>
</my-counter>
```

```ts
import { render, when, o, h} from "uwhen-sinuous";

setTimeout(() => {
	const ele = document.getElementById("another-tag");
	ele.remove();
}, 3000);

when("another-tag", (element, props, kids: any) => {
	render(
		<div>
			<div>my c</div>
			<div>{kids.three}</div>
		</div>,
		element
	);
	return () => {
		console.log("removed another-tag");
	};
});

when("my-counter", (element, props, kids: any) => {
	const setValue = o(0);
	render(
		<div>
			<div>Counter: {setValue}</div>
			<button onclick={() => setValue(setValue() + 1)}>Increment</button>
			<div>{kids.one}</div>
			<div>{kids.two}</div>
			<button onclick={() => setValue(setValue() - 1)}>Decrement</button>
		</div>,
		element
	);

	return () => {
		console.log("removed my-counter");
	};
});
```
