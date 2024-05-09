'use server';

import { DataTable } from '@/components/data-table';
import { Tags, columns } from './columns';

async function getData(): Promise<Tags[]> {
  return [
    {
      id: '728ed52a',
      name: '<html>',
      fullName: 'HTML tag',
      description: 'Defines the root of an HTML document.',
    },
    {
      id: '728ed52b',
      name: '<head>',
      fullName: 'Head tag',
      description: 'Contains metadata or information about the HTML document.',
    },
    {
      id: '728ed52c',
      name: '<base>',
      fullName: 'Base tag',
      description: `Specifies a base URL for all relative URLs within a document.`,
    },
    {
      id: '728ed52d',
      name: '<link>',
      fullName: 'Link tag',
      description:
        'Defines a link to an external resource, such as a stylesheet or a favicon.',
    },
    {
      id: '728ed52e',
      name: '<meta>',
      fullName: 'Meta tag',
      description: 'Provides metadata about the HTML document.',
    },
    {
      id: '728ed52f',
      name: '<style>',
      fullName: 'Head tag',
      description: 'Contains metadata or information about the HTML document.',
    },
    {
      id: '728ed52g',
      name: '<script>',
      fullName: 'Script tag',
      description: 'Defines a client-side script, such as JavaScript.',
    },
    {
      id: '728ed52h',
      name: '<noscript>',
      fullName: 'Noscript tag',
      description:
        'Provides alternate content for users who have disabled scripts in their browser.',
    },
    {
      id: '728ed52i',
      name: '<body>',
      fullName: 'Body tag',
      description:
        'Contains the content of the HTML document that is displayed to the user.',
    },
    {
      id: '728ed52j',
      name: '<article>',
      fullName: 'Article tag',
      description:
        'Represents an independent piece of content within a document, such as a blog post or a news article.',
    },
    {
      id: '728ed52k',
      name: '<section>',
      fullName: 'Section tag',
      description: 'Defines a section of content within a document.',
    },
    {
      id: '728ed52l',
      name: '<nav>',
      fullName: 'Navigaton tag',
      description: 'Represents a section of navigation links.',
    },
    {
      id: '728ed52m',
      name: '<aside>',
      fullName: 'Aside tag',
      description:
        'Defines content aside from the main content of the document, such as a sidebar.',
    },
    {
      id: '728ed52n',
      name: '<header>',
      fullName: 'Header tag',
      description:
        'Represents introductory content at the beginning of a section or document.',
    },
    {
      id: '728ed52o',
      name: '<footer>',
      fullName: 'Footer tag',
      description:
        'Defines footer content typically located at the bottom of a page or section.',
    },
    {
      id: '728ed52p',
      name: '<h1> - <h6>',
      fullName: 'Heading tags',
      description:
        'Heading elements, ranging from the most important <h1> to the least important <h6>.',
    },
    {
      id: '728ed52q',
      name: '<p>',
      fullName: 'Paragraph tag',
      description: 'Defines a paragraph of text.',
    },
    {
      id: '728ed52r',
      name: '<br>',
      fullName: 'Break tag',
      description: 'Inserts a line break.',
    },
    {
      id: '728ed52s',
      name: '<hr>',
      fullName: 'Horizontal rule tag',
      description: 'Represents a thematic break or horizontal rule.',
    },
    {
      id: '728ed52t',
      name: '<a>',
      fullName: 'Anchor tag',
      description: 'Defines a hyperlink.',
    },
    {
      id: '728ed52u',
      name: '<img>',
      fullName: 'Image tag',
      description: 'Embeds an image.',
    },
    {
      id: '728ed52v',
      name: '<video>',
      fullName: 'Video tag',
      description: 'Embeds video content.',
    },
    {
      id: '728ed52w',
      name: '<audio>',
      fullName: 'Audio tag',
      description: 'Embeds video content.',
    },
    {
      id: '728ed52x',
      name: '<iframe>',
      fullName: 'Inline Frame tag',
      description: 'Embeds an inline frame for including external content.',
    },
    {
      id: '728ed52y',
      name: '<form>',
      fullName: 'Form tag',
      description: 'Defines an interactive form for user input.',
    },
    {
      id: '728ed52z',
      name: '<input>',
      fullName: 'Input area tag',
      description: 'Defines an input control within a form.',
    },
    {
      id: '728ed53a',
      name: '<textarea>',
      fullName: 'Text area tag',
      description: 'Defines a multiline text input control within a form.',
    },
    {
      id: '728ed53b',
      name: '<button>',
      fullName: 'Button tag',
      description: 'Defines a clickable button.',
    },
    {
      id: '728ed53c',
      name: '<select>',
      fullName: 'Select tag',
      description: 'Defines a dropdown list within a form.',
    },
    {
      id: '728ed53d',
      name: '<option>',
      fullName: 'Option tag',
      description: 'Defines an option within a dropdown list.',
    },
    {
      id: '728ed53e',
      name: '<label>',
      fullName: 'Label tag',
      description: 'Defines a label for an input control.',
    },
    {
      id: '728ed53f',
      name: '<fieldset>',
      fullName: 'Fieldset tag',
      description: 'Groups related form elements together.',
    },
    {
      id: '728ed53g',
      name: '<legend>',
      fullName: 'Legend tag',
      description: 'Defines a caption for a <fieldset> element.',
    },
    {
      id: '728ed53h',
      name: '<ul>',
      fullName: 'Unordered list tag',
      description: 'Defines an unordered list.',
    },
    {
      id: '728ed53i',
      name: '<ol>',
      fullName: 'Ordered list tag',
      description: 'Defines an ordered list.',
    },
    {
      id: '728ed53j',
      name: '<li>',
      fullName: 'List item tag',
      description: 'Defines a list item within an <ul> or <ol>',
    },
    {
      id: '728ed53k',
      name: '<dl>',
      fullName: 'Description list tag',
      description: 'Defines a description list.',
    },
    {
      id: '728ed53l',
      name: '<input>',
      fullName: 'Input area tag',
      description: 'Defines an input control within a form.',
    },
    {
      id: '728ed53m',
      name: '<dd>',
      fullName: 'Description tag',
      description: ' Defines a description in a description list.',
    },
    {
      id: '728ed53n',
      name: '<table>',
      fullName: 'Table tag',
      description: 'Defines a table.',
    },
    {
      id: '728ed53o',
      name: '<caption>',
      fullName: 'Caption tag',
      description: 'Defines a caption for a table.',
    },
    {
      id: '728ed53p',
      name: '<thead>, <tbody>, <tfoot>',
      fullName: 'Table head, Table body, Table footer tags',
      description: 'Defines different parts of a table (header, body, footer).',
    },
    {
      id: '728ed52q',
      name: '<tr>',
      fullName: 'Table row tag',
      description: 'Defines a row in a table.',
    },
    {
      id: '728ed53r',
      name: '<th>',
      fullName: 'Table head tag',
      description: 'Defines a header cell in a table.',
    },
    {
      id: '728ed53s',
      name: '<td>',
      fullName: 'Table data tag',
      description: 'Defines a data cell in a table.',
    },
    {
      id: '728ed53t',
      name: '<col>',
      fullName: 'Columns tag',
      description: 'Defines attributes for one or more columns in a table.',
    },
    {
      id: '728ed53u',
      name: '<colgroup>',
      fullName: 'Groups colums tag',
      description: 'Groups one or more columns in a table.',
    },
    {
      id: '728ed53v',
      name: '<div>',
      fullName: 'Division tag',
      description: 'Defines a division or section in a document..',
    },
    {
      id: '728ed53w',
      name: '<span>',
      fullName: 'Span tag',
      description: 'Defines a generic inline container for text content..',
    },
  ];
}
export default async function Html() {
  const data = await getData();

  return (
    <div className='pt-10 mr-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
