<script setup>
const sponsors = [
    {
        name: "Sponsor 1",
        image: "/badge.png",
        link: "https://tabpole.github.io",
    },
    {
        name: "Sponsor 2",
        image: "/badge.png",
        link: "https://tabpole.github.io",
    },
    {
        name: "Sponsor 2",
        image: "/badge.png",
        link: "https://tabpole.github.io",
    },
    {
        name: "Sponsor 2",
        image: "/badge.png",
        link: "https://tabpole.github.io",
    },
    {
        name: "Sponsor 2",
        image: "/badge.png",
        link: "https://tabpole.github.io",
    },
    {
        name: "Sponsor 2",
        image: "/badge.png",
        link: "https://tabpole.github.io",
    },
    {
        name: "Sponsor 2",
        image: "/badge.png",
        link: "https://tabpole.github.io",
    },
    {
        name: "Sponsor 2",
        image: "/badge.png",
        link: "https://tabpole.github.io",
    },
];
</script>

<template>
    <h1 class="title">Sponsors</h1>

    <div class="sponsors">
        <a class="sponsor" v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link" target="_blank">
            <img :src="sponsor.image" :alt="sponsor.name" />
        </a>
    </div>
</template>

<style scoped>
.title {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 120px;
    margin-bottom: 60px;
    text-align: center;
}

.sponsors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 100%;
}

.sponsor {
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.sponsor img {
    max-width: 100%;
    height: auto;
    margin: 10px;
}

@media (min-width: 400px) {
    .sponsor {
        width: calc(50% - 20px);
        height: 150px;
        margin: 10px;
    }
}

@media (min-width: 768px) {
    .sponsor {
        width: calc(33.33% - 20px);
        height: 200px;
    }
}

@media (min-width: 992px) {
    .sponsor {
        width: calc(25% - 20px);
        height: 250px;
    }
    .sponsors {
        max-width: 1160px;
    }
}
</style>
