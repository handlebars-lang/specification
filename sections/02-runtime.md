
# The Runtime Environment
 
The Handlebars Language relies on a runtime environment. The runtime environment provides core functionality and the ability to register `Helpers`, `Partials` and `Decorators`.

* Helpers are functions that can be called from within the template to compute parts of the template output. Helpers are described in more detail in section TODO:REF_SECTION_HELPER
* Partials are sub-templates that can be reused from different places within the template. Partials are described in more detail in section TODO:REF_SECTION_PARTIALS
* Decorators are functions that can be called from the template in order to modify the current execution context. Decorators can add and overwrite helpers, partials in the current context (TODO: which one?). Decorators are described in more detail in section [Decorators](#decorators)

