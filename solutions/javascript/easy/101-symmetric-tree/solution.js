var isSymmetric = function (root) {
  return isSymmetricHelper(root, root);
};

var isSymmetricHelper = function (node1, node2) {
  if (node1 === null && node2 === null) {
    return true;
  }
  if (node1 === null || node2 === null || node1.val !== node2.val) {
    return false;
  }
  return (
    isSymmetricHelper(node1.left, node2.right) &&
    isSymmetricHelper(node1.right, node2.left)
  );
};
