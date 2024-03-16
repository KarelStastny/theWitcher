export const characters = [
    {
        id: "geralt-of-rivia",
        name: "Geralt",
        surname: "ofRivia",
        gender: "man",
        profession: "witcher",
        personalInfo: {
            id: "geralt-info",
            age: 170, 
            home: "kaerMorhen",
            level: 50,
            status: "friend"
        }
    },
    {
        id: "yennefer-of-vengerberg",
        name: "Yennefer",
        surname: "ofVengerberg",
        gender: "woman",
        profession: "sorceress",
        personalInfo: {
            id: "yennefer-info",
            age: 99, 
            home: "Vengerberg",
            level: 70,
            status: "friend"
        }
    },
    {
        id: "triss-marigold",
        name: "Triss",
        surname: "Marigold",
        gender: "woman",
        profession: "sorceress",
        personalInfo: {
            id: "triss-info",
            age: 85,
            home: "Maribor",
            level: 60,
            status: "friend"
        }
    },
    {
        id: "ciri-of-cintra",
        name: "Ciri",
        surname: "ofCintra",
        gender: "woman",
        profession: "witcheress",
        personalInfo: {
            id: "ciri-info",
            age: 21,
            home: "Cintra",
            level: 40, 
            status: "friend"
        }
    }
];

//eskela lamberta atd... objekty zaklínačů vše podle levelů


//skils pro každo profesi profese mage a witcher a ostatní, všechny typy zbraní rozdělené pro magy
//tasky, vytvořit postavy, podle levelů jim dát vlastnosti,  udělat equpment, udělat výbavu, petardy, kouzla, atd...


export const mainWeapon = {
    mage: [
        iceMagic,
        fireMagic,
        dark
    ],
    witcher: [
        sword,
        silverSword,

    ]
}

export const witcherMagic = {
    Aard: {
        level_1: "easy",
        level_2: "middle",
        level_3: "hard"
    },
    Igni: {
        level_1: "easy",
        level_2: "middle",
        level_3: "hard"
    },
    Yrden: {
        level_1: "easy",
        level_2: "middle",
        level_3: "hard"
    },
    Quen: {
        level_1: "easy",
        level_2: "middle",
        level_3: "hard"
    },
    Axii: {
        level_1: "easy",
        level_2: "middle",
        level_3: "hard"
    }
};

export const petard = {
    sm: "Samum",
    dg: "DevilsPuffball",
    dp: "DancingStar",
    mb: "MoonDust",
    gr: "Grapeshot",
    dr: "DragonDream",
    nb: "NorthernWind"
};

export const armors = [
    {
        name: "griffinArmors",
        levels: [
            {
                id: "griffin-1",
                level: 1,
                armory: 50,
                darkColor: true,
                endurance: 800,
            },
            {
                id: "griffin-2",
                level: 2,
                armory: 60,
                darkColor: false,
                endurance: 900,
            },
            {
                id: "griffin-3",
                level: 3,
                armory: 70,
                darkColor: true,
                endurance: 1000,
            }
        ]
    },
    {
        name: "bearArmors",
        levels: [
            {
                id: "bear-1",
                level: 1,
                armory: 55,
                darkColor: true,
                endurance: 850,
            },
            {
                id: "bear-2",
                level: 2,
                armory: 65,
                darkColor: false,
                endurance: 950,
            },
            {
                id: "bear-3",
                level: 3,
                armory: 75,
                darkColor: true,
                endurance: 1050,
            }
        ]
    },
    {
        name: "wolfArmors",
        levels: [
            {
                id: "wolf-1",
                level: 1,
                armory: 52,
                darkColor: false,
                endurance: 820,
            },
            {
                id: "wolf-2",
                level: 2,
                armory: 62,
                darkColor: true,
                endurance: 920,
            },
            {
                id: "wolf-3",
                level: 3,
                armory: 72,
                darkColor: false,
                endurance: 1020,
            }
        ]
    }
];
