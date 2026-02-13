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
            secretAnswer: "Aunque esto sea chiquito, quiero que se quede en tu corazón 💕"
        },

        second: {
            text: "¿Cuánto amas?",
            startText: "Así de mucho… 💓",
            nextBtn: "Siguiente 💖"
        },

        third: {
            text: "¿Tú quisieras ser mi San Valentín este 13 de diciembre? 🌹",
            yesBtn: "Sí, quiero 💕",
            noBtn: "No… pero piénsalo 😔"
        },

        fourth: {
            text: "¿Quieres leer una pequeña carta?",
            option1: "Sí, quiero leerla 💌",
            option2: "¿Me la lees tú? 🎧",
            option3: "Mejor nadota 😅"
        }
    },

    loveMessages: {
        normal: "¿¡Wooow, me amas tanto así!? 🥰💝",
        high: "De aquí hasta la luna, a pasos de tortuga 🐢🌙💕",
        extreme: "¡Hasta el infinito y más allá! 🚀💝"
    },

    celebration: {
        title: "Entonces… empecemos de nuevo juntos 💕🌸",
        message: "Quiero construir algo bonito contigo, paso a paso y haciendo las cosas bien 💖",
        emojis: "💕🩷🌸🌷🌹🌿💓💗♥️❣️🌱🧸"
    },

    extras: {
        carta: "",  // ← AQUÍ pegarás tu carta después
        llamadaTexto: "Entonces márcame… quiero escucharte 💖📞",
        fotoUrl: "" // ← AQUÍ pondrás la URL de tu imagen
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
