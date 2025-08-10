import React from "react";

//random stuff - GPT generated
const About = () => {
  return (
    <div className="about-container" style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.text}>
        Welcome to <strong>ABC Food</strong>, your go-to destination for delicious and
        freshly prepared meals. We are passionate about serving high-quality
        dishes made with the finest ingredients, bringing together the perfect
        blend of taste and tradition.
      </p>
      <p style={styles.text}>
        Since our establishment, we have been committed to creating a warm and
        welcoming atmosphere for our guests. Whether you're here for a quick
        bite, a family dinner, or a special celebration, we ensure every meal
        feels like home.
      </p>
      <p style={styles.text}>
        Our team of dedicated chefs and friendly staff work tirelessly to make
        your dining experience unforgettable. At ABC Food, every dish tells a
        story – and we can’t wait to share ours with you.
      </p>
      <h2 style={styles.subHeading}>Why Choose Us?</h2>
      <ul style={styles.list}>
        <li>Fresh, locally sourced ingredients</li>
        <li>Authentic flavors and recipes</li>
        <li>Cozy and friendly dining environment</li>
        <li>Exceptional customer service</li>
      </ul>
      <p style={styles.footerText}>
        📍 Visit us today and taste the difference at <strong>ABC Food</strong>!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#d35400",
    marginBottom: "10px",
  },
  subHeading: {
    fontSize: "1.8rem",
    color: "#e67e22",
    marginTop: "20px",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    fontSize: "1rem",
  },
  footerText: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "#27ae60",
  },
};

export default About;
