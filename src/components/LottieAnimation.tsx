import React from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  className = "",
  width = "100%",
  height = "100%",
  loop = true,
  autoplay = true,
}) => {
  return (
    <div className={className} style={{ width, height }}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieAnimation;