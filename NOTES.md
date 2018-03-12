# package.json

There are some **dependencies** and **devDependencies** in the _package.json_ file for which it may not be readily
understood why they are listed. This is the explanation:

## dependencies

Dependency | Reason
--- | ---
ember-hook | is used in the templates of this repository's components to facilitate building a hierarchical structure of hooks and as such needs to become part of the source code

## devDependencies

Dependency | Reason
--- | ---
`ember-prism` | **THIS SHOULD BE A DEPENDENCY**  but in version `0.0.8` it is not traversing the tree to correctly find the [Bower directory](https://github.com/shipshapecode/ember-prism/blob/be4919912fee4895964db101296bc523ca2c8093/index.js#L40) when consumed in an add-on so the build will fail when it looks for `undefined/prism/prism.js`
