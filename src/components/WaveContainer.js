import React from 'react';
import WaveBackground from './WaveBackground';

const WaveContainer = () => {
  return (
    <div style={{position:'absolute', marginTop:'60%', marginLeft:  window.innerWidth <= 928 ? '-30px':'-60px'}}>
      <WaveBackground />
      <WaveBackground />
      <WaveBackground />
      <WaveBackground />
      <WaveBackground />
      <WaveBackground />
      <WaveBackground />
      <WaveBackground />
  
    </div>
  );
};

export default WaveContainer;