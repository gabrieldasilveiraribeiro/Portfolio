import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'typography',
    shows: ['typography'],
    title: 'Tipografia',
    description: 'Selecionando o tipo, tamanho, estilo e grossura da fonte.',
  },
  {
    state: 'spacing',
    shows: ['typography', 'spacing'],
    title: 'Espaçamento',
    description: 'Posicionamento e adição de espaçamento entre elementos.',
  },
  {
    state: 'colors',
    shows: ['typography', 'spacing', 'colors'],
    title: 'Cores',
    description: 'Escolhendo um esquema de cores com contraste suficiente.',
  },
  {
    state: 'effects',
    shows: ['typography', 'spacing', 'colors', 'effects'],
    title: 'Efeitos',
    description:
      'Adicionando detalhes como bordas, sombras, cantos arredondados, etc.',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Design atraente, moderno e minimalista."
          caption="Intuitivo e clean..."
          description="Mantenho a interface do usuário limpa com um toque moderno, melhorando a experiência do usuário e aumentando as conversões!"
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('-mt-8 flex-1 flex-col gap-3', 'lg:flex')}>
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['typography', 'spacing', 'colors', 'effects']
                  }
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['typography', 'spacing', 'colors', 'effects']
                  }
                  title="UI Implementation"
                  description="Start creating UI components using React and Tailwind CSS."
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
