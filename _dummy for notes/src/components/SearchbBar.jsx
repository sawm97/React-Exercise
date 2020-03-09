import React from 'react'
import axios from 'axios'

class SearchBar extends React.Component {

    state = {images : []}

    onSubmitForm = (event) => {
        // Agar halaman tidak merefresh / reload
        event.preventDefault()

        // Akses Unsplash API
        // Setelah melakukan request, akan running function 'then'
        // 'then' meneriman function dengan satu parameter 'res'
        // 'res' akan berisi 'respon' dari API
        // Data yang kita mau akan berada di property 'data' dari object 'res'
        // Data akan ada di 'res.data'
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID vtWswNhUKtDjbhj_VxOiVU_hD6jq0mcXGHAavwm0IsQ'
                },

                params: {
                    query: 'cat',
                    per_page: 15
                }
            }
        ).then((res) => {this.setState({ images: res.data }) })

        // setState digunakan untuk mengupdate 'state'

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm} className='form-group'>
                    <input className='form-control' type="text"/>
                </form>
            </div>
        )
    }
}

export default SearchBar