const favorites = ['id-6', 'id-17'];

//  node = узел

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: [],
        },
      ],
    },
    {
      id: 'id-17',
      name: 'Products',
      nodes: [],
    },
  ],
};

export const markFavorites = (objTree, arrFavorites) => {
  const isFavorite = arrFavorites.includes(objTree.id);
  console.log(objTree.nodes);
  return {
    ...objTree,
    isFavorite,
    nodes: objTree.nodes.map(childNode => markFavorites(childNode, arrFavorites)),
  };
};

const result = markFavorites(tree, favorites);
console.log(result);
