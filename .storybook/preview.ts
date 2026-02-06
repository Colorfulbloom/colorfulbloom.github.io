import type { Preview } from '@storybook/react-vite'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fontsource/noto-sans/400.css'
import '@fontsource/noto-sans/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/700.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/700.css'
import '../src/stories/assets/css/main.scss'

// HTML formatter for pretty printing
const formatHtml = (html: string): string => {
  let formatted = '';
  let indent = 0;
  const tab = '  ';

  html.split(/(<[^>]+>)/g).forEach(element => {
    if (!element.trim()) return;

    if (element.match(/^<\/\w/)) {
      indent--;
    }

    formatted += tab.repeat(Math.max(0, indent)) + element.trim() + '\n';

    if (element.match(/^<\w[^>]*[^\/]>$/) && !element.match(/^<(br|hr|img|input|link|meta)/i)) {
      indent++;
    }
  });

  return formatted.trim();
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    docs: {
      source: {
        transform: (code: string, storyContext: any) => {
          try {
            const { component, args } = storyContext;
            if (component && args) {
              const element = createElement(component, args);
              const html = renderToStaticMarkup(element);
              return formatHtml(html);
            }
          } catch (e) {
            // Fall back to original code if rendering fails
          }
          return code;
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;