type BotProps = {
  message: string;
};

const Bot = ({ message }: BotProps) => {
  return (
    <div className='relative'>
      
      <div className='w-fit p-[10px] rounded-3xl bg-blue-300 shadow-[0 0 10px 0 rgba(0, 0, 0, 0.1)] rounded-[90px 90px 70px 70px]'>
        <div className='bg-gray-900 border-2 border-white w-[150px] h-[120px] flex justify-center items-center rounded-xl'>
          <div className='gap-[20px] flex justify-between items-center'>
            <div className='w-[40px] h-[60px] bg-white rounded-[50%] relative border-none animate-move'></div>
            <div className='w-[40px] h-[60px] bg-white rounded-[50%] relative border-none animate-move'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bot;
