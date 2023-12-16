const movies = [
    {
        "adult": false,
        "backdrop_path": "/ixhr0YVs0Du0fPIYQSYYOIf3j0R.jpg",
        "genre_ids": [
            878,
            28
        ],
        "id": 854648,
        "original_language": "en",
        "original_title": "Robot Apocalypse",
        "overview": "An expert hacker is targeted by a sentient AI after she realizes the threat it poses, and she must try to stay off its radar long enough to stop it.",
        "popularity": 2207.729,
        "poster_path": "/zpbgktIR7GkOS83PBAzLlzLSQ5W.jpg",
        "release_date": "2021-07-26",
        "title": "Robot Apocalypse",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 26
    },
    {
        "adult": false,
        "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
        "genre_ids": [
            80,
            18,
            36
        ],
        "id": 466420,
        "original_language": "en",
        "original_title": "Killers of the Flower Moon",
        "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
        "popularity": 1652.034,
        "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
        "release_date": "2023-10-18",
        "title": "Killers of the Flower Moon",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 1372
    },
    {
        "adult": false,
        "backdrop_path": "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 897087,
        "original_language": "en",
        "original_title": "Freelance",
        "overview": "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
        "popularity": 1403.262,
        "poster_path": "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
        "release_date": "2023-01-05",
        "title": "Freelance",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 269
    },
    {
        "adult": false,
        "backdrop_path": "/tLsc8SCFO0rMVgVyNm9XtfnyX84.jpg",
        "genre_ids": [
            18,
            9648,
            53,
            878
        ],
        "id": 726209,
        "original_language": "en",
        "original_title": "Leave the World Behind",
        "overview": "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices—and two strangers appear at their door.",
        "popularity": 1184.145,
        "poster_path": "/5qhtTPWNqzM1eo9QIIf5cyIUeAA.jpg",
        "release_date": "2023-11-22",
        "title": "Leave the World Behind",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 626
    },
    {
        "adult": false,
        "backdrop_path": "/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 787699,
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "popularity": 1012.049,
        "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        "release_date": "2023-12-06",
        "title": "Wonka",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 153
    },
    {
        "adult": false,
        "backdrop_path": "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
        "genre_ids": [
            16,
            10751,
            10402,
            14,
            35
        ],
        "id": 901362,
        "original_language": "en",
        "original_title": "Trolls Band Together",
        "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "popularity": 968.582,
        "poster_path": "/sEaLO9s7CIN3fjz8R3Qksum44en.jpg",
        "release_date": "2023-10-12",
        "title": "Trolls Band Together",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 354
    },
    {
        "adult": false,
        "backdrop_path": "/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg",
        "genre_ids": [
            16,
            35,
            10751
        ],
        "id": 1075794,
        "original_language": "en",
        "original_title": "Leo",
        "overview": "Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
        "popularity": 833.089,
        "poster_path": "/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
        "release_date": "2023-11-17",
        "title": "Leo",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 549
    },
    {
        "adult": false,
        "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 872585,
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "popularity": 731.896,
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Oppenheimer",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 5388
    },
    {
        "adult": false,
        "backdrop_path": "/jhpsTzbXEu5bkCPmBqxv7vUTjIT.jpg",
        "genre_ids": [
            14,
            12,
            878,
            28
        ],
        "id": 566810,
        "original_language": "en",
        "original_title": "Dragon Kingdom",
        "overview": "To save their Kingdom from an army of undead, a group of warriors must travel through the forbidden lands fighting the fearsome beasts that call The Dark Kingdom their home.",
        "popularity": 717.861,
        "poster_path": "/o7StI2iR8yY1N67meSkNcXfojyD.jpg",
        "release_date": "2018-11-26",
        "title": "The Dark Kingdom",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 41
    },
    {
        "adult": false,
        "backdrop_path": "/rb3QQ2TQfJoCpCZlfXBlBbzYy1D.jpg",
        "genre_ids": [
            53,
            28
        ],
        "id": 844416,
        "original_language": "en",
        "original_title": "Rumble Through the Dark",
        "overview": "Set in the dark landscape of the Mississippi Delta, where a former bare-knuckle fighter must win one last fight to pay off his debts to the local mob boss and save his childhood home—the stakes nothing less than life or death.",
        "popularity": 661.312,
        "poster_path": "/19UbYIT9WEQS5qSD3BREDxVXk8g.jpg",
        "release_date": "2023-11-03",
        "title": "Rumble Through the Dark",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 21
    },
    {
        "adult": false,
        "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
        "genre_ids": [
            27,
            9648
        ],
        "id": 507089,
        "original_language": "en",
        "original_title": "Five Nights at Freddy's",
        "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
        "popularity": 600.947,
        "poster_path": "/7BpNtNfxuocYEVREzVMO75hso1l.jpg",
        "release_date": "2023-10-25",
        "title": "Five Nights at Freddy's",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2801
    },
    {
        "adult": false,
        "backdrop_path": "/3xvdNyZ9WsVJpyeGhm85fukeZz4.jpg",
        "genre_ids": [
            878,
            9648,
            53
        ],
        "id": 1001835,
        "original_language": "en",
        "original_title": "Wifelike",
        "overview": "A grieving detective in the near-future hunts down criminals who trade artificial humans on the black market. In the fight to end AI exploitation, an underground resistance attempts to infiltrate him by sabotaging the programming of the artificial human assigned as his companion to behave like his late wife. She begins to question her reality as memories of a past life begin to surface in a world where nothing is as it seems.",
        "popularity": 585.626,
        "poster_path": "/tea2gDZPxw0wfKC2S2VRWHagtt4.jpg",
        "release_date": "2022-08-12",
        "title": "Wifelike",
        "video": false,
        "vote_average": 7,
        "vote_count": 200
    },
    {
        "adult": false,
        "backdrop_path": "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
            28,
            12,
            18
        ],
        "id": 670292,
        "original_language": "en",
        "original_title": "The Creator",
        "overview": "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
        "popularity": 585.46,
        "poster_path": "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
        "release_date": "2023-09-27",
        "title": "The Creator",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 1423
    },
    {
        "adult": false,
        "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 551.255,
        "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 4453
    },
    {
        "adult": false,
        "backdrop_path": "/evxXVJtomJJbAXcDxF6wsCJzVDe.jpg",
        "genre_ids": [
            27
        ],
        "id": 1019836,
        "original_language": "en",
        "original_title": "Christmas Bloody Christmas",
        "overview": "It's Christmas Eve and Tori just wants to get drunk and party, but when a robotic Santa Claus at a nearby toy store goes haywire and begins a rampant killing spree through her small town, she's forced into a battle for survival.",
        "popularity": 551.003,
        "poster_path": "/97PaQ7r4H3y0x9RTXusfedmzf86.jpg",
        "release_date": "2022-10-05",
        "title": "Christmas Bloody Christmas",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 145
    },
];

export default movies;