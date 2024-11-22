import '../app/globals.css';

interface FireLoaderProps {
  loading?: boolean;
  size?: number;
}

export const FireLoader = ({ loading, size }: FireLoaderProps) => {
  return (
    <>
      {loading && (
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
      )}
    </>
  );
};
