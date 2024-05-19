import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Pague apenas depois de receber o primeiro projeto!"
        caption="Garantia e segurança"
        description="Como meio de garantia de qualidade do meu trabalho e segurança ao contratante, o primeiro projeto realizado comigo é pago após a finalização do mesmo..."
      />
    </header>
  );
}

export default DetailOriented;
