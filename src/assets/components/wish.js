const getwishBooks =()=>{
    const  storewishBooks = localStorage.getItem('book-wish-item')
    if(storewishBooks){
        return JSON.parse(storewishBooks)

    }
    return[];
}

const saveInTheWishStore = bookId =>{
    const storeWishBook=getwishBooks()
    
    const checkWishes =storeWishBook.find(savewishId=>savewishId === bookId)
    if(!checkWishes){
        storeWishBook.push(bookId)
        localStorage.setItem('book-wish-item',JSON.stringify
        (storeWishBook))
    
    }
    }
    
    export{ getwishBooks, saveInTheWishStore}