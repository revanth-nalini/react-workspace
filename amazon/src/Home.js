import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt="" />

            <div className="home__row">
                <Product 
                    id="123456"
                    title="Fossil Gen 5 Carlyle HR Smartwatch  (Black Strap, Free Size)"
                    price={250.25}
                    rating={4}
                    image="https://www.kindpng.com/picc/m/247-2470992_fossil-smartwatch-gen-5-hd-png-download.png"
                />                   
                <Product 
                    id="123456"
                    title="Sony WH-1000XM3 Wireless Noise Cancelling Headphones"
                    price={349}
                    rating={4}
                    image="https://www.sony.co.in/image/134a2eefe22c3000f28cf57296b6bcb5?fmt=png-alpha&wid=240"
                />             
            </div>

            <div className="home__row">
                <Product 
                    id="123456"
                    title="Asus ROG Phone 3 (Black, 128 GB)  (12 GB RAM)"
                    price={655.00}
                    rating={4}
                    image="https://www.asus.com/media/global/products/21csrbgrtysfwbyq/P_setting_fff_1_90_end_600.png"
                />                
                <Product 
                    id="123456"
                    title="Alienware Core i9 10th Gen - (32 GB/1 TB SSD/8 GB Graphics/NVIDIA Geforce RTX 2080) m15R3 Gaming Laptop  (15.6 inch, Lunar Light)"
                    price={2499.00}
                    rating={5}
                    image="https://i.dell.com/sites/csimages/Video_Imagery/all/aw-m15-hd-rollupimage.png"
                />
                <Product 
                    id="123456"
                    title="Apple iPad Pro 2020 (4th Generation) 6 GB RAM 128 GB ROM 12.9 inch with Wi-Fi Only (Space Grey)"
                    price={1499.00}
                    rating={4}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-202003_FMT_WHH?wid=2000&hei=2000&fmt=png-alpha&qlt=80&.v=1583459012654"
                />                
            </div>

            <div className="home__row">
                <Product 
                    id="123456"
                    title="Sony Bravia 138.8 cm (55 Inches) 4K UHD Certified Android OLED TV KD-55A8F (Black) (2018 model)"
                    price={2500.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81w9K%2Bv%2BcPL._SL1500_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
