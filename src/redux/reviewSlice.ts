import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [
    {
      id: 1,
      name: 'John Doe',
      date: '2024-09-20',
      rating: 5,
      comment: "I’m in love with the quality of the t-shirts I ordered! The fabric feels super soft, and they fit perfectly. The designs are so trendy, I get compliments every time I wear them!"
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: '2024-09-19',
      rating: 3,
      comment: "I was hesitant to order clothes online, but this brand exceeded my expectations! The jeans fit like a dream, and they have quickly become my go-to pair. Highly recommended!"
    },
    { 
      id: 3, 
      name: 'Emily R.', 
      date: '2024-09-19', 
      rating: 4, 
      comment: "Finding stylish clothes that are eco-friendly has always been a challenge, but this brand makes it easy! I feel great knowing that my wardrobe is sustainable without compromising on quality." 
    },

    // { 
    //   id: 4, 
    //   name: 'David P.', 
    //   date: '2024-09-18', 
    //   rating: 5, 
    //   comment: "I’m so impressed with the ethical values of this company. Their clothes are not only fashionable, but they’re also made with the planet in mind. I’ll definitely be coming back for more!" 
    // },
    // { 
    //   id: 5, 
    //   name: 'Vanessa G.', 
    //   date: '2024-09-17', 
    //   rating: 5, 
    //   comment: "The craftsmanship is absolutely incredible. Every detail on the dress I ordered feels luxurious. Wearing it makes me feel confident and stylish at every event." 
    // },
    // { 
    //   id: 6, 
    //   name: 'Chris F.', 
    //   date: '2024-09-16', 
    //   rating: 4, 
    //   comment: "The perfect blend of style and functionality. I love how the sports bras offer support without feeling restrictive, and the designs are fantastic. I wear them both to the gym and casually!"
    // },
    // { 
    //   id: 7, 
    //   name: 'Alexa D.', 
    //   date: '2024-09-15', 
    //   rating: 5, 
    //   comment: "This activewear is a game-changer for my workouts! The leggings stay in place, and the moisture-wicking fabric keeps me comfortable even during intense training. Can’t recommend it enough!" 
    // },
    // { 
    //   id: 8, 
    //   name: 'Mark R.', 
    //   date: '2024-09-14', 
    //   rating: 5, 
    //   comment: "The quality is outstanding! The clothes are soft, breathable, and don’t lose their shape after multiple washes. As a parent, I appreciate the attention to detail and comfort for my little one." 
    // },
    // { 
    //   id: 9, 
    //   name: 'Karla J.', 
    //   date: '2024-09-13', 
    //   rating: 4, 
    //   comment: "Finally, a brand that understands plus-size fashion! The fit is spot on, and the styles are modern and flattering. I feel beautiful every time I wear their clothes." 
    // },
    // { 
    //   id: 10, 
    //   name: 'Tiffany B.', 
    //   date: '2024-09-12', 
    //   rating: 4, 
    //   comment: "The inclusivity of this brand is amazing! Their size range is fantastic, and the clothes are not just an afterthought. They’re stylish, comfortable, and made for real bodies." 
    // }
  
  ],
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
});

export default reviewsSlice.reducer;
