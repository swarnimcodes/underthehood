const cars = [
    {
        id: "tata-harrier",
        name: "Tata Harrier",
        brand: "Tata",
        engines: ["fiat-multijet-II", "tata-hyperion-15-gdi"]
    },
    {
        id: "tata-safari",
        name: "Tata Safari",
        brand: "Tata",
        engines: ["fiat-multijet-II", "tata-hyperion-15-gdi"]
    },
    {
        id: "mg-hector",
        name: "MG Hector",
        brand: "MG",
        engines: ["fiat-multijet-II"]
    },
    {
        id: "jeep-meridian",
        name: "Jeep Meridian",
        brand: "Jeep",
        engines: ["fiat-multijet-II"]
    },
    {
        id: "jeep-compass",
        name: "Jeep Compass",
        brand: "Jeep",
        engines: ["fiat-multijet-II"]
    },
    {
        id: "toyota-hyryder",
        name: "Toyota Hyryder",
        brand: "Toyota",
        engines: ["suzuki-k15C", "toyota-m15D-FXE"]
    },
    {
        id: "suzuki-grand-vitara",
        name: "Suzuki Grand Vitara",
        brand: "Suzuki",
        engines: ["suzuki-k15C", "toyota-m15D-FXE"]
    },
    {
        id: "kia-seltos",
        name: "Kia Seltos",
        brand: "Kia",
        engines: ["hyundai-g4fl", "hyundai-g4lh", "hyundai-d4fb"]
    },
    {
        id: "kia-sonet",
        name: "Kia Sonet",
        brand: "Kia",
        engines: ["hyundai-g4fl", "hyundai-g4lh", "hyundai-d4fb"]
    },
    {
        id: "hyundai-creta",
        name: "Hyundai Creta",
        brand: "Hyundai",
        engines: ["hyundai-g4fl", "hyundai-g4lh", "hyundai-d4fb"]
    },
    {
        id: "honda-city",
        name: "Honda City",
        brand: "Honda",
        engines: ["honda-l15b", "honda-l15b-hev"]
    },
    {
        id: "honda-elevate",
        name: "Honda Elevate",
        brand: "Honda",
        engines: ["honda-l15b"]
    },
    {
        id: "toyota-fortuner",
        name: "Toyota Fortuner",
        brand: "Toyota",
        engines: ["toyota-1gd-ftv"]
    },
    {
        id: "toyota-hilux",
        name: "Toyota Hilux",
        brand: "Toyota",
        engines: ["toyota-1gd-ftv"]
    },
    {
        id: "toyota-innova-hycross",
        name: "Toyota Innova Hycross",
        brand: "Toyota",
        engines: ["toyota-m20a-fks", "toyota-m20a-fxs"]
    },
    {
        id: "toyota-corolla",
        name: "Toyota Corolla",
        brand: "Toyota",
        engines: ["toyota-m20a-fxs"]
    },
    {
        id: "toyota-camry",
        name: "Toyota Camry",
        brand: "Toyota",
        engines: ["toyota-a25a-fxs"]
    },
    {
        id: "suzuki-jimny",
        name: "Suzuki Jimny",
        brand: "Suzuki",
        engines: ["suzuki-k15b"]
    },
    {
        id: "suzuki-ciaz",
        name: "Suzuki Ciaz",
        brand: "Suzuki",
        engines: ["suzuki-k15b"]
    },
    {
        id: "vw-virtus",
        name: "VW Virtus",
        brand: "Volkswagen",
        engines: ["vw-ea211-tsi", "vw-ea211-evo2"]
    },
    {
        id: "skoda-slavia",
        name: "Skoda Slavia",
        brand: "Skoda",
        engines: ["vw-ea211-tsi", "vw-ea211-evo2"]
    },
    {
        id: "vw-taigun",
        name: "VW Taigun",
        brand: "Volkswagen",
        engines: ["vw-ea211-tsi", "vw-ea211-evo2"]
    },
    {
        id: "skoda-kushaq",
        name: "Skoda Kushaq",
        brand: "Skoda",
        engines: ["vw-ea211-tsi", "vw-ea211-evo2"]
    },
    {
        id: "mahindra-thar-roxx",
        name: "Mahindra Thar Roxx",
        brand: "Mahindra",
        engines: ["mahindra-mhawk", "mahindra-mstallion"]
    },
    {
        id: "mahindra-xuv700",
        name: "Mahindra XUV700",
        brand: "Mahindra",
        engines: ["mahindra-mhawk", "mahindra-mstallion"]
    },
    {
        id: "mahindra-xuv7xo",
        name: "Mahindra XUV 7XO",
        brand: "Mahindra",
        engines: ["mahindra-mhawk", "mahindra-mstallion"]
    },
    {
        id: "honda-civic",
        name: "Honda Civic",
        brand: "Honda",
        engines: ["honda-l15c7"]
    },
    {
        id: "renault-kiger",
        name: "Renault Kiger",
        brand: "Renault",
        engines: ["renault-tce100"]
    },
    {
        id: "renault-duster",
        name: "Renault Duster",
        brand: "Renault",
        engines: ["renault-tce130"]
    },
    {
        id: "bmw-3series",
        name: "BMW 3 Series",
        brand: "BMW",
        engines: ["bmw-b48"]
    },
    {
        id: "bmw-x1",
        name: "BMW X1",
        brand: "BMW",
        engines: ["bmw-b48"]
    },
    {
        id: "vw-golf-gti",
        name: "VW Golf GTI",
        brand: "Volkswagen",
        engines: ["vw-20-tsi"]
    },
    {
        id: "skoda-octavia",
        name: "Skoda Octavia",
        brand: "Skoda",
        engines: ["vw-20-tsi"]
    },
    {
        id: "audi-a3",
        name: "Audi A3",
        brand: "Audi",
        engines: ["vw-20-tsi"]
    },
    {
        id: "mini-cooper",
        name: "MINI Cooper",
        brand: "MINI",
        engines: ["mini-b38"]
    },
    {
        id: "mini-countryman",
        name: "MINI Countryman",
        brand: "MINI",
        engines: ["mini-b38", "bmw-b48"]
    },
    {
        id: "mercedes-gla",
        name: "Mercedes GLA",
        brand: "Mercedes-Benz",
        engines: ["mercedes-m282"]
    },
    {
        id: "tata-nexon",
        name: "Tata Nexon",
        brand: "Tata",
        engines: ["tata-revotron-12t", "tata-revotorq-15"]
    },
    {
        id: "tata-punch",
        name: "Tata Punch",
        brand: "Tata",
        engines: ["tata-revotron-12"]
    },
    {
        id: "tata-tiago",
        name: "Tata Tiago",
        brand: "Tata",
        engines: ["tata-revotron-12"]
    },
    {
        id: "tata-tigor",
        name: "Tata Tigor",
        brand: "Tata",
        engines: ["tata-revotron-12"]
    },
    {
        id: "tata-altroz",
        name: "Tata Altroz",
        brand: "Tata",
        engines: ["tata-revotron-12", "tata-revotron-12t", "tata-revotorq-15-detuned"]
    },
    {
        id: "tata-curvv",
        name: "Tata Curvv",
        brand: "Tata",
        engines: ["tata-hyperion-12-gdi", "tata-revotorq-15"]
    },
    {
        id: "honda-amaze",
        name: "Honda Amaze",
        brand: "Honda",
        engines: ["honda-l12b"]
    },
    {
        id: "suzuki-swift",
        name: "Maruti Suzuki Swift",
        brand: "Suzuki",
        engines: ["suzuki-z12e"]
    },
    {
        id: "suzuki-baleno",
        name: "Maruti Suzuki Baleno",
        brand: "Suzuki",
        engines: ["suzuki-k12n", "suzuki-k10c"]
    },
    {
        id: "suzuki-fronx",
        name: "Maruti Suzuki Fronx",
        brand: "Suzuki",
        engines: ["suzuki-k12n", "suzuki-k10c"]
    },
    {
        id: "suzuki-brezza",
        name: "Maruti Suzuki Brezza",
        brand: "Suzuki",
        engines: ["suzuki-k15C"]
    },
    {
        id: "suzuki-ertiga",
        name: "Maruti Suzuki Ertiga",
        brand: "Suzuki",
        engines: ["suzuki-k15C"]
    },
    {
        id: "suzuki-xl6",
        name: "Maruti Suzuki XL6",
        brand: "Suzuki",
        engines: ["suzuki-k15C"]
    },
    {
        id: "suzuki-dzire",
        name: "Maruti Suzuki Dzire",
        brand: "Suzuki",
        engines: ["suzuki-z12e"]
    },
    {
        id: "suzuki-alto-k10",
        name: "Maruti Suzuki Alto K10",
        brand: "Suzuki",
        engines: ["suzuki-k10c-na"]
    },
    {
        id: "suzuki-s-presso",
        name: "Maruti Suzuki S-Presso",
        brand: "Suzuki",
        engines: ["suzuki-k10c-na"]
    },
    {
        id: "suzuki-wagonr",
        name: "Maruti Suzuki WagonR",
        brand: "Suzuki",
        engines: ["suzuki-k10c-na", "suzuki-k12n"]
    },
    {
        id: "suzuki-celerio",
        name: "Maruti Suzuki Celerio",
        brand: "Suzuki",
        engines: ["suzuki-k10c-na"]
    },
    {
        id: "suzuki-ignis",
        name: "Maruti Suzuki Ignis",
        brand: "Suzuki",
        engines: ["suzuki-k12m"]
    },
    {
        id: "suzuki-invicto",
        name: "Maruti Suzuki Invicto",
        brand: "Suzuki",
        engines: ["toyota-m20a-fks", "toyota-m20a-fxs"]
    },
    {
        id: "vw-tiguan",
        name: "VW Tiguan",
        brand: "Volkswagen",
        engines: ["vw-ea888-gen3b"]
    },
    {
        id: "skoda-superb",
        name: "Skoda Superb",
        brand: "Skoda",
        engines: ["vw-ea888-gen3b"]
    },
    {
        id: "skoda-kodiaq",
        name: "Skoda Kodiaq",
        brand: "Skoda",
        engines: ["vw-ea888-gen3b"]
    },
    {
        id: "skoda-kylaq",
        name: "Skoda Kylaq",
        brand: "Skoda",
        engines: ["vw-ea211-tsi"]
    },
    {
        id: "audi-a4",
        name: "Audi A4",
        brand: "Audi",
        engines: ["vw-ea888-gen3b"]
    },
    {
        id: "audi-a6",
        name: "Audi A6",
        brand: "Audi",
        engines: ["vw-20-tsi"]
    },
    {
        id: "audi-q3",
        name: "Audi Q3",
        brand: "Audi",
        engines: ["vw-ea888-gen3b"]
    },
    {
        id: "audi-q3-sportback",
        name: "Audi Q3 Sportback",
        brand: "Audi",
        engines: ["vw-ea888-gen3b"]
    },
    {
        id: "audi-q5",
        name: "Audi Q5",
        brand: "Audi",
        engines: ["vw-ea888-gen3b"]
    },
    {
        id: "audi-q7",
        name: "Audi Q7",
        brand: "Audi",
        engines: ["audi-ea839"]
    },
    {
        id: "audi-q8",
        name: "Audi Q8",
        brand: "Audi",
        engines: ["audi-ea839"]
    },
    {
        id: "audi-a8l",
        name: "Audi A8 L",
        brand: "Audi",
        engines: ["audi-ea839"]
    },
    {
        id: "audi-s5-sportback",
        name: "Audi S5 Sportback",
        brand: "Audi",
        engines: ["audi-ea839"]
    },
    {
        id: "audi-rs-q8",
        name: "Audi RS Q8",
        brand: "Audi",
        engines: ["audi-ea825"]
    }
];