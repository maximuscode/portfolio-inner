import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>EasyHire.me</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://easyhire.me/'}
                        >
                            <h4>www.easyhire.me</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer</h3>
                        <b>
                            <p>Sep 2024 - Present (Remote)</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Leading full-stack development of React and Nuxt applications,
                    orchestrating MongoDB to PostgreSQL migration, and integrating 
                    AWS services just as SNS, SQS, SES, SSM, S3, etc. Implemented 
                    AI-powered features for automated candidate screening and skill 
                    assessment. Focused on reducing technical debt and improving 
                    functionality through comprehensive documentation and demos while 
                    maintaining backend systems.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>CIFA Education Management System</h1>
                        <h4>London, UK (Remote)</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer</h3>
                        <b>
                            <p>Jan 2023 - Sep 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Engineered high-performance React applications utilizing Redux and 
                    Context API, with emphasis on code optimization through splitting 
                    and lazy loading. Developed comprehensive CRM/LMS systems with 
                    Node.js backend, implementing real-time features and creating 
                    interactive quiz modules using Laravel and PostgreSQL, while 
                    contributing to overall brand design.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Advert Park</h1>
                        <h4>Kyrenia, Cyprus</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer</h3>
                        <b>
                            <p>Oct 2021 - Jan 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Developed single-page applications using React.js and Node.js, 
                    focusing on real-time functionality. Created custom WordPress 
                    solutions including plugins and themes, while handling both 
                    technical development and design aspects using Figma and Webflow 
                    for comprehensive web solutions.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>WIN – Worldwide Investment Network</h1>
                        <h4>Kyrenia, Cyprus</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Front End Developer</h3>
                        <b>
                            <p>Nov 2020 - Sep 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Specialized in Vue.js development, creating SPAs with TypeScript 
                    and Nuxt for various clients. Built and maintained a tourism-focused 
                    application implementing Domain-Driven Design principles, with 
                    particular emphasis on state management and RESTful API integration.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Atabilisim Digital Solutions</h1>
                        <h4>Kyrenia, Cyprus</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Front End Developer</h3>
                        <b>
                            <p>Mar 2018 - Nov 2020</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Developed responsive websites from Figma designs using core web 
                    technologies. Implemented secure e-commerce solutions with WordPress 
                    and Stripe integration, while contributing to client brand identity 
                    development through various design tools.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
