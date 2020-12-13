import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Photos extends Component {

    state = {
        photos: []
    }

    async componentDidMount() {
        const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await photos.json();

        this.setState({photos: data});
    }

    render() {
        return (
            <div class="row">
                {
                    this.state.photos.map(photo => {
                        return <div class="col-sm-2">
                                <div class="card">
                                    <img src={photo.url} class="card-img-top" alt="Here goes an alt text"/>
                                    <div class="card-header">
                                        {photo.id} - {photo.title}
                                    </div>
                                </div>
                            </div>
                    })
                }
            </div>
        )
    }
}
