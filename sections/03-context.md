# Context in Handlebars

In Handlebars, multiple contexts store data. Each context is organized in a stack: 

* The execution context is the part of the input data that is the basis for property lookups at any given point of the template execution. A new execution context will be under certain circumstances by block-helpers, block-partials and block-mustache expressions.
* Data-Frames contain a set of variables that can be used by Handlebars expressions. New data-frames MAY be created by block-helpers.
* TODO: Is this correct? A Partial-Scope contains a registered helpers, partials and decorators. A new partial-scope is created when a partial is called.   

## Property lookup and execution context ("this")

The syntax `{{propertyPath}}` is used to render the a property from the input data. The following syntax is allowed as property-path:
 
* Strings that do not contain a dot, bracket, "at sign" or slash refer to the property an object. For example, in `{ "name": "Timmy" }` the expression `{{name}}` will result in the string "Timmy".
* Strings that start with an "at sign" refer to a data-frame variable.
* A dot (`.`) between two path parts separates a parent and a child property. For example, in `{ "parent": { "child": { "name": "Timmy" } } }` `{{parent.child.grandchild}}` will result in the string "Timmy".
* A slash (`/`) has the same semantic as a dot, but it can be used to seperate `..` from other parts of the path.
* An isolated single dot (`.`) refers to the current execution context.  
* Two dots (`..`) refer to the parent execution context.

The execution context initially points to the root of the input object.  

TODO: Describe: 

* Segment literals: `{{articles[10].[#comments]}}`
* Helpers (short) `{{simple}}`
* Helper (short) parameters: `{{helperName param1 param2 hashParam=paramValue}}`

## Data-Frames

## Partial-Scope

TODO: Describe the `this` context. Context for data properties (`@first`) and temporary partials (registered through decorators)

