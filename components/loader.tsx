import '../app/globals.css';

interface FireLoaderProps{
    loading?: boolean;
    color?: string;
    size?: number; 
}

const FireLoader = ({loading, size}: FireLoaderProps) => {
  return (
    <div className='fire'>
      <div className='fire-left'>
        <div className='main-fire'></div>
        <div className='particle-fire'></div>
      </div>
      <div className='fire-center'>
        <div className='main-fire'></div>
        <div className='particle-fire'></div>
      </div>
      <div className='fire-right'>
        <div className='main-fire'></div>
        <div className='particle-fire'></div>
      </div>
      <div className='fire-bottom'>
        <div className='main-fire'></div>
      </div>
    </div>
  );
};

export default FireLoader;
