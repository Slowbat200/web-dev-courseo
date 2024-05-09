'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Tags = {
  id: string;
  name: string;
  fullName: string;
  description: string;
};

export const columns: ColumnDef<Tags>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
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
