import React from 'react';
import WaveBackground from './WaveBackground';

const WaveContainer1 = () => {
  return (
    <div style={{position:'absolute', marginTop:'50%', width:'120vw', marginLeft:  window.innerWidth <= 928 ? '0px':'0px'}}>
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

export default WaveContainer1;