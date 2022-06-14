import React from 'react'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
  } from 'mdb-react-ui-kit';
import { Box } from '@chakra-ui/react';

const Carousel = () => {
  return (<>
<Box m={4}>

    <MDBCarousel showIndicators   touch  interval={3000} >
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://d64lkarmo2mrq.cloudfront.net/img/home/bluetooth2022.webp' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src="https://d64lkarmo2mrq.cloudfront.net/img/home/nordic2022.webp" alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://d64lkarmo2mrq.cloudfront.net/img/home/womenswatches2022.webp' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://d64lkarmo2mrq.cloudfront.net/img/home/flash-sale-banner-01.webp' alt='...' />
        </MDBCarouselItem>

      </MDBCarouselInner>
    </MDBCarousel>

</Box>
  </>

  )
}

export default Carousel