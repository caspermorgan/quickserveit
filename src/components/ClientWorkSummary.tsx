import { useTranslation } from '@/hooks/useTranslation';
import { FileText } from 'lucide-react';

interface ClientWorkSummaryProps {
    mode: 'institutional' | 'creator';
}

const ClientWorkSummary = ({ mode }: ClientWorkSummaryProps) => {
    const { t } = useTranslation();

    // Conditional data based on mode
    const workExperience = mode === 'institutional'
        ? [
            {
                name: t('workInst1Name'),
                role: t('workInst1Role'),
                tasks: t('workInst1Tasks').split('|'),
                closing: t('workInst1Closing'),
            },
            {
                name: t('workInst2Name'),
                role: t('workInst2Role'),
                tasks: t('workInst2Tasks').split('|'),
                closing: t('workInst2Closing'),
            },
            {
                name: t('workInst3Name'),
                role: t('workInst3Role'),
                tasks: t('workInst3Tasks').split('|'),
                closing: t('workInst3Closing'),
            },
        ]
        : [
            {
                name: t('creatorPractice1Name'),
                role: t('creatorPractice1Role'),
                tasks: t('creatorPractice1Tasks').split('|'),
                closing: t('creatorPractice1Closing'),
            },
            {
                name: t('creatorPractice2Name'),
                role: t('creatorPractice2Role'),
                tasks: t('creatorPractice2Tasks').split('|'),
                closing: t('creatorPractice2Closing'),
            },
            {
                name: t('creatorPractice3Name'),
                role: t('creatorPractice3Role'),
                tasks: t('creatorPractice3Tasks').split('|'),
                closing: t('creatorPractice3Closing'),
            },
        ];

    // Conditional heading based on mode
    const heading = mode === 'institutional'
        ? t('workExperienceInstHeading')
        : t('creatorPracticeHeading');

    // Conditional subtitle based on mode
    const subtitle = mode === 'institutional'
        ? t('workExperienceContext')
        : t('creatorPracticeSubtitle');

    return (
        <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-display mb-4 text-center">
                {heading}
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-foreground/60 text-center mb-12 max-w-3xl mx-auto">
                {subtitle}
            </p>

            {/* Horizontal Scrolling Container */}
            <div className="relative mb-8">
                <div
                    className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {workExperience.map((entry, index) => (
                        <WorkExperienceCard
                            key={index}
                            name={entry.name}
                            role={entry.role}
                            tasks={entry.tasks}
                            closing={entry.closing}
                            mode={mode}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface WorkExperienceCardProps {
    name: string;
    role: string;
    tasks: string[];
    closing: string;
    mode: 'institutional' | 'creator';
}

const WorkExperienceCard = ({ name, role, tasks, closing, mode }: WorkExperienceCardProps) => {
    const accentColor = mode === 'institutional'
        ? 'text-institutional'
        : 'text-creator';

    return (
        <div
            className="
                flex-shrink-0 snap-start
                w-[calc(100%-2rem)] 
                md:w-[calc(50%-1rem)] 
                lg:w-[calc(33.333%-1.5rem)]
                p-6 md:p-8 
                rounded-2xl 
                glass-card 
                border border-border/20 
                flex flex-col
                min-h-[320px]
                shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]
                transition-shadow duration-300
            "
        >
            {/* Document Icon */}
            <FileText className={`w-8 h-8 mb-4 ${accentColor} opacity-40 flex-shrink-0`} />

            {/* Institution Name */}
            <div className="mb-2">
                <h3 className={`text-base md:text-lg font-medium ${accentColor}`}>
                    {name}
                </h3>
            </div>

            {/* Role */}
            <div className="mb-4">
                <p className="text-sm text-foreground/60 font-medium">
                    {role}
                </p>
            </div>

            {/* Tasks List */}
            <div className="flex-grow mb-4">
                <ul className="space-y-2">
                    {tasks.map((task, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 leading-relaxed flex items-start">
                            <span className="mr-2 text-foreground/40 flex-shrink-0">•</span>
                            <span>{task}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Closing Note */}
            {closing && (
                <div className="border-t border-border/20 pt-4 mt-auto flex-shrink-0">
                    <p className="text-xs md:text-sm text-foreground/50 italic">
                        {closing}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ClientWorkSummary;
