'use client';

import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Highlight } from '@/components/ui/hero-highlight';
import useModal from '@/hooks/useModal';
import { Modal } from '@/components/ui/modal';
const LearnPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  const handleModal = useModal();
  const onChange = (open: boolean) => {
    if (!open) {
      handleModal.onClose();
    }
  };
  return (
    <main>
      <section id='header'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='relative text-2xl md:text-5xl lg:text-6xl text-center font-sans font-bold pt-8'
        >
          Welcome {user.username || user.fullName}
        </motion.h1>
        <aside className='px-5 py-10 text-sm md:text-md lg:text-lg xl:text-xl'>
          <p>
            Let me introduce you. I'm <Highlight>Slowbat</Highlight> and I will
            be your guide on this journey.
          </p>
          <p>
            Before we get started, let me tell you a few things to get you
            started.
          </p>
        </aside>

        <Modal 
        title='Basic information' 
        description='So first things first' 
        />
      </section>
    </main>
  );
};

export default LearnPage;
