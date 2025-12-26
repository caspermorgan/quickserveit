import React from 'react';

interface VectorGraphicsProps {
    type: 'workflow' | 'process' | 'trust' | 'achievement';
    mode?: 'institutional' | 'creator';
    className?: string;
}

// ============================================
// WORKFLOW VISUALIZATION
// ============================================

const WorkflowGraphic: React.FC<{ mode?: 'institutional' | 'creator' }> = ({ mode }) => {
    const color = mode === 'institutional' ? '#eab308' : '#22d3ee';

    return (
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Step 1 */}
            <circle cx="50" cy="100" r="30" stroke={color} strokeWidth="2" fill="none" opacity="0.3" />
            <text x="50" y="105" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">1</text>

            {/* Arrow 1 */}
            <line x1="80" y1="100" x2="120" y2="100" stroke={color} strokeWidth="2" opacity="0.2" />
            <polygon points="120,100 115,97 115,103" fill={color} opacity="0.2" />

            {/* Step 2 */}
            <circle cx="150" cy="100" r="30" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />
            <text x="150" y="105" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">2</text>

            {/* Arrow 2 */}
            <line x1="180" y1="100" x2="220" y2="100" stroke={color} strokeWidth="2" opacity="0.4" />
            <polygon points="220,100 215,97 215,103" fill={color} opacity="0.4" />

            {/* Step 3 */}
            <circle cx="250" cy="100" r="30" stroke={color} strokeWidth="2" fill="none" opacity="0.7" />
            <text x="250" y="105" textAnchor="middle" fill={color} fontSize="12" fontWeight="600">3</text>

            {/* Arrow 3 */}
            <line x1="280" y1="100" x2="320" y2="100" stroke={color} strokeWidth="2" opacity="0.6" />
            <polygon points="320,100 315,97 315,103" fill={color} opacity="0.6" />

            {/* Step 4 - Completion */}
            <circle cx="350" cy="100" r="30" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
            <text x="350" y="105" textAnchor="middle" fill={color} fontSize="16" fontWeight="700">✓</text>
        </svg>
    );
};

// ============================================
// PROCESS DIAGRAM
// ============================================

const ProcessGraphic: React.FC<{ mode?: 'institutional' | 'creator' }> = ({ mode }) => {
    const color = mode === 'institutional' ? '#eab308' : '#22d3ee';

    return (
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Center circle */}
            <circle cx="150" cy="150" r="40" stroke={color} strokeWidth="3" fill="none" />
            <text x="150" y="155" textAnchor="middle" fill={color} fontSize="14" fontWeight="700">YOU</text>

            {/* Outer circles */}
            <circle cx="150" cy="50" r="25" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="250" cy="150" r="25" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="150" cy="250" r="25" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="50" cy="150" r="25" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />

            {/* Connecting lines */}
            <line x1="150" y1="90" x2="150" y2="75" stroke={color} strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" />
            <line x1="190" y1="150" x2="225" y2="150" stroke={color} strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" />
            <line x1="150" y1="210" x2="150" y2="225" stroke={color} strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" />
            <line x1="110" y1="150" x2="75" y2="150" stroke={color} strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" />
        </svg>
    );
};

// ============================================
// TRUST INDICATOR
// ============================================

const TrustGraphic: React.FC<{ mode?: 'institutional' | 'creator' }> = ({ mode }) => {
    const color = mode === 'institutional' ? '#eab308' : '#22d3ee';

    return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shield shape */}
            <path
                d="M100 20 L160 50 L160 100 Q160 140 100 180 Q40 140 40 100 L40 50 Z"
                stroke={color}
                strokeWidth="2"
                fill={color}
                fillOpacity="0.05"
            />

            {/* Checkmark */}
            <polyline
                points="70,100 90,120 130,70"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            {/* Decorative dots */}
            <circle cx="100" cy="40" r="3" fill={color} opacity="0.4" />
            <circle cx="140" cy="60" r="3" fill={color} opacity="0.4" />
            <circle cx="60" cy="60" r="3" fill={color} opacity="0.4" />
        </svg>
    );
};

// ============================================
// ACHIEVEMENT BADGE
// ============================================

const AchievementGraphic: React.FC<{ mode?: 'institutional' | 'creator' }> = ({ mode }) => {
    const color = mode === 'institutional' ? '#eab308' : '#22d3ee';

    return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Star badge */}
            <circle cx="100" cy="80" r="50" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.05" />

            {/* Inner star */}
            <path
                d="M100 50 L110 70 L130 75 L115 90 L118 110 L100 100 L82 110 L85 90 L70 75 L90 70 Z"
                fill={color}
                opacity="0.6"
            />

            {/* Ribbons */}
            <path d="M75 120 L75 180 L85 170 L95 180 L95 120" fill={color} opacity="0.3" />
            <path d="M105 120 L105 180 L115 170 L125 180 L125 120" fill={color} opacity="0.3" />
        </svg>
    );
};

// ============================================
// MAIN COMPONENT
// ============================================

const VectorGraphics: React.FC<VectorGraphicsProps> = ({ type, mode, className = '' }) => {
    const graphics = {
        workflow: <WorkflowGraphic mode={mode} />,
        process: <ProcessGraphic mode={mode} />,
        trust: <TrustGraphic mode={mode} />,
        achievement: <AchievementGraphic mode={mode} />,
    };

    return (
        <div className={`w-full h-full ${className}`}>
            {graphics[type]}
        </div>
    );
};

export default VectorGraphics;
