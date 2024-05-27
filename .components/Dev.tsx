const Dev = () => {
  return (
    <div className='my-3 mx-2 h-full w-full'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-none md:leading-none lg:leading-none pl-5 text-center'>
        Web development
      </h1>
      <div className='mt-5'>
        <p className='text-muted-foreground text-sm mt-3 px-2 text-justify'>
          So we'll start with What is web development. Web development refers to
          the process of creating and maintaining websites or web applications.
          It involves a combination of skills and technologies used to design,
          build, and manage the functionality of websites. Web development
          encompasses everything from simple static web pages to complex dynamic
          web applications. Among the main elements of web development are the
          following parts of the system:
        </p>
      </div>
      <div className="px-1 py-1 mt-10 rounded-md">
      <div className='bg-gradient-to-bl from-[#0e21a0] from-[3%] via-[#4d2db7] via-[40%] to-[#9d44c0] to-[97%] rounded-md px-5 py-2 leading-8'>
        <ul className='list-disc pt-2 my-5 mx-2 pl-5'>
          <li>
            <p className="">
              <span className="font-bold">Frontend Development</span> - <br className="block md:hidden" /> Provides the visible structure of web pages
              using elements like headings, paragraphs <br className="block md:hidden" /> or images etc.
            </p>
            <p>
              Front-end provides this three main technologies: HTML, CSS and
              JavaScript
            </p>
          </li>
          <li className='mt-5'>
            <p>
              <span className="font-bold">Backend Development</span> - <br className="block md:hidden" /> Provides the visible structure of web pages
              using elements like headings, paragraphs or images etc.
            </p>
            <p>In the backend you have Server-side languages and databases</p>
          </li>
          <li className='mt-5'>
            <p>
              <span className="font-bold">Full-Stack Development</span> - Developers who work on both the front-end
              and back-end are referred to as full-stack developers. They are
              capable of building and maintaining the entire web application.
            </p>
          </li>
          <li className='mt-5'>
            <p>
              <span className="font-bold">Web servers</span> - <br className="block md:hidden" /> Web servers (e.g., Apache, Nginx) handle requests
              from clients (browsers) and serve the appropriate response, which
              may include static files or dynamically generated content.
            </p>
          </li>
          <li className='mt-5'>
            <p>
              <span className="font-bold">Frameworks and Libraries</span> - <br className="block md:hidden" />Web development frameworks (e.g.,
              Django, Ruby on Rails, Laravel, NextJS) provide pre-built
              components and tools to streamline the development process.
              Libraries (e.g., React, Angular, Vue.js) offer pre-written
              functions to simplify common tasks in front-end development.
            </p>
          </li>
          <li className='mt-5'>
            <p>
              <span className="font-bold">Version control</span> - Version control systems (e.g., Git) are used to
              track changes in the codebase, collaborate with other developers,
              and roll back to previous versions if needed.
            </p>
          </li>
          <li className='mt-5'>
            <p>
              <span className="font-bold">Web Standards and Protocols</span> - Adhering to web standards ensures
              compatibility across different browsers. Protocols like HTTP and
              HTTPS govern communication between clients and servers.
            </p>
          </li>
          <li className='mt-5'>
            <p>
              <span className="font-bold">Responsive Design</span> - <br className="block md:hidden" /> Ensuring that websites work well on various
              devices and screen sizes is crucial. Responsive design techniques
              enable a consistent user experience across desktops, tablets, and
              smartphones.
            </p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Dev;
