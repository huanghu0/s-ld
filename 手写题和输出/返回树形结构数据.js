// const data = [
//     { id: 1, parentId: null },
//     { id: 2, parentId: 1 },
//     { id: 3, parentId: 1 },
//     { id: 4, parentId: 2 },
//     { id: 5, parentId: 2 },
//     { id: 6, parentId: 3 }
// ];

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


// const data = [
//     { id: 1, parentId: null },
//     { id: 2, parentId: 1 },
//     { id: 3, parentId: 1 },
//     { id: 4, parentId: 2 },
//     { id: 5, parentId: 2 },
//     { id: 6, parentId: 3 }
// ];
  
// function createNode(id, data) {
//     // 去 data 中查找这个构建的 node 有哪些子节点
//     const childData = data.filter(({ parentId }) => parentId === id);
//     const node = {
//         id,
//         children: childData.reduce(
//         (acc, cur) => {
//         acc.push(createNode(cur.id, data));
//         return acc;
//         },
//         [])
//     };
//     return node;
// }

// function getTree(data){
//     // 先获取到哪个是根节点
//     const rootNodeData = data.find(({ parentId }) => parentId === null);
//     if (!rootNodeData) {
//         throw new Error('在给定的数据中找不到根节点');
//     }
//     // 从根节点开始构建节点, 递归构建成树
//     return createNode(rootNodeData.id, data);
// }

// console.log(getTree(data))
// console.log(JSON.stringify(getTree(data)));


// 多个根节点
// function getTree(data){
//     const rootNodeDataList = data.filter((item) => !item.parentId)
    
//     if(!rootNodeDataList.length) {
//         throw new Error('在给定的数据中找不到根节点');
//     }     

//     let result = []

//     result = rootNodeDataList.map((item) => {
//         const node = createNode(item,item.id,data)
//         return node
//     })

//     return result
// }

// function createNode(item,id, data) {
//     // 去 data 中查找这个构建的 node 有哪些子节点
//     const childData = data.filter(({ parentId }) => parentId === id);
//     const node = {
//         id:id,
//         name:item.name,
//         parentId:item.parentId ? item.parentId : null, 
//         children: childData.reduce((acc, cur) => {
//             acc.push(createNode(cur,cur.id, data));
//             return acc;
//         },
//         [])
//     };
//     return node;
// }




const menuOriginal = [
    { id: 7, name: "深圳市", parentId: 4 },
    { id: 1, name: "北京市" },
    { id: 2, name: "朝阳区", parentId: 1 },
    { id: 3, name: "海淀区", parentId: 1 },
    { id: 4, name: "广东省" },
    { id: 5, name: "广州市", parentId: 4 },
    { id: 8, name: "中关村", parentId: 3 },
];

const getTree = (data) => {

    let result = []

    if(!data.length) return 

    result = data.filter((item) => !item.parentId)

    if(!result.length){
        throw new Error('在给定的数据中找不到根节点');
    }

    const creatTreeData = (id,data,treeData) => {
        const child = data.filter(item => item.parentId === id)
        if(child && child.length > 0){
            treeData.children = [...child]
        }else{
            return
        }

        for(let i = 0;i < treeData.children.length;i++){
            creatTreeData(treeData.children[i].id,data,treeData.children[i])
        }
    }

    result = result.map((item) => {
        let treeData = {
            id:item.id,
            name:item.name,
            parentId: item.parentId ? item.parentId : null,
        }
        creatTreeData(item.id,data,treeData)
        return treeData
    })



    return result
}

console.log(JSON.parse(JSON.stringify(getTree(menuOriginal))))

  