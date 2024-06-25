import { html } from '@/constants';

const BegginerPage = () => {
  return (
    <div id='section'>
      <div>
        {html
          .filter((item) => item.id === 0)
          .map((item) => (
            <div key={item.id}>
              <h1 className='text-center text-4xl lg:text-5xl scroll-m-20 font-extrabold tracking-tight'>
                {item.name}
              </h1>
              <p className='leading-7 pl-2 lg:pl-0 [&:not(:first-child)]:mt-6 text-justify lg:mx-0 mx-8'>
                {item.description}
              </p>
            </div>
          ))}
      </div>
      <div className='mt-10'>
        {html
          .filter((item) => item.id === 1)
          .map((item) => (
            <div key={item.id}>
              <h2 className='text-center scroll-m-20 first:mt-0 border-b pb-2 text-3xl font-semibold tracking-tight '>
                {item.name}
              </h2>
              <span>
                <p className='text-justify mx-8 pl-2 lg:mt-5 leading-7 [&:not(:first-child)]:mt-6'>
                  {item.description}
                </p>
                <p className='text-justify mx-8 pl-2 leading-7 [&:not(:first-child)]:mt-5'>
                  {item.description_2}
                </p>
              </span>
            </div>
          ))}
      </div>
      <div className='flex justify-evenly items-center mt-10'>
        <div className='mockup-code w-[50%]'>
          <pre data-prefix='$'>
            <code>&lt;p&gt;</code>
            <span>This is a Paragraph</span>
            <code>&lt;/p&gt;</code>
          </pre>
          <p className='px-5'>
            Here, &lt;p&gt; is the opening tag, &lt;/p&gt; is the closing tag,
            and everything in between is the content of the paragraph element.
          </p>
        </div>
        <div className='mockup-code w-fit gap-x-10'>
          <pre data-prefix='$'>
            <code>&lt;img /&gt;</code>
          </pre>
          <pre data-prefix='$'>
            <code>&lt;br /&gt;</code>
          </pre>
          <pre data-prefix='$'>
            <code>&lt;hr /&gt;</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BegginerPage;
