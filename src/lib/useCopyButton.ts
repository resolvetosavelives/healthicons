import { useEffect, useRef, useState } from 'react';
import ClipboardJs from 'clipboard';

// attaches copy-to-clipboard to a button; `copied` is true briefly after a
// successful copy so the button can say so, and `onCopy` (if any) is called
export function useCopyButton(text: string | null, onCopy?: () => void) {
  const ref = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  // the latest callback, without setting the button up again when it changes
  const onCopyRef = useRef(onCopy);
  onCopyRef.current = onCopy;
  useEffect(() => {
    if (!ref.current || !text) {
      return;
    }
    const clipboard = new ClipboardJs(ref.current, { text: () => text });
    clipboard.on('success', () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      onCopyRef.current?.();
    });
    return () => clipboard.destroy();
  }, [text]);
  return { ref, copied };
}
