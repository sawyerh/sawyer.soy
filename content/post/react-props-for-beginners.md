---
title: A mental model for React props for beginners
published_at: 2021-04-25T07:00:00.000Z
excerpt: How React Props relate to HTML attributes and JS functions.
---

One of the React concepts I commonly see trip up folks when they’re initially learning React are how “props” work. [Props](https://reactjs.org/docs/components-and-props.html) is short for “properties” and understanding how to work with props is a fundamental part of working with React.

Below is a brief introduction to props, through the lens of how props shares similarities with two other fundamental frontend concepts you should have under your belt if you’re writing frontend code: HTML attributes and JavaScript functions.

### HTML attributes

In HTML, elements accept [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) in order to configure the element or adjust its behavior. For example, `<img>` elements require [a src attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) to configure what image to display:

```html
<img src="sunset.jpg" />
```

and `<input>` elements can optionally accept a [maxlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength) attribute to limit the number of characters that can be entered in the field:

```html
<input maxlength="140" name="tweet" />
```

Note above that in HTML, attribute values are always a string\* even when the expected value is a number, like maxlength.

\*Except [boolean attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes)

### JavaScript functions

In JavaScript, we have function [parameters](https://developer.mozilla.org/en-US/docs/Glossary/Parameter), which are named variables used for passing values into functions. When creating a new function in JavaScript, you decide what parameters the function accepts, the name of the parameters, and the type of value (string, number, boolean, etc).

As an example, we can create a function that takes two parameters: a message, and a number (timesToLog) indicating how many times to log the message:

```js
function logMessage(message, timesToLog) {
  let timesLogged = 0;
  while (timesLogged < timesToLog) {
    console.log(message);
    timesLogged = timesLogged + 1;
  }
}
```

We then call this method by passing in the two expected arguments:

```js
logMessage("Log me three times", 3);
```

We could also write this function so that it accepts a single object parameter (e.g options) that has message and timesToLog as properties:

```js
function logMessage(options) {
  let timesLogged = 0;
  while (timesLogged < options.timesToLog) {
    console.log(options.message);
    timesLogged = timesLogged + 1;
  }
}
```

We then call this method by passing in an object as the only argument:

```js
logMessage({ message: "Log me three times.", timesToLog: 3 });
```

### React props

In React, “props” is a mix of the two mental models above: HTML attributes and function parameters. When rendering a React component on a page, you’re operating in the HTML attributes mental model — a React component can be thought of as a custom HTML element that accepts custom attributes. When reading those attributes from within the component definition, you’re operating in the function parameters mental model — you are reading the attributes from the props parameter.

For example, let’s say we want to create a `<Field>` component that we use for rendering a form input and its label. We need our component to accept a string for the label the user sees, and a name to be associated with the field when it’s submitted.

A React component definition is just a function that has a single object parameter — props — and the function returns the markup that should be rendered to the screen.

For our `<Field>` component definition, that translates to a function like this:

```jsx
function Field(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input name={props.name} type="text" />
    </div>
  );
}
```

Looks similar to a plain JS function with a props parameter!

When we render a component, we set these props as attributes on the element:

```jsx
<Field label="What city do you live in?" name="city" />
```

Looks like HTML attributes!

A different way to think about this is to think of rendering a component like calling a function. The syntax above is an HTML-like way of calling our Field function in plain JS:

```js
Field({
  label: "What city do you live in?",
  name: "city",
});
```

### Value types

Hopefully that last code example is a good transitioning point into talking about how React component attributes aren’t limited to being strings, unlike HTML attributes. Because in React, “props” is just a JS object, and the values within it can be any JS type, like a boolean, number, object, or function.

The syntax for setting a value that’s not a string is a little different — you use {curly brackets}, instead of “quotes”, to wrap the value. This is how you say, “This value isn’t a string, I want to write a JavaScript expression!”

For example, we can add a maxLength property to our field, and since this is React, it can accept a number instead of a string:

```jsx
<Field maxLength={9} label="Zip code" name="zip" />
```

Our component doesn’t magically know about this maxLength attribute. We also need to update our component’s definition to read this prop and do something with it. In the example above, we’d pass it to our input element:

```jsx
function Field(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input maxLength={props.maxLength} name={props.name} type="text" />
    </div>
  );
}
```

You may have noticed that in React, maxLength is camel cased, and in HTML it’s not (maxlength). This is one potential gotcha of React props and something to be aware of. Another gotcha is the usage of “className” instead of “class” . [Learn more about the prop names React supports here.](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)

Or let’s say we have a SelectField component that renders a [\<select> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and its options. We could pass in the options as an array:

```jsx
<SelectField
  options={["Pizza", "Tacos", "Sushi"]}
  label="Favorite meal"
  name="favorite"
/>
```

We can pull out these options into a variable too. For instance, our options in the example above could be pulled out into a “meals” variable if we’d like:

```jsx
const meals = ["Pizza", "Tacos", "Sushi"];
return (
  <SelectField
    options={meals}
    label="Favorite meal"
    name="favorite"
  />
);
```

We could also use curly brackets to set a string value using a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), for instance if part of the string is a variable:

```jsx
<Field label={`Where is ${user.name} going?`} name="destination" />
```

The above just scratches the surface of React. There’s a lot that’s not touched on here, but hopefully this provides a useful mental model for thinking about React props, as a starting off point. [You can read about more advanced props use cases in the React docs.](https://reactjs.org/docs/jsx-in-depth.html#props-in-jsx)
