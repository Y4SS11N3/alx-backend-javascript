/**
 * Export a const instance of WeakMap
 */
export const weakMap = new WeakMap();

/**
 * Queries an API endpoint and tracks the number of calls.
 * @param {Object} endpoint - The API endpoint object.
 * @throws {Error} When the endpoint has been queried 5 or more times.
 * @throws {TypeError} When the endpoint is not a valid object.
 */
export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null || Array.isArray(endpoint)) {
    throw new TypeError('Endpoint must be an object');
  }
  if (!Object.prototype.hasOwnProperty.call(endpoint, 'protocol')
      || !Object.prototype.hasOwnProperty.call(endpoint, 'name')) {
    throw new TypeError('Endpoint must have protocol and name properties');
  }
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
