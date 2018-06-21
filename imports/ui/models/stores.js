import makeInspectable from 'mobx-devtools-mst'
import {onPatch, getIdentifier} from 'mobx-state-tree'

import {AuthorList} from '/imports/ui/models/authors/AuthorList'
import {BookList} from '/imports/ui/models/books/BookList'

const  stores = {
	authors: AuthorList.create(),
	books: BookList.create(),
}

window.getIdentifier = getIdentifier
onPatch(stores.authors, (patch, reversePatch) => {
	console.log('In stores.authors patch:', patch)
	console.log('In stores.authors reversePatch', reversePatch)
})
makeInspectable(stores.authors)

onPatch(stores.books, (patch, reversePatch) => {
	console.log('In stores.books patch:', patch)
	console.log('In stores.books reversePatch', reversePatch)
})
makeInspectable(stores.books)

export default stores