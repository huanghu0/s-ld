const data = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 3 }
];

// const getTree = (data) => {
//     const treeData = {
//         id:null,
//         children:[]
//     }
//     const creatTreeData = (id,data,treeData) => {
//         const child = data.filter(item => item.parentId === id)
//         if(child && child.length > 0){
//             treeData.children = [...child]
//         }else{
//             return
//         }

//         for(let i = 0;i < treeData.children.length;i++){
//             creatTreeData(treeData.children[i].id,data,treeData.children[i])
//         }
//     }

//     creatTreeData(null,data,treeData)

//     return treeData
// }

function createNode(id, data) {
  // 去 data 中查找这个构建的 node 有哪些子节点
  const childData = data.filter(({ parentId }) => parentId === id);
  const node = {
    id,
    children: childData.reduce(
    (acc, cur) => {
      acc.push(createNode(cur.id, data));
      return acc;
    },
    [])
  };
  return node;
}

function getTree(data){
  // 先获取到哪个是根节点
  const rootNodeData = data.find(({ parentId }) => parentId === null);
  if (!rootNodeData) {
    throw new Error('在给定的数据中找不到根节点');
  }
  // 从根节点开始构建节点, 递归构建成树
  return createNode(rootNodeData.id, data);
}

console.log(getTree(data))
  