// Белые фигуры
const whiteFigures = {

    // Белая пешка
    chessPawn: {
        startPosition: {
            x: 7,
        },

        view: `<i class="fas fa-chess-pawn fa-3x white-figure"></i>`,
    },
    
    chessRook: {
        startPosition: [
            {
                x: 8,
                y: "A",
            },

            {
                x: 8,
                y: "H",
            },
        ],

        view: `<i class="fas fa-chess-rook fa-3x white-figure"></i>`,
    },
    
    chessHorse: {
        startPosition: [
            {
                x: 8,
                y: "B",
            },

            {
                x: 8,
                y: "G",
            },
        ],

        view: `<i class="fas fa-chess-knight fa-3x white-figure"></i>`,
    },
    
    chessBishop: {
        startPosition: [
            {
                x: 8,
                y: "C",
            },

            {
                x: 8,
                y: "F",
            },
        ],

        view: `<i class="fas fa-chess-bishop fa-3x white-figure"></i>`,
    },
    
    chessQueen: {
        startPosition: [
            {
                x: 8,
                y: "D",
            },
        ],

        view: `<i class="fas fa-chess-queen fa-3x white-figure"></i>`,
    },

    chessKing: {
        startPosition: [
            {
                x: 8,
                y: "E",
            },
        ],

        view: `<i class="fas fa-chess-king fa-3x white-figure"></i>`,
    }
};

// Черные фигуры
const blackFigures = {

    // Черная пешка
    chessPawn: {
        startPosition: {
            x: 2,
        },

        view: `<i class="fas fa-chess-pawn fa-3x black-figure"></i>`,
    },
    
    chessRook: {
        startPosition: [
            {
                x: 1,
                y: "A",
            },

            {
                x: 1,
                y: "H",
            },
        ],

        view: `<i class="fas fa-chess-rook fa-3x black-figure"></i>`,
    },
    
    chessHorse: {
        startPosition: [
            {
                x: 1,
                y: "B",
            },

            {
                x: 1,
                y: "G",
            },
        ],

        view: `<i class="fas fa-chess-knight fa-3x black-figure"></i>`,
    },
    
    chessBishop: {
        startPosition: [
            {
                x: 1,
                y: "C",
            },

            {
                x: 1,
                y: "F",
            },
        ],

        view: `<i class="fas fa-chess-bishop fa-3x black-figure"></i>`,
    },
    
    chessQueen: {
        startPosition: [
            {
                x: 1,
                y: "D",
            },
        ],

        view: `<i class="fas fa-chess-queen fa-3x black-figure"></i>`,
    },

    chessKing: {
        startPosition: [
            {
                x: 1,
                y: "E",
            },
        ],

        view: `<i class="fas fa-chess-king fa-3x black-figure"></i>`,
    }
}