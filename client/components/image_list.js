import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {
    const validImages = props.images.filter(image => !image.is_album);
    const RenderedImage = validImages.map((image, index) => {
        return (
            <ImageDetail key={index} image={image}/>
        );
    });

    return(
        <ul className='media-list list-group'>
            {RenderedImage}
        </ul>
    );
}

export default ImageList;