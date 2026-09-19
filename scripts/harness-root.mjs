import { access, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPOSITORY_ROOT = fileURLToPath(new URL('../', import.meta.url))

async function isHarnessRoot(candidate) {
  try {
    const manifest = JSON.parse(await readFile(resolve(candidate, 'package.json'), 'utf8'))
    await access(resolve(candidate, 'apps/cli/src/bin.ts'))
    return manifest.name === '@deepseek-ai/dsh-root'
  } catch {
    return false
  }
}

/** Resolve the Harness checkout used by compatibility checks. */
export async function resolveHarnessRoot(argument = process.argv[2]) {
  const candidates = [
    argument,
    process.env.DSH_HARNESS_ROOT,
    resolve(REPOSITORY_ROOT, '.harness'),
    resolve(dirname(REPOSITORY_ROOT), 'deepseek-harness'),
    resolve(dirname(REPOSITORY_ROOT), 'Malena-harness'),
  ].filter(Boolean).map(candidate => resolve(candidate))

  for (const candidate of new Set(candidates)) {
    if (await isHarnessRoot(candidate)) return candidate
  }
  throw new Error('Harness checkout not found. Set DSH_HARNESS_ROOT or pass its path as the first argument.')
}
