export interface Movie {
    id: number,
    title: string,
    image: string,
    link: string,
    connections: number[]
}

export const movies_Q1: Movie[] = [
    {
        id: 1,
        title: "The Gray Man",
        image: "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        link: "",
        connections: [4, 5, 6],
    },
    {
        id: 2,
        title: "Blonde",
        image: "https://m.media-amazon.com/images/M/MV5BNDk2YTA1MGYtMGNjMi00YTJlLWI1YjItMjBjOGJlZGIwZmYzXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_FMjpg_UX1000_.jpg",
        link: "",
        connections: [7, 8, 9],
    },
    {
        id: 3,
        title: "Minions: The Rise of Gru",
        image: "https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg",
        link: "",
        connections: [10, 11, 12],
    },
]

export const movies_Q2: Movie[] = [
    {
        id: 4,
        title: "Top Gun: Maverick",
        image: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        link: "",
        connections: [13, 14, 15],
    },
    {
        id: 5,
        title: "Bullet Train",
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Bullet_Train_%28poster%29.jpeg",
        link: "",
        connections: [16, 17, 18],
    },
    {
        id: 6,
        title: "Thor: Love and Thunder",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
        link: "",
        connections: [19, 20, 21],
    },
    {
        id: 7,
        title: "Purple Hearts",
        image: "https://kbimages1-a.akamaihd.net/fead69bf-29c1-4542-976d-43d039802535/1200/1200/False/purple-hearts-3.jpg",
        link: "",
        connections: [22, 23, 24],
    },
    {
        id: 8,
        title: "Black Panther: Wakanda Forever",
        image: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        link: "",
        connections: [25, 13, 15],
    },
    {
        id: 9,
        title: "The Godfather",
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        link: "",
        connections: [14, 16, 18],
    },
    {
        id: 10,
        title: "Pokemon: The First Movie",
        image: "https://m.media-amazon.com/images/I/615VN0Q649L._AC_SY580_.jpg",
        link: "",
        connections: [17, 19, 21],
    },
    {
        id: 11,
        title: "Nemo",
        image: "https://m.media-amazon.com/images/I/71-bSJo53DL.jpg",
        link: "",
        connections: [20, 22, 24],
    },
    {
        id: 12,
        title: "Ice Age",
        image: "https://image.tmdb.org/t/p/original/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
        link: "",
        connections: [23, 25, 13],
    },
]
export const movies_Q3: Movie[] = [
    {
        id: 13,
        title: "The Batman",
        image: "https://upload.wikimedia.org/wikipedia/pt/3/38/The_Batman_poster.jpg",
        link: "https://www.imdb.com/title/tt1877830/",
        connections: [0],
    },
    {
        id: 14,
        title: "Spiderman: No Way Home",
        image: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg",
        link: "https://www.imdb.com/title/tt10872600/",
        connections: [0],
    },
    {
        id: 15,
        title: "The Flash",
        image: "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        link: "https://www.imdb.com/title/tt3107288/",
        connections: [0],
    },    
    {
        id: 16,
        title: "The Lord of the Rings 1",
        image: "https://m.media-amazon.com/images/I/81EBp0vOZZL.jpg",
        link: "https://www.imdb.com/title/tt0120737/",
        connections: [0],
    },    
    {
        id: 17,
        title: "The Lord of the Rings 2",
        image: "https://m.media-amazon.com/images/I/81eqQvveI6L.jpg",
        link: "https://www.imdb.com/title/tt0167261/",
        connections: [0],
    },    
    {
        id: 18,
        title: "The Lord of the Rings 3",
        image: "https://m.media-amazon.com/images/I/71X6YzwV0gL.jpg",
        link: "https://www.imdb.com/title/tt0167260/",
        connections: [0],
    },    
    {
        id: 19,
        title: "Dead Poets Society",
        image: "https://kbimages1-a.akamaihd.net/b7697299-e92b-48d1-ab35-a74dccb8ffa6/1200/1200/False/dead-poets-society-4.jpg",
        link: "https://www.imdb.com/title/tt0097165/",
        connections: [0],
    },    
    {
        id: 20,
        title: "Shawshank Redemption",
        image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        link: "https://www.imdb.com/title/tt0111161",
        connections: [0],
    },    
    {
        id: 21,
        title: "Fight Club",
        image: "https://flxt.tmsimg.com/assets/p23069_p_v8_aa.jpg",
        link: "https://www.imdb.com/title/tt0137523/",
        connections: [0],
    },    
    {
        id: 22,
        title: "Lion King",
        image: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_FMjpg_UX1000_.jpg",
        link: "https://www.imdb.com/title/tt0110357",
        connections: [0],
    },    
    {
        id: 23,
        title: "Harry Potter 8/1",
        image: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_.jpg",
        link: "https://www.imdb.com/title/tt0926084",
        connections: [0],
    },    
    {
        id: 24,
        title: "Harry Potter 8/2",
        image: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        link: "https://www.imdb.com/title/tt1201607/",
        connections: [0],
    },    
    {
        id: 25,
        title: "Pulp Fiction",
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        link: "https://www.imdb.com/title/tt0110912/",
        connections: [0],
    },    

]

