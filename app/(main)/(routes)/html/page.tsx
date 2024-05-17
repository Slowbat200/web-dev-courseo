import { DataTable } from '@/components/data-table';
import { Tags, columns } from './columns';

async function getData(): Promise<Tags[]> {
  return [
    {
      id: '728ed52a',
      name: '<html>',
      fullName: 'HTML tag',
      description: 'Defines the root of an HTML document.',
      cardName: 'Html',
      cardDescription:
        'The <html> tag represents the root of an HTML document, encompassing all other elements.',
      cardCode: `<html>
        /*Your code here*/
      </html>`,
    },
    {
      id: '728ed52b',
      name: '<head>',
      fullName: 'Head tag',
      description: 'Contains metadata or information about the HTML document.',
      cardName: 'Head',
      cardDescription:
        'The <head> tag contains metadata or information about the HTML document, such as the title, scripts, and styles.',
      cardCode: `<head>
        <title>Document Title</title>
        <meta name="description" content="Description of the document">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles.css">
        <script src="script.js"></script>
      </head>`,
    },
    {
      id: '728ed52c',
      name: '<base>',
      fullName: 'Base tag',
      description: `Specifies a base URL for all relative URLs within a document.`,
      cardName: 'Base',
      cardDescription:
        'The <base> tag specifies a base URL for all relative URLs within a document.',
      cardCode: `<base href="https://example.com/" target="_blank">`,
    },
    {
      id: '728ed52d',
      name: '<link>',
      fullName: 'Link tag',
      description:
        'Defines a link to an external resource, such as a stylesheet or a favicon.',
      cardName: 'Link',
      cardDescription:
        'The <link> tag defines a link to an external resource, such as a stylesheet or a favicon.',
      cardCode: `<link rel="stylesheet" href="yourstyles.css">`,
    },
    {
      id: '728ed52e',
      name: '<meta>',
      fullName: 'Meta tag',
      description: 'Provides metadata about the HTML document.',
      cardName: 'Meta',
      cardDescription:
        'The <meta> tag provides metadata about the HTML document.',
      cardCode: `<meta name="description" content="Description of the document">`,
    },
    {
      id: '728ed52f',
      name: '<style>',
      fullName: 'Head tag',
      description: 'Contains metadata or information about the HTML document.',
      cardName: 'Style',
      cardDescription:
        'The <style> tag defines style information for a document.',
      cardCode: `<style>
        h1{
          color: red;
          font-size: 60px;
          text-align: center;
        }
      </style>`,
    },
    {
      id: '728ed52g',
      name: '<script>',
      fullName: 'Script tag',
      description: 'Defines a client-side script, such as JavaScript.',
      cardName: 'Script',
      cardDescription:
        'The <script> tag defines a client-side script, such as JavaScript.',
      cardCode: `<script src="yourscript.js"></script>`,
    },
    {
      id: '728ed52h',
      name: '<noscript>',
      fullName: 'Noscript tag',
      description:
        'Provides alternate content for users who have disabled scripts in their browser.',
      cardName: 'Noscript',
      cardDescription:
        'The <noscript> tag provides alternate content for users who have disabled scripts in their browser.',
      cardCode: `<noscript>
      <script>
        document.write("Your text")
      </script>
      <noscript>
        Your browser does not support JavaScript or it is disabled.
      </noscript>`,
    },
    {
      id: '728ed52i',
      name: '<body>',
      fullName: 'Body tag',
      description:
        'Contains the content of the HTML document that is displayed to the user.',
      cardName: 'Body',
      cardDescription:
        'The <body> tag contains the content of the HTML document that is displayed to the user.',
      cardCode: `<body>
        <section>
          <h1>Hello World!</h1>
          <p>This is a paragraph</p>
          <p>This is another paragraph</p>
        </section>
        <main>
          <div>
            <h1>Main Content</h1>
            <p>This is the main content of the page</p>
          </div>
          <div>
            <h1>Sidebar</h1>
            <p>This is the sidebar of the page</p>
          </div>
        </main>
      </body>`,
    },
    {
      id: '728ed52j',
      name: '<article>',
      fullName: 'Article tag',
      description:
        'Represents an independent piece of content within a document, such as a blog post or a news article.',
      cardName: 'Article',
      cardDescription:
        'The <article> tag represents an independent piece of content within a document, such as a blog post or a news article.',
      cardCode: `<article>
        <h1>Article Title</h1>
        <p>This is the content of the article</p>
      </article>`,
    },
    {
      id: '728ed52k',
      name: '<section>',
      fullName: 'Section tag',
      description: 'Defines a section of content within a document.',
      cardName: 'Section',
      cardDescription:
        'The <section> tag defines a section of content within a document.',
      cardCode: `<section>
        <h1>Section Title</h1>
        <p>This is the content of the section</p>
      </section>`,
    },
    {
      id: '728ed52l',
      name: '<nav>',
      fullName: 'Navigaton tag',
      description: 'Represents a section of navigation links.',
      cardName: 'Nav',
      cardDescription:
        'The <nav> tag represents a section of navigation links.',
      cardCode: `<nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>`,
    },
    {
      id: '728ed52m',
      name: '<aside>',
      fullName: 'Aside tag',
      description:
        'Defines content aside from the main content of the document, such as a sidebar.',
      cardName: 'Aside',
      cardDescription:
        'The <aside> tag defines content aside from the main content of the document, such as a sidebar.',
      cardCode: `<aside>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </aside>`,
    },
    {
      id: '728ed52n',
      name: '<header>',
      fullName: 'Header tag',
      description:
        'Represents introductory content at the beginning of a section or document.',
      cardName: 'Header',
      cardDescription:
        'The <header> tag represents introductory content at the beginning of a section or document.',
      cardCode: `<header>
        <h1>Header Title</h1>
        <p>This is the content of the header</p>
      </header>`,
    },
    {
      id: '728ed52o',
      name: '<footer>',
      fullName: 'Footer tag',
      description:
        'Defines footer content typically located at the bottom of a page or section.',
      cardName: 'Footer',
      cardDescription:
        'The <footer> tag defines footer content typically located at the bottom of a page or section.',
      cardCode: `<footer>
        <p>This is the content of the footer</p>
      </footer>`,
    },
    {
      id: '728ed52p',
      name: '<h1> - <h6>',
      fullName: 'Heading tags',
      description:
        'Heading elements, ranging from the most important <h1> to the least important <h6>.',
      cardName: 'Heading',
      cardDescription:
        'Heading elements, ranging from the most important <h1> to the least important <h6>.',
      cardCode: `<h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>`,
    },
    {
      id: '728ed56q',
      name: '<progress>',
      fullName: 'Progress tag',
      description: 'Defines the progress of a task.',
      cardName: 'Progress',
      cardDescription: 'The <progress> tag defines the progress of a task.',
      cardCode: `<progress value="50" max="100"></progress>`,
    },
    {
      id: '728ed52q',
      name: '<p>',
      fullName: 'Paragraph tag',
      description: 'Defines a paragraph of text.',
      cardName: 'Paragraph',
      cardDescription: 'The <p> tag defines a paragraph of text.',
      cardCode: `<p>This is a paragraph</p>`,
    },
    {
      id: '728ed52r',
      name: '<br>',
      fullName: 'Break tag',
      description: 'Inserts a line break.',
      cardName: 'Break',
      cardDescription: 'The <br> tag inserts a line break.',
      cardCode: `<br />`,
    },
    {
      id: '728ed52s',
      name: '<hr>',
      fullName: 'Horizontal rule tag',
      description: 'Represents a thematic break or horizontal rule.',
      cardName: 'Horizontal Rule',
      cardDescription:
        'The <hr> tag represents a thematic break or horizontal rule.',
      cardCode: `<hr />`,
    },
    {
      id: '728ed52t',
      name: '<a>',
      fullName: 'Anchor tag',
      description: 'Defines a hyperlink.',
      cardName: 'Anchor',
      cardDescription:
        'The <a> tag defines a hyperlink. Its mostly used in navbar or sidebar.',
      cardCode: `<a href="https://www.google.com">Google</a>`,
    },
    {
      id: '728ed52u',
      name: '<img>',
      fullName: 'Image tag',
      description: 'Embeds an image.',
      cardName: 'Image',
      cardDescription:
        'The <img> tag embeds an image. Its mostly used in navbar or sidebar.',
      cardCode: `<img src="https://via.placeholder.com/150" alt="Placeholder Image" />`,
    },
    {
      id: '728ed52v',
      name: '<video>',
      fullName: 'Video tag',
      description: 'Embeds video content.',
      cardName: 'Video',
      cardDescription: 'The <video> tag embeds video content.',
      cardCode: `<video src="https://video-previews.elements.envatousercontent.com/files/6f8f2454-a77d-4716-b281-2f6f870be901/video_preview_h264.mp4" controls="controls"></video>`,
    },
    {
      id: '728ed52w',
      name: '<audio>',
      fullName: 'Audio tag',
      description: 'Embeds audio content.',
      cardName: 'Audio',
      cardDescription: 'The <audio> tag embeds audio content.',
      cardCode: `<audio src="https://audio-previews.elements.envatousercontent.com/files/6f8f2454-a77d-4716-b281-2f6f870be901/audio_preview_mp3.mp3" controls="controls"></audio>`,
    },
    {
      id: '728ed52x',
      name: '<iframe>',
      fullName: 'Inline Frame tag',
      description: 'Embeds an inline frame for including external content.',
      cardName: 'Inline Frame',
      cardDescription:
        'The <iframe> tag embeds an inline frame for including external content.',
      cardCode: `<iframe src="https://www.google.com" width="100%" height="400"></iframe>`,
    },
    {
      id: '728ed52y',
      name: '<form>',
      fullName: 'Form tag',
      description: 'Defines an interactive form for user input.',
      cardName: 'Form',
      cardDescription:
        'The <form> tag defines an interactive form for user input.',
      cardCode: `<form action="/submit-form" method="post">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <button type="submit">Submit</button>
      </form>`,
    },
    {
      id: '728ed52z',
      name: '<input>',
      fullName: 'Input area tag',
      description: 'Defines an input control within a form.',
      cardName: 'Input',
      cardDescription:
        'The <input> tag defines an input control within a form.',
      cardCode: `<input type="text" name="name" placeholder="Your Name" />`,
    },
    {
      id: '728ed53a',
      name: '<textarea>',
      fullName: 'Text area tag',
      description: 'Defines a multiline text input control within a form.',
      cardName: 'Text Area',
      cardDescription:
        'The <textarea> tag defines a multiline text input control within a form.',
      cardCode: `<textarea name="message" placeholder="Your Message"></textarea>`,
    },
    {
      id: '728ed53b',
      name: '<button>',
      fullName: 'Button tag',
      description: 'Defines a clickable button.',
      cardName: 'Button',
      cardDescription: 'The <button> tag defines a clickable button.',
      cardCode: `<button type="submit">Submit</button>`,
    },
    {
      id: '728ed53c',
      name: '<select>',
      fullName: 'Select tag',
      description: 'Defines a dropdown list within a form.',
      cardName: 'Select',
      cardDescription:
        'The <select> tag defines a dropdown list within a form.',
      cardCode: `<select name="fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>`,
    },
    {
      id: '728ed53d',
      name: '<option>',
      fullName: 'Option tag',
      description: 'Defines an option within a dropdown list.',
      cardName: 'Option',
      cardDescription:
        'The <option> tag defines an option within a dropdown list.',
      cardCode: `<option value="apple">Apple</option>`,
    },
    {
      id: '728ed53e',
      name: '<label>',
      fullName: 'Label tag',
      description: 'Defines a label for an input control.',
      cardName: 'Label',
      cardDescription: 'The <label> tag defines a label for an input control.',
      cardCode: `<label for="name">Name</label>
      <input type="text" id="name" name="name" />`,
    },
    {
      id: '728ed53f',
      name: '<fieldset>',
      fullName: 'Fieldset tag',
      description: 'Groups related form elements together.',
      cardName: 'Fieldset',
      cardDescription:
        'The <fieldset> tag groups related form elements together.',
      cardCode: `<fieldset>
        <legend>Personal Information</legend>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
      </fieldset>`,
    },
    {
      id: '728ed53g',
      name: '<legend>',
      fullName: 'Legend tag',
      description: 'Defines a caption for a <fieldset> element.',
      cardName: 'Legend',
      cardDescription:
        'The <legend> tag defines a caption for a <fieldset> element.',
      cardCode: `<legend>Personal Information</legend>`,
    },
    {
      id: '728ed53h',
      name: '<ul>',
      fullName: 'Unordered list tag',
      description: 'Defines an unordered list.',
      cardName: 'Unordered List',
      cardDescription: 'The <ul> tag defines an unordered list.',
      cardCode: `<ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>`,
    },
    {
      id: '728ed53i',
      name: '<ol>',
      fullName: 'Ordered list tag',
      description: 'Defines an ordered list.',
      cardName: 'Ordered List',
      cardDescription: 'The <ol> tag defines an ordered list.',
      cardCode: `<ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>`,
    },
    {
      id: '728ed53j',
      name: '<li>',
      fullName: 'List item tag',
      description: 'Defines a list item within an <ul> or <ol>',
      cardName: 'List Item',
      cardDescription:
        'The <li> tag defines a list item within an <ul> or <ol>',
      cardCode: `<li>Item 1</li>`,
    },
    {
      id: '728ed53k',
      name: '<dl>',
      fullName: 'Description list tag',
      description: 'Defines a description list.',
      cardName: 'Description List',
      cardDescription: 'The <dl> tag defines a description list.',
      cardCode: `<dl>
        <dt>Item 1</dt>
        <dd>Item 1 Description</dd>
      </dl>`,
    },
    {
      id: '728ed53l',
      name: '<input>',
      fullName: 'Input area tag',
      description: 'Defines an input control within a form.',
      cardName: 'Input',
      cardDescription:
        'The <input> tag defines an input control within a form.',
      cardCode: `<input type="text" name="name" placeholder="Your Name" />`,
    },
    {
      id: '728ed53m',
      name: '<dd>',
      fullName: 'Description tag',
      description: 'Defines a description in a description list.',
      cardName: 'Description',
      cardDescription:
        'The <dd> tag defines a description in a description list.',
      cardCode: `<dd>Item 1 Description</dd>`,
    },
    {
      id: '728ed53n',
      name: '<table>',
      fullName: 'Table tag',
      description: 'Defines a table.',
      cardName: 'Table',
      cardDescription: 'The <table> tag defines a table.',
      cardCode: `<table>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </table>`,
    },
    {
      id: '728ed53o',
      name: '<caption>',
      fullName: 'Caption tag',
      description: 'Defines a caption for a table.',
      cardName: 'Caption',
      cardDescription: 'The <caption> tag defines a caption for a table.',
      cardCode: `<caption>Table Caption</caption>`,
    },
    {
      id: '728ed53p',
      name: '<thead>, <tbody>, <tfoot>',
      fullName: 'Table head, Table body, Table footer tags',
      description: 'Defines different parts of a table (header, body, footer).',
      cardName: 'Table Head',
      cardDescription: 'The <thead> tag defines the header of a table.',
      cardCode: `<thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>`,
    },
    {
      id: '728ed52q',
      name: '<tr>',
      fullName: 'Table row tag',
      description: 'Defines a row in a table.',
      cardName: 'Table Row',
      cardDescription: 'The <tr> tag defines a row in a table.',
      cardCode: `<tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>`,
    },
    {
      id: '728ed53r',
      name: '<th>',
      fullName: 'Table head tag',
      description: 'Defines a header cell in a table.',
      cardName: 'Table Head',
      cardDescription: 'The <th> tag defines a header cell in a table.',
      cardCode: `<th>Header 1</th>`,
    },
    {
      id: '728ed53s',
      name: '<td>',
      fullName: 'Table data tag',
      description: 'Defines a data cell in a table.',
      cardName: 'Table Data',
      cardDescription: 'The <td> tag defines a data cell in a table.',
      cardCode: `<td>Cell 1</td>`,
    },
    {
      id: '728ed53t',
      name: '<col>',
      fullName: 'Columns tag',
      description: 'Defines attributes for one or more columns in a table.',
      cardName: 'Table Columns',
      cardDescription:
        'The <col> tag defines attributes for one or more columns in a table.',
      cardCode: `<col span="2" style="background-color: #f00;" />`,
    },
    {
      id: '728ed53u',
      name: '<colgroup>',
      fullName: 'Groups colums tag',
      description: 'Groups one or more columns in a table.',
      cardName: 'Table Columns Group',
      cardDescription:
        'The <colgroup> tag groups one or more columns in a table.',
      cardCode: `<colgroup span="2" style="background-color: #f00;" />`,
    },
    {
      id: '728ed53v',
      name: '<div>',
      fullName: 'Division tag',
      description: 'Defines a division or section in a document.',
      cardName: 'Division',
      cardDescription:
        'The <div> tag defines a division or section in a document.',
      cardCode: `<div>
        <h1>Heading 1</h1>
        <p>This is a paragraph.</p>
      </div>`,
    },
    {
      id: '728ed53w',
      name: '<span>',
      fullName: 'Span tag',
      description: 'Defines a generic inline container for text content.',
      cardName: 'Span',
      cardDescription:
        'The <span> tag defines a generic inline container for text content.',
      cardCode: `<span style="color: #f00;">This is a red paragraph.</span>`,
    },
  ];
}

export default async function Html() {
  const data = await getData();
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-4xl font-bold'>HTML</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
