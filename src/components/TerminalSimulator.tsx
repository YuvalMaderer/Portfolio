import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

const commands = [
  { text: '$ npm install modern-web-solutions', delay: 0 },
  { text: '✓ Installing dependencies...', delay: 1500 },
  { text: '✓ React + TypeScript configured', delay: 2500 },
  { text: '✓ Tailwind CSS optimized', delay: 3200 },
  { text: '✓ Performance: 100/100', delay: 4000 },
  { text: '$ npm run deploy', delay: 5000 },
  { text: '🚀 Deployment successful!', delay: 6000 },
];

export function TerminalSimulator() {
  const [visibleCommands, setVisibleCommands] = useState<number>(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= commands.length) {
      const resetTimer = setTimeout(() => {
        setVisibleCommands(0);
        setCurrentIndex(0);
        setCurrentText('');
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const command = commands[currentIndex];
    const showTimer = setTimeout(() => {
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= command.text.length) {
          setCurrentText(command.text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setVisibleCommands((prev) => prev + 1);
          setCurrentIndex((prev) => prev + 1);
          setCurrentText('');
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }, command.delay);

    return () => clearTimeout(showTimer);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-2xl overflow-hidden shadow-2xl glass-dark border border-border/30">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/20 border-b border-border/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Terminal className="w-4 h-4" />
            <span className="font-mono">terminal</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm min-h-[240px] bg-card/40">
          <AnimatePresence mode="wait">
            {commands.slice(0, visibleCommands).map((cmd, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mb-2 ${
                  cmd.text.includes('✓') 
                    ? 'text-green-500' 
                    : cmd.text.includes('🚀') 
                    ? 'text-primary' 
                    : 'text-foreground/90'
                }`}
              >
                {cmd.text}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {currentText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${
                currentText.includes('✓') 
                  ? 'text-green-500' 
                  : currentText.includes('🚀') 
                  ? 'text-primary' 
                  : 'text-foreground/90'
              }`}
            >
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 ml-1 bg-primary"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
