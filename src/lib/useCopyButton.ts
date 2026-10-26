import { useEffect, useRef, useState } from 'react';
import ClipboardJs from 'clipboard';

// attaches copy-to-clipboard to a button; `copied` is true briefly after a
// successful copy so the button can say so
export function useCopyButton(text: string | null) {
  const ref = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!ref.current || !text) {
      return;
    }
    const clipboard = new ClipboardJs(ref.current, { text: () => text });
    clipboard.on('success', () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
    return () => clipboard.destroy();
  }, [text]);
  return { ref, copied };
}
