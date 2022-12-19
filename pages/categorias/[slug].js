import React from "react";

const Category = () => {
  return <div>Category</div>;
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "burgers" && slug.current == "${slug}"][0]`;
  // const burguer = '*[_type == "product"]';
  const burguers = await client.fetch(query);

  //  camps

  return {
    props: {
      products,
      product,
      camps,
    },
  };
};

export default Category;
