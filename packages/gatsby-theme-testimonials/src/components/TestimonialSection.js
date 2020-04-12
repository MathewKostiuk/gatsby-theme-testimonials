/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import TestimonialCard from "./TestimonialCard";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;

  // Desktop
  @media (min-width: 48em) {
    flex-direction: row;
  }
`;

export default () => {
  const data = useStaticQuery(query);
  const testimonials = data.allTestimonialsJson.edges;

  return (
    <Section>
      {testimonials.map(({ node: testimonial }) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </Section>
  );
};

export const query = graphql`
  {
    allTestimonialsJson {
      edges {
        node {
          name
          company
          blurb
          twitter
          linkedIn
          shopify
        }
      }
    }
  }
`;
