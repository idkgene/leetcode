var simplifyPath = function(path) {
    const DOT = '.';
    const SLASH = '/';
    const DOUBLE_DOT = '..';

    if (path === SLASH) return SLASH;
    if (path === "") return SLASH;

    const parts = path.split(SLASH).filter(Boolean);
    const stack = new Array(parts.length);
    let stackSize = 0;

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];

        if (part === DOT) continue;

        if (part === DOUBLE_DOT) {
            if (stackSize > 0) stackSize--;
            continue;
        }

        stack[stackSize++] = part;
    }

    if (stackSize === 0) return SLASH;

    let result = SLASH;
    for (let i = 0; i < stackSize; i++) {
        result += stack[i];
        if (i < stackSize - 1) result += SLASH;
    }

    return result;
};
