export function selectBook(book) {
    //action creator
    //needs to return an action. object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}