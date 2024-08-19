    const Products =[
        {
            name:"Mac",
            image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666'
        },
        {
            name:"iPhone",
            image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1692971740071'
        },
        {
            name:"iPad",
            image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875'
        },
        {
            name:'Apple Watch',
            image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=400&hei=260&fmt=png-alpha&.v=1693703814407'
        },
        {
            name:'AirPods',
            image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885'
        },
        {
            name:'AirTag',
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000"
        },
        {
            name:'Apple Tv 4K',
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484"
        },
        {
            name:'HomePod',
            image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654'
        },
        {
            name:'Accessories',
            image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202403?wid=400&hei=260&fmt=png-alpha&.v=1707850611597'
        }
    ];

    const Card = [
        {
            name:'iPhone 15',
            des:'Newphoria',
            cost:'From ₹3320.00/mo. for 24 mo.with No Cost EMI or ₹79900.00',
            image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692719973220'
        },
        // {
        //     name:'IPAD PRO',
        //     des:'Thinpossible.',
        //     cost:'From ₹99900.00',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816'
        // },
        // {
        //     name:'PRIDE EDITION BRAIDED SOLO LOOP',
        //     des:'Let your night shine.',
        //     cost:'₹9500.00§',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-pride-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1714472685718'
        // },
        // {
        //     name:'MACBOOK AIR',
        //     des:'Designed to go places.',
        //     cost:'From ₹99900.00§',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595'
        // },
        // {
        //     name:'IPAD AIR',
        //     des:'Fresh Air',
        //     cost:'From ₹59900.00§',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877'
        // },
        // {
        //     name:'APPLE PENCIL PRO',
        //     des:'Engineered for limitless creativity.',
        //     cost:'₹11900.00§',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-apple-pencil-202405?wid=800&hei=1000&fmt=png-alpha&.v=1716327768944'
        // },
        // {
        //     name:'APPLE WATCH SERIES 9',
        //     des:'Smarter, Brighter, Miightier.',
        //     cost:'From ₹49900.00§',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s9-202309_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693501324197'
        // },
        // {
        //     name:'IPHONE 15 PRO',
        //     des:'Titanium',
        //     cost:'From ₹5621.00/mo for 24 mo. With No Cost EMI or ₹134900.00',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844'
        // },
        // {
        //     name:'APPLE WATCH UITRA 2',
        //     des:'Next-Level adventure.',
        //     cost:'From ₹89900.00',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202309_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693861933617'
        // },
        // {
        //     name:'MACBOOK PRO',
        //     des:'Mind-blowing. Head-turing.',
        //     cost:'From ₹169900.00',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202310?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1696964122967'
        // },
        // {
        //     name:'APPLE WATCH SE',
        //     des:'A great deal to love.',
        //     cost:'From ₹29900.00',
        //     image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-se-202403_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1708726166580'
        // }
    ];

// export default Products;
export {Products, Card};