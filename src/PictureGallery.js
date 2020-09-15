//Import React library
//and also the 'component' variable from inside it
import React, { Component } from 'react';

class PictureGallery extends Component {

    render() {
        return (
            <div>
                <img src="https://picsum.photos/id/293/200/200" />
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