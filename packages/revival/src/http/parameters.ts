/**
 * Copyright (C) 2017-present Vincent Cheung
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function saveParams(
  target: any,
  metadataKey: string,
  param: {
    key?: string | undefined;
    index: number;
  }
) {
  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(param);
  } else {
    target[metadataKey] = [param];
  }
}

export function parameterDecorator(name: string, key: string) {
  return function(target: any, propertyKey: string, parameterIndex: number) {
    let metadataKey: string = `${propertyKey}_${name}_Parameters`;
    let param: {
      key: string;
      index: number;
    } = { key: key, index: parameterIndex };
    saveParams(target, metadataKey, param);
  };
}

export function parameterEmptyDecorator(
  name: string,
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  let metadataKey: string = `${propertyKey}_${name}_Parameters`;
  let param: {
    index: number;
  } = { index: parameterIndex };
  saveParams(target, metadataKey, param);
}
