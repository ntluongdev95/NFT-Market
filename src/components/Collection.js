import React from 'react'
import '../styles/collection.scss'
function Collection() {
    const collections =[{id:1,image:'https://opensea.io/static/images/categories/art.png',title:'Art'},
    {id:2,image:'https://opensea.io/static/images/categories/collectibles.png',title:'Colectibles'},
    {id:3,image:'https://opensea.io/static/images/categories/domain-names.png',title:'Domain Name'},
    {id:4,image:'https://opensea.io/static/images/categories/music.png',title:'Music'},
    {id:5,image:'https://opensea.io/static/images/categories/photography-category.png',title:'Photography'},
    {id:6,image:'https://opensea.io/static/images/categories/sports.png',title:'Sport'},
    {id:7,image:'https://opensea.io/static/images/categories/trading-cards.png',title:'Trading Cards'},
    {id:8,image:'https://opensea.io/static/images/categories/utility.png',title:'Utility'},
    {id:9,image:'https://opensea.io/static/images/categories/virtual-worlds.png',title:'Virtual Worlds'}
]
    return (
        <div className='collection__wrapper'> 
            <h1 className='collection__h1'>Browse by category</h1>
            <div className='collection__grid'>
                {collections.map((c)=>(
                <div key={c.id} className='collection__card'>
                    <img className='collection__image' src={c.image} alt='' />
                    <div className='collection__title'>{c.title}</div>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default Collection
