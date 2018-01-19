# 4.0.0 (2018-01-19)
* **Added** a `CONTRIBUTING.md` file
* **Added** a `PULL_REQUEST_TEMPLATE.md` file
* **Added** ignoring of `package-lock` until we are ready to move to node 8
* **Added** ignore the linting of the `CHANGELOG.md`
* **Added** `ember-frost-test` to `^4.0.0`
* **Added** `chai-jquery` @ `^2.0.0`
* **Updated** `ember-cli-chai` to `0.4.3`
* **Updated** `ember-cli-mocha` to `0.14.4`
* **Updated** `ember-sinon` to `^0.7.0`
* **Updated** `ember-test-utils` to `^8.1.0`
* **Updated** `sinon-chai` @ `^2.14.0`
* **Updated** CI build to use linting from `ember-test-utils`
* **Updated** CI build to run `pr-bumper` at version 2 with necessary build scripts
* **Removed** useLintTree ember-cli-mocha configuration from `ember-cli-build.js`
* **Updated** `.sass-lint.yml` file to ignore linting of sass files for now. Issue: https://github.com/ciena-frost/ember-frost-demo-components/issues/16 is open to track renabling
* **Removed** the blueprint file since packages are now included via dependencies
* **Removed** unused `codemirror` bower package that is now provided via `ivy-codemirror` dependencies
* **Removed** unused `ember-inflector` bower package
* **Removed** unused `ember-qunit-notifications` bower package
* **Removed** unused `Faker` bower package
* **Removed** unnecessary `jquery` bower package
* **Removed** unused `pretender` bower package
* **Updated** `prism` bower package to `1.6.0`
* **Updated** `showdown` bower package to `1.5.1`
* **Added** `bower` at version `^1.8.2` since it is no longer provided via Ember CLI
* **Updated** `ember-cli-code-coverage` to `0.3.12`
* **Updated** `ember-cli-frost-blueprints` to `^5.0.1`
* **Removed** unused `ember-ajax` package
* **Updated** `ember-browserify` to be a dependency instead of a devDependency
* **Updated** `ember-cli-showdown` to `^2.11.0` and moved from devDependency to dependency
* **Removed** unused `ember-cli-sri` package
* **Updated** `ember-computed-decorators` to `0.3.0` and moved from devDependency to dependency
* **Removed** unused `ember-concurrency` package
* **Removed** unused `ember-elsewhere` package
* **Updated** `ember-frost-core` to `^5.1.1` and moved from devDependency to dependency
* **Updated** `ember-frost-popover` to `^8.0.0` and moved from devDependency to dependency
* **Updated** `ember-hook` to `1.4.2` and moved from devDependency to dependency
* **Updated** `ember-prop-types` to `^6.0.1` and moved from devDependency to dependency
* **Removed** unused `ember-spread` package
* **Updated** `ember-truth-helpers` to `^1.3.0` and moved from devDependency to dependency
* **Removed** `eslint` package that is now provided by `ember-test-utils` dependency
* **Removed** `eslint-config-frost-standard` package that is now provided by `ember-test-utils` dependency
* **Updated** `ivy-codemirror` to be a dependency instead of a devDependency
* **Removed** `remark-cli` package that is now provided by `ember-test-utils` dependency
* **Removed** `remark-lint` package that is now provided by `ember-test-utils` dependency
* **Removed** `sass-lint` package that is now provided by `ember-test-utils` dependency
* **Updated** `broccoli-babel-transpiler` to `^5.7.2`
* **Updated** `broccoli-funnel` to `^2.0.1`
* **Updated** `broccoli-merge-trees` to `^2.0.0`
* **Updated** `ember-cli-sass` to `7.1.1`
* **Updated** move code coverage config file to tests/dummy/config/ and add json-summary reporter"
* **Removed** running of node `stable` and allowing of failure from CI build `travis.yml`


# 3.1.0
* **Updated** integration/unit tests to remove the deprecated use of `describeComponent()`
* **Updated** ember-test-utils to latest version
* **Updated** ember-cli-mocha to latest version
* **Added** ember-cli-chai since it has now been broken out into a separate addon


# 3.0.1

* **Fixed** failing tests.
* **Fixed** `ember-prop-types` errors.
* **Fixed** CI configuration so it will run tests.

# 3.0.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.1

* **Fixed** bug when specifying route and links for a given link. In this scenario the DOM would contain nested anchor tags which is invalid and would cause the nested links to redirect but then go back to the back of the parent link.

# 2.0.0
* **Updated** `ember@~2.8.0`
* **Updated** `ember-frost-core@^1.0.0`
* **Added/updated** linting and coverage

# 1.0.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

