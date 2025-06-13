

const getStoreRedList=()=>{
    // readList
    const storeListstr=localStorage.getItem('read-List')
    if(storeListstr){
        const storeList= JSON.parse(storeListstr);
        return storeList;
    }
    else{
        return [];
    }

}

const addStoreReadList=(id)=>{
    const storeList = getStoreRedList();
    if(storeList.includes(id)){
        console.log(id, "already exists in the red list")
    }
    else{
        storeList.push(id);
        const storeListstr=JSON.stringify(storeList);
        localStorage.setItem('read-list',storeListstr)
        // toast('this book added')
    }
}

export {addStoreReadList, getStoreRedList}