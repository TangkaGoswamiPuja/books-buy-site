const getSaveBooks =()=>{
    const  storeBooks = localStorage.getItem('book-item')
    if(storeBooks){
        return JSON.parse(storeBooks)

    }
    return[];
}


const saveInTheStore = bookId =>{
const storeBook=getSaveBooks()

const check =storeBook.find(saveId=>saveId === bookId)
if(!check){
    storeBook.push(bookId)
    localStorage.setItem('book-item',JSON.stringify
    (storeBook))

}
}

export{ getSaveBooks, saveInTheStore}