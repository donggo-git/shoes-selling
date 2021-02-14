let source = [
    {
        name: 'Nike air Zoom Speed',
        price: 52.97,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/78f21de6-bdcb-4c96-909c-076cbca1e051/air-zoom-speed-little-big-kids-running-shoe-bW4W4n.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/baea376c-38ac-477b-8151-6cf60c1194da/air-zoom-speed-little-big-kids-running-shoe-bW4W4n.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-f1a082bb-8d99-4617-9df5-00ad81d1e01d/air-zoom-speed-little-big-kids-running-shoe-bW4W4n.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ea3bae84-bf2a-41a4-b63a-d1e9080c90d6/air-zoom-speed-little-big-kids-running-shoe-bW4W4n.jpg'],
        color: ['#00fff3', 'linear-gradient(#030303,#9e9e9e)', 'linear-gradient(#030303,#f00)', '#fff'],
        detail: 'Look fast and feel faster in the Nike Air Zoom Speed. Our iconic Zoom Air pods are made just right for kids. So lightweight all around and cushioned where needed, you’ll be zooming around the neighborhood and track in no time.'
    },
    {
        name: 'Nike renew run',
        price: 72.97,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/78f21de6-bdcb-4c96-909c-076cbca1e051/air-zoom-speed-little-big-kids-running-shoe-bW4W4n.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/baea376c-38ac-477b-8151-6cf60c1194da/air-zoom-speed-little-big-kids-running-shoe-bW4W4n.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-f1a082bb-8d99-4617-9df5-00ad81d1e01d/air-zoom-speed-little-big-kids-running-shoe-bW4W4n.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ea3bae84-bf2a-41a4-b63a-d1e9080c90d6/air-zoom-speed-little-big-kids-running-shoe-bW4W4n.jpg'],
        color: ['#00fff3', 'linear-gradient(#030303,#9e9e9e)', 'linear-gradient(#030303,#f00)', '#fff'],
        detail: 'Look fast and feel faster in the Nike Air Zoom Speed. Our iconic Zoom Air pods are made just right for kids. So lightweight all around and cushioned where needed, you’ll be zooming around the neighborhood and track in no time.'

    },
    {
        name: 'Nike Air Max',
        price: 150,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/mu1gbwho6hi6yxrm0hed/air-max-270-mens-shoe-qVk0Vw.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/air-max-270-mens-shoe-qVk0Vw.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoe-qVk0Vw.jpg'],
        color: ['#ff1010', '#333', '#fff'],
        detail: 'This Nike Air Max 270 boasts red all over while still delivering everything that makes this shoe famous. The huge Max Air unit and sock-like fit bring modern comfort to a shoe inspired by the 91 Air Max 180.'
    },
    {
        name: 'KD Trey 5 VII',
        price: 63.97,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d186384-a02c-4f3d-91cd-20c44fcbc1a8/kd-trey-5-viii-basketball-shoe-V8GMDr.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-de65c126-49f5-446e-b5ac-595e3b348884/kd-trey-5-viii-basketball-shoe-V8GMDr.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ff9cea12-3125-4dda-8cac-dcbc460589ec/kd-trey-5-viii-basketball-shoe-V8GMDr.jpg'],
        color: ['#0c0094', '#707070', '#333'],
        detail: 'Kevin Durant goes all out every play and needs his shoes to keep up. The KD Trey 5 VIII features soft, responsive foam cushioning paired with multidirectional traction for control. The mid-top design with perforated foam pods helps you feel secure around the ankle.'
    },
    {
        name: 'Nike Air Zoom Winflo 7',
        price: 90,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ab7e7f21-56bf-4117-b487-6ab25a1f557f/air-zoom-wio-7-womens-running-shoe-16bfpz.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-1cfcb008-d0ca-4e91-8602-dcf216e554bd/air-zoom-wio-7-womens-running-shoe-16bfpz.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-5b977a37-d49a-460a-a295-d2066685875f/air-zoom-wio-7-womens-running-shoe-16bfpz.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-c6280e61-4f20-40ae-8b12-612ea28ad0ed/air-zoom-wio-7-womens-running-shoe-16bfpz.jpg'],
        color: ['linear-gradient(#fff,#fc5f01)', '#ffa2b8', 'linear-gradient(#fff,#333)', "linear-gradient(#333,#ff0fc3)"],
        detail: 'The Nike Air Zoom Winflo 7 helps keep you running with an updated mesh design and increased foam. Made with everyday runs in mind, its cushioned feel helps you stay focused on the path ahead.'
    },
    {
        name: 'FUSE Training Shoes',
        price: 90,
        brand: "Puma",
        img: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194419/02/sv01/fnd/PNA/fmt/png/FUSE-Training-Shoes',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194419/03/sv01/fnd/PNA/fmt/png/FUSE-Training-Shoes',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194419/04/sv01/fnd/PNA/fmt/png/FUSE-Training-Shoes'],
        color: ['linear-gradient(#15007b,#9f6e2f)', '#fff', 'linear-gradient(#333,#fff,##f6583e)'],
        detail: "Product runs in men’s sizes only. Women should order 1.5 sizes down from their usual size."
    },
    {
        name: 'Nike Free TR8',
        price: 100,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/xmqatsphwtelzrgdc3va/free-tr8-womens-gym-hiit-cross-training-shoe-9O38Er.jpg',
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ynyap3rtzthsgxkrfygv/free-tr8-womens-gym-hiit-cross-training-shoe-9O38Er.jpg'],
        color: ['linear-gradient(#fff,#333)', '#333'],
        detail: "The Women's Gym/ HIIT / Cross Training Shoe has a stronger heel than ever before, plus extra cushioning that hugs and contains your foot.The sole is still unbelievably flexible, offering a natural, lightweight feel and lateral support through every rep."
    },
    {
        name: 'Clyde All-Pro Basketball Shoes',
        price: 130,
        brand: "Puma",
        img: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194039/01/sv01/fnd/PNA/fmt/png/Clyde-All-Pro-Basketball-Shoes',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194039/02/sv01/fnd/PNA/fmt/png/Clyde-All-Pro-Basketball-Shoes',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194039/03/sv01/fnd/PNA/fmt/png/Clyde-All-Pro-Basketball-Shoes'],
        color: ['linear-gradient(#fff,#55a8ff,#fa7e7e)', 'linear-gradient(#333,#ff0083)', 'linear-gradient(#fff,#ff0083)'],
        detail: "The legendary Clyde franchise is taking style and performance to a new level with the Clyde All-Pro. We’re soaring into this season with this lightweight pair of kicks that ar... "
    },
    {
        name: 'Speedcat OG+ Sparco Motorsport Shoes',
        price: 100,
        brand: "Puma",
        img: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/306725/04/sv01/fnd/PNA/fmt/png/Speedcat-OG+-Sparco-Motorsport-Shoes',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/306725/02/sv01/fnd/PNA/fmt/png/Speedcat-OG+-Sparco-Motorsport-Shoes',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/306725/01/sv01/fnd/PNA/fmt/png/Speedcat-OG+-Sparco-Motorsport-Shoes'],
        color: ['#fffb01', '#0086e9', 'linear-gradient(#fff,#333)'],
        detail: "Born for speed. Raised in style. The Speedcat returns 20 years later for its second season, backed by motorsport legends Sparco. In 1999, PUMA partnered with Sparco to bring t..."
    },
    {
        name: 'ULTRA 1.2 FG/AG ',
        price: 200,
        brand: "Puma",
        img: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/106299/02/sv01/fnd/PNA/fmt/png/ULTRA-1.2-FG/AG-Soccer-Cleats',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/106299/01/sv01/fnd/PNA/fmt/png/ULTRA-1.2-FG/AG-Soccer-Cleats'],
        color: ['linear-gradient(#ff1313,#fffb13)', '#33a3f5'],
        detail: "Classic innovation. We gave our latest speed demon, the lightweight ULTRA 1.2, a very classic PUMA touch. The PUMA ULTRA 1.2 features next level craftsmanship with a lightweig..."
    },
    {
        name: 'Climacool Vento HEAT.RDY Shoes',
        price: 140,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/w_600,f_auto,q_auto/49be886fa3c249dfb268ac800093390f_9366/Climacool_Vento_HEAT.RDY_Shoes_Yellow_FZ1717_01_standard.jpg'],
        color: ['#a9f600'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        name: 'Kaptir Super Shoes',
        price: 81,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/w_600,f_auto,q_auto/b91744ddda684786830cac55009b55be_9366/Kaptir_Super_Shoes_Blue_FZ2861_01_standard.jpg',
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/3bd42a723c014fd1aa49ac21012dec59_9366/Kaptir_Super_Shoes_Black_FZ2869_01_standard.jpg',
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/69fe2d00c647458fa5a0ac640104ea68_9366/Kaptir_Super_Shoes_Grey_FZ2868_01_standard.jpg'],
        color: ['linear-gradient(#a9f600,#333)', 'linear-gradient(#ff4e09,#333)', 'linear-gradient(#bababa,#0097e0)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        name: 'NMD_R1 Shoes',
        price: 126,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/w_600,f_auto,q_auto/872299528a554356909cac4400f4ef29_9366/NMD_R1_Shoes_Grey_FY5730_01_standard.jpg',
            'https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/178b0dce25ad4f26a04bac0200ac3b99_9366/NMD_R1_Shoes_Black_FY5727_01_standard.jpg'],
        color: ['linear-gradient(#b8b8b8,#ff6c01)', 'linear-gradient(#333,#ff6c01)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        name: 'NMD_R1 Primeknit Shoes',
        price: 180,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/w_600,f_auto,q_auto/72c6639cdf0941abade4ac6b011dd053_9366/NMD_R1_Primeknit_Shoes_Black_G57941_01_standard.jpg',
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/3ae212fd39474d459222ac6b011d8a42_9366/NMD_R1_Primeknit_Shoes_Grey_G57939_01_standard.jpg'],
        color: ['linear-gradient(#333,#5d5d5d)', 'linear-gradient(#69e900,#fe50db)'],
        detail: "The NMD series turns five, and in true NMD fashion, we're celebrating by making some major noise. Visually, that is. Volume and location is all you. These adidas shoes combine inspiration from the most iconic NMDs and create a bold statement with standout graphics. Continue the legacy with signature NMD plugs and a flexible sock-like upper. Energy-returning cushioning keeps you comfortable all day. The party is already off to a solid start with these ones."
    },
    {
        name: 'Skechers Max Cushioning Premier - Vantage',
        price: 89,
        brand: "Skechers",
        img: ['https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw0aff4dd0/images/large/54450_NVY.jpg?sw=800',
            'https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw5d2214c4/images/large/54450_GYRD.jpg?sw=800'],
        color: ['linear-gradient(#333,#006bdc)', 'linear-gradient(#dcdcdc,#cb0000)'],
        detail: "This athletic lace-up sneaker features a breathable lightweight engineered mesh upper with an Air-Cooled Goga Mat™ insole and an ULTRA GO® cushioned midsole."
    }
    , {
        name: 'Skechers Max Cushioning Elite - Safeguard',
        price: 95,
        brand: "Skechers",
        img: ['https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw25653fbe/images/large/220063_WHT.jpg?sw=800',
            'https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw47c15ca7/images/large/220063_BKBL.jpg?sw=800'],
        color: ['linear-gradient(#fff,#ff5400,#333)', 'linear-gradient(#333,#0070ff,#ff5400)'],
        detail: "This athletic lace-up sneaker features a breathable lightweight engineered mesh upper with an Air-Cooled Goga Mat™ insole and an ULTRA GO® cushioned midsole."
    },
    {
        name: 'Skechers Arch Fit - Paradyme',
        price: 85,
        brand: "Skechers",
        img: ['https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw4b5f49d1/images/large/232041_WBK.jpg?sw=1120',
            'https://www.skechers.com/dw/image/https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw2fc5c20e/images/large/232041_RDBK.jpg?sw=1120'],
        color: ['linear-gradient(#dedede,#333)', 'linear-gradient(#d10000,#333)'],
        detail: "Athletic engineered knit mesh fabric and smooth synthetic upper in a lace up sporty casual comfort walking sneaker with Arch Fit removable supportive cushioning insole system and cushioned midsole. "
    }
]
let logo = [
    {
        name: "Nike",
        img: "https://thedrop101.files.wordpress.com/2014/11/nike_swoosh_logo_black_original-1.jpg"
    },
    {
        name: "Puma",
        img: "https://logorealm.com/wp-content/uploads/2017/03/puma-square.jpg"
    },
    {
        name: "Adidas",
        img: "https://pngimg.com/uploads/adidas/adidas_PNG18.png"
    },
    {
        name: "Skechers",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAEOANkDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAQQFAgMI/8QARhAAAQQBAgMFBAYFCQgDAAAAAQACAwQFBhESITEHE0FRYRQicZEVF0KBlNMjMlVigiRSVHKisbLR4RYnVoSSocHSRlPD/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/ALbREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAReJJI4mOkkexkbBu58jg1rR5lzjsuPY1Zo+qdps7iwRyIZZjlIPqIiSg7aKLu1/oFm++cr/ww2nf4YyvH1idn37bZ+EvfkoJWiif1idn37aZ+Ev8A5Kz9YnZ9+22fhL/5KCVoop9YnZ9+24/wt78lPrD7Pv23H+FvfkoJWiio7QdAHpm4j6ezXd/l3S3amrtH3nBlbNUDIeTWSydw5xPgBOGlB3UWAQQCOh5jZZQEREBERAREQEREBERAREQEREBQXWOvK+Cc/HY5kdjLcI710nvQU+IbjvANiX7cw3cbdSfB0g1PmRgcJkciOEzRxiKo13R1mU93HuPIE8R9AVQWNo3c/mKdFsrnWslacZ53kueAd5Zp3E9SBxO+KlqxJsNg9U69sPu5XI2hjYpS19ib3g94O7oqcHKIbeJ4dhv4nkrGq6N0HhK7ppMfTcyBnHNbyxbOQBy43un/AEY+5oUho0qmNp1KNSMR1qsTIYGDwa0bbk+Z6k+J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e56uPt6St5bUOSypoxYXDwyUMFh5Q1oc1hL5Joqjtvecd9uXV5/morXxHZ/qevkqFq/RqS1achtGCO7GTPJCwyQxO4mbcJdw8XI8t/v17egu0C9ZuW7ENF09uaWeVwutHvyOLjwjg+S142PEePoW5hihqzIfS+V4nPq16mGrvkFeuzfZo4/0jgPVik1SlhMvrCvJiK9Wvp/TVc2LNqmwRwW7hbuGmZuwcG+PM8mHn7yaNunH2uUKlSnVx2m2VqkMdeFokdyZGOEbni6+J9V51Fh+0PN4vF4+RmPll43Xsi6OeOCISnibFXibsXFrBuSSeZP7q+Gk8Nhc9ktR5+bHVRhhOcfh6joWtr91ABx2DERtxHZvPzLlHMXavDTeuLFPvoIpbUk1621pG8TiyKvRrnru4ucZCP1W7DrJu0JXoTR+Twt+/kctFXbMK7K1EQzNmDRI4mZxIA2J2aB964Oc0Hqy1mM1bqQUjWtX7NiEyW2McWSvLxu3h5dV5s3J6mj8C5zXsYazaGChm3Y6a3OD7XlJWnkGMDnMg36cRf8AabwdXD1sBjYaDDHpjMTVu6irtxTZbGVt5EnvIiJZXcAG4c5zjyaBvyAQb1al2l43EYDG0KmIe2rSmr3G3ZmSMe/v392GkAHYM2+Z8l8/Zu1Pr9DaRHk4MZuD5jcrlZo5uLUWhchl4J69ufLsa/iswS1GRd/E1sNdkDjsxgd7znc3Ek9BszzkLUuZyWqNU+yUruF05GMbTr5ATOhsuBHHJG1nInckgkHk8eW4D4UezXUdy4H5mWnWqSSmS2a83fTyhzuJzYw1gYN+Y335b9CrOxti4bF2m7H+y0qXBDSe3iDXxs9xoG/LoARt0HxXA0Fimw07Wee6ITah7u22vWjdFWpVwXFkETCT03O5+HluZohoiIiCIiAiIgIiICIiAiIgIiICEb8jsQiIMbAcgAAnC3+a35BZRBjhB6gH4802G22w28vBZRBjYeQThb02G3wWUQY4W+Q+ScLfIfJZRBjhb4gfeE4W+Q+SyiDG23TZZREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf//Z"
    }
]
export { source, logo }