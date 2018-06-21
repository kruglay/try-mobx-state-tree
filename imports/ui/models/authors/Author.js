import {types, applySnapshot} from 'mobx-state-tree'

export const Author = types.model('Author', {
	_id: types.identifier(),
	name: types.string,
	age: types.number,
})
