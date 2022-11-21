const { createApp } = Vue;

createApp({
    data() {
                return {
            message: `Hi, you're using Vue.js`,
            text: `Everytime you refresh you'll get a random image:`,
            classH1: `text-danger text-center`,
            classSub: `text-danger text-center`,
            classImg: `img-fluid rounded mx-auto`,
            classPers: `d-block`,
            image : `https://picsum.photos/200/300?grayscale`
        };
    },
}).mount("#app")