import { Tags } from "@/app/(main)/(routes)/html/columns";

async function getData(): Promise<Tags[]> {
    return [
      {
        id: '728ed52f',
        name: '<html>',
        fullName: 'HTML tag',
        description: 'Defines the root of an HTML document.',
      },
      {
        id: '728ed52f',
        name: '<head>',
        fullName: 'Head tag',
        description: 'Contains metadata or information about the HTML document.',
      },
    ];
  }
  const data = getData