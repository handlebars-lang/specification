# Helpers

Helpers are functions that can be called from the template. The runtime environment SHOULD provide an interface to register a helper under a name. The exact syntax of the function may depend on the implementation.

## Helper parameters and options

The helper interface of the runtime environment MUST pass the following information when a helper is called:

* a list of ordered parameters that is provided in the helper-call (e.g. `{{helperName param1 param2 param3}}`)
* a dictionary of named parameters provided in the helper-call (e.g. `{{helperName key1=value1 key2=value2}})`
* the Execution-Context of the helper call, which is the object that would be rendered by the `{{.}}` expression.
* a dictionary of named variables that are part of the current data-frame
* the name under which the helper is registered in the runtime
* 

## Simple Helpers



TODO: Describe the helper parameters and return values

## Block Helpers

## Builtin Helpers

TODO: Describe the helper parameters and return values

