export const quizData = {
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
            materials: "Glass, steel, polished metals, concrete"
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
            materials: "Exposed brick, concrete, metal pipes, reclaimed wood"
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
            materials: "Light woods (pine, ash), wool, linen, natural fibers"
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
            materials: "Natural fibers, rattan, bamboo, vintage textiles"
        },
        traditional: {
            name: "Traditional",
            description: "Classic, symmetrical, refined",
            characteristics: [
                "Classic design",
                "Symmetrical layouts",
                "Refined details",
                "Crown molding",
                "Antique elements"
            ],
            colors: "Rich earth tones, deep reds, blues, and greens",
            materials: "Dark woods, silk, velvet, crystal"
        }
    },
    
    questions: [
        {
            id: 1,
            type: "image",
            category: "room_layouts",
            question: "Which living room makes you feel most at home?",
            options: [
                {
                    image: "./images/room_layouts/modern/modern-livingroom-1.jpg",
                    style: "modern",
                    points: { modern: 10, scandinavian: 5 }
                },
                {
                    image: "./images/room_layouts/industrial/industrial-livingroom-1.jpg",
                    style: "industrial",
                    points: { industrial: 10, modern: 3 }
                },
                {
                    image: "./images/room_layouts/scandinavian/scandinavian-livingroom-1.jpg",
                    style: "scandinavian",
                    points: { scandinavian: 10, modern: 5 }
                },
                {
                    image: "./images/room_layouts/bohemian/bohemian-livingroom-1.jpg",
                    style: "bohemian",
                    points: { bohemian: 10, traditional: 3 }
                }
            ]
        },
        {
            id: 2,
            type: "image",
            category: "room_layouts",
            question: "Which kitchen design appeals to you most?",
            options: [
                {
                    image: "./images/room_layouts/modern/modern-kitchen-1.jpg",
                    style: "modern",
                    points: { modern: 10, scandinavian: 3 }
                },
                {
                    image: "./images/room_layouts/industrial/industrial-kitchen-1.jpg",
                    style: "industrial",
                    points: { industrial: 10, modern: 3 }
                },
                {
                    image: "./images/room_layouts/traditional/traditional-kitchen-1.jpg",
                    style: "traditional",
                    points: { traditional: 10, bohemian: 3 }
                },
                {
                    image: "./images/room_layouts/scandinavian/scandinavian-kitchen-1.jpg",
                    style: "scandinavian",
                    points: { scandinavian: 10, modern: 5 }
                }
            ]
        },
        {
            id: 3,
            type: "choice",
            question: "What's your ideal weekend activity?",
            options: [
                {
                    text: "Visiting art galleries and design shops",
                    points: { modern: 8, industrial: 5 }
                },
                {
                    text: "Exploring vintage markets and antique stores",
                    points: { bohemian: 8, traditional: 5 }
                },
                {
                    text: "Relaxing in nature or a cozy cafe",
                    points: { scandinavian: 8, bohemian: 5 }
                },
                {
                    text: "Hosting dinner parties for friends",
                    points: { traditional: 8, modern: 5 }
                }
            ]
        },
        {
            id: 4,
            type: "choice",
            question: "How would you describe your ideal home maintenance level?",
            options: [
                {
                    text: "Minimal upkeep, clean and simple",
                    points: { modern: 8, scandinavian: 5 }
                },
                {
                    text: "Don't mind regular maintenance for special pieces",
                    points: { traditional: 8, bohemian: 5 }
                },
                {
                    text: "Low maintenance, industrial materials",
                    points: { industrial: 8, modern: 5 }
                },
                {
                    text: "Happy to care for unique items and plants",
                    points: { bohemian: 8, scandinavian: 5 }
                }
            ]
        }
    ]
};