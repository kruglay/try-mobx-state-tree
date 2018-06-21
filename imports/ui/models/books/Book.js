import {types, applySnapshot} from 'mobx-state-tree'

import stores from '/imports/ui/models/stores'
import {Author} from '/imports/ui/models/authors/Author'

export const Book = types.model('Book', {
	_id: types.identifier(),
	_author: types.maybe(types.reference(Author,
		{
		get(identifier /* string */, parent: any /*Store*/) {
			const author = stores.authors.list.find(el => el._id === identifier)
			return author ? author : ''
		},
	}
	), ''),
	title: types.string,
	pages: types.number,
})
