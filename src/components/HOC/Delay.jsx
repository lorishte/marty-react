import { useState, useEffect, useRef } from 'react';

const Delay = ({ children, delayTime = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), delayTime);
  }, [delayTime]);

  return isVisible ? children : null;
};

export default Delay;