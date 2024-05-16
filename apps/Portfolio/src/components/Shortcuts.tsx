import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';

import Toast from '@/components/Toast';

import useFocusMode from '@/hooks/useFocusMode';
import useGlobal from '@/hooks/useGlobal';
import useShortcut from '@/hooks/useShortcut';
import useTheme from '@/hooks/useTheme';

const focusToast = {
  title: 'Modo foco: {STATUS}',
  message:
    'Modo de foco reduz as distrações do portfólio, para quem prefere ter uma experiência objetiva.',
};

function Shortcuts() {
  const toastRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const { isQuickAccessOpen, setQuickAccessOpen } = useGlobal();
  const { focusMode, setFocusMode } = useFocusMode();

  useShortcut('KeyD', () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  });

  useShortcut('KeyQ', () => {
    setQuickAccessOpen(!isQuickAccessOpen);
  });

  useShortcut('KeyF', () => {
    setFocusMode(!focusMode);
  });

  useEffect(() => {
    if (toastRef.current) {
      toast.remove(toastRef.current.id);
    }
    if (focusMode) {
      toastRef.current = toast.custom((t) => (
        <Toast
          title={focusToast.title.replace('{STATUS}', 'On')}
          message={focusToast.message}
          t={t}
        />
      ));
    } else {
      toastRef.current = toast.custom((t) => (
        <Toast
          title={focusToast.title.replace('{STATUS}', 'Off')}
          message={focusToast.message}
          t={t}
        />
      ));
    }
  }, [focusMode]);

  return null;
}

export default Shortcuts;
