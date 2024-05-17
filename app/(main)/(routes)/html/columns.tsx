'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Tags = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  cardName: string;
  cardDescription: string;
  cardCode: string;
};

export const columns: ColumnDef<Tags>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'fullName',
    header: 'Full Name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];
