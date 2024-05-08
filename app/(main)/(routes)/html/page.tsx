'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    name: 'INV001',
    fullName: 'Paid',
    description: '$250.00',
  },
  {
    name: 'INV001',
    fullName: 'Paid',
    description: '$250.00',
  },
  {
    name: 'INV001',
    fullName: 'Paid',
    description: '$250.00',
  },
  {
    name: 'INV001',
    fullName: 'Paid',
    description: '$250.00',
  },
  {
    name: 'INV001',
    fullName: 'Paid',
    description: '$250.00',
  },
  {
    name: 'INV001',
    fullName: 'Paid',
    description: '$250.00',
  },
  {
    name: 'INV001',
    fullName: 'Paid',
    description: '$250.00',
  },
];

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Name</TableHead>
          <TableHead>Full Name</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className='font-medium'>{invoice.name}</TableCell>
            <TableCell>{invoice.fullName}</TableCell>
            <TableCell>{invoice.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </TableFooter>
    </Table>
  );
}
