import React, {Component} from 'react'
import Book from '/imports/api/collecitons/books'

class BookCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _author: '',
      title: '',
      pages: ''
    }
  }

  handleChange(e) {
    const {target: {name, value}} = e

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    new Book().add(this.state, (err, res) => {
      if(!err) {
        console.log(res)
        this.setState({
          _author: '',
          title: '',
          pages: ''
        })
      }

    })
  }

  render() {
    const {title, _author, pages} = this.state
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <input
            type="text"
            required='true'
            placeholder="author"
            name="_author"
            value={_author}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div>
          <input
            type="text"
            required='true'
            placeholder="title"
            name="title"
            value={title}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div>
          <input
            type="text"
            required='true'
            placeholder="pages"
            name="pages"
            value={pages}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <button type="submit">add</button>

      </form>
    )
  }
}

export default BookCreate