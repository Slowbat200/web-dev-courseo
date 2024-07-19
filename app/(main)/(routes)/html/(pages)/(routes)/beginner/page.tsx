import { html } from '@/constants';
import Structure from './components/structure';

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
      {/* Tags and elements */}
      <div className='mt-10'>
        {html
          .filter((item) => item.id === 1)
          .map((item) => (
            <div key={item.id}>
              <h2 className='text-center scroll-m-20 first:mt-0 border-b pb-2 text-3xl font-semibold tracking-tight '>
                {item.name}
              </h2>
              <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight pt-5 pl-5 lg:pl-0'>
                Elements and Tags:
              </h3>
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
      <div className='flex justify-evenly items-center flex-col lg:flex-row mt-10 gap-y-10'>
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
      {/* Atributes */}
      <div className='mt-10'>
        <div>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight pl-5 lg:pl-0'>
            Atributes:
          </h3>
          <p className='mt-5 pl-5 text-justify'>
            Attributes provide additional information about HTML elements. They
            are always included in the opening tag and come in name/value pairs
            like name=&apos;value&apos;.
          </p>
        </div>
        <div className=' flex justify-center items-center'>
          <div className='mockup-code mt-10 lg:w-fit w-[80%] ml-5'>
            <pre data-prefix='$'>
              <code>&lt;a href=&apos;https://www.example.com&apos;&gt;</code>
              <span>This is a link</span>
              <code>&lt;/a&gt;</code>
            </pre>
            <p className='px-5 leading-7 [&:not(:first-child)]:mt-6'>
              Here, href=&apos;https://www.example.com&apos; is an attribute of
              the anchor (&lt;a&gt;) tag that specifies the URL the link points
              to.
            </p>
          </div>
        </div>
      </div>
      {/* Document structure */}
      <div className='mt-10'>
        <div>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight pl-5 lg:pl-0'>
            Document Structure:
          </h3>
          <p className='px-8 leading-7 [&:not(:first-child)]:mt-6'>
            An HTML document has a defined structure that includes elements like
            &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt;, and &lt;body&gt;.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <Structure />
        </div>
      </div>
      {/* How HTML works */}
      <div className='mt-10'>
        <div>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight pl-5 lg:pl-0'>How HTML works:</h3>
          <ul>
            <li className='list-decimal'>
              <h4 className='scroll-m-20 text-xl font-semibold tracking-tight text-center mt-5'>HTML Document</h4>
              <p className='px-5 leading-7 [&:not(:first-child)]:my-6'>
                An HTML file is simply a text file with an .html extension. It
                contains HTML code that describes the structure and content of a
                webpage.
              </p>
            </li>
            <li className='list-decimal'>
              <h4 className='scroll-m-20 text-xl font-semibold text-center tracking-tight'>Web Browser</h4>
              <p className='px-5 leading-7 [&:not(:first-child)]:mt-5'>
                A web browser (like Chrome, Firefox, Safari) reads HTML files
                and renders them as webpages. The browser interprets the HTML
                tags and displays the content accordingly.
              </p>
            </li>
            <li className='list-decimal'>
              <h4 className='scroll-m-20 text-xl font-semibold tracking-tight text-center'>Request and Response</h4>
              <p className='px-5 leading-7 [&:not(:first-child)]:mt-5'>
                When you enter a URL in the browser, the browser sends a request
                to the web server where the HTML file is hosted. The server
                responds by sending the HTML file back to the browser. The
                browser then reads the HTML file and displays the webpage to
                you.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BegginerPage;
