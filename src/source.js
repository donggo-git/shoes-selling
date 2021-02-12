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
        name: "adidas",
        img: "https://pngimg.com/uploads/adidas/adidas_PNG18.png"
    },
    {
        name: "converse",
        img: "https://th.bing.com/th/id/OIP.MZKXKtx_ZwnLovVZ3PBiYAHaFS?pid=Api&rs=1"
    }
]
export { source, logo }