import {types, applySnapshot} from 'mobx-state-tree'
import {Tracker} from 'meteor/tracker'

import AuthorCollection from '/imports/api/collecitons/authors'
import {Author} from '/imports/ui/models/authors/Author'

export const AuthorList = types.model('AuthorList', {
	list: types.optional(types.array(Author), [])
}).actions(self => {
	let subscription
	return {
		subscribe(params = {}) {
			Tracker.autorun(() => {
				subscription = Meteor.subscribe('authors.all')
				const list = AuthorCollection.find().fetch().map(el => {
					delete el._isNew
					return el.raw()
				})
				applySnapshot(self.list, list)
			})
		},

		update(params) {
			applySnapshot(self.list, params.list)
		},

		unsubscribe() {
			if(subscription) {
				subscription.stop()
			}
		}
	}
})