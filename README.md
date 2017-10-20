# Handlebars-Specification

This repository contains the formal specification of the Handlebars language.
The specification is still work-in-progress, which means that large parts are missing or may plainly be wrong.


## Disclaimer 

There is no timeline for the progress of this document. I am working on it whenever I feel like doing it. I am definitely looking for people who help me with this, so [please contact me (via issues)](https://github.com/handlebars-lang/specification/issues) if you are interested. PRs are welcome.

Working alone is usually not as much fun as working together with others. As a result, I might feel inclined to put more work into this spec, if there is someone other than me on working on this (someone for discussions, ideas and constructive criticism).

> Nils Knappmeier

## Contributing

The [sections](sections)-folder contains the sources of the spec document. Those are the files that should be edited. The alphanumeric order of the filenames is the order in which the files will be concatenated.

The command `npm run build` will 

* concatenate those files, 
* run `marked-pp` to number the sections and
* create a table of contents
* store the result into the file [SPECIFICATION.md](SPECIFICATION.md)

### PRs 

* PRs should always be based on the current master-branch.
* The file `SPECIFICATION.md` can be part of the PR, but this is no strict requirement.
  Please allow the collaborators to apply changes to the PR, so that we can update the `SPECIFICATION.md` accordingly.
