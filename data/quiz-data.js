const quizData = {
    styles: {
        modern: {
            name: "Modern",
            description: "Clean lines, minimalist approach, uncluttered spaces",
            characteristics: [
                "Clean lines",
                "Minimalist approach",
                "Uncluttered spaces",
                "Form follows function",
                "Open floor plans"
            ],
            colors: "Neutral palette - white, black, gray with occasional bold accents",
            materials: "Glass, steel, polished metals, concrete",
            images: {
                rooms: "./images/rooms/modern/",
                materials: "./images/materials/modern/",
                palettes: "./images/palettes/modern/"
            }
        },
        industrial: {
            name: "Industrial",
            description: "Raw, unfinished look, urban aesthetic",
            characteristics: [
                "Raw, unfinished look",
                "Urban aesthetic",
                "Exposed elements",
                "High ceilings",
                "Open concept"
            ],
            colors: "Gray, brown, black, rusty reds",
            materials: "Exposed brick, concrete, metal pipes, reclaimed wood",
            images: {
                rooms: "./images/rooms/industrial/",
                materials: "./images/materials/industrial/",
                palettes: "./images/palettes/industrial/"
            }
        },
        scandinavian: {
            name: "Scandinavian",
            description: "Simplicity, functionality, cozy minimalism",
            characteristics: [
                "Simplicity",
                "Functionality",
                "Cozy minimalism",
                "Natural light",
                "Hygge elements"
            ],
            colors: "White, light grays, soft pastels, natural tones",
            materials: "Light woods (pine, ash), wool, linen, natural fibers",
            images: {
                rooms: "./images/rooms/scandinavian/",
                materials: "./images/materials/scandinavian/",
                palettes: "./images/palettes/scandinavian/"
            }
        },
        bohemian: {
            name: "Bohemian",
            description: "Eclectic, free-spirited, layered textures",
            characteristics: [
                "Eclectic style",
                "Free-spirited",
                "Layered textures",
                "Mixed patterns",
                "Global influences"
            ],
            colors: "Rich jewel tones, earth tones, metallics",
            materials: "Natural fibers, rattan, bamboo, vintage textiles",
            images: {
                rooms: "./images/rooms/bohemian/",
                materials: "./images/materials/bohemian/",
                palettes: "./images/palettes/bohemian/"
            }
        }
    },
    
    questions: [
        {
            id: 1,
            type: "image",
            category: "rooms",
            question: "Which living room makes you feel most at home?",
            options: [
                {
                    image: "./images/rooms/modern/modern-livingroom-1.png",
                    style: "modern",
                    points: { modern: 10, scandinavian: 5 }
                },
                {
                    image: "./images/rooms/industrial/industrial-livingroom-1.png",
                    style: "industrial",
                    points: { industrial: 10, modern: 3 }
                },
                {
                    image: "./images/rooms/scandinavian/scandinavian-livingroom-1.png",
                    style: "scandinavian",
                    points: { scandinavian: 10, modern: 5 }
                },
                {
                    image: "./images/rooms/bohemian/bohemian-livingroom-1.png",
                    style: "bohemian",
                    points: { bohemian: 10, traditional: 3 }
                }
            ]
        },
        {
            id: 2,
            type: "image",
            category: "palettes",
            question: "Which color palette resonates with you?",
            options: [
                {
                    image: "./images/palettes/modern/palette-modern-1.png",
                    style: "modern",
                    points: { modern: 8, scandinavian: 4 }
                },
                {
                    image: "./images/palettes/industrial/palette-industrial-1.png",
                    style: "industrial",
                    points: { industrial: 8, modern: 4 }
                },
                {
                    image: "./images/palettes/scandinavian/palette-scandinavian-1.png",
                    style: "scandinavian",
                    points: { scandinavian: 8, modern: 4 }
                },
                {
                    image: "./images/palettes/bohemian/palette-bohemian-1.png",
                    style: "bohemian",
                    points: { bohemian: 8, traditional: 4 }
                }
            ]
        },
        {
            id: 3,
            type: "image",
            category: "materials",
            question: "Which materials appeal to you most?",
            options: [
                {
                    image: "./images/materials/modern/material-modern-1.png",
                    style: "modern",
                    points: { modern: 8, industrial: 4 }
                },
                {
                    image: "./images/materials/industrial/material-industrial-1.png",
                    style: "industrial",
                    points: { industrial: 8, modern: 4 }
                },
                {
                    image: "./images/materials/scandinavian/material-scandinavian-1.png",
                    style: "scandinavian",
                    points: { scandinavian: 8, modern: 4 }
                },
                {
                    image: "./images/materials/bohemian/material-bohemian-1.png",
                    style: "bohemian",
                    points: { bohemian: 8, traditional: 4 }
                }
            ]
        }
    ]
};