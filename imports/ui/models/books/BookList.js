import {Tracker} from 'meteor/tracker'
import {types, applySnapshot} from 'mobx-state-tree'

import stores from '/imports/ui/models/stores'
import BookCollection from '/imports/api/collecitons/books'
import AuthorCollection from '/imports/api/collecitons/authors'
import {Book} from './Book'
import {AuthorList} from '/imports/ui/models/authors/AuthorList'

export const BookList = types.model('BookList', {
	list: types.optional(types.array(Book), [])
}).actions(self => {
	let subscription
	return {
		subscribe(params = {}) {
			Tracker.autorun(() => {
				const list = BookCollection.find().fetch().map(el => el.raw()),
					authorList = AuthorCollection.find().fetch().map(el => {
						delete el._isNew
						return el.raw()
					})
				subscription = Meteor.subscribe('books.all')
				stores.authors.update({list: authorList})
				applySnapshot(self.list, list)
			})
		},

		unsubscribe() {
			if(subscription) {
				subscription.stop()
			}
		}
	}
})