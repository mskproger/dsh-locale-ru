import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const PACKAGE_ID = '@absolutemikhail/dsh-locale-ru'
let definition
globalThis.window = {
  __ModuleLoader__: {
    load(value) {
      definition = value
    },
  },
}

await import(`../lib/client.js?test=${Date.now()}`)
assert.equal(definition?.id, PACKAGE_ID)
const plugin = definition.factory(() => {
  throw new Error('The locale bundle must not require another browser module at runtime')
})
assert.deepEqual(plugin.inject, ['locale'])

let language
let effectDisposer
const dictionaries = new Map()
const disposed = []
const ctx = {
  locale: {
    addLanguage(value) {
      language = value
      return () => { disposed.push('language') }
    },
    register(namespace, locale, dictionary) {
      assert.equal(locale, 'ru')
      dictionaries.set(namespace, dictionary)
      return () => { disposed.push(namespace) }
    },
  },
  effect(callback) {
    effectDisposer = callback()
  },
}
plugin.apply(ctx)

assert.deepEqual(language, { id: 'ru', label: 'Русский', fallback: 'en' })
assert.equal(dictionaries.size, 50)
assert.equal(dictionaries.get('settings')?.title, 'Настройки')
assert.equal(dictionaries.get('chat')?.['message.turnProcess.toolCalls.few'], '{count} вызова инструмента')
assert.equal(dictionaries.get('chat')?.['message.turnProcess.toolCalls.many'], '{count} вызовов инструментов')

effectDisposer()
assert.equal(disposed.length, 51)

const host = await import('../lib/index.js')
assert.equal(typeof host.apply, 'function')
host.apply()

const patch = await readFile(new URL('../cordis.patch.yml', import.meta.url), 'utf8')
assert.match(patch, /id: locale-ru\s+name: '@absolutemikhail\/dsh-locale-ru'/)

console.log(`verified ${dictionaries.size} Russian dictionaries and the installable bundle layer`)
