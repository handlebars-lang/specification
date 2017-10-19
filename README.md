The Handlebars Language Specification

Draft 1

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt).

The Handlebars Language Specification is licensed under The Apache License, Version 2.0.

# 1 Introduction

The Handlebars Language Specification is a formal specification of the Templating Language implemented in the [Handlebars.js Project](http://handlebarsjs.com). Its goal is to standardize the templating language and make it easier to implement compatible template engines for multiple platforms and programming languages.


# 2 The Runtime Environment
 
The Handlebars Language relies on a runtime environment. The runtime environment provides core functionality and the ability to register `Helpers`, `Partials` and `Decorators`.

* Helpers are functions that can be called from within the template to compute parts of the template output. Helpers are described in more detail in section TODO:REF_SECTION_HELPER
* Partials are sub-templates that can be reused from different places within the template. Partials are described in more detail in section TODO:REF_SECTION_PARTIALS
* Decorators are functions that can be called from the template in order to modify the current execution context. Decorators can add and overwrite helpers, partials in the current context (TODO: which one?). Decorators are described in more detail in section TODO:REF_SECTION_DECORATORS  
 
# 3 Context in Handlebars

In Handlebars, multiple contexts store data. Each context is organized in a stack: 

* The execution context is the part of the input data that is the basis for property lookups at any given point of the template execution. A new execution context will be under certain circumstances by block-helpers, block-partials and block-mustache expressions.
* Data-Frames contain a set of variables that can be used by Handlebars expressions. New data-frames MAY be created by block-helpers.
* TODO: Is this correct? A Partial-Scope contains a registered helpers, partials and decorators. A new partial-scope is created when a partial is called.   

# 3.1 Property lookup and execution context ("this")

The syntax `{{propertyPath}}` is used to render the a property from the input data. The following syntax is allowed as property-path:
 
* Strings that do not contain a dot, bracket, "at sign" or slash refer to the property an object. For example, in `{ "name": "Timmy" }` the expression `{{name}}` will result in the string "Timmy".
* Strings that start with an "at sign" refer to a data-frame variable.
* A dot (`.`) between two path parts separates a parent and a child property. For example, in `{ "parent": { "child": { "name": "Timmy" } } }` `{{parent.child.grandchild}}` will result in the string "Timmy".
* A slash (`/`) has the same semantic as a dot, but it can be used to seperate `..` from other parts of the path.
* An isolated single dot (`.`) refers to the current execution context.  
* Two dots (`..`) refer to the parent execution context.

The execution context initially points to the root of the input object.  

# 3.2 Data-Frames

# 3.3 Partial-Scope

TODO: Describe the `this` context. Context for data properties (`@first`) and temporary partials (registered through decorators)

## 2.2 Helpers

Helpers are functions that can be called from the template. The runtime environment SHOULD provide an interface to register a helper under a name. The exact syntax of the function may depend on the implementation.

### 2.2.1 Helper parameters and options

The helper interface of the runtime environment MUST pass the following information when a helper is called:

* a list of ordered parameters that is provided in the helper-call (e.g. `{{helperName param1 param2 param3}}`)
* a dictionary of named parameters provided in the helper-call (e.g. `{{helperName key1=value1 key2=value2}})`
* the Execution-Context of the helper call, which is the object that would be rendered by the `{{.}}` expression.
* a dictionary of named variables that are part of the current data-frame
* the name under which the helper is registered in the runtime
* 

### 2.2.1 Simple Helpers



TODO: Describe the helper parameters and return values

### 2.2.2 Block Helpers

### 2.2.3 Builtin Helpers

TODO: Describe the helper parameters and return values

## 2.3 Partials

Describe what partials are and how they can be registered 

## 2.4 Decorators

### 2.4.1 Defining Decorators

### 2.4.2 Builtin Decorators


# 3 Language Grammar

TODO: Specify lexical grammar here.

# 4 Property lookup

TODO: A handlebars expression is a {{, some contents, followed by a }}

Describe: 

* Simple mustaches `{{title}}`
* Dot notation `{{article.title}}`
* Segment literals: `{{articles[10].[#comments]}}`
* Helpers `{{simple}}`
* Helper parameters: `{{helperName param1 param2 hashParam=paramValue}}`