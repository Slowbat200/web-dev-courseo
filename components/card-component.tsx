
interface Props {
  cardName: string;
  cardDescription: string;
  cardCode: string;
};

export const CardComponent = ({cardName, cardDescription, cardCode }: Props) => {
  return (
    <div>
      <div className='rounded-lg bg-background w-full px-4 my-5 py-5'>
        <h1>{cardName}</h1>
        <p>{cardDescription}</p>
        <div className='rounded-lg border border-white'>
          <div className='mockup-code'>
            <pre data-prefix=''>
              <code>{cardCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};