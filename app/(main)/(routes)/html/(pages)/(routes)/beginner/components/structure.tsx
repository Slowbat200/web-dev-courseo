import { Separator } from '@/components/ui/separator';
import { HtmlModal } from './modal';

const Structure = () => {
  return (
    <div className='lg:w-[60%] w-[80%]'>
      <div className='mockup-code mt-10 ml-5'>
        <pre className='flex flex-col pl-5'>
          <code className='pl-2'>&lt;!DOCTYPE html&gt;</code>
          <code className='pl-3'>&lt;html&gt;</code>
          {/* Head */}
          <code className='pl-4'>&lt;head&gt;</code>
          {/* Title */}
          <div className='flex flex-row'>
            <code className='pl-10'>&lt;title&gt;</code>
            <p>My First HTML Page</p>
            <code className='pl-'>&lt;/title&gt;</code>
          </div>
          <code className='pl-4'>&lt;/head&gt;</code>
          {/* Body */}
          <code className='pl-4'>&lt;body&gt;</code>
          {/* Heading */}
          <div className='flex flex-row'>
            <code className='pl-10'>&lt;h1&gt;</code>
            <h1>Welcome to my website</h1>
            <code>&lt;/h1&gt;</code>
          </div>
          {/* Paragraph */}
          <div className='flex flex-row'>
            <code className='pl-10'>&lt;p&gt;</code>
            <p>This is a paragraph of text.</p>
            <code>&lt;/p&gt;</code>
          </div>
          {/** End of the page */}
          <code className='pl-4'>&lt;/body&gt;</code>
          <code className='pl-3'>&lt;/html&gt;</code>
        </pre>
        <HtmlModal
          trigger={'explanation'}
          title={'Structure explanation'}
          description={`So what I exactly did here. 
          This code create a simple web page with Heading <h1> and simple paragraph <p>. 
          As you see there is some tags, now I tell you what they exactly means.`}
          className='max-w-[95%] max-h-[95%]'
        >
          <div>
            <div className='mockup-code w-full h-full max-h-[512px] overflow-auto'> 
              <span>
                <pre data-prefix='$'>
                  <code className='pl-2'>&lt;!DOCTYPE html&gt;</code>
                  <p className='leading-7 [&:not(:first-child)]:mt-3 mb-5 pl-20'>
                    This tag is declaring the document type and version of HTML.
                  </p>
                </pre>
              </span>
              <Separator className='bg-white' />
              <span>
                <pre data-prefix='$' className='pt-5'>
                  <code className='pl-2'>&lt;html&gt;</code>
                  <p className='leading-7 [&:not(:first-child)]:mt-3 mb-5 pl-20'>
                    This tag is the root element of the document. It contains
                    all other elements.
                  </p>
                </pre>
              </span>
              <Separator className='bg-white' />
              <span>
                <pre data-prefix='$' className='pt-5'>
                  <code className='pl-2'>&lt;head&gt;</code>
                  <p className='leading-7 [&:not(:first-child)]:mt-3 mb-5 pl-20 text-wrap'>
                    This tag is the head of the document. It contains
                    information about the document, such as the title, meta
                    data, and styles. For basic user is this part of code
                    invisible, but, for example, Google bots can read these
                    metatags.
                  </p>
                </pre>
              </span>
              <Separator className='bg-white' />
              <span>
                <pre data-prefix='$' className='pt-5'>
                  <code className='pl-2'>&lt;title&gt;</code>
                  <p className='leading-7 [&:not(:first-child)]:mt-3 mb-5 pl-20 text-wrap'>
                    This tag is the title of the document. It is displayed in
                    the browser&apos;s title bar and is used by search engines to
                    understand the content of the page.
                  </p>
                </pre>
              </span>
              <Separator className='bg-white' />
              <span>
                <pre data-prefix='$' className='pt-5'>
                  <code className='pl-2'>&lt;body&gt;</code>
                  <p className='leading-7 [&:not(:first-child)]:mt-3 pl-20 text-wrap'>
                    This tag is the body of the document. It contains the
                    visible content of the page, such as text, images, and links
                    so everything we see on the page, is wraped in body tag.
                  </p>
                </pre>
              </span>
              <Separator className='bg-white' />
              <span>
                <pre data-prefix='$' className='pt-5'>
                  <code className='pl-2'>&lt;h1&gt;</code>
                  <p className='leading-7 [&:not(:first-child)]:mt-3 pl-20 text-wrap'>
                    This tag is used to define the most important heading of the
                    document. It is displayed in a large font size and is used
                    to define the main title of the page.
                  </p>
                </pre>
              </span>
              <Separator className='bg-white' />
              <span>
                <pre data-prefix='$' className='pt-5'>
                  <code className='pl-2'>&lt;p&gt;</code>
                  <p className='leading-7 [&:not(:first-child)]:mt-3 pl-20 text-wrap'>
                    This tag is the body of the document. It contains the
                    visible content of the page, such as text, images, and links
                    so everything we see on the page, is wraped in body tag.
                  </p>
                </pre>
              </span>
            </div>
          </div>
        </HtmlModal>
      </div>
    </div>
  );
};

export default Structure;
