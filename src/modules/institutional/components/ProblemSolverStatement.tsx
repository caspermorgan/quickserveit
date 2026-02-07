import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

interface ProblemSolverStatementProps {
    mode: 'institutional' | 'creator';
}

const ProblemSolverStatement = ({ mode }: ProblemSolverStatementProps) => {
    const { t } = useTranslation();

    const statement = mode === 'institutional'
        ? t('problemSolverInst')
        : t('problemSolverCreator');

    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
            {/* Subtle gradient glow */}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[100px] opacity-20 ${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'
                    }`}
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative max-w-4xl mx-auto text-center"
            >
                <h2
                    className={`font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                        }`}
                    style={{
                        textShadow: mode === 'institutional'
                            ? '0 0 40px rgba(43, 96, 56, 0.3)'
                            : '0 0 40px rgba(187, 100, 42, 0.3)'
                    }}
                >
                    {statement}
                </h2>
            </motion.div>
        </section>
    );
};

export default ProblemSolverStatement;
