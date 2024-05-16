import clsx from 'clsx';
import Link from 'next/link';

import {
  ExternalLink,
  FigmaIcon,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
  WppIcon,
} from '@/components/Icons';

import dayjs from '@/utils/dayjs';

function LastUpdate() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5521976197836&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+preciso+de+um+or%C3%A7amento%21+&type=phone_number&app_absent=0"
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('hover:underline')}
    >
      <span>Entre em contato!</span>
    </a>
  );
}

interface FooterLinkProps {
  title: string;
  href: string;
  label?: 'new' | 'soon';
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === 'soon') {
    return (
      <span className={clsx('footer-link footer-link--soon')}>
        {title}
        <span className={clsx('footer-link__label')}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={clsx('footer-link')}>
        {title}
        {label && <span className={clsx('footer-link__label')}>{label}</span>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('footer-link')}
    >
      {title}
      <ExternalLink className={clsx('h-3.5 w-3.5')} />
      {label && <span className={clsx('footer-link__label')}>{label}</span>}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={clsx('flex-1')}>
      <div
        className={clsx(
          'mb-2 px-2 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {title}
      </div>
      <ul className={clsx('flex flex-col')}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription() {
  return (
    <div className={clsx('max-w-[348px]')}>
      <div
        className={clsx(
          'mb-3 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        Sobre:
      </div>
      <p className={clsx('mb-4 font-normal leading-relaxed')}>
        Meu nome é Gabriel Ribeiro, <strong>Desenvolvedor e designer</strong>{' '}
        amante da elegância e fluidez de meus projetos.
      </p>
      <ul className={clsx('-ml-2 flex gap-1')}>
        <li>
          <a
            href="https://www.linkedin.com/in/gabriel-da-silveira-ribeiro/"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My Twitter profile"
            title="My Twitter profile"
          >
            <LinkedinIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="/404"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
            <GitHubIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send/?phone=5521976197836&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+preciso+de+um+or%C3%A7amento%21+&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My Figma profile"
            title="Whatsapp"
          >
            <WppIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900',
        'dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('py-10 font-semibold')}>
          <div className={clsx('flex flex-col-reverse gap-16', 'lg:flex-row')}>
            <div className={clsx('flex-1')}>
              <FooterDescription />
            </div>
            <div
              className={clsx(
                '-mx-2 flex flex-1 flex-col gap-8',
                'sm:flex-row sm:gap-16 lg:mx-0'
              )}
            >
              <div className={clsx('flex', 'sm:gap-16')}>
                <FooterGroup
                  title="Trabalho"
                  links={[
                    { title: 'Contato', href: '/work/contact' },
                    { title: 'Experiência', href: '/work/experience' },
                    {
                      title: 'Projetos',
                      href: '/projects',
                      label: 'Confira!',
                    },
                    {
                      title: 'Habilidades e ferramentas',
                      href: '/work/skills-and-tools',
                    },
                    { title: 'Metodologia', href: '/work/studio' },
                  ]}
                />
                <FooterGroup
                  title="Contato"
                  links={[
                    {
                      title: 'Whatsapp',
                      href: 'https://api.whatsapp.com/send/?phone=5521976197836&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+preciso+de+um+or%C3%A7amento%21+&type=phone_number&app_absent=0',
                    },
                    {
                      title: 'Linkedin',
                      href: 'https://www.linkedin.com/in/gabriel-da-silveira-ribeiro/',
                    },
                    {
                      title: 'Github',
                      href: '/404',
                      label: 'Em construção',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'border-divider-light flex justify-between border-t py-6 text-xs',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('font-semibold')}>
            &copy; {dayjs().format('YYYY')}, Gabriel Ribeiro
          </div>
          <div className={clsx('text-slate-500', 'dark:text-slate-400')}>
            <LastUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
