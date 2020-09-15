//Import React library
//and also the 'component' variable from inside it
import React, { Component } from 'react';

class PictureGallery extends Component {

    state = {
        photoWidth: 200,
        photoHeight: 200
    }
    render() {
        return (
            <div>
                <img src="https://picsum.photos/id/293/200/200" />
                <img src={`https://picsum.photos/id/203/${this.state.photoWidth}/${this.state.photoHeight}`} />
                <img src="https://picsum.photos/id/122/200/200" />
                <img src="https://picsum.photos/id/23/200/200" />
                <img src="https://picsum.photos/id/405/200/200" />
                <img src="https://picsum.photos/id/500/200/200" />
                <img src="https://picsum.photos/id/355/200/200" />
            </div>
        );
    }
}

export default PictureGallery;