import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Descontos de 10% no orçamento a cada projeto confirmado comigo!"
        caption="Para agências"
        description="Com a intenção de prestar serviço terceirizado para agências, dou desconto conforme a quantidade de projetos a se fazer, sendo 10% do valor por projeto..."
      />
    </header>
  );
}

export default PrettyOptimized;
