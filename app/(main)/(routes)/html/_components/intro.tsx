export default function Intro() {
  return (
    <div className='pr-5'>
      <h1 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center'>
        Introduction to HTML
      </h1>
      <article>
        <p className='text-md pt-5 lg:text-lg xl:text-xl 2xl:text-2xl'>
          Welcome to the HTML course. I hope you liked the previouse course. So
          before we start let's have a quick overview of what this course is all
          about.
        </p>
      </article>
      <div className='flex justify-center items-center'>
        <div className=' w-full'>
          <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center pt-5'>
            What you find here?
          </h1>
          <article className='grid grid-cols-3 gap-x-5 gap-y-5 pt-10'>
            <span className='flex flex-col gap-y-5'>
              <p>
                In the beginning you will learn some basic information about
                HTML such as:
              </p>
              <ul className='pl-5 leading-8'>
                <li className='list-decimal'>
                  <p>What is HTML?</p>
                </li>
                <li className='list-decimal'>
                  <p>How does it work?</p>
                </li>
                <li className='list-decimal'>
                  <p>What is the purpose of HTML?</p>
                </li>
                <li className='list-decimal'>
                  <p>History of HTML?</p>
                </li>
                <li className='list-decimal'>
                  <p>and I'll introduce you into HTML tags.</p>
                </li>
              </ul>
            </span>
            <span className='flex flex-col gap-y-5'>
              <p>Then I'll tell you something more advanced.</p>
              <ul className='pl-5'>
                <li className='list-decimal'>
                  <p>How to write clear code.</p>
                </li>
              </ul>
            </span>
            <span className='flex flex-col gap-y-5'>
              <p>
                And finally I'll show you some things for total experts. Such as:
              </p>
              <ul className='pl-5'>
                <li className='list-decimal leading-8'>
                  <p>Creating complexing websites.</p>
                </li>
                <li className='list-decimal'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus officiis quibusdam fugiat voluptates natus
                    suscipit, consectetur beatae explicabo magnam facere debitis
                    neque! Repellat maiores provident ipsum reprehenderit, ad
                    dolorem cupiditate?
                  </p>
                </li>
              </ul>
            </span>
          </article>
        </div>
      </div>
      {/* <p className="text-md pt-5 lg:text-lg xl:text-xl 2xl:text-2xl text-center">
        HTML (HyperText Markup Language) is the standard markup language for
        creating web pages. It describes the structure of a web page semantically
        and originally included cues for the appearance of the document.
      </p> */}
    </div>
  );
}
