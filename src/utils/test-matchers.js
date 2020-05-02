/* eslint-disable react/forbid-foreign-prop-types */
// taken from https://github.com/primer/components/blob/master/src/utils/test-matchers.js
import 'jest-styled-components';

const stringify = (d) => JSON.stringify(d, null, '  ');
/**
 * These are props that styled-system aliases for backwards compatibility.
 * For some reason, they don't show up in our toImplementSystemProps() matcher,
 * so we skip over them.
 */
const ALIAS_PROP_TYPES = ['w', 'align', 'justify', 'wrap'];

// eslint-disable-next-line no-undef
expect.extend({
  toImplementSystemProps(Component, propNames) {
    const propKeys = new Set(Object.keys(Component.propTypes));
    const expectedPropKeys = Object.keys(propNames.propTypes);
    const missing = expectedPropKeys.filter((key) => !propKeys.has(key))
      .filter((key) => !ALIAS_PROP_TYPES.includes(key));
    return {
      pass: missing.length === 0,
      message: () => `Missing prop${missing.length === 1 ? '' : 's'}: ${stringify(missing)}`,
    };
  },
});
