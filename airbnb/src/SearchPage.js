import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant ="outlined">Cancellation Flexibility</Button>
                <Button variant ="outlined">Type of place</Button>
                <Button variant ="outlined">Price</Button>
                <Button variant ="outlined">Rooms and beds</Button>
                <Button variant ="outlined">More filters</Button>
            </div>
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/china/shanghai/peninsula-shanghai-p-xlarge.jpg"
                location = "Shanghai, China"
                title = "The Peninsula Shanghai"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.73}
                price = "£250/ night"
                total = "$120 total"
            />
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/leadAssets/35/62/uma-by-como-3_3562601a-xlarge.jpg"
                location = "Bhutan"
                title = "COMO Uma Punakha"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.5}
                price = "£375/ night"
                total = "$150 total"
            />
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/uluwatu-xlarge.jpg"
                location = "Uluwatu, Bali, Indonesia"
                title = "Alila Villas Uluwatu"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.5}
                price = "£473/ night"
                total = "$200 total"
            />
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/china/hong-kong/upper-house-hong-kong1-xlarge.jpg"
                location = "Hong Kong"
                title = "The Upper House"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.2}
                price = "£388/ night"
                total = "$150 total"
            />
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/nihiwatu-xlarge.jpg"
                location = "Sumba, Indonesia"
                title = "Nihi Sumba"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.37}
                price = "£815/ night"
                total = "$200 total"
            />     
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/taj-mahal-palace-xlarge.jpg"
                location = "Mumbai, India"
                title = "The Taj Mahal Palace"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.39}
                price = "£59/ night"
                total = "$150 total"
            />
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/oberoi-vanyavilas-xlarge.jpg"
                location = "Rajasthan, India"
                title = "Oberoi Vanyavilas"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.44}
                price = "£262/ night"
                total = "$200 total"
            />   
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/belle-mont-farm-xlarge.jpg"
                location = "St Kitts"
                title = "Belle Mont Farm"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.52}
                price = "£326/ night"
                total = "$200 total"
            />     
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/qasr-al-sarab-xlarge.jpg"
                location = "Abu Dhabi, United Arab Emirates"
                title = "Qasr Al Sarab"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {3}
                price = "£214/ night"
                total = "$150 total"
            />
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/africa/tanzania/andbeyond-mnemba-island-tanzania-beach1-xlarge.jpg"
                location = "Mnemba Island, Tanzania"
                title = "&Beyond Mnemba Island"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.78}
                price = "£620/ night"
                total = "$200 total"
            />                 
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/africa/tanzania/singita-sasakwa-tanzania-indoor2-xlarge.jpg"
                location = "Serengeti National Park, Tanzania"
                title = "Singita Sasakwa"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {4.99}
                price = "£1,915/ night"
                total = "$200 total"
            />
            <SearchResult 
                img = "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/north-island-seychelles-xlarge.jpg"
                location = "Seychelles"
                title = "North Island Seychelles"
                description = "1 guest . 1 bedroom . 1 bed . 1.5shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star = {5}
                price = "£5,730/ night"
                total = "$200 total"
            />               
        </div>
    )
}

export default SearchPage

