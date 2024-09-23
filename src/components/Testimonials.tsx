"use client"; 

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from '../styles/Home.module.css';
// import Slider from "react-slick";

const Testimonials = () => {
  const reviews = useSelector((state: RootState) => state.reviews.reviews);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 5000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.header}>
        <span className={styles.reviewCount}>⭐⭐⭐⭐⭐ 2810 Reviews</span>
      </div>
      <div className={styles.cardbox}>
        {/* <Slider {...settings} className={styles.grid}> */}
  {reviews.map((review) => (
    <div key={review.id} className={styles.card}>
      <div className={styles.cardHeader}>
        <div className="ml-4">
          <h3 className={styles.cardName}>{review.name}</h3>
          <p className={styles.cardDate}>{review.date}</p>
        </div>
      </div>
      <div className={styles.rating}>
        {'⭐'.repeat(review.rating)}
      </div>
      <p className={styles.cardComment}>{review.comment}</p>
    </div>
  ))}
{/* </Slider> */}

      </div>
      <button className={styles.button}>View All Reviews</button>
    </section>
  );
};

export default Testimonials;