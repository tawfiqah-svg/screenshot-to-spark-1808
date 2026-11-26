/** Browsers use different messages when a lazy route's module cannot download. */
export function isModuleLoadError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  return /importing a module script failed|failed to fetch dynamically imported module|error loading dynamically imported module|loading chunk .+ failed/i.test(error.message);
}