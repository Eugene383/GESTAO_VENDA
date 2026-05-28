import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className='w-full h-20 flex justify-between items-center px-7 '>
        <Link href="/">Nexus</Link>
        <div className='space-x-2'>
          <Button ><Link href="./auth/login">Entrar</Link></Button>
          <Button variant='link' ><Link href="/dashboard">Dashboar</Link></Button>
        </div>
      </div>
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}