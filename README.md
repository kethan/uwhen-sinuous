## UElements

uelements provides a functional way of defining custom elements.

```html
<my-counter count="10"></my-counter>
```

```jsx
import { define, useState, o } from "uwhen-sinuous";

function Counter({count}) {
	const value = o(count);

	return (
		<>
			<div>Counter: {value}</div>
			<button onClick={() => value(value() + 1)}>Increment</button>
			<button onClick={() => value(value() - 1)}>Decrement</button>
		</>
	);
}

define("my-counter", {count : 0} (el) => (
	<Counter count={el.count}} />
));
```

Courtesy: swiss and sinuous
