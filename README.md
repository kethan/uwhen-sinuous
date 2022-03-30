## UElements

uelements provides a functional way of defining custom elements.

```html
<my-counter count="10"></my-counter>
```

```jsx
import { define, useState } from "uelements";

function Counter() {
	const [value, setValue] = useState(0);

	return (
		<>
			<div>Counter: {value}</div>
			<button onClick={() => setValue(value + 1)}>Increment</button>
			<button onClick={() => setValue(value - 1)}>Decrement</button>
		</>
	);
}

define("my-counter", (el) => (
	<PalTest count={parseInt(el.getAttribute("count") || "0")} />
), ["count"]);
```

Courtesy: hooked-elements, preact and swiss