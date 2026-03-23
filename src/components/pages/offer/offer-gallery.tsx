import {ReactElement} from 'react';
import {GalleryLimits} from '../../../const.ts';

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({images}: OfferGalleryProps): ReactElement {
  return (
    <div className='offer__gallery'>

      {images.slice(0, GalleryLimits.Max).map((img) => (
        <div key={img} className="offer__image-wrapper">
          <img className="offer__image" src={img} alt="Photo studio"/>
        </div>
      ))}

    </div>
  );
}

export default OfferGallery;
