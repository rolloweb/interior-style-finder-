const quizData = {
    // Define the available styles
    styles: [
        'artdeco',
        'bohemian',
        'coastal',
        'contemporary',
        'industrial',
        'midcentury',
        'modern',
        'rustic',
        'scandinavian',
        'traditional'
    ],

    // Define the room types and corresponding question prompts
    roomTypes: {
        livingroom: "Which living room makes you feel most at home?",
        bedroom: "Which bedroom provides the perfect sanctuary?",
        kitchen: "Which kitchen inspires you to cook?",
        bathroom: "Which bathroom design do you prefer?",
        dining: "Which dining room would you love to entertain in?"
    },

    // Style descriptions for results page
    styleDescriptions: {
        artdeco: "Art Deco interiors feature bold geometric patterns, luxurious materials, and dramatic contrasts. This style combines modern tastes with fine craftsmanship and rich materials.",
        bohemian: "Bohemian style embraces a carefree, layered, and personalized look. It mixes patterns, textures, and colors with vintage and modern pieces for an eclectic vibe.",
        coastal: "Coastal design brings the relaxed, airy feel of beach life inside. Light colors, natural textures, and ocean-inspired accents create a serene atmosphere.",
        contemporary: "Contemporary style reflects current design trends, featuring clean lines and a sophisticated palette. It's characterized by simplicity, subtle sophistication, and deliberate use of texture.",
        industrial: "Industrial style celebrates raw materials and architectural elements. Exposed brick, metal, and wood combine with modern pieces for an urban, edgy aesthetic.",
        midcentury: "Mid-century modern design offers clean lines, gentle organic curves, and a love for different materials. It emphasizes functionality while embracing the optimistic spirit of retro style.",
        modern: "Modern design favors clean lines, minimal decoration, and functional spaces. It emphasizes simplicity and eliminates unnecessary detailing.",
        rustic: "Rustic style emphasizes natural beauty, featuring rough textures, warm colors, and organic materials. It creates a cozy, inviting atmosphere with a connection to nature.",
        scandinavian: "Scandinavian design combines beauty with functionality. Clean lines, light colors, and natural materials create bright, serene spaces.",
        traditional: "Traditional style offers classic details, sumptuous furnishings, and elegant décor. It emphasizes harmony and order in design."
    },

    // Track used images to prevent duplicates
    usedImages: new Set(),

    // Helper function to get a random integer between min and max (inclusive)
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Helper function to shuffle an array
    shuffleArray: function(array) {
        return array.sort(() => Math.random() - 0.5);
    },

    // Define secondary points based on style relationships
    getSecondaryPoints: function(style) {
        const styleRelations = {
            'modern': 'contemporary',
            'contemporary': 'modern',
            'scandinavian': 'modern',
            'industrial': 'modern',
            'artdeco': 'traditional',
            'bohemian': 'coastal',
            'coastal': 'scandinavian',
            'midcentury': 'modern',
            'rustic': 'traditional',
            'traditional': 'rustic'
        };

        return styleRelations[style] ? { [styleRelations[style]]: 4 } : {};
    },

    // Generate questions for the quiz
    generateQuestions: function() {
        const questions = [];
        const roomTypeKeys = Object.keys(this.roomTypes);
        this.usedImages.clear();

        // Generate room-based questions
        for (let i = 1; i <= 8; i++) {
            const roomType = roomTypeKeys[this.getRandomInt(0, roomTypeKeys.length - 1)];
            const questionText = this.roomTypes[roomType];
            const shuffledStyles = this.shuffleArray([...this.styles]);
            const selectedStyles = shuffledStyles.slice(0, 4);

            const options = selectedStyles.map(style => {
                let imageNumber;
                let imagePath;
                do {
                    imageNumber = this.getRandomInt(1, 3);
                    imagePath = `./images/rooms/${style}/${style}-${roomType}-${imageNumber}.png`;
                } while (this.usedImages.has(imagePath));
                
                this.usedImages.add(imagePath);

                return {
                    image: imagePath,
                    style: style,
                    points: {
                        [style]: 8,
                        ...this.getSecondaryPoints(style)
                    }
                };
            });

            questions.push({
                id: i,
                type: "image",
                category: "rooms",
                question: questionText,
                options: options
            });
        }

        return questions;
    },

    // Style elements for enhanced results
    styleElements: {
        artdeco: ['Geometric patterns', 'Bold colors', 'Luxurious materials', 'Symmetrical designs'],
        bohemian: ['Mixed patterns', 'Layered textures', 'Vintage pieces', 'Natural materials'],
        coastal: ['Light colors', 'Natural textures', 'Ocean-inspired', 'Relaxed atmosphere'],
        contemporary: ['Clean lines', 'Neutral palette', 'Current trends', 'Subtle sophistication'],
        industrial: ['Raw materials', 'Exposed elements', 'Metal accents', 'Urban aesthetic'],
        midcentury: ['Organic curves', 'Functional design', 'Retro elements', 'Mixed materials'],
        modern: ['Clean lines', 'Minimal decor', 'Neutral colors', 'Open spaces'],
        rustic: ['Natural textures', 'Warm colors', 'Wooden elements', 'Cozy atmosphere'],
        scandinavian: ['Light woods', 'Minimal decor', 'Functional beauty', 'Natural elements'],
        traditional: ['Classic details', 'Rich textures', 'Elegant decor', 'Symmetrical layout']
    },

    // Color palettes for enhanced results
    colorPalettes: {
        artdeco: ['#B8860B', '#000000', '#C0C0C0', '#4B0082'],
        bohemian: ['#8B4513', '#D2691E', '#556B2F', '#8B008B'],
        coastal: ['#87CEEB', '#F0F8FF', '#E0FFFF', '#B0E0E6'],
        contemporary: ['#808080', '#FFFFFF', '#000000', '#4682B4'],
        industrial: ['#708090', '#A9A9A9', '#8B4513', '#2F4F4F'],
        midcentury: ['#CD853F', '#DEB887', '#4682B4', '#8FBC8F'],
        modern: ['#F5F5F5', '#333333', '#A7C7D7', '#B7B7A4'],
        rustic: ['#8B4513', '#DEB887', '#A0522D', '#F5DEB3'],
        scandinavian: ['#FFFFFF', '#F5F5F5', '#87CEEB', '#90EE90'],
        traditional: ['#8B4513', '#DEB887', '#800020', '#F5F5DC']
    },

    // Retailer links for enhanced results
    retailers: {
        uk: {
            'wayfair': 'https://www.wayfair.co.uk',
            'johnlewis': 'https://www.johnlewis.com/home-garden',
            'dunelm': 'https://www.dunelm.com',
            'habitat': 'https://www.habitat.co.uk',
            'next': 'https://www.next.co.uk/homeware'
        },
        us: {
            'wayfair': 'https://www.wayfair.com',
            'westelm': 'https://www.westelm.com',
            'cb2': 'https://www.cb2.com',
            'crateandbarrel': 'https://www.crateandbarrel.com',
            'potterybarn': 'https://www.potterybarn.com'
        }
    },

    questions: []
};

// Generate the questions when the script loads
quizData.questions = quizData.generateQuestions();