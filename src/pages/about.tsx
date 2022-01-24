import Link from 'next/link';
import { VFC } from 'react';

const About: VFC = () => {
  return (
    <div>
      Hello Next!
      <br />
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default About;
