// AAG 22/3/'16
// method to get a tree of code owners
// (either the full tree or a particular branch)
module.exports = function (codeOwnersJson, item) {

    if (codeOwnersJson) {
        var codeOwners = require(codeOwnersJson);
    } else {
        var codeOwners = require("./code-owners.json");
    }

    if (item) {
        //then we need to find this item in the tree and return this item
        return findItem(item, codeOwners)
    } else {
        return codeOwners;
    }

    function findItem(item, treeNode) {
        if (treeNode[item]) {
            //if the item is here at this level then return it
            return treeNode[item];
        } else {
            //do we have any more sub nodes?
            if ((item.items) && (item.items.lenth > 0)) {
                //cycle though the nodes at this level calling findItem
                for (var i = 0; i < item.items.length; i++) {
                    nextItem = item.item[i];
                    if (nextItem) {
                        findItem(item, nextItem);
                    }
                }
            } else {
                //did find anything down this branch
                return null;
            }
        }
    }

}