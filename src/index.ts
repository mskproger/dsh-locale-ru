/**
 * Russian language pack, node half. The pack is a browser contribution
 * (language definition plus dictionaries over the locale service); the Host
 * has no Russian-resolved runtime state of its own, so this entry is a mount
 * placeholder. The one host-plane asset, the opt-in permission-presets
 * restatement in cordis.patch.yml, applies as a config layer when a profile
 * lists this package among its bundles — no code runs here.
 */

/** Host plugin body — no host-half contribution. */
export function apply(): void {}
