const CONFIG = {
    valentineName: "Garu",

    pageTitle: "¿Quieres ser mi San Valentín? 💕",

    floatingEmojis: {
        hearts: ['💕','🩷','💓','💗','♥️','❣️'],
        bears: ['🧸','🌸','🌷','🌹','🌿','🌱']
    },

    questions: {
        first: {
            text: "¿Me amas?",
            yesBtn: "Sí 💗",
            noBtn: "No 😢",
            secretAnswer: "Aunque esto sea chiquito, quiero que se quede en tu corazón. Gracias por siempre estar ahí para mí, incluso cuando no es fácil. Gracias por tu paciencia, por tu atención y por no soltarme cuando más lo necesito 💕💗"
        },
        second: {
            text: "¿Cuánto amas?",
            startText: "Así de mucho… 💓",
            nextBtn: "Siguiente pregunta 💖"
        },
        third: {
            text: "¿Tú quisieras ser mi San Valentín este 13 de Febrero? 🌹",
            yesBtn: "Sí, quiero 💕",
            noBtn: "No… pero lo pensare 😔"
        }
    },

    loveMessages: {
        extreme: "Sí te amo, de verdad, con todo mi corazoncito 💕",
        high: "Quiero enmendar mis errores y demostrarte que puedo hacerlo mejor 🌸🍃",
        normal: "Quiero construir algo bonito, sano y disfrutar cada momento contigo 🩷🫶🏻"
    },

    celebration: {
        title: "Entonces… empecemos de nuevo juntos 💕🌸",
        message: "Me encantaría tener otra oportunidad contigo, conocernos mejor, no saltarnos etapas y hacer las cosas bien. Quiero que seas tú a mi lado y que mañana podamos pasar el día juntos 💖",
        emojis: "💕🩷🌸🌷🌹🌿💓💗♥️❣️🌱🧸"
    },

    colors: {
        backgroundStart: "#ffd6e0",
        backgroundEnd: "#ffe5d0",
        buttonBackground: "#ffb3c1",
        buttonHover: "#ffc2d1",
        textColor: "#000000"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Reproducir música",
        stopText: "🔇 Detener música",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
