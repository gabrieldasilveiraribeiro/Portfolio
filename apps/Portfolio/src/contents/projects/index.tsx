import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
      <SectionTitle
        title="Gostou do que viu?"
        caption="Gabriel Ribeiro Dev & Designer"
        description="Entre em contato agora mesmo e vamos trabalhar juntos!"
        button={{
          title: 'Entrar em contato',
          href: 'https://api.whatsapp.com/send/?phone=5521976197836&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+preciso+de+um+or%C3%A7amento%21+&type=phone_number&app_absent=0',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx(' flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Projetos como Desenvolvedor"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="O tempo está curto? Veja meus projetos de destaque como DEV em um breve vídeo!"
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="Projetos como Web Designer"
                icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                description="Veja meus projetos de destaque como Web Designer em um breve vídeo!"
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow type="browser">
                  {currentState === 'github' && (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/UAdk1kxEflY?si=58Pje8t-UzvScTm-"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="fullscreen"
                    />
                  )}
                  {currentState === 'npm' && (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/CkQ9xAglrSU?si=BWMEhIuBvodV6axV"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="fullscreen"
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
