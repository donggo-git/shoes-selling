let source = [
    {
        name: 'Nike React Infinity Run Flyknit 2',
        price: 160,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d7a05207-a1a1-4c53-a31b-2b2b8883cc35/react-infinity-run-flyknit-2-mens-running-shoe-8XGSrl.jpg',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/96cf9fbd-2b60-4ba2-833d-9a6254d02582/react-infinity-run-flyknit-2-mens-running-shoe-8XGSrl.jpg',
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5326bc4d-4362-468b-a79d-15a615595e09/react-infinity-run-flyknit-2-mens-running-shoe-8XGSrl.jpg'],
        color: ['linear-gradient(rgb(175, 141, 141),#333,rgb(226, 0, 0))', 'linear-gradient(rgb(226, 84, 84),#333)', 'linear-gradient(rgb(148, 251, 23),#333)'],
        detail: "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement."
    },
    {
        name: 'Nike Pegasus Trail 2',
        price: 130,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2c3547fc-6691-48e6-b1f6-84e388688ae7/pegasus-trail-2-mens-trail-running-shoe-JKj6Bj.jpg',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e040d880-76a3-42d1-af22-889810e87bcf/pegasus-trail-2-mens-trail-running-shoe-JKj6Bj.jpg',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f68146ca-5c3f-4745-a898-a1e957d576cf/pegasus-trail-2-mens-trail-running-shoe-JKj6Bj.jpg'],
        color: ['rgb(243, 62, 7)', 'linear-gradient(rgb(0, 132, 153),rgb(32, 245, 1))', 'linear-gradient(rgb(251, 130, 159),rgb(251, 147, 72),rgb(25, 200, 0))'],
        detail: "Find your wings on the path less traveled. The Nike Pegasus Trail 2 delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction."
    },
    {
        name: 'Nike Pegasus Trail 2 GORE-TEX',
        price: 160,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d6539dd8-51cd-4b0d-8db0-5f2cfce5e4d0/pegasus-trail-2-gore-tex-mens-trail-running-shoe-0vmbg9.jpg',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/159e82ab-9877-4e08-8a79-c283388f17ca/pegasus-trail-2-gore-tex-trail-running-shoe-0vmbg9.jpg'],
        color: ['linear-gradient(rgb(255, 143, 25),rgb(47, 105, 243),rgb(136, 27, 2))', 'linear-gradient(rgb(247, 197, 0),rgb(251, 59, 0))'],
        detail: "Keep moving in wet conditions. The Nike Pegasus Trail 2 GORE-TEX provides waterproof protection for runners, trail athletes and outdoor enthusiasts. Versatile enough for everyday training, it features an ideal fit and optimal traction for your miles."
    },
    {
        name: 'Kyrie 7 "Samurai Ky"',
        price: 130,
        brand: "Nike",
        img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c80912ee-71f6-4012-9e61-ec721147a1f5/kyrie-7-samurai-ky-basketball-shoe-5Kj9Lr.jpg',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4253255a-52d4-4a14-815d-d963912bbb0a/kyrie-7-rayguns-basketball-shoe-5Kj9Lr.jpg',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf7184c5-d8b3-44b4-bc79-26340d600884/kyrie-7-sisterhood-basketball-shoe-5Kj9Lr.jpg'],
        color: ['linear-gradient(rgb(0, 245, 4),rgb(1, 3, 113))', 'linear-gradient(rgb(255, 227, 0),rgb(109, 15, 0))', 'linear-gradient(rgb(255, 209, 102),rgb(0, 100, 255))'],
        detail: "Kyrie made headlines with his generous, outspoken support of female ballers. Nike is joining him with the special “Sisterhood” colorway of the Kyrie 7, which aims to empower and unify the support of women athletes everywhere. The eye-grabbing aesthetic is highlighted by a detailed floral graphic underneath the pop of its yellow-outlined Swoosh logo. On or off the court, show your support for women athletes in style."
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
        color: ['#ff1010', '#fff', '#333'],
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
        color: ['linear-gradient(#15007b,#9f6e2f)', '#fff', 'linear-gradient(#fff,#ff9a9a,#333)'],
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
        name: 'Double DISC Basketball Shoes',
        price: 175,
        brand: "Puma",
        img: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194277/03/sv01/fnd/PNA/fmt/png/Double-DISC-Basketball-Shoes',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194277/01/sv01/fnd/PNA/fmt/png/Double-DISC-Basketball-Shoes',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194277/02/sv01/fnd/PNA/fmt/png/Double-DISC-Basketball-Shoes'],
        color: ['linear-gradient(#d3ff00,#ff0bc2,#333)', 'linear-gradient(#fff,#ffad93,#a160c6)', 'linear-gradient(#fff,#333)'],
        detail: "In 1991, PUMA went wireless. Ditching laces with the DISC system was groundbreaking, and for PUMA Hoop’s resurgence back into basketball, we’re bringing DISC back. Two of ‘em, in fact. The Double DISC showcases the archive heel DISC and modern forefoot DISC for serious lockdown and stability. Coupled with a ProFoam midsole and a high abrasion outsole, it’s a shoe with game and style. Double DISC gives a nod to the original and makes a statement for PUMA Hoops. Double the discs, double the fun."
    },
    {
        name: "Porsche Legacy RS-Fast Men's Sneakers",
        price: 120,
        brand: "Puma",
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/306773/01/sv01/fnd/PNA/fmt/png/Porsche-Legacy-RS-Fast-Men's - Sneakers",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/306773/02/sv01/fnd/PNA/fmt/png/Porsche-Legacy-RS-Fast-Men's-Sneakers"],
        color: ['linear-gradient(#e4eb00,#eb7900,#333)', 'linear-gradient(#fff,#00e0eb,#cb0000)'],
        detail: "Meet the icons of fast. Faster and fresher than any of our RS kicks yet, RS-Fast from PUMA and Porsche Legacy combines early 2000s design with sleek motorsport elements, including a special edition keychain that pays tribute to the legacy of the 911 Turbo."
    },
    {
        name: "evoSPEED Electric 10 Men's Track Spikes",
        price: 120,
        brand: "Puma",
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194475/01/sv01/fnd/PNA/fmt/png/evoSPEED-Electric-10-Men's-Track-Spikes",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194475/02/sv01/fnd/PNA/fmt/png/evoSPEED-Electric-10-Men's-Track-Spikes"],
        color: ['#fff', '#ff9c6c'],
        detail: "Move faster than the speed of light in the all-new evoSPEED Electric 10, featuring a full-length RAPIDAGILITY soleplate for extreme power return and an aerodynamic upper for a lightweight and dynamic fit."
    },
    {
        name: 'RS-Fast Tech',
        price: 110,
        brand: "Puma",
        img: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/380191/02/sv01/fnd/PNA/fmt/png/RS-Fast-Tech-Sneakers',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/380191/01/sv01/fnd/PNA/fmt/png/RS-Fast-Tech-Sneakers',
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/380191/03/sv01/fnd/PNA/fmt/png/RS-Fast-Tech-Sneakers'],
        color: ['linear-gradient(#ff342a,#333)', 'linear-gradient(#bf0,#0104bb)', 'linear-gradient(#fff,#00eeab)'],
        detail: "Faster and fresher than any of our RS kicks yet. The RS-Fast is reinventing street style with a progressive design that combines early 2000s cues and futuristic vibes. This version is tech-inspired with bright pops of color and high shine elements."
    },
    {
        name: "Red Bull Racing Style Rider Men's Sneakers",
        price: 110,
        brand: "Puma",
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/306784/01/sv01/fnd/PNA/fmt/png/Red-Bull-Racing-Style-Rider-Men's-Sneakers",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/306784/02/sv01/fnd/PNA/fmt/png/Red-Bull-Racing-Style-Rider-Men's - Sneakers"],
        color: ['linear-gradient(#f32f2f,#333)', 'linear-gradient(#fff,#f32f2f)'],
        detail: "The iconic PUMA Rider from the '80s is revamped with fresh additions from Red Bull Racing to create this track and street ready Style Rider. Featuring a slim outsole design, ultra-comfortable Rider Foam, and bold Red Bull Racing team colors, you'll hit the streets in casual racing style."
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
        name: 'ZX 2K Boost Shoes',
        price: 150,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/b084f81ec240465180bdac72011697ac_9366/ZX_2K_Boost_Shoes_Yellow_FX7031_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/cc4cda105573429e910aac8400a25614_9366/ZX_2K_Boost_Shoes_White_FX7030_01_standard.jpg'],
        color: ['#e6ed1c', 'linear-gradient(#fff,#f16906)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        name: 'Swift Run X Shoes',
        price: 85,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/8974d274c39f4f738dbbac9200bb56e0_9366/Swift_Run_X_Shoes_Black_FY5686_01_standard.jpg',
            'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/2cbf1bcc5a4847239e85ac9200b422e3_9366/Swift_Run_X_Shoes_Blue_FY5435_01_standard.jpg'],
        color: ['linear-gradient(#fff,#7ce200,#333)', 'linear-gradient(#fff,#d9220f,#1f008f)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        name: 'Day Jogger Shoes',
        price: 84,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e9a5e781502248e48f91aba501262ceb_9366/Day_Jogger_Shoes_Grey_FW4868_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c7f313343a0b42f3a8bfab9700cc178d_9366/Day_Jogger_Shoes_White_FY0237_01_standard.jpg'],
        color: ['linear-gradient(#fff,#68fc49,#929292)', 'linear-gradient(#fff,#ff6c00,#9b9b9b)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        name: 'Ultraboost 20 Shoes',
        price: 126,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d2581189185446c48ae6aba0000e44d3_9366/Ultraboost_20_Shoes_Green_FY8984_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8dc7030a45a147fabfb5ac4e00fa68eb_9366/Ultraboost_20_Shoes_Blue_FX7978_01_standard.jpg'],
        color: ['linear-gradient(#e0ff9c,#333)', 'linear-gradient(#ffb261,#0d51bd)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        name: 'NMD_R1 Shoes',
        price: 126,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/w_600,f_auto,q_auto/872299528a554356909cac4400f4ef29_9366/NMD_R1_Shoes_Grey_FY5730_01_standard.jpg',
            'https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/178b0dce25ad4f26a04bac0200ac3b99_9366/NMD_R1_Shoes_Black_FY5727_01_standard.jpg'],
        color: ['linear-gradient(#b8b8b8,#ff6c01)', 'linear-gradient(#333,#ff6c01,#3396ff)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        name: 'Ultraboost 21 Shoes',
        price: 180,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/707bd9b6c1a44ce7bb58ac77012fcb2e_9366/Ultraboost_21_Shoes_Grey_FY0375_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/429a510e09fe4039ba33ac770135d8be_9366/Ultraboost_21_Shoes_White_FY0377_01_standard.jpg'],
        color: ['linear-gradient(#c8c8c8,#ff8300)', 'linear-gradient(#fff,#dcf563)'],
        detail: "Don't shrink away from the sun. Harness its energy as you hit the pavement in these adidas running shoes. The super breathable mesh upper with HEAT.RDY maximizes airflow so you stay cool and ventilated even when the temperature rises. Segmented Boost cushioning returns energy to your stride, keeping your legs fresh and your mind free to focus on the clear blue skies."
    },
    {
        name: 'NMD_R1 Primeknit Shoes',
        price: 180,
        brand: "Adidas",
        img: ['https://assets.adidas.com/images/w_600,f_auto,q_auto/72c6639cdf0941abade4ac6b011dd053_9366/NMD_R1_Primeknit_Shoes_Black_G57941_01_standard.jpg',
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ff2df471f395411cb192acb500d05976_9366/Nano_X1_Grit_Men's_Training_Shoes_Black_S42565_01_standard.jpg"],
        color: ['linear-gradient(#69e900,#fe50db,#333)', 'linear-gradient(#333,#5d5d5d)'],
        detail: "The NMD series turns five, and in true NMD fashion, we're celebrating by making some major noise. Visually, that is. Volume and location is all you. These adidas shoes combine inspiration from the most iconic NMDs and create a bold statement with standout graphics. Continue the legacy with signature NMD plugs and a flexible sock-like upper. Energy-returning cushioning keeps you comfortable all day. The party is already off to a solid start with these ones."
    },
    {
        name: "Nano X1 Grit Men's Training Shoes",
        price: 130,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/5faab3ff4faa4336b251ac9f017bcb24_9366/Nano_X1_Grit_Men's_Training_Shoes_Grey_S42564_01_standard.jpg",
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/3ae212fd39474d459222ac6b011d8a42_9366/NMD_R1_Primeknit_Shoes_Grey_G57939_01_standard.jpg'],
        color: ['linear-gradient(#949494,#ff7800)', 'linear-gradient(#96f296, #f0afba,rgb(152, 152, 152))'],
        detail: "When you enter the box, you put your game face on. You're gunning for the leaderboard and nothing's gonna stop you. These men's Reebok training shoes are built for your most demanding workouts. A woven Flexweave® upper is lightweight but able to take a beating. Floatride Energy Foam cushioning in the forefoot provides a responsive feel for running or double unders. A heel clip adds stability for quick lateral moves."
    },
    {
        name: "Nano X1 Men's Training Shoes Les Mills",
        price: 130,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/w_600,f_auto,q_auto/aba35c9a73504f8ea5f9ac940053f418_9366/Nano_X1_Men's_Training_Shoes_Black_GX2801_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/45262f1acec740d7a4d8ac7700c90390_9366/Nano_X1_Men's_Training_Shoes_Les_Mills(r)_White_FZ4298_01_standard.jpg"],
        color: ['linear-gradient(#333,#addd00,#00baf3)', '#333'],
        detail: "When you enter the box, you put your game face on. You're gunning for the leaderboard and nothing's gonna stop you. These men's Reebok training shoes are built for your most demanding workouts. A woven Flexweave® upper is lightweight but able to take a beating. Floatride Energy Foam cushioning in the forefoot provides a responsive feel for running or double unders. A heel clip adds stability for quick lateral moves."
    },
    {
        name: "ZigWild Trail 6 Women's Shoes",
        price: 130,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/68f693a96c9d42e7bad0ac78012b4a7c_9366/ZigWild_Trail_6_Women's_Shoes_Grey_S42637_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e941871d985a47fc9ff5ab1c000fb764_9366/ZigWild_Trail_6_Women's_Shoes_Black_FX1439_01_standard.jpg"],
        color: ['linear-gradient(#fe8b5e,#9e9d9d)', 'linear-gradient(#f918c1,#333)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        name: "Hot Ones Question Mid Men's Basketball Shoes",
        price: 160,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f39b2d7e3a2d4539afd6ac790114327c_9366/Hot_Ones_Question_Mid_Men's_Basketball_Shoes_Pink_GV7093_01_standard.jpg"],
        color: ['linear-gradient(#eacb4f,#ff5e2d)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        name: "Reebok Nano X Women's Training",
        price: 80,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/336f1fe03acf4c61b02fabb101757655_9366/Classic_Leather_Legacy_Shoes_White_FY7432_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f63361cd40674d6fae6bab6000054310_9366/Classic_Leather_Legacy_Shoes_Blue_FY7429_01_standard.jpg"],
        color: ['linear-gradient(#f1debb,#ff5f20,#20b6ff)', 'linear-gradient(#fff,#f9da32,#20b6ff)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        name: "Hot Ones Shaqnosis Basketball Shoes",
        price: 160,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7bad88cb484f4af3a849abc20076d8fc_9366/Hot_Ones_Shaqnosis_Basketball_Shoes_Black_H68851_01_standard.jpg"],
        color: ['linear-gradient(#bff75a,#fb0c00,#333)'],
        detail: "The Shaqnosis first dropped in 1995, just in time for Shaq's last season in Orlando. This version of the shoes serves the '90s vibes with a side of hot wings. The colors along the mid-cut upper are inspired by the Scoville heat scale. These shoes bring the spicy heat."
    },
    {
        name: "Classic Leather Legacy Shoes",
        price: 160,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/1802e64ce5404011b9e7ab880087dfb9_9366/Reebok_Nano_X_Women's_Training_Shoes_White_EF7533_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3051a9701aa24b22bebfab5f01375f35_9366/Reebok_Nano_X_Women's_Training_Shoes_White_FX7956_01_standard.jpg"],
        color: ['linear-gradient(#fff,#04c3e2,#f37240)', 'linear-gradient(#fff,#fe71e8,#2bbaff)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        name: "Zig Kinetica II Shoes",
        price: 160,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/09d93126314b477187c8ac6801601dfa_9366/Zig_Kinetica_II_Shoes_Blue_FX9406_01_standard.jpg",
            "https://assets.reebok.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/7bf3bb834f8a433b97f1ac6f011f46b6_9366/Zig_Kinetica_II_Shoes_Black_FX9405_01_standard.jpg"],
        color: ['linear-gradient(#fff,#b0ff62)', 'linear-gradient(#88cdff,#5801a0,#333)'],
        detail: "These women's running shoes bring an outdoor feel to your everyday routine. The upper shows off a '90s trail vibe. The innovative outsole disperses energy for a comfortable feel from heel strike to toe-off."
    },
    {
        name: "ZigWild Trail 6 Men's Shoes",
        price: 100,
        brand: "Rebook",
        img: ["https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/865b9ed11e8e4024b09eac6f01752e18_9366/ZigWild_Trail_6_Men's_Shoes_Blue_S42596_01_standard.jpg",
            "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3cbb815d126742d28e1bab52011d64ef_9366/ZigWild_Trail_6_Men's_Shoes_Grey_FX1434_01_standard.jpg"],
        color: ['linear-gradient(#02566a,#49e9ad)', 'linear-gradient(#899b94,#ee6e3c)'],
        detail: "Wherever your run takes you, channel the feeling of mountain vistas and quiet, tree-canopied trails. These men's running shoes were inspired by '90s trail runners. A mix of suede, leather, textile and synthetic gives the upper a layered look with an outdoor vibe. The innovative outsole disperses energy for a comfortable feel from heel-strike to toe-off."
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
        name: "Rebook",
        img: "https://th.bing.com/th/id/R2f1460641fbc86f00aa4c0eef0225565?rik=dhypM4L1AXm3UA&riu=http%3a%2f%2fmasses.com.my%2fwp-content%2fuploads%2f2019%2f11%2freebok-logo-2.jpg&ehk=%2feU2pk2RES8ts4CsUTo4qGgFRZD51zAGXKS8kXeHESQ%3d&risl=&pid=ImgRaw"
    },

]
export { source, logo }