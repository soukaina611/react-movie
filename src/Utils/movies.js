   export const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      poster :"http://t9edalik.alwaysdata.net/images/film1.jpg"
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 1,
      poster :"http://t9edalik.alwaysdata.net/images/film2.jpg"
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      poster :"http://t9edalik.alwaysdata.net/images/film3.jpg"
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      poster :"http://t9edalik.alwaysdata.net/images/film4.jpg"
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      poster :"http://t9edalik.alwaysdata.net/images/film5.jpg"
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      poster :"http://t9edalik.alwaysdata.net/images/film6.jpg"
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32,
      poster :"http://t9edalik.alwaysdata.net/images/film1.jpg"
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      poster :"http://t9edalik.alwaysdata.net/images/film8.jpg"
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      poster :"http://t9edalik.alwaysdata.net/images/film9.jpg"
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      poster :"http://t9edalik.alwaysdata.net/images/film10.jpg"
    },
  ]

  
  
   export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies));
  