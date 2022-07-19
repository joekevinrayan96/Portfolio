import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <h2>About</h2>
      <p>Write about your self</p>
    </div>
  );
});

export default About;
