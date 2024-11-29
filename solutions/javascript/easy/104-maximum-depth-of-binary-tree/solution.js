var maxDepth = function (root) {
  var checkMaxDepth = function (node) {
    if (node === null) {
      return 0;
    }

    let leftDepth = checkMaxDepth(node.left);
    let rightDepth = checkMaxDepth(node.right);

    return 1 + Math.max(leftDepth, rightDepth);
  };

  if (root === null) {
    return 0;
  }

  return checkMaxDepth(root);
};
