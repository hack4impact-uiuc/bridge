import themeGet from '@styled-system/theme-get';
import * as styledSystem from 'styled-system';
import theme from './theme';


const { get: getKey } = styledSystem;

export const get = (key) => themeGet(key, getKey(theme, key));

export const getOrDefault = (val, def) => (val !== undefined && val !== null ? val : def);

export const lodashGet = (object, path, defaultVal) => {
  const PATH = Array.isArray(path)
    ? path
    : path.split('.').filter((i) => i.length);
  if (!PATH.length) {
    return object === undefined ? defaultVal : object;
  }
  if (object === null || object === undefined || typeof (object[PATH[0]]) === 'undefined') {
    return defaultVal;
  }
  return lodashGet(object[PATH.shift()], PATH, defaultVal);
};
