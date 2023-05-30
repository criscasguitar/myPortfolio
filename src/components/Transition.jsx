import Portfolio from './Portfolio';
import { Element } from 'react-scroll';

const AnimatedSection = () => {
    return (
      <Element name="section1" className="section">
        {Portfolio}
      </Element>
    );
  };
  
  export default AnimatedSection;
  