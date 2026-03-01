export const projects = [
    {
        id: 1,
        title: 'ResumeIQ',
        description:
            'AI-powered resume analyzer that parses PDFs to generate structured reports with role-specific suggestions and ATS compatibility scoring.',
        tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gemini API'],
        features: [
            'PDF upload → parsing → AI analysis → structured report',
            'Role-specific suggestions via Gemini API',
            'Email auth + password reset',
            'Row Level Security',
            'Retry handling & duplicate prevention'
        ],
        github: 'https://github.com/vishal/resumeiq',
        live: 'https://resume-iq-chi.vercel.app',
        featured: true,
        status: 'Production',
    },
    {
        id: 2,
        title: 'Subscription Tracker API',
        description:
            'A robust REST API for tracking service subscriptions, renewal reminders, and expiry notifications with optimized query handling.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
        features: [
            'REST API CRUD',
            'Expiry tracking',
            'Renewal reminder logic',
            'Modular architecture',
            'Query optimization'
        ],
        github: 'https://github.com/vishal/subscription-tracker',
        live: null,
        featured: true,
        status: 'Open Source',
    },
]
