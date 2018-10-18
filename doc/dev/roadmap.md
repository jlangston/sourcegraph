# Sourcegraph roadmap

This roadmap shows what's next for Sourcegraph. We're committing to shipping these features in the rough timeframe you see below. The projects and timeframes are subject to change.

Development occurs continuously in [sourcegraph/sourcegraph@`master`](https://github.com/sourcegraph/sourcegraph). A new Sourcegraph release [ships in the first week of each month](https://about.sourcegraph.com/blog). For example, the October 2018 items will ship in the first week of November 2018.

We welcome suggestions! Share feedback by using [code discussions](https://about.sourcegraph.com/blog/discuss-code-and-docs-in-repositories) on this document or the linked feature documents.

## October 2018

Feature | Products | Team
------- | -------- | ----
Language support via Sourcegraph extensions | [Sourcegraph][sourcegraph], [browser extension][browser-extensions], [extension API][sourcegraph-extension-api] | [@chrismwendt][chrismwendt] [@felixfbecker][felixfbecker]
Sub-query support in search | [Sourcegraph][sourcegraph] | [@keegancsmith][keegancsmith]
Indexed search enabled by default | [Sourcegraph][sourcegraph] | [@keegancsmith][keegancsmith]
Better config and deployment for code host UI integrations | [Sourcegraph][sourcegraph], [browser extension][browser-extensions] | [@ijsnow][ijsnow] [@francisschmaltz][francisschmaltz]
Search results from Sourcegraph extensions | [Sourcegraph][sourcegraph], [extension API][sourcegraph-extension-api] | [@attfarhan][attfarhan]
Core product UX | [Sourcegraph][sourcegraph] | [@vanesa][vanesa] [@francisschmaltz][francisschmaltz]
Unified site config editing and management console | [Sourcegraph][sourcegraph], [deploy-sourcegraph][deploy-sourcegraph] | [@ggilmore][ggilmore]
Repository permissions | [Sourcegraph][sourcegraph] | [@beyang][beyang]
Product documentation | [Sourcegraph][sourcegraph] | [@sqs][sqs]
Sourcegraph extensions usage and authoring experience | [Sourcegraph][sourcegraph], [extension API][sourcegraph-extension-api] | [@slimsag][slimsag] [@ryan-blunden][ryan-blunden]

<small>Release: week of 5 November 2018 --- [All October 2018 issues](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+author%3Asqs+archived%3Afalse+sort%3Aupdated-desc+repo%3Asourcegraph%2Fsourcegraph-extension-api+repo%3Asourcegraph%2Fsourcegraph+repo%3Asourcegraph%2Fenterprise+repo%3Asourcegraph%2Fsourcegraph-extension-api+repo%3Asourcegraph%2Fbrowser-extensions+repo%3Asourcegraph%2Fextensions-client-common+repo%3Asourcegraph%2Fsrc-cli+repo%3Asourcegraph%2Fcodeintellify+repo%3Asourcegraph%2Fgo-langserver+repo%3Asourcegraph%2Fjavascript-typescript-langserver+repo%3Asourcegraph%2Fjava-langserver+repo%3Asourcegraph%2Fdocs.sourcegraph.com+milestone%3A%22October+2018%22)</small>

## November 2018

Feature | Products | Team
------- | -------- | ----
More robust code host repository syncing | [Sourcegraph][sourcegraph] | [@keegancsmith][keegancsmith]
Global public search on Sourcegraph.com | [Sourcegraph][sourcegraph] | [@keegancsmith][keegancsmith] [@attfarhan][attfarhan]
Core product UX | [Sourcegraph][sourcegraph] | [@vanesa][vanesa] [@francisschmaltz][francisschmaltz]
Standardized code host UI integration points for Sourcegraph extensions | [Sourcegraph][sourcegraph], [extension API][sourcegraph-extension-api] [browser extension][browser-extensions] | [@ijsnow][ijsnow] [@chrismwendt][chrismwendt]
Direct UI integration and deployment bundling with GitLab | [Sourcegraph][sourcegraph], [browser extension][browser-extensions] | [@ijsnow][ijsnow] [@ggilmore][ggilmore] [@francisschmaltz][francisschmaltz]
TypeScript language support improvements | sourcegraph-typescript | [@felixfbecker][felixfbecker]
Java language support improvements | sourcegraph-java | [@beyang][beyang]
Go language support improvements | sourcegraph-go | T.B.D.
Python language support improvements | sourcegraph-python | T.B.D.
Swift language support | sourcegraph-swift | [@chrismwendt][chrismwendt]
Cross-language API/IDL support (GraphQL, Thrift, Protobuf) | sourcegraph-{graphql,thrift,protobuf} | T.B.D
Custom views and panels from Sourcegraph extensions | [Sourcegraph][sourcegraph], [extension API][sourcegraph-extension-api] | [@slimsag][slimsag] [@francisschmaltz][francisschmaltz]

<small>Release: week of 3 December 2018 --- [All November 2018 issues](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+author%3Asqs+archived%3Afalse+sort%3Aupdated-desc+repo%3Asourcegraph%2Fsourcegraph-extension-api+repo%3Asourcegraph%2Fsourcegraph+repo%3Asourcegraph%2Fenterprise+repo%3Asourcegraph%2Fsourcegraph-extension-api+repo%3Asourcegraph%2Fbrowser-extensions+repo%3Asourcegraph%2Fextensions-client-common+repo%3Asourcegraph%2Fsrc-cli+repo%3Asourcegraph%2Fcodeintellify+repo%3Asourcegraph%2Fgo-langserver+repo%3Asourcegraph%2Fjavascript-typescript-langserver+repo%3Asourcegraph%2Fjava-langserver+repo%3Asourcegraph%2Fdocs.sourcegraph.com+milestone%3A%22November+2018%22)</small>

## December 2018

Feature | Products | Team
------- | -------- | ----
Using Sourcegraph extensions in the editor | [Sourcegraph][sourcegraph], [extension API][sourcegraph-extension-api] | [@slimsag][slimsag]
Extension registry discovery and statistics | [Sourcegraph][sourcegraph] | [@slimsag][slimsag] [@francisschmaltz][francisschmaltz]
Core product UX | [Sourcegraph][sourcegraph] | [@vanesa][vanesa] [@francisschmaltz][francisschmaltz]
Rust language support *(tentative)* | sourcegraph-go | [@slimsag][slimsag]

<small>Release: week of 7 January 2019 --- [All December 2018 issues](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+author%3Asqs+archived%3Afalse+sort%3Aupdated-desc+repo%3Asourcegraph%2Fsourcegraph-extension-api+repo%3Asourcegraph%2Fsourcegraph+repo%3Asourcegraph%2Fenterprise+repo%3Asourcegraph%2Fsourcegraph-extension-api+repo%3Asourcegraph%2Fbrowser-extensions+repo%3Asourcegraph%2Fextensions-client-common+repo%3Asourcegraph%2Fsrc-cli+repo%3Asourcegraph%2Fcodeintellify+repo%3Asourcegraph%2Fgo-langserver+repo%3Asourcegraph%2Fjavascript-typescript-langserver+repo%3Asourcegraph%2Fjava-langserver+repo%3Asourcegraph%2Fdocs.sourcegraph.com+milestone%3A%22November+2018%22)</small>

## January 2019

<small>Release: week of 4 February 2019</small>

## February 2019

<small>Release: week of 4 March 2019</small>

[sourcegraph]: https://github.com/sourcegraph/sourcegraph
[sourcegraph-extension-api]: https://github.com/sourcegraph/sourcegraph-extension-api
[browser-extensions]: https://github.com/sourcegraph/browser-extensions
[deploy-sourcegraph]: https://github.com/sourcegraph/deploy-sourcegraph
[chrismwendt]: https://github.com/chrismwendt
[keegancsmith]: https://github.com/keegancsmith
[vanesa]: https://github.com/vanesa
[attfarhan]: https://github.com/attfarhan
[sqs]: https://github.com/sqs
[beyang]: https://github.com/beyany
[ggilmore]: https://github.com/ggilmore
[ryan-blunden]: https://github.com/ryan-blunden
[francisschmaltz]: https://github.com/francisschmaltz
[ijsnow]: https://github.com/ijsnow
[dadlerj]: https://github.com/dadlerj
[felixfbecker]: https://github.com/felixfbecker
[slimsag]: https://github.com/slimsag
[kattmingming]: https://github.com/kattmingming


<!--

Prior art:

https://docs.microsoft.com/en-us/visualstudio/productinfo/vs-roadmap

-->
