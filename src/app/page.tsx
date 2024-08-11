import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bienvenue sur HarmonIQ</h1>
      <Link href="/profile" passHref>
        <Button size="lg">Accéder au Dashboard</Button>
      </Link>
    </div>
  );
}
