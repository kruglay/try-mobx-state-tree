import makeInspectable from 'mobx-devtools-mst'
import {onPatch} from 'mobx-state-tree'

import {AuthorList} from '/imports/ui/models/authors/AuthorList'

const  stores = {
	authors: AuthorList.create()
}

onPatch(stores.authors, (patch, reversePatch) => {
	console.log('In stores.authors patch:', patch)
	console.log('In stores.authors reversePatch', reversePatch)
})
makeInspectable(stores.authors)

export default stores