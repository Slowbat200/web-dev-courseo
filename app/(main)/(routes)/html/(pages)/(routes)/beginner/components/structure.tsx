import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { HtmlModal } from './modal';

const Structure = () => {
  return (
    <div>
      <div className='mockup-code mt-10 lg:w-full w-[80%] ml-5'>
        <pre className='flex flex-col'>
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
          This code create a simple web page with Heading <h1> and simple paragraph <p>.`}
        />
      </div>
    </div>
  );
};

export default Structure;
