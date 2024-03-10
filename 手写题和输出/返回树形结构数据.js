const data = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 3 }
];

const getTree = (data) => {
    const treeData = {
        id:null,
        children:[]
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

    creatTreeData(null,data,treeData)

    return treeData
}

console.log(getTree(data))


  