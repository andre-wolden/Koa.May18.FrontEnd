export function getString(configVariableName) {
  if (configVariableName.indexOf("#") === 0) {
    return null;
  }
  return configVariableName;
}

export function getList(configVariableName) {
  const value = getString(configVariableName);
  if (!value) {
    return null;
  }
  return getString(configVariableName)
    .split(",")
    .map(s => s.trim());
}

export function getNumberList(configVariableName) {
  const list = getList(configVariableName);
  if (!list) {
    return null;
  }
  return list.map(s => parseInt(s, 10));
}

export function getBoolOrDefault(configVariableName, defaultValue) {
  const value = getString(configVariableName);
  if (value === null) {
    return defaultValue;
  }
  return value === "true";
}
