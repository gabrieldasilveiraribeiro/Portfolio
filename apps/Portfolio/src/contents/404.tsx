import clsx from 'clsx';
import Link from 'next/link';

function Error404Contents() {
  return (
    <div
      className={clsx(
        'background-grid flex h-full items-center justify-center'
      )}
    >
      <div
        className={clsx(
          'content-wrapper text-center text-slate-600',
          'dark:text-slate-400'
        )}
      >
        <h1 className={clsx('py-12 text-center')}>
          <div className={clsx('mb-3 text-8xl font-extrabold')}>OOPS!</div>
          <div className={clsx('text-2xl')}>
            {' '}
            Estou implementando melhoras, por favor volte mais tarde...{' '}
          </div>
        </h1>
        <Link
          href="/"
          className={clsx(
            'text-accent-600 rounded-xl py-2 px-4 text-xl',
            'dark:text-accent-400'
          )}
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

export default Error404Contents;
