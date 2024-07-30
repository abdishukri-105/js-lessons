function deepEqual(a, b) {
    // Check if `a` and `b` are strictly equal (same value or same object reference)
    if (a === b) return true;
  
    // Check if either `a` or `b` is not an object or is null (special case for null)
    if (a == null || b == null || typeof a !== "object" || typeof b !== "object") return false;
  
    // Get the keys (property names) of both objects
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    // Check if both objects have the same number of properties
    if (keysA.length !== keysB.length) return false;
  
    // Check if all properties of `a` are present in `b` and have equal values
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    // If all checks pass, the objects are deeply equal
    return true;
  }
  