import { Button } from '@/components/ui/button';
import { DevModal } from './modal';

const HtmlStructure = () => {
  return (
    <section>
      <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center lg:text-left'>
        HTML: The Structure
      </h3>
      <p className='text-lg lg:pr-5 px-5 lg:px-0 text-justify'>
        Let&apos;s start with HTML, which stands for HyperText Markup Language.
        HTML provides the basic structure of a webpage. It uses elements and
        tags to define content.
      </p>
      <div>
        <div className='mockup-code w-[50%] h-full max-h-[512px] overflow-auto'>
          <span>
            <pre data-prefix='$' className='flex flex-col'>
              <code className='pl-2'>&lt;!DOCTYPE html&gt;</code>
              <code className='pl-2'>&lt;html&gt;</code>
              {/* Head code */}
              <code className='pl-2'>&lt;head&gt;</code>
              {/* Title code */}
              <div className='pl-5 flex flex-row'>
                <code>&lt;title&gt;</code>
                <p className='px-2'>My first website</p>
                <code>&lt;title&gt;</code>
              </div>
              {/* End of head code */}
              <code className='pl-2'>&lt;/head&gt;</code>

              {/* Body code */}
              <div className='flex flex-col'>
                <code className='pl-2'>&lt;body&gt;</code>
                {/* h1 tag */}
                <div className='flex flex-row pl-5'>
                  <code className='pl-2'>&lt;h1&gt;</code>
                  <p className='px-2'>Welcome to My Webpage</p>
                  <code className='pl-2'>&lt;/h1&gt;</code>
                </div>
                {/* p tag */}
                <div className='flex flex-row pl-5'>
                  <code className='pl-2'>&lt;p&gt;</code>
                  <p className='px-2'>
                    This is a paragraph of text. HTML is great for structuring
                    content.
                  </p>
                  <code className='pl-2'>&lt;/p&gt;</code>
                </div>
                {/* a tag */}
                <div className='flex flex-row pl-5'>
                  <code className='pl-2'>
                    &lt;a href=&apos;https://www.example.com&apos;&gt;
                  </code>
                  <p className='px-2'>Visit Example</p>
                  <code className='pl-2'>&lt;/a&gt;</code>
                </div>
                {/* End of the body */}
                <code className='pl-2'>&lt;/body&gt;</code>
              </div>
              <DevModal
                title={'Structure explanation'}
                description={[ 
                '<!DOCTYPE html> declares the document type.',
                '<html> is the root element.',
                '<head> contains meta-information about the document.',
                '<title> sets the title shown in the browser tab.',
                '<body> holds the content of the webpage.',
                '<h1> is a heading.',
                '<p> is a paragraph.',
                '<a> is a hyperlink.',
                  ].map((text, index) => (
                    <p
                      className='text-sm md:text-md lg:text-[18px] lg:leading-8 pl-2'
                      key={index}
                    >
                      {text}
                    </p>
                  ))}
                trigger={'explanation'}
                children={undefined}
              />
            </pre>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HtmlStructure;
