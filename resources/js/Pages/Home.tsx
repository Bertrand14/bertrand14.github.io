import useTranslation from '@/Hooks/useTranslation';
import { Head } from '@inertiajs/react';
import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    url?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio Personnel',
        description: 'Refonte complète de mon portfolio en Laravel + React + TypeScript + SCSS',
        url: 'https://bertrand14.github.io/',
    },
    {
        id: 2,
        title: 'Kotitaito',
        description: 'Application web éducative pour le suivi des devoirs et activités des élèves',
        url: '#',
    },
    {
        id: 3,
        title: 'Projet X',
        description: 'Exemple de projet futur pour démontrer mes compétences fullstack',
        url: '#',
    },
];

const Home: React.FC = () => {
    const { t } = useTranslation('home');

    return (
        <>
            <Head title={t('title_intro')} />

            <main className="home">
                {/* Section Intro */}
                <section className="section intro">
                    <div className="container">
                        <h1>{t('title_intro')}</h1>
                        <p>{t('description_intro')}</p>
                        <a href="#portfolio" className="button">
                            {t('cta_projects')}
                        </a>
                    </div>
                </section>

                {/* Section Expertise */}
                <section className="section expertise">
                    <div className="container">
                        <h2>{t('title_expertise')}</h2>
                        <div className="cards">
                            <div className="card">
                                <h3>{t('expertise_energy')}</h3>
                                <p>{t('expertise_energy_desc')}</p>
                            </div>
                            <div className="card">
                                <h3>{t('expertise_tech')}</h3>
                                <p>{t('expertise_tech_desc')}</p>
                            </div>
                            <div className="card">
                                <h3>{t('expertise_innov')}</h3>
                                <p>{t('expertise_innov_desc')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Portfolio */}
                <section className="section portfolio" id="portfolio">
                    <div className="container">
                        <h2>{t('title_portfolio')}</h2>
                        <div className="cards">
                            {projects.map((project) => (
                                <div key={project.id} className="card">
                                    {project.image && <img src={project.image} alt={project.title} />}
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    {project.url && (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="button">
                                            {t('cta_view_project') || 'Voir le projet'}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
