/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let res = []
    let used = new Array(wordList.length).fill(false) // 保留单词是否访问过
    let unable = new Array(wordList.length).fill(false) // 保留是否回溯过 
    if(!wordList.includes(endWord)) return res
    // 判断两个词语之间是否只相差一个字符
    const isConnect = (start,end) => {
        let count = 0
        for(let i = 0; i < start.length;i++){
            if(start[i] !== end[i]){
                count++
            }
            if(count > 1){
                break
            }
        }
        return count === 1 
    }
    const backTracking = (beginWord,endWord,wordList,path) => { // 回溯函数
        if(beginWord === endWord){ // 回溯结束条件 找到结束单词则返回
            res = [...path]
            return true
        }  
        for(let i = 0;i < wordList.length;i++){ // 回溯遍历过程 遍历wordList中要被转化的单词 每一次只能转化一个字母 
            if(used[i] || unable[i] || !isConnect(beginWord,wordList[i])){ // 如果当前wordlist中的单词 使用过了 或者 回溯过(回溯过说明该单词走不通则不需要在遍历)  或者 和beginWord相差不止一个字母则直接下一次循环
                continue
            }
            path.push(wordList[i])
            used[i] = true
            let flag = backTracking(wordList[i],endWord,wordList,path) // 回溯
            if(flag) return true // 如果找到了直接结束遍历
            path.pop()
            used[i] = false
            unable[i] = true
        }
        return 
    }
    backTracking(beginWord,endWord,wordList,[beginWord])
    return res 
};
console.log(findLadders("qa","sq",["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))