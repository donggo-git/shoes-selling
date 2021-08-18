let source = [

    {
        id: 'Y',
        name: 'NMD_R1 Shoes',
        price: 126,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/w_600,f_auto,q_auto/872299528a554356909cac4400f4ef29_9366/NMD_R1_Shoes_Grey_FY5730_01_standard.jpg',
            'https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/178b0dce25ad4f26a04bac0200ac3b99_9366/NMD_R1_Shoes_Black_FY5727_01_standard.jpg'],
        color: ['linear-gradient(#b8b8b8,#ff6c01)', 'linear-gradient(#333,#ff6c01,#3396ff)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        id: 'Z',
        name: 'Ultraboost 21 Shoes',
        price: 180,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/707bd9b6c1a44ce7bb58ac77012fcb2e_9366/Ultraboost_21_Shoes_Grey_FY0375_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/429a510e09fe4039ba33ac770135d8be_9366/Ultraboost_21_Shoes_White_FY0377_01_standard.jpg'],
        color: ['linear-gradient(#c8c8c8,#ff8300)', 'linear-gradient(#fff,#dcf563)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        id: 'AA',
        name: 'NMD_R1 Primeknit Shoes',
        price: 180,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/w_600,f_auto,q_auto/72c6639cdf0941abade4ac6b011dd053_9366/NMD_R1_Primeknit_Shoes_Black_G57941_01_standard.jpg',
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ff2df471f395411cb192acb500d05976_9366/Nano_X1_Grit_Men's_Training_Shoes_Black_S42565_01_standard.jpg"],
        color: ['linear-gradient(#69e900,#fe50db,#333)', 'linear-gradient(#333,#5d5d5d)'],
        detail: "The NMD series turns five, and in true NMD fashion, we're celebrating by making some major noise. Visually, that is. Volume and location is all you. These adidas shoes combine inspiration from the most iconic NMDs and create a bold statement with standout graphics. Continue the legacy with signature NMD plugs and a flexible sock-like upper. Energy-returning cushioning keeps you comfortable all day. The party is already off to a solid start with these ones."
    },
    {
        id: 'AB',
        name: "Nano X1 Grit Men's Training Shoes",
        price: 130,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/5faab3ff4faa4336b251ac9f017bcb24_9366/Nano_X1_Grit_Men's_Training_Shoes_Grey_S42564_01_standard.jpg",
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/3ae212fd39474d459222ac6b011d8a42_9366/NMD_R1_Primeknit_Shoes_Grey_G57939_01_standard.jpg'],
        color: ['linear-gradient(#949494,#ff7800)', 'linear-gradient(#96f296, #f0afba,rgb(152, 152, 152))'],
        detail: "When you enter the box, you put your game face on. You're gunning for the leaderboard and nothing's gonna stop you. These men's Reebok training shoes are built for your most demanding workouts. A woven Flexweave® upper is lightweight but able to take a beating. Floatride Energy Foam cushioning in the forefoot provides a responsive feel for running or double unders. A heel clip adds stability for quick lateral moves."
    },
    {
        id: 'AC',
        name: "Nano X1 Men's Training Shoes Les Mills",
        price: 130,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/w_600,f_auto,q_auto/aba35c9a73504f8ea5f9ac940053f418_9366/Nano_X1_Men's_Training_Shoes_Black_GX2801_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/45262f1acec740d7a4d8ac7700c90390_9366/Nano_X1_Men's_Training_Shoes_Les_Mills(r)_White_FZ4298_01_standard.jpg"],
        color: ['linear-gradient(#333,#addd00,#00baf3)', '#333'],
        detail: "When you enter the box, you put your game face on. You're gunning for the leaderboard and nothing's gonna stop you. These men's Reebok training shoes are built for your most demanding workouts. A woven Flexweave® upper is lightweight but able to take a beating. Floatride Energy Foam cushioning in the forefoot provides a responsive feel for running or double unders. A heel clip adds stability for quick lateral moves."
    },
    {
        id: 'AD',
        name: "ZigWild Trail 6 Women's Shoes",
        price: 130,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/68f693a96c9d42e7bad0ac78012b4a7c_9366/ZigWild_Trail_6_Women's_Shoes_Grey_S42637_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e941871d985a47fc9ff5ab1c000fb764_9366/ZigWild_Trail_6_Women's_Shoes_Black_FX1439_01_standard.jpg"],
        color: ['linear-gradient(#fe8b5e,#9e9d9d)', 'linear-gradient(#f918c1,#333)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        id: 'AE',
        name: "Hot Ones Question Mid Men's Basketball Shoes",
        price: 160,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f39b2d7e3a2d4539afd6ac790114327c_9366/Hot_Ones_Question_Mid_Men's_Basketball_Shoes_Pink_GV7093_01_standard.jpg"],
        color: ['linear-gradient(#eacb4f,#ff5e2d)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        id: 'AF',
        name: "Reebok Nano X Women's Training",
        price: 80,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/336f1fe03acf4c61b02fabb101757655_9366/Classic_Leather_Legacy_Shoes_White_FY7432_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f63361cd40674d6fae6bab6000054310_9366/Classic_Leather_Legacy_Shoes_Blue_FY7429_01_standard.jpg"],
        color: ['linear-gradient(#f1debb,#ff5f20,#20b6ff)', 'linear-gradient(#fff,#f9da32,#20b6ff)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        id: 'AG',
        name: "Hot Ones Shaqnosis Basketball Shoes",
        price: 160,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7bad88cb484f4af3a849abc20076d8fc_9366/Hot_Ones_Shaqnosis_Basketball_Shoes_Black_H68851_01_standard.jpg"],
        color: ['linear-gradient(#bff75a,#fb0c00,#333)'],
        detail: "The Shaqnosis first dropped in 1995, just in time for Shaq's last season in Orlando. This version of the shoes serves the '90s vibes with a side of hot wings. The colors along the mid-cut upper are inspired by the Scoville heat scale. These shoes bring the spicy heat."
    },
    {
        id: 'AH',
        name: "Classic Leather Legacy Shoes",
        price: 160,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/1802e64ce5404011b9e7ab880087dfb9_9366/Reebok_Nano_X_Women's_Training_Shoes_White_EF7533_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3051a9701aa24b22bebfab5f01375f35_9366/Reebok_Nano_X_Women's_Training_Shoes_White_FX7956_01_standard.jpg"],
        color: ['linear-gradient(#fff,#04c3e2,#f37240)', 'linear-gradient(#fff,#fe71e8,#2bbaff)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        id: 'AI',
        name: "Zig Kinetica II Shoes",
        price: 160,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/09d93126314b477187c8ac6801601dfa_9366/Zig_Kinetica_II_Shoes_Blue_FX9406_01_standard.jpg",
            "https://assets.reebok.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/7bf3bb834f8a433b97f1ac6f011f46b6_9366/Zig_Kinetica_II_Shoes_Black_FX9405_01_standard.jpg"],
        color: ['linear-gradient(#fff,#b0ff62)', 'linear-gradient(#88cdff,#5801a0,#333)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        id: 'AL',
        name: "ZigWild Trail 6 Men's Shoes",
        price: 100,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/865b9ed11e8e4024b09eac6f01752e18_9366/ZigWild_Trail_6_Men's_Shoes_Blue_S42596_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3cbb815d126742d28e1bab52011d64ef_9366/ZigWild_Trail_6_Men's_Shoes_Grey_FX1434_01_standard.jpg"],
        color: ['linear-gradient(#02566a,#49e9ad)', 'linear-gradient(#899b94,#ee6e3c)'],
        detail: "Wherever your run takes you, channel the feeling of mountain vistas and quiet, tree-canopied trails. These men's running shoes were inspired by '90s trail runners. A mix of suede, leather, textile and synthetic gives the upper a layered look with an outdoor vibe. The innovative outsole disperses energy for a comfortable feel from heel-strike to toe-off."
    }
]

export { source, logo }