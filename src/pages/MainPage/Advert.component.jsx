import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const advertData = [
    {
        id: 1,
        paragraph: 'Company 1 Advert Will Be Here Soon'
    },
    {
        id: 2,
        paragraph: 'Company 2 Advert Will Be Here Soon'
    },
    {
        id: 3,
        paragraph: 'Company 3 Advert Will Be Here Soon'
    },
    {
        id: 4,
        paragraph: 'Company 4 Advert Will Be Here Soon'
    },
    {
        id: 5,
        paragraph: 'Company 5 Advert Will Be Here Soon'
    }
]

const Advert = () => {
    return (
        <div className='adDiv'>
            <Swiper 
            slidesPerView={1}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="adSwiper"
            >
                {advertData.map((advert) => (
                    <SwiperSlide key={advert.id}><h3 className='adCompany'>{advert.paragraph}</h3></SwiperSlide>
                ))}
            </Swiper> 
       </div>   
    )
}


export default Advert