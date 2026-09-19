# 🇷🇺 dsh-locale-ru

### Native Russian localization for the DeepSeek Harness web interface

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![DeepSeek Harness](https://img.shields.io/badge/DeepSeek_Harness-0.1.6--alpha.2-blue)](https://github.com/deepseek-ai/deepseek-harness)
[![Check](https://github.com/AbsoluteMikhail/dsh-locale-ru/actions/workflows/check.yml/badge.svg)](https://github.com/AbsoluteMikhail/dsh-locale-ru/actions/workflows/check.yml)

[Русский](README.md)

`dsh-locale-ru` adds **Русский** to the built-in DeepSeek Harness language selector and translates the main web interface surfaces. It uses the public locale-pack API without replacing application internals or rewriting the rendered DOM.

**Author and maintainer:** [AbsoluteMikhail](https://github.com/AbsoluteMikhail)

## Features

- 48 translation namespaces and more than 1,600 interface strings.
- Coverage for chat, settings, workspaces, plugins, permissions, terminal, files, plans, jobs, subagents, and utility panels.
- Immediate switching through **Settings → General settings → Language**.
- Persistence through the standard profile settings.
- Russian plural forms such as `1 вызов`, `2 вызова`, `5 вызовов`, and `21 вызов`.
- English fallback for third-party plugin keys that are not present in the Russian dictionaries.
- Localized names for the built-in permission modes.
- Automated key and placeholder comparison against the compatible Harness revision.
- An installation smoke test using an isolated real `web` profile.

## Installation

### From GitHub

```sh
dsh plugin --profile web add github:AbsoluteMikhail/dsh-locale-ru
```

The compiled `lib/` files are committed to the repository. Installing from GitHub does not execute build code on the user's computer and does not require install-script approval.

Restart the profile, open **Settings → General settings → Language**, and select **Русский**.

### From npm

This command will become available after `@absolutemikhail/dsh-locale-ru` is published:

```sh
dsh plugin --profile web add @absolutemikhail/dsh-locale-ru
```

### From the interface

Open **Plugins → Add plugin** and enter:

```text
github:AbsoluteMikhail/dsh-locale-ru
```

## Verify the installation

```sh
dsh --profile web --dump-config
```

The assembled configuration should contain:

```yaml
- id: locale-ru
  name: '@absolutemikhail/dsh-locale-ru'
```

## Compatibility

The first release targets DeepSeek Harness `0.1.6-alpha.2` and uses the public `addLanguage` and `register` methods. Its dictionaries match the interface keys in that Harness version.

The `.few` and `.many` plural categories require a `LocaleRuntime` version with extended CLDR support. Other translations remain available on earlier versions through the standard `.one` and `.other` keys.

Harness updates may add or rename interface keys. A matching locale release should accompany those changes.

## Update or remove

```sh
dsh plugin --profile web update @absolutemikhail/dsh-locale-ru
dsh plugin --profile web remove @absolutemikhail/dsh-locale-ru
```

You can pin a GitHub installation to a release tag:

```sh
dsh plugin --profile web add github:AbsoluteMikhail/dsh-locale-ru#v0.1.0
```

## Development

The dictionaries live in [`src/client/dictionaries`](src/client/dictionaries), language registration in [`src/client/index.ts`](src/client/index.ts), and the installation layer in [`cordis.patch.yml`](cordis.patch.yml).

```sh
pnpm install
pnpm run check
```

`pnpm run check` builds the package, verifies registration of all 48 dictionaries, and inspects the npm archive. Commit updated `lib/index.js` and `lib/client.js` together with source changes so GitHub installations do not need to run a local build.

The full compatibility check needs a DeepSeek Harness `0.1.6-alpha.2` checkout:

```sh
DSH_HARNESS_ROOT=/path/to/deepseek-harness pnpm run check:harness
```

This command compares every dictionary's keys, order, and placeholders with the namespace owners in Harness. It then creates an npm archive, installs it through `dsh plugin --profile web add` into a temporary `DSH_HOME`, and confirms that the assembled profile contains the `locale-ru` row. The pinned repository, version, and commit are recorded in [`harness-compatibility.json`](harness-compatibility.json), and GitHub Actions runs both checks automatically.

## Feedback

If you find an inaccurate translation or an untranslated string, [open an issue](https://github.com/AbsoluteMikhail/dsh-locale-ru/issues) with the screen, source text, and suggested wording.

## Authorship and license

The Russian localization and package code are authored and maintained by **AbsoluteMikhail** and released under the [MIT License](LICENSE).

DeepSeek Harness is a separate DeepSeek project. Its original copyright and license notice are preserved in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). This repository is an independent community project and does not claim official endorsement by DeepSeek.

The projects [GooDAnDReaDY/dsh-russian-lang](https://github.com/GooDAnDReaDY/dsh-russian-lang) and [warment/deepseek-harness-locale-ru](https://github.com/warment/deepseek-harness-locale-ru) were reviewed to compare approaches. Their source files and translations are not included in this package.
